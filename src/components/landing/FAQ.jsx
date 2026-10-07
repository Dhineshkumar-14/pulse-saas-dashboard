import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "What is Pulse?",
    answer:
      "Pulse is a modern business analytics platform that brings your revenue, customers, orders, and conversion insights together in one simple workspace.",
  },
  {
    question: "Do I need a credit card to get started?",
    answer:
      "No. You can start your 14-day free trial without entering a credit card. You can explore the core Pulse experience before choosing a paid plan.",
  },
  {
    question: "Can I cancel my subscription anytime?",
    answer:
      "Yes. You can cancel your subscription whenever you want. There are no long-term contracts or complicated cancellation processes.",
  },
  {
    question: "Can I connect my existing business data?",
    answer:
      "Yes. Pulse is designed to bring your important business data into one workspace, including customers, orders, revenue, and performance metrics.",
  },
  {
    question: "Is Pulse suitable for small businesses?",
    answer:
      "Absolutely. Pulse is designed for startups, small businesses, and growing teams that want a simple way to understand their business performance.",
  },
  {
    question: "What happens after my free trial?",
    answer:
      "After your 14-day trial, you can choose the plan that best fits your business. If you don't upgrade, you won't be charged automatically.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFAQ = (index) => {
    setOpenIndex((current) => (current === index ? null : index));
  };

  return (
    <section
      id="faq"
      className="
        border-t
        border-border-light
        bg-surface
        py-16
        sm:py-20
        lg:py-24
      "
    >
      <div className="mx-auto max-w-[var(--pulse-container-xl)] px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <div
            className="
              inline-flex
              items-center
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
            FAQ
          </div>

          <h2
            className="
              mx-auto
              mt-4
              max-w-2xl
              font-heading
              text-3xl
              font-extrabold
              leading-[1.08]
              tracking-[-0.035em]
              text-text-primary
              sm:text-4xl
              lg:text-[44px]
            "
          >
            Frequently asked <span className="text-primary">questions.</span>
          </h2>
        </div>

        {/* FAQ List */}
        <div
          className="
            mx-auto
            mt-9
            max-w-3xl
            overflow-hidden
            rounded-[var(--pulse-radius-xl)]
            border
            border-border
            bg-surface
            shadow-sm
            sm:mt-10
          "
        >
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={faq.question}
                className={`
                  border-b
                  border-border-light
                  last:border-b-0
                  transition-colors
                  duration-[var(--pulse-transition-fast)]
                  ${isOpen ? "bg-primary-soft/30" : "bg-surface"}
                `}
              >
                {/* Question */}
                <button
                  type="button"
                  onClick={() => toggleFAQ(index)}
                  aria-expanded={isOpen}
                  className="
                    flex
                    w-full
                    items-center
                    justify-between
                    gap-6
                    px-5
                    py-4
                    text-left
                    sm:px-6
                    sm:py-5
                  "
                >
                  <span
                    className={`
                      text-sm
                      font-semibold
                      transition-colors
                      duration-[var(--pulse-transition-fast)]
                      sm:text-base
                      ${isOpen ? "text-primary" : "text-text-primary"}
                    `}
                  >
                    {faq.question}
                  </span>

                  <span
                    className={`
                      flex
                      h-8
                      w-8
                      shrink-0
                      items-center
                      justify-center
                      rounded-[var(--pulse-radius-md)]
                      border
                      transition-all
                      duration-[var(--pulse-transition-normal)]
                      ${
                        isOpen
                          ? "border-primary bg-primary text-primary-foreground"
                          : "border-border bg-surface text-text-muted"
                      }
                    `}
                  >
                    <ChevronDown
                      size={16}
                      className={`
                        transition-transform
                        duration-[var(--pulse-transition-normal)]
                        ${isOpen ? "rotate-180" : "rotate-0"}
                      `}
                    />
                  </span>
                </button>

                {/* Answer */}
                <div
                  className={`
                    grid
                    transition-all
                    duration-[var(--pulse-transition-normal)]
                    ${
                      isOpen
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                    }
                  `}
                >
                  <div className="overflow-hidden">
                    <p
                      className="
                        max-w-2xl
                        px-5
                        pb-5
                        pr-14
                        text-sm
                        leading-6
                        text-text-secondary
                        sm:px-6
                        sm:pb-6
                        sm:text-[15px]
                        sm:leading-6
                      "
                    >
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Support */}
        <div
          className="
            mx-auto
            mt-8
            flex
            max-w-3xl
            flex-col
            items-center
            justify-center
            gap-3
            rounded-[var(--pulse-radius-xl)]
            border
            border-border
            bg-surface-muted
            px-5
            py-4
            text-center
            sm:mt-10
            sm:flex-row
            sm:gap-4
          "
        >
          <div>
            <p className="text-sm font-semibold text-text-primary">
              Still have questions?
            </p>

            <p className="mt-0.5 text-xs text-text-muted">
              Our team is happy to help.
            </p>
          </div>

          <a
            href="mailto:hello@pulse.com"
            className="
              inline-flex
              items-center
              rounded-[var(--pulse-radius-md)]
              border
              border-border
              bg-surface
              px-4
              py-2
              text-xs
              font-semibold
              text-text-primary
              transition-all
              duration-[var(--pulse-transition-fast)]
              hover:border-border-hover
              hover:bg-surface-hover
            "
          >
            Talk to our team
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
