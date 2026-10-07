import { useDashboardUsers } from "../../hooks/queries/useDashboard";
import { useDashboardCarts } from "../../hooks/queries/useDashboard";

const ConversionCard = () => {
  const {
    data: usersData,
    isLoading: usersLoading,
    isError: usersError,
  } = useDashboardUsers();

  const {
    data: cartsData,
    isLoading: cartsLoading,
    isError: cartsError,
  } = useDashboardCarts();

  const isLoading = usersLoading || cartsLoading;
  const isError = usersError || cartsError;

  // Loading
  if (isLoading) {
    return (
      <div
        className="
          h-[500px]
          animate-pulse
          rounded-2xl
          border
          border-border
          bg-surface
        "
      />
    );
  }

  // Error
  if (isError) {
    return (
      <div
        className="
          flex
          h-[500px]
          items-center
          justify-center
          rounded-2xl
          border
          border-border
          bg-surface
        "
      >
        <p className="text-sm text-text-muted">
          Failed to load conversion data
        </p>
      </div>
    );
  }

  const totalUsers = usersData?.total ?? 0;
  const carts = cartsData?.carts ?? [];

  /*
   * DummyJSON does not provide real website visitor data.
   *
   * We use a larger audience number for Visitors,
   * actual API users for Signups,
   * and unique cart users for Customers.
   */

  const visitors = Math.max(totalUsers * 24, totalUsers);

  const signups = totalUsers;

  // Find unique users who have placed an order/cart
  const customerIds = new Set(carts.map((cart) => cart.userId).filter(Boolean));

  const customers = customerIds.size;

  // Funnel percentages
  const signupPercentage = visitors > 0 ? (signups / visitors) * 100 : 0;

  const customerPercentage = visitors > 0 ? (customers / visitors) * 100 : 0;

  const conversionRate = customerPercentage;

  const formattedConversion = conversionRate.toFixed(2);

  const conversionSteps = [
    {
      label: "Visitors",
      value: visitors.toLocaleString(),
      percentage: 100,
    },
    {
      label: "Signups",
      value: signups.toLocaleString(),
      percentage: Number(signupPercentage.toFixed(1)),
    },
    {
      label: "Customers",
      value: customers.toLocaleString(),
      percentage: Number(customerPercentage.toFixed(1)),
    },
  ];

  return (
    <div
      className="
        w-full
        overflow-hidden
        rounded-2xl
        border
        border-border
        bg-surface
        p-4
        shadow-sm
        sm:p-5
      "
    >
      {/* Header */}
      <div
        className="
          flex
          items-start
          justify-between
          gap-4
        "
      >
        <div>
          <h2
            className="
              font-heading
              text-sm
              font-semibold
              tracking-tight
              text-text-primary
              sm:text-base
            "
          >
            Conversion Rate
          </h2>

          <p
            className="
              mt-1
              text-[11px]
              leading-5
              text-text-muted
              sm:text-xs
            "
          >
            Visitor to customer conversion
          </p>
        </div>

        {/* Status */}
        <div
          className="
            flex
            shrink-0
            items-center
            gap-1
            rounded-full
            bg-primary-soft
            px-2
            py-1
          "
        >
          <span className="size-1.5 rounded-full bg-primary" />

          <span
            className="
              text-[10px]
              font-semibold
              text-primary
              sm:text-[11px]
            "
          >
            Live
          </span>
        </div>
      </div>

      {/* Main Metric */}
      <div
        className="
          mt-6
          flex
          items-end
          justify-between
          gap-4
          rounded-xl
          border
          border-border-light
          bg-surface-muted
          p-4
          sm:mt-7
          sm:p-5
        "
      >
        <div>
          <p
            className="
              text-[10px]
              font-medium
              uppercase
              tracking-wider
              text-text-muted
            "
          >
            Conversion Rate
          </p>

          <p
            className="
              mt-1
              font-heading
              text-3xl
              font-bold
              tracking-tight
              text-text-primary
              sm:text-4xl
            "
          >
            {formattedConversion}%
          </p>

          <p
            className="
              mt-1
              text-[11px]
              text-text-muted
              sm:text-xs
            "
          >
            Visitors to customers
          </p>
        </div>

        {/* Circular Indicator */}
        <div
          className="
    relative
    hidden
    h-16
    w-16
    shrink-0
    items-center
    justify-center
    rounded-full
    sm:flex
  "
          style={{
            background: `conic-gradient(
      var(--pulse-primary) 0% ${Math.min(conversionRate, 100)}%,
      var(--pulse-border) ${Math.min(conversionRate, 100)}% 100%
    )`,
          }}
        >
          <div
            className="
      flex
      h-[46px]
      w-[46px]
      items-center
      justify-center
      rounded-full
      bg-surface-muted
    "
          >
            <span
              className="
        font-heading
        text-[11px]
        font-bold
        text-primary
      "
            >
              {formattedConversion}%
            </span>
          </div>
        </div>
      </div>

      {/* Funnel */}
      <div className="mt-6">
        <div
          className="
            mb-4
            flex
            items-center
            justify-between
          "
        >
          <h3
            className="
              text-xs
              font-semibold
              text-text-primary
            "
          >
            Conversion Funnel
          </h3>

          <span
            className="
              text-[10px]
              text-text-muted
              sm:text-xs
            "
          >
            Current data
          </span>
        </div>

        <div className="space-y-5">
          {conversionSteps.map((step, index) => (
            <div key={step.label}>
              {/* Label */}
              <div
                className="
                  mb-2
                  flex
                  items-center
                  justify-between
                  gap-3
                "
              >
                <div
                  className="
                    flex
                    min-w-0
                    items-center
                    gap-2
                  "
                >
                  <span
                    className="
                      flex
                      size-6
                      shrink-0
                      items-center
                      justify-center
                      rounded-md
                      bg-primary-soft
                      text-[10px]
                      font-bold
                      text-primary
                    "
                  >
                    {index + 1}
                  </span>

                  <span
                    className="
                      truncate
                      text-xs
                      font-medium
                      text-text-secondary
                      sm:text-sm
                    "
                  >
                    {step.label}
                  </span>
                </div>

                <div
                  className="
                    flex
                    shrink-0
                    items-center
                    gap-2
                  "
                >
                  <span
                    className="
                      text-xs
                      font-semibold
                      text-text-primary
                    "
                  >
                    {step.value}
                  </span>

                  <span
                    className="
                      min-w-[38px]
                      text-right
                      text-[10px]
                      font-medium
                      text-text-muted
                    "
                  >
                    {step.percentage}%
                  </span>
                </div>
              </div>

              {/* Progress */}
              <div
                className="
                  h-2
                  overflow-hidden
                  rounded-full
                  bg-surface-hover
                "
              >
                <div
                  className="
                    h-full
                    rounded-full
                    bg-primary
                    transition-all
                    duration-500
                  "
                  style={{
                    width: `${step.percentage}%`,
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ConversionCard;
