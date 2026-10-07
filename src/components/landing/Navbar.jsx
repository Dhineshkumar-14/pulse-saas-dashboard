import { useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";

const navItems = [
  {
    label: "Product",
  },
  {
    label: "Solutions",
  },
  {
    label: "How it works",
  },
  {
    label: "Pricing",
  },
  {
    label: "Resources",
  },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileDropdown, setMobileDropdown] = useState(null);

  const toggleMobileDropdown = (label) => {
    setMobileDropdown(mobileDropdown === label ? null : label);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/90 backdrop-blur-xl">
      <div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <a href="/" className="flex shrink-0 items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-foreground">
            <span className="text-sm font-bold text-background">P</span>
          </div>

          <span className="text-lg font-bold tracking-tight text-foreground sm:text-xl">
            PULSE
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-6 lg:flex xl:gap-8">
          {navItems.map((item) => (
            <div key={item.label} className="group relative">
              <a
                href={`#${item.label.toLowerCase().replace(/\s+/g, "-")}`}
                className="
                  flex
                  items-center
                  gap-1.5
                  whitespace-nowrap
                  text-sm
                  font-medium
                  text-muted-foreground
                  transition-colors
                  duration-200
                  hover:text-foreground
                "
              >
                {item.label}

                {item.dropdown && (
                  <ChevronDown
                    size={15}
                    strokeWidth={1.8}
                    className="
                      transition-transform
                      duration-200
                      group-hover:rotate-180
                    "
                  />
                )}
              </a>

              {/* Desktop Dropdown */}
              {item.dropdown && (
                <div
                  className="
                    invisible
                    absolute
                    left-1/2
                    top-full
                    mt-3
                    w-56
                    -translate-x-1/2
                    translate-y-2
                    rounded-xl
                    border
                    border-border
                    bg-background
                    p-2
                    opacity-0
                    shadow-lg
                    transition-all
                    duration-200
                    group-hover:visible
                    group-hover:translate-y-0
                    group-hover:opacity-100
                  "
                >
                  {item.dropdown.map((dropdownItem) => (
                    <a
                      key={dropdownItem}
                      href="#"
                      className="
                        block
                        rounded-lg
                        px-3
                        py-2.5
                        text-sm
                        text-muted-foreground
                        transition-colors
                        hover:bg-muted
                        hover:text-foreground
                      "
                    >
                      {dropdownItem}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden items-center gap-2 lg:flex">
          <a
            href="/login"
            className="
              rounded-lg
              px-4
              py-2
              text-sm
              font-medium
              text-muted-foreground
              transition-colors
              hover:text-foreground
            "
          >
            Log in
          </a>

          <a
            href="/dashboard"
            className="
              rounded-lg
              bg-primary
              px-4
              py-2.5
              text-sm
              font-semibold
              text-primary-foreground
              shadow-sm
              transition-all
              hover:bg-primary/90
              hover:shadow-md
            "
          >
            Get Started
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setMobileOpen(!mobileOpen)}
          className="
            flex
            h-9
            w-9
            items-center
            justify-center
            rounded-lg
            text-muted-foreground
            transition-colors
            hover:bg-muted
            hover:text-foreground
            lg:hidden
          "
          aria-label="Toggle navigation"
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X size={21} /> : <Menu size={21} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`
          overflow-hidden
          border-t
          border-border
          bg-background
          transition-all
          duration-300
          lg:hidden
          ${mobileOpen ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"}
        `}
      >
        <nav className="mx-auto flex max-w-7xl flex-col px-4 py-4 sm:px-6">
          {navItems.map((item) => (
            <div key={item.label}>
              {/* Mobile Menu Item */}
              <button
                type="button"
                onClick={() =>
                  item.dropdown
                    ? toggleMobileDropdown(item.label)
                    : setMobileOpen(false)
                }
                className="
                  flex
                  w-full
                  items-center
                  justify-between
                  rounded-lg
                  px-3
                  py-3
                  text-left
                  text-sm
                  font-medium
                  text-muted-foreground
                  transition-colors
                  hover:bg-muted
                  hover:text-foreground
                "
              >
                {item.label}

                {item.dropdown && (
                  <ChevronDown
                    size={16}
                    className={`
                      transition-transform
                      duration-200
                      ${mobileDropdown === item.label ? "rotate-180" : ""}
                    `}
                  />
                )}
              </button>

              {/* Mobile Dropdown */}
              {item.dropdown && mobileDropdown === item.label && (
                <div className="mb-2 ml-3 border-l border-border pl-3">
                  {item.dropdown.map((dropdownItem) => (
                    <a
                      key={dropdownItem}
                      href="#"
                      onClick={() => setMobileOpen(false)}
                      className="
                          block
                          rounded-lg
                          px-3
                          py-2.5
                          text-sm
                          text-muted-foreground
                          transition-colors
                          hover:bg-muted
                          hover:text-foreground
                        "
                    >
                      {dropdownItem}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}

          {/* Mobile Actions */}
          <div className="mt-3 flex flex-col gap-2 border-t border-border pt-4">
            <a
              href="/login"
              onClick={() => setMobileOpen(false)}
              className="
                rounded-lg
                px-4
                py-3
                text-center
                text-sm
                font-medium
                text-muted-foreground
                transition-colors
                hover:bg-muted
                hover:text-foreground
              "
            >
              Log in
            </a>

            <a
              href="/dashboard"
              onClick={() => setMobileOpen(false)}
              className="
                rounded-lg
                bg-primary
                px-4
                py-3
                text-center
                text-sm
                font-semibold
                text-primary-foreground
                transition-all
                hover:bg-primary/90
              "
            >
              Get Started
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
