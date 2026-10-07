import {
  LayoutDashboard,
  Users,
  CreditCard,
  Settings,
  BarChart3,
  FileText,
} from "lucide-react";
import { NavLink } from "react-router-dom";

const navigationItems = [
  {
    label: "Dashboard",
    path: "/dashboard",
    icon: LayoutDashboard,
    end: true,
  },
  {
    label: "Customers",
    path: "/dashboard/customers",
    icon: Users,
  },
  {
    label: "Revenue",
    path: "/dashboard/revenue",
    icon: BarChart3,
  },
  {
    label: "Orders",
    path: "/dashboard/orders",
    icon: FileText,
  },
];

const Sidebar = () => {
  return (
    <aside
      className="
        fixed
        inset-x-0
        bottom-0
        z-sidebar
        flex
        h-16
        w-full
        flex-row
        border-t
        border-sidebar-border
        bg-sidebar-background

        md:inset-y-0
        md:left-0
        md:right-auto
        md:h-screen
        md:w-64
        md:flex-col
        md:border-r
        md:border-t-0
      "
    >
      {/* Logo */}
      <div
        className="
          hidden
          h-16
          shrink-0
          items-center
          border-b
          border-sidebar-border
          px-6
          md:flex
        "
      >
        <NavLink to="/" className="flex items-center gap-3">
          <div
            className="
              flex
              h-8
              w-8
              shrink-0
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
              text-xl
              font-bold
              tracking-tight
              text-text-primary
            "
          >
            Pulse
          </span>
        </NavLink>
      </div>

      {/* Navigation */}
      <nav
        className="
          flex
          flex-1
          items-center
          justify-around
          gap-1
          px-2

          md:flex-col
          md:items-stretch
          md:justify-start
          md:gap-1
          md:p-4
        "
      >
        {navigationItems.map(({ label, path, icon: Icon, end }) => (
          <NavLink
            key={path}
            to={path}
            end={end}
            className={({ isActive }) =>
              `
                  flex
                  flex-1
                  flex-col
                  items-center
                  justify-center
                  gap-1
                  rounded-[var(--pulse-radius-md)]
                  px-2
                  py-2
                  text-[10px]
                  font-medium
                  text-sidebar-text
                  transition-all
                  duration-[var(--pulse-transition-fast)]

                  hover:bg-surface-hover
                  hover:text-text-primary

                  md:flex-none
                  md:flex-row
                  md:justify-start
                  md:gap-3
                  md:px-3
                  md:py-2.5
                  md:text-sm

                  ${
                    isActive
                      ? `
                        bg-sidebar-active
                        text-sidebar-text-active
                        hover:bg-sidebar-active
                        hover:text-sidebar-text-active
                      `
                      : ""
                  }
                `
            }
          >
            <Icon className="h-[18px] w-[18px] shrink-0" strokeWidth={1.8} />

            <span>{label}</span>
          </NavLink>
        ))}
      </nav>

      {/* Settings */}
      <div
        className="
          hidden
          border-t
          border-sidebar-border
          p-4
          md:block
        "
      >
        <NavLink
          to="/dashboard/settings"
          className={({ isActive }) =>
            `
              flex
              items-center
              gap-3
              rounded-[var(--pulse-radius-md)]
              px-3
              py-2.5
              text-sm
              font-medium
              text-sidebar-text
              transition-all
              duration-[var(--pulse-transition-fast)]

              hover:bg-surface-hover
              hover:text-text-primary

              ${
                isActive
                  ? `
                    bg-sidebar-active
                    text-sidebar-text-active
                  `
                  : ""
              }
            `
          }
        >
          <Settings className="h-[18px] w-[18px] shrink-0" strokeWidth={1.8} />

          <span>Settings</span>
        </NavLink>
      </div>
    </aside>
  );
};

export default Sidebar;
