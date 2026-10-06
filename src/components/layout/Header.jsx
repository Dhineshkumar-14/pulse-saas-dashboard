import { Bell, ChevronDown, Sparkles } from "lucide-react";

const getGreeting = () => {
  const hour = new Date().getHours();

  if (hour < 12) return "Good morning";
  if (hour < 18) return "Good afternoon";

  return "Good evening";
};

const Header = () => {
  const greeting = getGreeting();

  return (
    <header className="sticky top-0 z-[var(--pulse-z-header)] flex h-18 items-center justify-between border-b border-header-border bg-header-background px-6">
      {/* Greeting */}
      <div className="flex items-center gap-3">
        <div className="flex size-10 items-center justify-center rounded-full bg-primary-soft">
          <Sparkles size={18} className="text-primary" strokeWidth={1.8} />
        </div>

        <div>
          <p className="text-xs font-medium text-text-muted">{greeting}</p>

          <h1 className="font-heading text-sm font-semibold text-text-primary">
            Welcome back, Dhinesh
          </h1>
        </div>
      </div>

      {/* Actions */}
      <div className="flex items-center gap-3">
        {/* Notification */}
        <button
          type="button"
          aria-label="Notifications"
          className="group relative flex size-9 items-center justify-center rounded-lg border border-border bg-surface text-text-muted transition-colors duration-200 hover:border-border-hover hover:bg-surface-hover hover:text-text-primary"
        >
          <Bell size={18} strokeWidth={1.8} />

          <span className="absolute right-2 top-2 size-1.5 rounded-full bg-primary" />
        </button>

        {/* Divider */}
        <div className="mx-1 h-6 w-px bg-border" />

        {/* Profile */}
        <button
          type="button"
          className="group flex items-center gap-2 rounded-lg px-2 py-1.5 transition-colors duration-200 hover:bg-surface-hover"
        >
          {/* Avatar */}
          <div className="flex size-9 items-center justify-center rounded-full bg-primary-soft">
            <span className="text-sm font-semibold text-primary">D</span>
          </div>

          {/* User info */}
          <div className="hidden text-left sm:block">
            <p className="text-sm font-semibold leading-4 text-text-primary">
              Dhinesh
            </p>

            <p className="mt-1 text-xs text-text-muted">Admin</p>
          </div>
        </button>
      </div>
    </header>
  );
};

export default Header;
