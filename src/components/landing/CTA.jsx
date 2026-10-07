import { ArrowRight, Check } from "lucide-react";

const trustPoints = [
  "No credit card required",
  "14-day free trial",
  "Cancel anytime",
];

const CTA = () => {
  return (
    <section
      id="cta"
      className="
        border-t
        border-border-light
        bg-background
        py-16
        sm:py-20
        lg:py-24
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
        <div
          className="
            relative
            overflow-hidden
            rounded-[var(--pulse-radius-2xl)]
            border
            border-border
            bg-surface
          "
        >
          {/* Subtle accent area */}
          <div
            className="
              pointer-events-none
              absolute
              right-0
              top-0
              h-full
              w-full
              bg-primary-soft
              opacity-40
            "
          />

          <div
            className="
              relative
              mx-auto
              max-w-4xl
              px-5
              py-10
              text-center
              sm:px-8
              sm:py-12
              md:px-12
              md:py-14
              lg:py-16
            "
          >
            {/* Badge */}
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
                shadow-sm
              "
            >
              Get started with Pulse
            </div>

            {/* Heading */}
            <h2
              className="
                mx-auto
                mt-5
                max-w-3xl
                font-heading
                text-3xl
                font-extrabold
                leading-[1.08]
                tracking-[-0.04em]
                text-text-primary
                sm:text-4xl
                md:text-5xl
              "
            >
              Make better decisions.
              <br className="hidden sm:block" />
              <span className="text-primary">Grow with confidence.</span>
            </h2>

            {/* Description */}
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
              Bring your business data together, understand what matters, and
              turn insights into action with Pulse.
            </p>

            {/* Actions */}
            <div
              className="
                mt-7
                flex
                flex-col
                items-stretch
                justify-center
                gap-3
                sm:mt-8
                sm:flex-row
                sm:items-center
              "
            >
              <a
                href="/dashboard"
                className="
                  group
                  inline-flex
                  min-h-12
                  items-center
                  justify-center
                  gap-2
                  rounded-[var(--pulse-radius-md)]
                  bg-primary
                  px-6
                  py-3
                  text-sm
                  font-semibold
                  text-primary-foreground
                  shadow-primary
                  transition-all
                  duration-[var(--pulse-transition-normal)]
                  hover:-translate-y-0.5
                  hover:bg-primary-hover
                  sm:min-w-[170px]
                "
              >
                Start for free
                <ArrowRight
                  size={16}
                  className="
                    transition-transform
                    duration-[var(--pulse-transition-fast)]
                    group-hover:translate-x-0.5
                  "
                />
              </a>

              <a
                href="#pricing"
                className="
                  inline-flex
                  min-h-12
                  items-center
                  justify-center
                  rounded-[var(--pulse-radius-md)]
                  border
                  border-border
                  bg-surface
                  px-6
                  py-3
                  text-sm
                  font-semibold
                  text-text-primary
                  transition-all
                  duration-[var(--pulse-transition-normal)]
                  hover:border-border-hover
                  hover:bg-surface-hover
                  sm:min-w-[140px]
                "
              >
                View pricing
              </a>
            </div>

            {/* Trust points */}
            <div
              className="
                mx-auto
                mt-7
                flex
                max-w-xl
                flex-wrap
                items-center
                justify-center
                gap-x-5
                gap-y-2.5
                sm:mt-8
                sm:gap-x-6
              "
            >
              {trustPoints.map((point) => (
                <div
                  key={point}
                  className="
                    flex
                    items-center
                    gap-1.5
                    text-xs
                    text-text-muted
                  "
                >
                  <span
                    className="
                      flex
                      h-4
                      w-4
                      shrink-0
                      items-center
                      justify-center
                      rounded-full
                      bg-success-soft
                      text-success
                    "
                  >
                    <Check size={10} strokeWidth={2.5} />
                  </span>

                  <span>{point}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
