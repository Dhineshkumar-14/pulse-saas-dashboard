import { ArrowRight, Sparkles } from "lucide-react";

const CTA = () => {
  return (
    <section
      id="cta"
      className="
        relative
        overflow-hidden
        border-t
        border-border
        bg-primary
        py-20
        sm:py-24
        lg:py-28
      "
    >
      {/* Background effects */}
      <div className="pointer-events-none absolute inset-0">
        <div
          className="
            absolute
            left-1/2
            top-1/2
            h-[500px]
            w-[700px]
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            bg-primary-foreground/5
            blur-[120px]
          "
        />

        <div
          className="
            absolute
            inset-0
            opacity-10
            [background-image:linear-gradient(to_right,currentColor_1px,transparent_1px),linear-gradient(to_bottom,currentColor_1px,transparent_1px)]
            [background-size:4rem_4rem]
          "
        />
      </div>

      <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        {/* Badge */}
        <div
          className="
            inline-flex
            items-center
            gap-2
            rounded-full
            border
            border-primary-foreground/15
            bg-primary-foreground/5
            px-3
            py-1.5
            text-xs
            font-medium
            text-primary-foreground/70
          "
        >
          <Sparkles size={13} />
          Start building with Pulse
        </div>

        {/* Heading */}
        <h2
          className="
            mx-auto
            mt-6
            max-w-3xl
            text-balance
            text-3xl
            font-bold
            leading-tight
            tracking-[-0.04em]
            text-primary-foreground
            sm:text-4xl
            lg:text-6xl
          "
        >
          Make better decisions.
          <br className="hidden sm:block" />
          <span className="text-primary-foreground/60">
            Grow with confidence.
          </span>
        </h2>

        {/* Description */}
        <p
          className="
            mx-auto
            mt-5
            max-w-2xl
            text-sm
            leading-6
            text-primary-foreground/60
            sm:text-base
            sm:leading-7
          "
        >
          Bring your business data together, understand what matters, and turn
          insights into action with Pulse.
        </p>

        {/* CTA */}
        <div
          className="
            mt-8
            flex
            flex-col
            items-center
            justify-center
            gap-3
            sm:flex-row
          "
        >
          <a
            href="/dashboard"
            className="
              group
              inline-flex
              w-full
              items-center
              justify-center
              gap-2
              rounded-xl
              bg-background
              px-6
              py-3.5
              text-sm
              font-semibold
              text-foreground
              shadow-lg
              transition-all
              duration-200
              hover:-translate-y-0.5
              hover:shadow-xl
              sm:w-auto
            "
          >
            Get started for free
            <ArrowRight
              size={17}
              className="
                transition-transform
                duration-200
                group-hover:translate-x-1
              "
            />
          </a>

          <a
            href="#pricing"
            className="
              inline-flex
              w-full
              items-center
              justify-center
              rounded-xl
              border
              border-primary-foreground/15
              px-6
              py-3.5
              text-sm
              font-semibold
              text-primary-foreground
              transition-colors
              hover:bg-primary-foreground/10
              sm:w-auto
            "
          >
            View pricing
          </a>
        </div>

        {/* Trust */}
        <p className="mt-6 text-xs text-primary-foreground/40">
          No credit card required · 14-day free trial · Cancel anytime
        </p>
      </div>
    </section>
  );
};

export default CTA;
