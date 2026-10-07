import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Mitchell",
    role: "Founder, Nova Labs",
    avatar: "SM",
    quote:
      "Pulse completely changed how we understand our business. We finally have all our important metrics in one place.",
  },
  {
    name: "James Carter",
    role: "Growth Lead, Orbit",
    avatar: "JC",
    quote:
      "The simplicity is what I love most. I can open Pulse and immediately understand how we're performing.",
  },
  {
    name: "Emily Rodriguez",
    role: "Co-founder, Layer",
    avatar: "ER",
    quote:
      "We spend less time looking for data and more time actually acting on it. Pulse has become part of our daily workflow.",
  },
];

const Testimonials = () => {
  return (
    <section
      id="testimonials"
      className="bg-background py-20 sm:py-24 lg:py-32"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold text-primary">
            TESTIMONIALS
          </p>

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
            Loved by teams
            <span className="text-muted-foreground">
              {" "}that move fast.
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
            See why growing teams use Pulse to understand their
            business and make better decisions.
          </p>
        </div>

        {/* Testimonials */}
        <div
          className="
            mt-12
            grid
            gap-5
            sm:mt-14
            md:grid-cols-2
            lg:grid-cols-3
          "
        >
          {testimonials.map((testimonial) => (
            <article
              key={testimonial.name}
              className="
                group
                flex
                flex-col
                rounded-2xl
                border
                border-border
                bg-background
                p-6
                transition-all
                duration-300
                hover:-translate-y-1
                hover:shadow-xl
                sm:p-7
              "
            >
              {/* Quote Icon */}
              <div className="flex items-center justify-between">
                <div
                  className="
                    flex
                    h-10
                    w-10
                    items-center
                    justify-center
                    rounded-xl
                    bg-muted
                    text-muted-foreground
                  "
                >
                  <Quote size={18} />
                </div>

                {/* Rating */}
                <div className="flex items-center gap-0.5">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      size={14}
                      fill="currentColor"
                      className="text-amber-400"
                    />
                  ))}
                </div>
              </div>

              {/* Quote */}
              <blockquote
                className="
                  mt-7
                  flex-1
                  text-base
                  leading-7
                  text-foreground
                  sm:text-[17px]
                "
              >
                “{testimonial.quote}”
              </blockquote>

              {/* Person */}
              <div
                className="
                  mt-8
                  flex
                  items-center
                  gap-3
                  border-t
                  border-border
                  pt-5
                "
              >
                {/* Avatar */}
                <div
                  className="
                    flex
                    h-10
                    w-10
                    shrink-0
                    items-center
                    justify-center
                    rounded-full
                    bg-muted
                    text-xs
                    font-semibold
                    text-foreground
                  "
                >
                  {testimonial.avatar}
                </div>

                <div>
                  <p className="text-sm font-semibold text-foreground">
                    {testimonial.name}
                  </p>

                  <p className="mt-0.5 text-xs text-muted-foreground">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Bottom trust statement */}
        <div className="mt-10 text-center">
          <p className="text-sm text-muted-foreground">
            Trusted by{" "}
            <span className="font-semibold text-foreground">
              2,000+
            </span>{" "}
            modern teams worldwide.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;