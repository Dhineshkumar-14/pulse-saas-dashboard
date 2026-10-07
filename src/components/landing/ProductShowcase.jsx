import { ArrowRight, BarChart3, Check, TrendingUp, Users } from "lucide-react";

const features = [
  "Track revenue and business performance",
  "Understand customer growth",
  "Monitor orders and conversions",
  "Make data-driven decisions faster",
];

const ProductShowcase = () => {
  return (
    <section
      id="product"
      className="
        border-t
        border-border-light
        bg-surface
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
        {/* Section heading */}
        <div className="mx-auto max-w-3xl text-center">
          <div
            className="
              inline-flex
              items-center
              gap-2
              rounded-full
              border
              border-border
              bg-surface-muted
              px-3
              py-1.5
              text-xs
              font-semibold
              text-primary
            "
          >
            <BarChart3 size={13} />
            PRODUCT
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
            Everything you need to
            <br className="hidden sm:block" />
            <span className="text-primary"> understand your business.</span>
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
            See your revenue, customers, orders, and conversion performance in
            one clear workspace built for better decisions.
          </p>
        </div>

        {/* Main product showcase */}
        <div
          className="
            mt-14
            grid
            items-center
            gap-12
            lg:mt-20
            lg:grid-cols-[1.25fr_0.75fr]
            lg:gap-16
          "
        >
          {/* Dashboard preview */}
          <div className="relative">
            {/* Background accent */}
            <div
              className="
                pointer-events-none
                absolute
                -inset-4
                -z-10
                rounded-[var(--pulse-radius-3xl)]
                bg-primary-soft/50
                blur-2xl
              "
            />

            <div
              className="
                overflow-hidden
                rounded-[var(--pulse-radius-2xl)]
                border
                border-border
                bg-surface
                shadow-xl
              "
            >
              {/* Browser header */}
              <div
                className="
                  flex
                  h-11
                  items-center
                  justify-between
                  border-b
                  border-border
                  bg-surface-muted
                  px-4
                "
              >
                <div className="flex items-center gap-1.5">
                  <span className="h-2.5 w-2.5 rounded-full bg-error/70" />
                  <span className="h-2.5 w-2.5 rounded-full bg-warning/70" />
                  <span className="h-2.5 w-2.5 rounded-full bg-success/70" />
                </div>

                <div
                  className="
                    hidden
                    rounded-[var(--pulse-radius-sm)]
                    border
                    border-border
                    bg-surface
                    px-4
                    py-1
                    text-[10px]
                    text-text-subtle
                    sm:block
                  "
                >
                  app.pulse.com/dashboard
                </div>

                <div className="w-12" />
              </div>

              {/* Dashboard */}
              <div className="bg-surface p-2 sm:p-3">
                <div
                  className="
                    overflow-hidden
                    rounded-[var(--pulse-radius-lg)]
                    border
                    border-border-light
                    bg-background
                  "
                >
                  <img
                    src="/images/pulse-dashboard.webp"
                    alt="Pulse analytics dashboard"
                    className="
                      block
                      h-auto
                      w-full
                    "
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="max-w-lg lg:pl-2">
            {/* Label */}
            <div
              className="
                flex
                items-center
                gap-2
                text-xs
                font-semibold
                uppercase
                tracking-[0.16em]
                text-primary
              "
            >
              <span className="h-px w-6 bg-primary" />
              One powerful workspace
            </div>

            {/* Heading */}
            <h3
              className="
                mt-5
                font-heading
                text-3xl
                font-extrabold
                leading-[1.1]
                tracking-[-0.035em]
                text-text-primary
                sm:text-4xl
              "
            >
              Turn your data into
              <span className="text-primary"> better decisions.</span>
            </h3>

            {/* Description */}
            <p
              className="
                mt-5
                text-sm
                leading-6
                text-text-secondary
                sm:text-base
                sm:leading-7
              "
            >
              Stop jumping between spreadsheets and disconnected tools. Pulse
              gives your team one clear view of business performance, so you can
              understand what is happening and act faster.
            </p>

            {/* Mini stats */}
            <div
              className="
                mt-7
                grid
                grid-cols-2
                gap-3
              "
            >
              <div
                className="
                  rounded-[var(--pulse-radius-lg)]
                  border
                  border-border
                  bg-surface-muted
                  p-4
                "
              >
                <div
                  className="
                    flex
                    h-8
                    w-8
                    items-center
                    justify-center
                    rounded-[var(--pulse-radius-md)]
                    bg-primary-soft
                    text-primary
                  "
                >
                  <TrendingUp size={15} />
                </div>

                <p
                  className="
                    mt-3
                    text-lg
                    font-bold
                    tracking-tight
                    text-text-primary
                  "
                >
                  +24.8%
                </p>

                <p className="mt-0.5 text-xs text-text-muted">Revenue growth</p>
              </div>

              <div
                className="
                  rounded-[var(--pulse-radius-lg)]
                  border
                  border-border
                  bg-surface-muted
                  p-4
                "
              >
                <div
                  className="
                    flex
                    h-8
                    w-8
                    items-center
                    justify-center
                    rounded-[var(--pulse-radius-md)]
                    bg-success-soft
                    text-success
                  "
                >
                  <Users size={15} />
                </div>

                <p
                  className="
                    mt-3
                    text-lg
                    font-bold
                    tracking-tight
                    text-text-primary
                  "
                >
                  8,420
                </p>

                <p className="mt-0.5 text-xs text-text-muted">
                  Active customers
                </p>
              </div>
            </div>

            {/* Features */}
            <div className="mt-7 space-y-3">
              {features.map((feature) => (
                <div
                  key={feature}
                  className="
                    flex
                    items-center
                    gap-3
                  "
                >
                  <span
                    className="
                      flex
                      h-5
                      w-5
                      shrink-0
                      items-center
                      justify-center
                      rounded-full
                      bg-success-soft
                      text-success
                    "
                  >
                    <Check size={12} strokeWidth={2.5} />
                  </span>

                  <span
                    className="
                      text-sm
                      text-text-secondary
                    "
                  >
                    {feature}
                  </span>
                </div>
              ))}
            </div>

            {/* CTA */}
            <a
              href="/dashboard"
              className="
                group
                mt-8
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
              Explore Pulse
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
      </div>
    </section>
  );
};

export default ProductShowcase;
