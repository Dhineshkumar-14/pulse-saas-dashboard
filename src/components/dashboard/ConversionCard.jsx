const conversionSteps = [
  {
    label: "Visitors",
    value: "75,420",
    percentage: 100,
  },
  {
    label: "Signups",
    value: "12,840",
    percentage: 67,
  },
  {
    label: "Customers",
    value: "3,642",
    percentage: 34,
  },
];

const ConversionCard = () => {
  return (
    <div
      className="
        w-full
        overflow-hidden
        rounded-2xl
        border border-border
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
            bg-success-soft
            px-2
            py-1
          "
        >
          <span className="size-1.5 rounded-full bg-success" />

          <span
            className="
              text-[10px]
              font-semibold
              text-success
              sm:text-[11px]
            "
          >
            +1.4%
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
          border border-border-light
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
            4.82%
          </p>

          <p
            className="
              mt-1
              text-[11px]
              text-text-muted
              sm:text-xs
            "
          >
            vs last month
          </p>
        </div>

        {/* Circular indicator */}
        <div
          className="
            relative
            hidden
            size-16
            shrink-0
            sm:flex
            sm:items-center
            sm:justify-center
          "
        >
          <div
            className="
              absolute
              inset-0
              rounded-full
              border-[5px]
              border-border
            "
          />

          <div
            className="
              absolute
              inset-0
              rounded-full
              border-[5px]
              border-primary
              border-r-transparent
              border-b-transparent
              rotate-45
            "
          />

          <span
            className="
              relative
              font-heading
              text-xs
              font-bold
              text-primary
            "
          >
            4.8
          </span>
        </div>
      </div>

      {/* Funnel */}
      <div className="mt-6">
        <div className="mb-4 flex items-center justify-between">
          <h3
            className="
              text-xs
              font-semibold
              text-text-primary
            "
          >
            Conversion Funnel
          </h3>

          <span className="text-[10px] text-text-muted sm:text-xs">
            This period
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
                <div className="flex min-w-0 items-center gap-2">
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

                <div className="flex shrink-0 items-center gap-2">
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
                      min-w-[32px]
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

      {/* Footer */}
      <div
        className="
          mt-6
          flex
          flex-col
          gap-2
          border-t
          border-border-light
          pt-4
          sm:flex-row
          sm:items-center
          sm:justify-between
        "
      >
        <span
          className="
            text-[10px]
            text-text-muted
            sm:text-xs
          "
        >
          Based on 75,420 visitors
        </span>

        <span
          className="
            text-[10px]
            font-medium
            text-primary
            sm:text-xs
          "
        >
          View details →
        </span>
      </div>
    </div>
  );
};

export default ConversionCard;
