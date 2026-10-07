import { Check } from "lucide-react";

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
      className="border-t border-border bg-muted/30 py-20 sm:py-24 lg:py-32"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* =====================================================
            HEADER
        ===================================================== */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold text-primary">PRICING</p>

          <h2
            className="
              mt-3
              text-3xl
              font-bold
              tracking-tight
              text-foreground
              sm:text-4xl
              lg:text-5xl
            "
          >
            Simple pricing.
            <span className="text-muted-foreground"> No surprises.</span>
          </h2>

          <p
            className="
              mx-auto
              mt-5
              max-w-2xl
              text-sm
              leading-6
              text-muted-foreground
              sm:text-base
              sm:leading-7
            "
          >
            Start for free and upgrade when your business needs more. Every plan
            is designed to help you get more from your data.
          </p>
        </div>

        {/* =====================================================
            PRICING CARDS
        ===================================================== */}
        <div
          className="
            mx-auto
            mt-12
            grid
            max-w-6xl
            gap-5
            md:grid-cols-3
            sm:mt-14
          "
        >
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`
                relative
                flex
                flex-col
                rounded-2xl
                border
                p-6
                transition-all
                duration-300
                sm:p-7
                ${
                  plan.popular
                    ? `
                      border-primary
                      bg-primary
                      text-primary-foreground
                      shadow-xl
                      shadow-primary/10
                      md:-translate-y-2
                    `
                    : `
                      border-border
                      bg-background
                      hover:-translate-y-1
                      hover:shadow-xl
                    `
                }
              `}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div
                  className="
                    absolute
                    -top-3
                    left-1/2
                    -translate-x-1/2
                    rounded-full
                    bg-background
                    px-3
                    py-1
                    text-[10px]
                    font-bold
                    uppercase
                    tracking-wider
                    text-foreground
                    shadow-sm
                  "
                >
                  Most popular
                </div>
              )}

              {/* Plan Name */}
              <h3
                className={`
                  text-lg
                  font-semibold
                  ${
                    plan.popular ? "text-primary-foreground" : "text-foreground"
                  }
                `}
              >
                {plan.name}
              </h3>

              {/* Description */}
              <p
                className={`
                  mt-2
                  min-h-[40px]
                  text-sm
                  leading-5
                  ${
                    plan.popular
                      ? "text-primary-foreground/70"
                      : "text-muted-foreground"
                  }
                `}
              >
                {plan.description}
              </p>

              {/* Price */}
              <div className="mt-7">
                <div className="flex items-end gap-2">
                  <span
                    className={`
                      text-4xl
                      font-bold
                      tracking-tight
                      sm:text-5xl
                      ${
                        plan.popular
                          ? "text-primary-foreground"
                          : "text-foreground"
                      }
                    `}
                  >
                    {plan.price}
                  </span>

                  <span
                    className={`
                      mb-1
                      text-xs
                      ${
                        plan.popular
                          ? "text-primary-foreground/60"
                          : "text-muted-foreground"
                      }
                    `}
                  >
                    {plan.period}
                  </span>
                </div>
              </div>

              {/* Divider */}
              <div
                className={`
                  my-7
                  border-t
                  ${
                    plan.popular
                      ? "border-primary-foreground/15"
                      : "border-border"
                  }
                `}
              />

              {/* Features */}
              <div className="flex-1 space-y-3.5">
                {plan.features.map((feature) => (
                  <div key={feature} className="flex items-center gap-3">
                    <span
                      className={`
                        flex
                        h-5
                        w-5
                        shrink-0
                        items-center
                        justify-center
                        rounded-full
                        ${
                          plan.popular
                            ? "bg-primary-foreground/10 text-primary-foreground"
                            : "bg-muted text-foreground"
                        }
                      `}
                    >
                      <Check size={12} strokeWidth={2.5} />
                    </span>

                    <span
                      className={`
                        text-sm
                        ${
                          plan.popular
                            ? "text-primary-foreground/85"
                            : "text-muted-foreground"
                        }
                      `}
                    >
                      {feature}
                    </span>
                  </div>
                ))}
              </div>

              {/* Button */}
              <button
                type="button"
                className={`
                  mt-8
                  w-full
                  rounded-xl
                  px-4
                  py-3
                  text-sm
                  font-semibold
                  transition-all
                  duration-200
                  ${
                    plan.popular
                      ? `
                        bg-background
                        text-foreground
                        hover:bg-background/90
                      `
                      : `
                        border
                        border-border
                        bg-background
                        text-foreground
                        hover:bg-muted
                      `
                  }
                `}
              >
                {plan.button}
              </button>
            </div>
          ))}
        </div>

        {/* Bottom note */}
        <p className="mt-8 text-center text-xs text-muted-foreground">
          All plans include a 14-day free trial. No credit card required.
        </p>
      </div>
    </section>
  );
};

export default Pricing;
