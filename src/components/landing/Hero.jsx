import { ArrowRight } from "lucide-react";

const trustPoints = [
  "No credit card required",
  "14-day free trial",
  "Cancel anytime",
];

const Hero = () => {
  return (
    <section className="relative bg-background pt-16">
      <div
        className="
          mx-auto
          max-w-[var(--pulse-container-xl)]
          px-4
          py-12
          sm:py-16
          lg:py-20
          sm:px-6
          lg:px-8
        "
      >
        <div className="mx-auto max-w-4xl text-center">
          {/* Eyebrow */}
          <div
            className="
              mb-5
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
              font-medium
              text-text-secondary
            "
          >
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            Smarter analytics for modern teams
          </div>

          {/* Heading */}
          <h1
            className="
              font-heading
              text-4xl
              font-extrabold
              leading-[1.05]
              tracking-[-0.045em]
              text-text-primary
              sm:text-6xl
              lg:text-7xl
            "
          >
            Everything you need
            <br />
            <span className="text-primary">to grow with confidence.</span>
          </h1>

          {/* Description */}
          <p
            className="
              mx-auto
              mt-5
              max-w-2xl
              text-sm
              leading-6
              text-text-secondary
              sm:mt-6
              sm:text-base
              sm:leading-7
            "
          >
            Pulse brings your revenue, customers, orders, and conversion
            insights together in one powerful workspace.
          </p>

          {/* Actions */}
          <div
            className="
              mt-7
              flex
              flex-col
              justify-center
              gap-3
              sm:mt-8
              sm:flex-row
            "
          >
            <a
              href="/dashboard"
              className="
                inline-flex
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
              "
            >
              Start for free
              <ArrowRight size={16} />
            </a>

            <a
              href="#product"
              className="
                inline-flex
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
              "
            >
              Explore product
            </a>
          </div>

          {/* Trust */}
          <div
            className="
              mt-5
              flex
              flex-wrap
              items-center
              justify-center
              gap-x-5
              gap-y-2
              text-xs
              text-text-muted
            "
          >
            {trustPoints.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
