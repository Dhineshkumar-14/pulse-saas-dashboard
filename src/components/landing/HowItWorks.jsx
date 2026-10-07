import {
  ArrowRight,
  BarChart3,
  Check,
  LayoutDashboard,
  Rocket,
} from "lucide-react";

const steps = [
  {
    number: "01",
    icon: LayoutDashboard,
    title: "Connect your data",
    description:
      "Bring your customers, orders, and revenue data into Pulse and get everything organized in one place.",
    status: "Data connected",
  },
  {
    number: "02",
    icon: BarChart3,
    title: "Understand your business",
    description:
      "See your key metrics, trends, and performance through simple dashboards and actionable insights.",
    status: "Insights revealed",
  },
  {
    number: "03",
    icon: Rocket,
    title: "Grow with confidence",
    description:
      "Use clear insights to make faster decisions, improve performance, and keep your business moving forward.",
    status: "Action taken",
  },
];

const HowItWorks = () => {
  return (
    <section
      id="how-it-works"
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
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <div
            className="
              inline-flex
              items-center
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
            HOW IT WORKS
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
            From data to decisions
            <br className="hidden sm:block" />
            <span className="text-primary"> in three simple steps.</span>
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
            Pulse makes it easy to understand your business, discover
            opportunities, and take action.
          </p>
        </div>

        {/* Steps */}
        <div
          className="
            mt-12
            grid
            gap-4
            sm:mt-14
            lg:grid-cols-3
            lg:gap-6
          "
        >
          {steps.map((step) => {
            const Icon = step.icon;

            return (
              <article
                key={step.number}
                className="
                  group
                  rounded-[var(--pulse-radius-xl)]
                  border
                  border-border
                  bg-surface
                  p-6
                  transition-all
                  duration-[var(--pulse-transition-normal)]
                  hover:-translate-y-0.5
                  hover:border-border-hover
                  hover:shadow-md
                  sm:p-7
                "
              >
                {/* Step header */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span
                      className="
                        font-heading
                        text-sm
                        font-bold
                        text-primary
                      "
                    >
                      {step.number}
                    </span>

                    <span className="h-px w-8 bg-border" />

                    <div
                      className="
                        flex
                        h-8
                        w-8
                        items-center
                        justify-center
                        rounded-full
                        bg-primary-soft
                        text-primary
                      "
                    >
                      <Icon size={15} strokeWidth={2} />
                    </div>
                  </div>

                  <span
                    className="
                      text-[11px]
                      font-medium
                      uppercase
                      tracking-[0.12em]
                      text-text-subtle
                    "
                  >
                    Step
                  </span>
                </div>

                {/* Content */}
                <h3
                  className="
                    mt-7
                    font-heading
                    text-xl
                    font-bold
                    tracking-tight
                    text-text-primary
                  "
                >
                  {step.title}
                </h3>

                <p
                  className="
                    mt-3
                    text-sm
                    leading-6
                    text-text-secondary
                  "
                >
                  {step.description}
                </p>

                {/* Status */}
                <div
                  className="
                    mt-7
                    flex
                    items-center
                    gap-2
                    border-t
                    border-border-light
                    pt-5
                  "
                >
                  <span
                    className="
                      flex
                      h-5
                      w-5
                      items-center
                      justify-center
                      rounded-full
                      bg-success-soft
                      text-success
                    "
                  >
                    <Check size={11} strokeWidth={2.5} />
                  </span>

                  <span
                    className="
                      text-xs
                      font-medium
                      text-text-muted
                    "
                  >
                    {step.status}
                  </span>
                </div>
              </article>
            );
          })}
        </div>

        {/* CTA */}
        <div
          className="
            mt-10
            flex
            flex-col
            items-center
            justify-center
            gap-3
            text-center
            sm:mt-12
            sm:flex-row
          "
        >
          <p className="text-sm text-text-muted">
            Ready to make better decisions?
          </p>

          <a
            href="/dashboard"
            className="
              group
              inline-flex
              items-center
              gap-2
              rounded-[var(--pulse-radius-md)]
              bg-primary
              px-5
              py-3
              text-sm
              font-semibold
              text-primary-foreground
              shadow-primary
              transition-all
              duration-[var(--pulse-transition-normal)]
              hover:-translate-y-0.5
              hover:bg-primary-hover
            "
          >
            Start using Pulse
            <ArrowRight
              size={15}
              className="
                transition-transform
                duration-[var(--pulse-transition-fast)]
                group-hover:translate-x-0.5
              "
            />
          </a>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
