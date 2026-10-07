import { ArrowRight, BarChart3, LayoutDashboard, Rocket } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: LayoutDashboard,
    title: "Connect your data",
    description:
      "Bring your customers, orders, and revenue data into Pulse and get everything organized in one place.",
  },
  {
    number: "02",
    icon: BarChart3,
    title: "Understand your business",
    description:
      "See your key metrics, trends, and performance through simple dashboards and actionable insights.",
  },
  {
    number: "03",
    icon: Rocket,
    title: "Grow with confidence",
    description:
      "Use clear insights to make faster decisions, improve performance, and keep your business moving forward.",
  },
];

const HowItWorks = () => {
  return (
    <section
      id="how-it-works"
      className="relative overflow-hidden border-t border-border bg-muted/30 py-20 sm:py-24 lg:py-32"
    >
      {/* Background glow */}
      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-0
          -z-10
          h-[400px]
          w-[700px]
          -translate-x-1/2
          rounded-full
          bg-primary/5
          blur-[120px]
        "
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* =====================================================
            HEADER
        ===================================================== */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold text-primary">HOW IT WORKS</p>

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
            From data to decisions
            <span className="text-muted-foreground">
              {" "}
              in three simple steps.
            </span>
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
            Pulse makes it easy to understand your business, discover
            opportunities, and take action.
          </p>
        </div>

        {/* =====================================================
            STEPS
        ===================================================== */}
        <div
          className="
            relative
            mt-14
            grid
            gap-8
            sm:mt-16
            lg:grid-cols-3
            lg:gap-6
          "
        >
          {/* Connecting line */}
          <div
            className="
              absolute
              left-[16.66%]
              right-[16.66%]
              top-10
              hidden
              border-t
              border-dashed
              border-border
              lg:block
            "
          />

          {steps.map((step) => {
            const Icon = step.icon;

            return (
              <div
                key={step.number}
                className="
                  relative
                  rounded-2xl
                  border
                  border-border
                  bg-background
                  p-6
                  shadow-sm
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:shadow-lg
                  sm:p-8
                "
              >
                {/* Icon */}
                <div className="relative z-10 flex items-center justify-between">
                  <div
                    className="
                      flex
                      h-12
                      w-12
                      items-center
                      justify-center
                      rounded-xl
                      bg-primary
                      text-primary-foreground
                      shadow-md
                    "
                  >
                    <Icon size={21} />
                  </div>

                  <span
                    className="
                      text-xs
                      font-bold
                      tracking-widest
                      text-muted-foreground/50
                    "
                  >
                    {step.number}
                  </span>
                </div>

                {/* Content */}
                <h3
                  className="
                    mt-7
                    text-lg
                    font-semibold
                    tracking-tight
                    text-foreground
                    sm:text-xl
                  "
                >
                  {step.title}
                </h3>

                <p
                  className="
                    mt-3
                    text-sm
                    leading-6
                    text-muted-foreground
                  "
                >
                  {step.description}
                </p>

                {/* Bottom arrow */}
                {step.number !== "03" && (
                  <div
                    className="
                      mt-6
                      flex
                      items-center
                      gap-2
                      text-xs
                      font-medium
                      text-muted-foreground
                    "
                  >
                    Next step
                    <ArrowRight size={14} />
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* =====================================================
            BOTTOM CTA
        ===================================================== */}
        <div className="mt-12 text-center sm:mt-14">
          <a
            href="/dashboard"
            className="
              inline-flex
              items-center
              gap-2
              rounded-xl
              bg-primary
              px-5
              py-3
              text-sm
              font-semibold
              text-primary-foreground
              shadow-sm
              transition-all
              duration-200
              hover:-translate-y-0.5
              hover:shadow-lg
            "
          >
            Start using Pulse
            <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
