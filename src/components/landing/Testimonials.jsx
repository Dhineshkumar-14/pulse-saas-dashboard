import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Mitchell",
    role: "Founder, Nova Labs",
    avatar: "SM",
    quote:
      "Pulse completely changed how we understand our business. We finally have all our important metrics in one place.",
    featured: true,
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

const Rating = () => {
  return (
    <div className="flex items-center gap-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          size={13}
          fill="currentColor"
          strokeWidth={0}
          className="text-primary"
        />
      ))}
    </div>
  );
};

const Avatar = ({ initials }) => {
  return (
    <div
      className="
        flex
        h-10
        w-10
        shrink-0
        items-center
        justify-center
        rounded-full
        bg-primary-soft
        text-xs
        font-bold
        text-primary
      "
    >
      {initials}
    </div>
  );
};

const Testimonials = () => {
  const featured = testimonials.find((testimonial) => testimonial.featured);

  const secondary = testimonials.filter((testimonial) => !testimonial.featured);

  return (
    <section
      id="testimonials"
      className="
        border-t
        border-border-light
        bg-background
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
        {/* Header */}
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
            TESTIMONIALS
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
            Loved by teams
            <br className="hidden sm:block" />
            <span className="text-primary"> that move fast.</span>
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
            See why growing teams use Pulse to understand their business and
            make better decisions.
          </p>
        </div>

        {/* Testimonials layout */}
        <div
          className="
            mx-auto
            mt-12
            max-w-5xl
            space-y-4
            sm:mt-14
          "
        >
          {/* Featured testimonial */}
          <article
            className="
              relative
              overflow-hidden
              rounded-[var(--pulse-radius-2xl)]
              border
              border-border
              bg-surface
              p-7
              shadow-sm
              sm:p-9
              lg:p-10
            "
          >
            {/* Accent */}
            <div
              className="
                absolute
                left-0
                top-0
                h-full
                w-1
                bg-primary
              "
            />

            <div
              className="
                grid
                gap-8
                lg:grid-cols-[1fr_auto]
                lg:items-end
              "
            >
              <div>
                {/* Quote mark */}
                <div
                  className="
                    flex
                    h-9
                    w-9
                    items-center
                    justify-center
                    rounded-[var(--pulse-radius-md)]
                    bg-primary-soft
                    text-primary
                  "
                >
                  <Quote size={17} />
                </div>

                {/* Quote */}
                <blockquote
                  className="
                    mt-6
                    max-w-3xl
                    font-heading
                    text-2xl
                    font-semibold
                    leading-[1.35]
                    tracking-[-0.02em]
                    text-text-primary
                    sm:text-3xl
                  "
                >
                  “{featured.quote}”
                </blockquote>

                {/* Person */}
                <div className="mt-7 flex items-center gap-3">
                  <Avatar initials={featured.avatar} />

                  <div>
                    <p
                      className="
                        text-sm
                        font-semibold
                        text-text-primary
                      "
                    >
                      {featured.name}
                    </p>

                    <p
                      className="
                        mt-0.5
                        text-xs
                        text-text-muted
                      "
                    >
                      {featured.role}
                    </p>
                  </div>
                </div>
              </div>

              {/* Rating */}
              <div
                className="
                  flex
                  items-center
                  gap-3
                  lg:pb-1
                "
              >
                <Rating />

                <span
                  className="
                    text-xs
                    font-medium
                    text-text-muted
                  "
                >
                  5.0
                </span>
              </div>
            </div>
          </article>

          {/* Secondary testimonials */}
          <div className="grid gap-4 md:grid-cols-2">
            {secondary.map((testimonial) => (
              <article
                key={testimonial.name}
                className="
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
                {/* Top */}
                <div className="flex items-center justify-between">
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
                    <Quote size={14} />
                  </div>

                  <Rating />
                </div>

                {/* Quote */}
                <blockquote
                  className="
                    mt-5
                    text-sm
                    leading-6
                    text-text-secondary
                    sm:text-[15px]
                  "
                >
                  “{testimonial.quote}”
                </blockquote>

                {/* Person */}
                <div
                  className="
                    mt-6
                    flex
                    items-center
                    gap-3
                    border-t
                    border-border-light
                    pt-5
                  "
                >
                  <Avatar initials={testimonial.avatar} />

                  <div>
                    <p
                      className="
                        text-sm
                        font-semibold
                        text-text-primary
                      "
                    >
                      {testimonial.name}
                    </p>

                    <p
                      className="
                        mt-0.5
                        text-xs
                        text-text-muted
                      "
                    >
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Trust statement */}
        <div
          className="
            mt-10
            flex
            flex-col
            items-center
            justify-center
            gap-2
            text-center
            sm:mt-12
            sm:flex-row
            sm:gap-3
          "
        >
          <div className="flex items-center gap-1">
            <Rating />
          </div>

          <span className="text-sm text-text-muted">
            Trusted by{" "}
            <span className="font-semibold text-text-primary">2,000+</span>{" "}
            modern teams worldwide.
          </span>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
