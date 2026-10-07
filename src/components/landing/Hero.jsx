import { ArrowRight, Check, Play, Sparkles } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative isolate overflow-hidden bg-background">
      {/* =====================================================
          BACKGROUND
      ===================================================== */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        {/* Grid */}
        <div
          className="
            absolute inset-0
            bg-[linear-gradient(to_right,var(--border)_1px,transparent_1px),linear-gradient(to_bottom,var(--border)_1px,transparent_1px)]
            bg-[size:4rem_4rem]
            opacity-20
            [mask-image:linear-gradient(to_bottom,black_0%,transparent_75%)]
          "
        />

        {/* Main glow */}
        <div
          className="
            absolute
            left-1/2
            top-[-220px]
            h-[420px]
            w-[420px]
            -translate-x-1/2
            rounded-full
            bg-primary/10
            blur-[120px]
            sm:h-[550px]
            sm:w-[550px]
          "
        />

        {/* Left glow */}
        <div
          className="
            absolute
            left-[-180px]
            top-[35%]
            h-[350px]
            w-[350px]
            rounded-full
            bg-blue-500/5
            blur-[120px]
          "
        />

        {/* Right glow */}
        <div
          className="
            absolute
            right-[-180px]
            top-[40%]
            h-[350px]
            w-[350px]
            rounded-full
            bg-purple-500/5
            blur-[120px]
          "
        />
      </div>

      <div
        className="
          mx-auto
          max-w-7xl
          px-4
          pb-16
          pt-14
          sm:px-6
          sm:pb-20
          sm:pt-20
          lg:px-8
          lg:pb-28
          lg:pt-28
        "
      >
        {/* =====================================================
            HERO CONTENT
        ===================================================== */}
        <div className="mx-auto max-w-4xl text-center">
          {/* Badge */}
          <div
            className="
              mb-6
              inline-flex
              items-center
              gap-2
              rounded-full
              border
              border-border
              bg-background/80
              px-3
              py-1.5
              text-xs
              font-medium
              text-muted-foreground
              shadow-sm
              backdrop-blur-xl
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
                bg-primary
                text-primary-foreground
              "
            >
              <Sparkles size={11} />
            </span>

            <span>Smarter analytics for modern teams</span>

            <ArrowRight size={13} className="hidden sm:block" />
          </div>

          {/* Heading */}
          <h1
            className="
              text-balance
              text-[2.7rem]
              font-bold
              leading-[0.98]
              tracking-[-0.055em]
              text-foreground
              sm:text-6xl
              lg:text-7xl
              xl:text-[80px]
            "
          >
            Everything you need
            <br className="hidden sm:block" />
            <span className="text-muted-foreground">
              to grow with confidence.
            </span>
          </h1>

          {/* Description */}
          <p
            className="
              mx-auto
              mt-6
              max-w-2xl
              text-sm
              leading-6
              text-muted-foreground
              sm:mt-7
              sm:text-base
              sm:leading-7
              lg:text-lg
              lg:leading-8
            "
          >
            Pulse brings your revenue, customers, orders, and conversion
            insights together in one beautiful workspace. Understand your
            business and make better decisions, faster.
          </p>

          {/* =====================================================
              CTA
          ===================================================== */}
          <div
            className="
              mt-8
              flex
              flex-col
              items-stretch
              justify-center
              gap-3
              sm:flex-row
              sm:items-center
            "
          >
            {/* Primary */}
            <a
              href="/dashboard"
              className="
                group
                inline-flex
                items-center
                justify-center
                gap-2
                rounded-xl
                bg-primary
                px-6
                py-3.5
                text-sm
                font-semibold
                text-primary-foreground
                shadow-lg
                shadow-primary/10
                transition-all
                duration-200
                hover:-translate-y-0.5
                hover:shadow-xl
              "
            >
              Start for free
              <ArrowRight
                size={17}
                className="transition-transform duration-200 group-hover:translate-x-1"
              />
            </a>

            {/* Secondary */}
            <button
              type="button"
              className="
                inline-flex
                items-center
                justify-center
                gap-2
                rounded-xl
                border
                border-border
                bg-background/80
                px-6
                py-3.5
                text-sm
                font-semibold
                text-foreground
                backdrop-blur
                transition-all
                duration-200
                hover:bg-muted
              "
            >
              <span
                className="
                  flex
                  h-6
                  w-6
                  items-center
                  justify-center
                  rounded-full
                  bg-muted
                "
              >
                <Play size={10} fill="currentColor" />
              </span>
              See how it works
            </button>
          </div>

          {/* Trust points */}
          <div
            className="
              mt-7
              flex
              flex-wrap
              items-center
              justify-center
              gap-x-5
              gap-y-2
            "
          >
            {[
              "No credit card required",
              "14-day free trial",
              "Cancel anytime",
            ].map((item) => (
              <div
                key={item}
                className="
                  flex
                  items-center
                  gap-1.5
                  text-[11px]
                  text-muted-foreground
                  sm:text-xs
                "
              >
                <Check
                  size={13}
                  strokeWidth={2.5}
                  className="text-emerald-500"
                />

                {item}
              </div>
            ))}
          </div>
        </div>

        {/* =====================================================
            DASHBOARD IMAGE
        ===================================================== */}
        <div
          className="
            relative
            mx-auto
            mt-14
            max-w-6xl
            sm:mt-16
            lg:mt-20
          "
        >
          {/* Glow behind dashboard */}
          <div
            className="
              absolute
              -inset-4
              -z-10
              rounded-[2rem]
              bg-primary/10
              blur-3xl
              sm:-inset-8
            "
          />

          {/* Secondary glow */}
          <div
            className="
              absolute
              left-1/2
              top-1/2
              -z-10
              h-[60%]
              w-[70%]
              -translate-x-1/2
              -translate-y-1/2
              rounded-full
              bg-purple-500/10
              blur-[100px]
            "
          />

          {/* Dashboard frame */}
          <div
            className="
              relative
              overflow-hidden
              rounded-2xl
              border
              border-border
              bg-background
              shadow-[0_30px_100px_-25px_rgba(0,0,0,0.28)]
              sm:rounded-3xl
            "
          >
            {/* Browser top bar */}
            <div
              className="
                flex
                h-9
                items-center
                border-b
                border-border
                bg-muted/40
                px-3
                sm:h-11
                sm:px-4
              "
            >
              {/* Browser dots */}
              <div className="flex items-center gap-1.5">
                <span className="h-2 w-2 rounded-full bg-red-400/70 sm:h-2.5 sm:w-2.5" />
                <span className="h-2 w-2 rounded-full bg-yellow-400/70 sm:h-2.5 sm:w-2.5" />
                <span className="h-2 w-2 rounded-full bg-green-400/70 sm:h-2.5 sm:w-2.5" />
              </div>

              {/* Address bar */}
              <div
                className="
                  mx-auto
                  hidden
                  h-6
                  w-64
                  items-center
                  justify-center
                  rounded-md
                  border
                  border-border
                  bg-background
                  text-[9px]
                  text-muted-foreground
                  sm:flex
                "
              >
                app.pulse.com/dashboard
              </div>
            </div>

            {/* =================================================
                GENERATED DASHBOARD IMAGE
            ================================================= */}
            <img
              src="/images/pulse-dashboard.png"
              alt="Pulse analytics dashboard"
              className="
                block
                h-auto
                w-full
                object-cover
                object-top
              "
            />
          </div>

          {/* Bottom fade */}
          <div
            className="
              pointer-events-none
              absolute
              bottom-0
              left-0
              right-0
              h-16
              bg-gradient-to-t
              from-background/20
              to-transparent
            "
          />
        </div>

        {/* =====================================================
            TRUSTED COMPANIES
        ===================================================== */}
        <div
          className="
            mx-auto
            mt-14
            max-w-4xl
            text-center
            sm:mt-16
          "
        >
          <p
            className="
              text-[10px]
              font-semibold
              uppercase
              tracking-[0.2em]
              text-muted-foreground
              sm:text-xs
            "
          >
            Trusted by modern teams
          </p>

          <div
            className="
              mt-6
              grid
              grid-cols-2
              gap-x-6
              gap-y-5
              text-xs
              font-bold
              tracking-wide
              text-muted-foreground/50
              sm:grid-cols-5
              sm:text-sm
            "
          >
            <span>VERCEL</span>
            <span>LINEAR</span>
            <span>STRIPE</span>
            <span>NOTION</span>
            <span>FIGMA</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
