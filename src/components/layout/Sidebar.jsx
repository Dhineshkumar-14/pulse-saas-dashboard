import { LayoutDashboard, Users, CreditCard, Settings } from "lucide-react";

const Sidebar = () => {
  return (
    <aside className="fixed inset-y-0 left-0 z-[var(--pulse-z-sidebar)] flex w-64 flex-col border-r border-sidebar-border bg-sidebar-background">
      {/* Logo */}
      <div className="flex h-16 items-center border-b border-sidebar-border px-6">
        <div className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
            <span className="text-sm font-bold text-primary-foreground">P</span>
          </div>

          <span className="font-heading text-xl font-bold">Pulse</span>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 space-y-1 p-4">
        <a
          href="/dashboard"
          className="flex items-center gap-3 rounded-md bg-sidebar-active px-3 py-2.5 text-sm font-medium text-sidebar-text-active"
        >
          <LayoutDashboard size={18} />
          Dashboard
        </a>

        <a
          href="/dashboard/transactions"
          className="flex items-center gap-3 rounded-md px-3 py-2.5 text-sm font-medium text-sidebar-text transition-colors hover:bg-surface-hover"
        >
          <CreditCard size={18} />
          Transactions
        </a>

        <a
          href="/dashboard/customers"
          className="flex items-center gap-3 rounded-md px-3 py-2.5 text-sm font-medium text-sidebar-text transition-colors hover:bg-surface-hover"
        >
          <Users size={18} />
          Customers
        </a>
      </nav>

      {/* Bottom */}
      <div className="border-t border-sidebar-border p-4">
        <a
          href="#"
          className="flex items-center gap-3 rounded-md px-3 py-2.5 text-sm font-medium text-sidebar-text hover:bg-surface-hover"
        >
          <Settings size={18} />
          Settings
        </a>
      </div>
    </aside>
  );
};

export default Sidebar;
