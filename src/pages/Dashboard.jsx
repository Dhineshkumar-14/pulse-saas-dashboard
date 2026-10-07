import ConversionCard from "../components/dashboard/ConversionCard";
import StatCard from "../components/dashboard/StatCard";

import OrdersChart from "../components/charts/OrdersChart";
import RevenueChart from "../components/charts/RevenueChart";
import UsersChart from "../components/charts/UsersChart";

import { useDashboardStats } from "../hooks/queries/useDashboardStats";

const Dashboard = () => {
  const { data, isLoading, isError, error } = useDashboardStats();

  if (isLoading) {
    return (
      <div className="w-full">
        <div
          className="
            grid
            grid-cols-1
            gap-4
            sm:grid-cols-2
            xl:grid-cols-4
          "
        >
          {[1, 2, 3, 4].map((item) => (
            <div
              key={item}
              className="
                h-[155px]
                animate-pulse
                rounded-2xl
                border
                border-border
                bg-surface
              "
            />
          ))}
        </div>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="flex min-h-[300px] items-center justify-center">
        <div className="text-center">
          <p className="text-sm font-semibold text-error">
            Failed to load dashboard
          </p>

          <p className="mt-1 text-xs text-text-muted">
            {error?.message || "Something went wrong."}
          </p>
        </div>
      </div>
    );
  }

  const stats = [
    {
      id: "revenue",
      title: "Revenue",
      value: `₹${data.revenue.toLocaleString("en-IN")}`,
      change: "+12.5%",
      trend: "up",
    },
    {
      id: "users",
      title: "Users",
      value: data.users.toLocaleString(),
      change: "+8.2%",
      trend: "up",
    },
    {
      id: "orders",
      title: "Orders",
      value: data.orders.toLocaleString(),
      change: "+5.4%",
      trend: "down",
    },
    {
      id: "conversion",
      title: "Conversion",
      value: data.conversion,
      change: "1.2%",
      trend: "up",
    },
  ];

  return (
    <div className="w-full">
      {/* KPI Cards */}
      <section
        className="
          grid
          grid-cols-1
          gap-4
          sm:grid-cols-2
          xl:grid-cols-4
        "
      >
        {stats.map((stat) => (
          <StatCard key={stat.id} {...stat} />
        ))}
      </section>

      {/* Analytics Charts */}
      <section
        className="
          mt-6
          grid
          grid-cols-1
          gap-6
          xl:grid-cols-2
        "
      >
        <RevenueChart />

        <UsersChart />
      </section>

      {/* Conversion + Orders */}
      <section
        className="
          mt-6
          grid
          grid-cols-1
          gap-6
          xl:grid-cols-2
        "
      >
        <ConversionCard />

        <OrdersChart />
      </section>
    </div>
  );
};

export default Dashboard;
