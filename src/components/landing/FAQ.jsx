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
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      id="faq"
      className="border-t border-border bg-background py-20 sm:py-24 lg:py-32"
    >
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center">
          <p className="text-sm font-semibold text-primary">FAQ</p>

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
            Frequently asked
            <span className="text-muted-foreground"> questions.</span>
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
            Everything you need to know about Pulse.
          </p>
        </div>

        {/* FAQ List */}
        <div className="mt-12 divide-y divide-border border-y border-border">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div key={faq.question}>
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
                    py-5
                    text-left
                    sm:py-6
                  "
                >
                  <span
                    className="
                      text-sm
                      font-semibold
                      text-foreground
                      sm:text-base
                    "
                  >
                    {faq.question}
                  </span>

                  <span
                    className={`
                      flex
                      h-7
                      w-7
                      shrink-0
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-border
                      bg-muted/50
                      transition-transform
                      duration-200
                      ${isOpen ? "rotate-180" : ""}
                    `}
                  >
                    <ChevronDown size={15} />
                  </span>
                </button>

                {/* Answer */}
                <div
                  className={`
                    grid
                    transition-all
                    duration-300
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
                        max-w-3xl
                        pb-6
                        pr-10
                        text-sm
                        leading-6
                        text-muted-foreground
                        sm:text-base
                        sm:leading-7
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

        {/* Bottom Help */}
        <div className="mt-10 text-center">
          <p className="text-sm text-muted-foreground">Still have questions?</p>

          <a
            href="mailto:hello@pulse.com"
            className="
              mt-2
              inline-block
              text-sm
              font-semibold
              text-foreground
              underline
              underline-offset-4
              transition-colors
              hover:text-muted-foreground
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
