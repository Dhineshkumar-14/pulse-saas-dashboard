import { ArrowRight, Check } from "lucide-react";

const ProductShowcase = () => {
  return (
    <section id="product" className="bg-background py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold text-primary">PRODUCT</p>

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
            Everything you need to
            <span className="text-muted-foreground">
              {" "}
              understand your business.
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
            Pulse brings your revenue, customers, orders, and business insights
            together in one simple workspace.
          </p>
        </div>

        {/* Product Showcase */}
        <div
          className="
            mt-12
            grid
            items-center
            gap-10
            lg:grid-cols-2
            lg:gap-16
            lg:mt-16
          "
        >
          {/* Product Image */}
          <div
            className="
              relative
              overflow-hidden
              rounded-2xl
              border
              border-border
              bg-muted/30
              p-2
              shadow-[0_25px_70px_-25px_rgba(0,0,0,0.2)]
              sm:p-3
            "
          >
            {/* Glow */}
            <div
              className="
                pointer-events-none
                absolute
                left-1/2
                top-1/2
                -z-10
                h-2/3
                w-2/3
                -translate-x-1/2
                -translate-y-1/2
                rounded-full
                bg-primary/10
                blur-[80px]
              "
            />

            <div className="overflow-hidden rounded-xl border border-border bg-background">
              {/* Browser bar */}
              <div
                className="
                  flex
                  h-9
                  items-center
                  border-b
                  border-border
                  bg-muted/40
                  px-3
                  sm:h-10
                  sm:px-4
                "
              >
                <div className="flex gap-1.5">
                  <span className="h-2 w-2 rounded-full bg-red-400/70" />
                  <span className="h-2 w-2 rounded-full bg-yellow-400/70" />
                  <span className="h-2 w-2 rounded-full bg-green-400/70" />
                </div>

                <div
                  className="
                    mx-auto
                    hidden
                    h-6
                    w-52
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

              {/* Dashboard */}
              <img
                src="/images/pulse-dashboard.png"
                alt="Pulse dashboard showing revenue, users, orders and conversion analytics"
                className="
                  block
                  h-auto
                  w-full
                  object-cover
                  object-top
                "
              />
            </div>
          </div>

          {/* Product Content */}
          <div className="max-w-xl">
            <p
              className="
                text-xs
                font-semibold
                uppercase
                tracking-[0.18em]
                text-muted-foreground
              "
            >
              One powerful workspace
            </p>

            <h3
              className="
                mt-4
                text-3xl
                font-bold
                leading-tight
                tracking-tight
                text-foreground
                sm:text-4xl
              "
            >
              Turn your data into
              <span className="text-muted-foreground"> better decisions.</span>
            </h3>

            <p
              className="
                mt-5
                text-sm
                leading-6
                text-muted-foreground
                sm:text-base
                sm:leading-7
              "
            >
              Get a clear picture of your business performance without switching
              between multiple tools. Pulse gives you the information you need,
              exactly when you need it.
            </p>

            {/* Features */}
            <div className="mt-7 space-y-4">
              {[
                "Track revenue and business performance",
                "Understand customer growth",
                "Monitor orders and conversions",
                "Make data-driven decisions faster",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <span
                    className="
                      flex
                      h-6
                      w-6
                      shrink-0
                      items-center
                      justify-center
                      rounded-full
                      bg-emerald-500/10
                      text-emerald-600
                    "
                  >
                    <Check size={14} strokeWidth={2.5} />
                  </span>

                  <span className="text-sm text-foreground">{item}</span>
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
                text-sm
                font-semibold
                text-foreground
              "
            >
              Explore Pulse
              <ArrowRight
                size={16}
                className="
                  transition-transform
                  duration-200
                  group-hover:translate-x-1
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
