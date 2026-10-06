import { Bell, Search, ChevronDown } from "lucide-react";

const Header = () => {
  return (
    <header className="sticky top-0 z-[var(--pulse-z-header)] flex h-16 items-center justify-between border-b border-header-border bg-header-background px-6">
      {/* Search */}
      <div className="flex items-center gap-3">
        <Search size={18} className="text-text-muted" />

        <input
          type="text"
          placeholder="Search..."
          className="w-64 bg-transparent text-sm outline-none placeholder:text-text-subtle"
        />
      </div>

      {/* Right */}
      <div className="flex items-center gap-4">
        <button className="relative rounded-md p-2 text-text-muted hover:bg-surface-hover">
          <Bell size={19} />

          <span className="absolute right-1.5 top-1.5 h-1.5 w-1.5 rounded-full bg-primary" />
        </button>

        <div className="h-6 w-px bg-border" />

        <button className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary-soft">
            <span className="text-sm font-semibold text-primary">D</span>
          </div>

          <div className="hidden text-left sm:block">
            <p className="text-sm font-semibold">Dhinu</p>

            <p className="text-xs text-text-muted">Admin</p>
          </div>

          <ChevronDown size={16} className="text-text-muted" />
        </button>
      </div>
    </header>
  );
};

export default Header;
