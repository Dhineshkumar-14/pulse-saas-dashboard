import { ArrowUpRight } from "lucide-react";
import { FaGithub, FaLinkedinIn, FaXTwitter } from "react-icons/fa6";
const footerLinks = {
  Product: ["Analytics", "Revenue Tracking", "Customers", "Orders"],
  Company: ["About", "Careers", "Contact", "Blog"],
  Resources: ["Documentation", "Help Center", "Guides", "API"],
  Legal: ["Privacy", "Terms", "Security"],
};

const Footer = () => {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* =====================================================
            TOP FOOTER
        ===================================================== */}
        <div
          className="
            grid
            gap-12
            py-14
            sm:py-16
            lg:grid-cols-[1.5fr_2fr]
            lg:gap-20
            lg:py-20
          "
        >
          {/* Brand */}
          <div className="max-w-sm">
            <a href="/" className="inline-flex items-center gap-2">
              <div
                className="
                  flex
                  h-8
                  w-8
                  items-center
                  justify-center
                  rounded-lg
                  bg-foreground
                "
              >
                <span className="text-sm font-bold text-background">P</span>
              </div>

              <span className="text-lg font-bold tracking-tight">PULSE</span>
            </a>

            <p
              className="
                mt-5
                text-sm
                leading-6
                text-muted-foreground
              "
            >
              A simple and powerful workspace for understanding your business,
              tracking performance, and making better decisions.
            </p>

            {/* Social */}
            <div className="mt-6 flex items-center gap-2">
              <a
                href="#"
                aria-label="X"
                className="
      flex h-9 w-9 items-center justify-center
      rounded-lg
      border border-border
      text-muted-foreground
      transition-colors
      hover:bg-muted
      hover:text-foreground
    "
              >
                <FaXTwitter size={15} />
              </a>

              <a
                href="#"
                aria-label="GitHub"
                className="
      flex h-9 w-9 items-center justify-center
      rounded-lg
      border border-border
      text-muted-foreground
      transition-colors
      hover:bg-muted
      hover:text-foreground
    "
              >
                <FaGithub size={16} />
              </a>

              <a
                href="#"
                aria-label="LinkedIn"
                className="
      flex h-9 w-9 items-center justify-center
      rounded-lg
      border border-border
      text-muted-foreground
      transition-colors
      hover:bg-muted
      hover:text-foreground
    "
              >
                <FaLinkedinIn size={15} />
              </a>
            </div>
          </div>

          {/* Links */}
          <div
            className="
              grid
              grid-cols-2
              gap-x-8
              gap-y-10
              sm:grid-cols-4
            "
          >
            {Object.entries(footerLinks).map(([title, links]) => (
              <div key={title}>
                <h3 className="text-sm font-semibold text-foreground">
                  {title}
                </h3>

                <ul className="mt-4 space-y-3">
                  {links.map((link) => (
                    <li key={link}>
                      <a
                        href="#"
                        className="
                            text-sm
                            text-muted-foreground
                            transition-colors
                            hover:text-foreground
                          "
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* =====================================================
            BOTTOM FOOTER
        ===================================================== */}
        <div
          className="
            flex
            flex-col
            gap-4
            border-t
            border-border
            py-6
            sm:flex-row
            sm:items-center
            sm:justify-between
          "
        >
          <p className="text-xs text-muted-foreground">
            © 2026 Pulse. All rights reserved.
          </p>

          <div className="flex items-center gap-5">
            <a
              href="#"
              className="
                inline-flex
                items-center
                gap-1
                text-xs
                text-muted-foreground
                hover:text-foreground
              "
            >
              Status
              <ArrowUpRight size={12} />
            </a>

            <a
              href="#"
              className="
                text-xs
                text-muted-foreground
                hover:text-foreground
              "
            >
              Privacy
            </a>

            <a
              href="#"
              className="
                text-xs
                text-muted-foreground
                hover:text-foreground
              "
            >
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
