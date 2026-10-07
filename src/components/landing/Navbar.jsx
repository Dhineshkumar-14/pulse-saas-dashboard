import { useEffect, useState } from "react";
import { ArrowRight, Menu, X } from "lucide-react";

const navItems = [
  { label: "Product", href: "#product" },
  { label: "How it works", href: "#how-it-works" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
];

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("#product");
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleHashChange = () => {
      setActiveSection(window.location.hash || "#product");
    };

    handleHashChange();

    window.addEventListener("hashchange", handleHashChange);

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  const handleNavClick = (href) => {
    setActiveSection(href);
    setMobileOpen(false);
  };

  return (
    <header
      className="
    fixed
    inset-x-0
    top-0
    z-[var(--pulse-z-header)]
    border-b
    border-border
    bg-surface
  "
    >
      <div className="mx-auto max-w-[var(--pulse-container-xl)] px-4 sm:px-6 lg:px-8">
        <nav
          className="
        flex
        h-16
        items-center
        justify-between
      "
        >
          {/* Logo */}
          <a href="/" className="flex items-center gap-2.5">
            <div
              className="
            flex
            h-8
            w-8
            items-center
            justify-center
            rounded-[var(--pulse-radius-md)]
            bg-primary
            text-primary-foreground
          "
            >
              <span className="font-heading text-sm font-bold">P</span>
            </div>

            <span
              className="
            font-heading
            text-lg
            font-bold
            tracking-tight
            text-text-primary
          "
            >
              Pulse
            </span>
          </a>

          {/* Desktop navigation */}
          <div className="hidden items-center gap-8 lg:flex">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => handleNavClick(item.href)}
                className="
              text-sm
              font-medium
              text-text-muted
              transition-colors
              duration-[var(--pulse-transition-fast)]
              hover:text-text-primary
            "
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Actions */}
          <div className="hidden items-center gap-2 lg:flex">
            <a
              href="/login"
              className="
            rounded-[var(--pulse-radius-md)]
            px-3
            py-2
            text-sm
            font-medium
            text-text-secondary
            hover:bg-surface-hover
          "
            >
              Log in
            </a>

            <a
              href="/dashboard"
              className="
            inline-flex
            items-center
            gap-2
            rounded-[var(--pulse-radius-md)]
            bg-primary
            px-4
            py-2.5
            text-sm
            font-semibold
            text-primary-foreground
            shadow-primary
            transition-all
            duration-[var(--pulse-transition-normal)]
            hover:bg-primary-hover
          "
            >
              Get started
              <ArrowRight size={15} />
            </a>
          </div>

          {/* Mobile */}
          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            className="
          flex
          h-9
          w-9
          items-center
          justify-center
          rounded-[var(--pulse-radius-md)]
          border
          border-border
          text-text-primary
          lg:hidden
        "
          >
            {mobileOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </nav>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div
          className="
        border-t
        border-border
        bg-surface
        lg:hidden
      "
        >
          <div className="mx-auto max-w-[var(--pulse-container-xl)] px-4 py-4">
            <div className="space-y-1">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => handleNavClick(item.href)}
                  className="
                block
                rounded-[var(--pulse-radius-md)]
                px-3
                py-2.5
                text-sm
                font-medium
                text-text-secondary
                hover:bg-surface-hover
                hover:text-text-primary
              "
                >
                  {item.label}
                </a>
              ))}
            </div>

            <div className="my-3 h-px bg-border" />

            <a
              href="/login"
              className="
            block
            rounded-[var(--pulse-radius-md)]
            px-3
            py-2.5
            text-sm
            font-medium
            text-text-secondary
          "
            >
              Log in
            </a>

            <a
              href="/dashboard"
              className="
            mt-2
            flex
            items-center
            justify-center
            gap-2
            rounded-[var(--pulse-radius-md)]
            bg-primary
            px-4
            py-3
            text-sm
            font-semibold
            text-primary-foreground
          "
            >
              Get started
              <ArrowRight size={15} />
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
