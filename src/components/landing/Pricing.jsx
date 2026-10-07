import { Check, Sparkles } from "lucide-react";

const plans = [
  {
    name: "Starter",
    description: "Everything you need to get started.",
    price: "$0",
    period: "forever",
    features: [
      "Basic analytics",
      "Up to 1,000 customers",
      "Revenue tracking",
      "7-day data history",
      "Email support",
    ],
    button: "Get started",
    popular: false,
  },
  {
    name: "Pro",
    description: "Powerful tools for growing teams.",
    price: "$29",
    period: "per month",
    features: [
      "Everything in Starter",
      "Unlimited customers",
      "Advanced analytics",
      "Unlimited data history",
      "Custom reports",
      "Priority support",
    ],
    button: "Start free trial",
    popular: true,
  },
  {
    name: "Business",
    description: "Advanced capabilities for scaling teams.",
    price: "$79",
    period: "per month",
    features: [
      "Everything in Pro",
      "Advanced team management",
      "Custom dashboards",
      "API access",
      "Dedicated support",
      "Advanced permissions",
    ],
    button: "Contact sales",
    popular: false,
  },
];

const Pricing = () => {
  return (
    <section
      id="pricing"
      className="
        border-t
        border-border-light
        bg-surface-muted
        py-20
        sm:py-24
        lg:py-28
      "
    >
      <div
        className="
          mx-auto
          max-w-[var(--pulse-container-xl)]
          px-4
          sm:px-6
          lg:px-8
        "
      >
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <div
            className="
              inline-flex
              items-center
              gap-2
              rounded-full
              border
              border-border
              bg-surface
              px-3
              py-1.5
              text-xs
              font-semibold
              text-primary
            "
          >
            PRICING
          </div>

          <h2
            className="
              mt-5
              font-heading
              text-3xl
              font-extrabold
              leading-tight
              tracking-[-0.035em]
              text-text-primary
              sm:text-4xl
              lg:text-5xl
            "
          >
            Simple pricing.
            <br className="hidden sm:block" />
            <span className="text-primary"> No surprises.</span>
          </h2>

          <p
            className="
              mx-auto
              mt-5
              max-w-2xl
              text-sm
              leading-6
              text-text-secondary
              sm:text-base
              sm:leading-7
            "
          >
            Start for free and upgrade when your business needs more. Every plan
            gives you the tools to understand and improve your business.
          </p>
        </div>

        {/* Pricing cards */}
        <div
          className="
            mx-auto
            mt-12
            grid
            max-w-6xl
            gap-4
            sm:mt-14
            md:grid-cols-3
            lg:gap-5
          "
        >
          {plans.map((plan) => (
            <article
              key={plan.name}
              className={`
                relative
                flex
                flex-col
                rounded-[var(--pulse-radius-2xl)]
                border
                p-6
                transition-all
                duration-[var(--pulse-transition-normal)]
                sm:p-7
                ${
                  plan.popular
                    ? `
                      border-primary
                      bg-surface
                      shadow-primary
                      md:-translate-y-2
                    `
                    : `
                      border-border
                      bg-surface
                      shadow-sm
                      hover:-translate-y-1
                      hover:border-border-hover
                      hover:shadow-md
                    `
                }
              `}
            >
              {/* Popular badge */}
              {plan.popular && (
                <div
                  className="
                    absolute
                    -top-3
                    left-1/2
                    -translate-x-1/2
                    inline-flex
                    items-center
                    gap-1.5
                    rounded-full
                    border
                    border-primary
                    bg-primary
                    px-3
                    py-1
                    text-[10px]
                    font-bold
                    uppercase
                    tracking-[0.12em]
                    text-primary-foreground
                    shadow-primary
                  "
                >
                  <Sparkles size={11} />
                  Most popular
                </div>
              )}

              {/* Plan header */}
              <div>
                <div className="flex items-center justify-between">
                  <h3
                    className="
                      font-heading
                      text-lg
                      font-bold
                      text-text-primary
                    "
                  >
                    {plan.name}
                  </h3>

                  {plan.popular && (
                    <span
                      className="
                        rounded-full
                        bg-primary-soft
                        px-2
                        py-1
                        text-[10px]
                        font-semibold
                        text-primary
                      "
                    >
                      Recommended
                    </span>
                  )}
                </div>

                <p
                  className="
                    mt-2
                    min-h-[40px]
                    text-sm
                    leading-5
                    text-text-muted
                  "
                >
                  {plan.description}
                </p>
              </div>

              {/* Price */}
              <div className="mt-7">
                <div className="flex items-end gap-2">
                  <span
                    className="
                      font-heading
                      text-4xl
                      font-extrabold
                      tracking-[-0.04em]
                      text-text-primary
                      sm:text-5xl
                    "
                  >
                    {plan.price}
                  </span>

                  <span
                    className="
                      mb-1.5
                      text-xs
                      text-text-muted
                    "
                  >
                    {plan.period}
                  </span>
                </div>
              </div>

              {/* Button */}
              <a
                href="/dashboard"
                className={`
                  mt-7
                  flex
                  w-full
                  items-center
                  justify-center
                  rounded-[var(--pulse-radius-md)]
                  px-4
                  py-3
                  text-sm
                  font-semibold
                  transition-all
                  duration-[var(--pulse-transition-normal)]
                  ${
                    plan.popular
                      ? `
                        bg-primary
                        text-primary-foreground
                        shadow-primary
                        hover:-translate-y-0.5
                        hover:bg-primary-hover
                      `
                      : `
                        border
                        border-border
                        bg-surface
                        text-text-primary
                        hover:border-border-hover
                        hover:bg-surface-hover
                      `
                  }
                `}
              >
                {plan.button}
              </a>

              {/* Divider */}
              <div className="my-7 h-px bg-border-light" />

              {/* Features heading */}
              <p
                className="
                  mb-4
                  text-xs
                  font-semibold
                  uppercase
                  tracking-[0.12em]
                  text-text-subtle
                "
              >
                What's included
              </p>

              {/* Features */}
              <div className="space-y-3.5">
                {plan.features.map((feature) => (
                  <div key={feature} className="flex items-start gap-3">
                    <span
                      className={`
                        mt-0.5
                        flex
                        h-5
                        w-5
                        shrink-0
                        items-center
                        justify-center
                        rounded-full
                        ${
                          plan.popular
                            ? "bg-primary-soft text-primary"
                            : "bg-success-soft text-success"
                        }
                      `}
                    >
                      <Check size={11} strokeWidth={2.5} />
                    </span>

                    <span
                      className="
                        text-sm
                        leading-5
                        text-text-secondary
                      "
                    >
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>

        {/* Bottom note */}
        <div
          className="
            mt-8
            flex
            flex-wrap
            items-center
            justify-center
            gap-x-6
            gap-y-2
            text-center
            text-xs
            text-text-muted
          "
        >
          <span>No credit card required</span>
          <span>14-day free trial</span>
          <span>Cancel anytime</span>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
