import { LayoutDashboard, Users, CreditCard, Settings } from "lucide-react";
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
    end: true,
  },
];

const Sidebar = () => {
  return (
    <aside
      className="
        fixed inset-x-0 bottom-0 z-sidebar
        flex h-16 w-full flex-row
        border-t border-sidebar-border
        bg-sidebar-background

        md:inset-y-0 md:left-0 md:right-auto
        md:h-screen md:w-64
        md:flex-col
        md:border-r md:border-t-0
      "
    >
      {/* Logo */}
      <div
        className="
          hidden h-16 shrink-0
          items-center
          border-b border-sidebar-border
          px-6
          md:flex
        "
      >
        <div className="flex items-center gap-3">
          <div
            className="
              flex size-8 shrink-0 items-center justify-center
              rounded-lg
              bg-primary
            "
          >
            <span className="text-sm font-bold text-primary-foreground">P</span>
          </div>

          <span className="font-heading text-xl font-bold text-text-primary">
            Pulse
          </span>
        </div>
      </div>

      {/* Navigation */}
      <nav
        className="
          flex flex-1 items-center justify-around
          gap-1 px-2

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
                  flex flex-1 flex-col
                  items-center justify-center
                  gap-1
                  rounded-md
                  px-2 py-2
                  text-[10px] font-medium
                  text-sidebar-text
                  transition-colors duration-200

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
                      ? "bg-sidebar-active text-sidebar-text-active hover:bg-sidebar-active hover:text-sidebar-text-active"
                      : ""
                  }
                `
            }
          >
            <Icon className="size-[18px] shrink-0" strokeWidth={1.8} />

            <span>{label}</span>
          </NavLink>
        ))}
      </nav>

      {/* Settings */}
      <div
        className="
          hidden
          border-t border-sidebar-border
          p-4
          md:block
        "
      >
        <NavLink
          to="/dashboard/settings"
          end
          className={({ isActive }) =>
            `
              flex items-center gap-3
              rounded-md
              px-3 py-2.5
              text-sm font-medium
              text-sidebar-text
              transition-colors duration-200

              hover:bg-surface-hover
              hover:text-text-primary

              ${isActive ? "bg-sidebar-active text-sidebar-text-active" : ""}
            `
          }
        >
          <Settings className="size-[18px] shrink-0" strokeWidth={1.8} />

          <span>Settings</span>
        </NavLink>
      </div>
    </aside>
  );
};

export default Sidebar;
