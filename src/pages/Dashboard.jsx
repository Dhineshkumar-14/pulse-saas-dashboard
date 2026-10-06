import ConversionCard from "../components/dashboard/ConversionCard";
import StatCard from "../components/dashboard/StatCard";

import OrdersChart from "../components/charts/OrdersChart";
import RevenueChart from "../components/charts/RevenueChart";
import UsersChart from "../components/charts/UsersChart";

import {
  ordersData,
  revenueData,
  stats,
  usersData,
} from "../data/dashboardData";

const Dashboard = () => {
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
        <RevenueChart data={revenueData} />

        <UsersChart data={usersData} />
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

        <OrdersChart data={ordersData} />
      </section>
    </div>
  );
};

export default Dashboard;
