import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

import { useUsersChart } from "../../hooks/queries/useUsersChart";

const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun"];

const UsersChart = () => {
  const { data, isLoading, isError } = useUsersChart();

  if (isLoading) {
    return (
      <div
        className="
          h-[360px]
          animate-pulse
          rounded-2xl
          border
          border-border
          bg-surface
        "
      />
    );
  }

  if (isError) {
    return (
      <div
        className="
          flex
          h-[360px]
          items-center
          justify-center
          rounded-2xl
          border
          border-border
          bg-surface
        "
      >
        <p className="text-sm text-text-muted">Failed to load user data</p>
      </div>
    );
  }

  const users = data?.users ?? [];
  const totalUsers = data?.total ?? users.length;

  /*
   * DummyJSON doesn't provide historical user acquisition dates.
   * We distribute the available users across six buckets
   * for dashboard visualization.
   */
  const usersPerMonth = Math.ceil(users.length / MONTHS.length);

  let runningTotal = 0;

  const chartData = MONTHS.map((month, index) => {
    const start = index * usersPerMonth;
    const end = Math.min(start + usersPerMonth, users.length);

    runningTotal += end - start;

    return {
      month,
      users: runningTotal,
    };
  });

  // Make sure the final point represents the API total.
  if (chartData.length > 0) {
    chartData[chartData.length - 1].users = totalUsers;
  }

  return (
    <div
      className="
        w-full
        overflow-hidden
        rounded-2xl
        border border-border
        bg-surface
        p-4
        shadow-sm
        sm:p-5
      "
    >
      {/* Header */}
      <div
        className="
          mb-5
          flex
          flex-col
          gap-3
          sm:mb-6
          sm:flex-row
          sm:items-start
          sm:justify-between
        "
      >
        <div>
          <div className="flex items-center gap-2">
            <h2
              className="
                font-heading
                text-sm
                font-semibold
                tracking-tight
                text-text-primary
                sm:text-base
              "
            >
              User Growth
            </h2>

            <span
              className="
                rounded-full
                bg-success-soft
                px-2
                py-0.5
                text-[10px]
                font-semibold
                text-success
                sm:text-[11px]
              "
            >
              Growth
            </span>
          </div>

          <p
            className="
              mt-1
              text-[11px]
              leading-5
              text-text-muted
              sm:text-xs
            "
          >
            Total users acquired over the selected period
          </p>
        </div>

        {/* Total Users */}
        <div className="sm:text-right">
          <p
            className="
              text-[10px]
              font-medium
              uppercase
              tracking-wide
              text-text-muted
            "
          >
            Total Users
          </p>

          <p
            className="
              mt-0.5
              font-heading
              text-lg
              font-bold
              tracking-tight
              text-text-primary
              sm:text-xl
            "
          >
            {totalUsers.toLocaleString()}
          </p>
        </div>
      </div>

      {/* Chart */}
      <div
        className="
          h-[230px]
          w-full
          sm:h-[270px]
          lg:h-[300px]
        "
      >
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={chartData}
            margin={{
              top: 8,
              right: 4,
              left: -18,
              bottom: 0,
            }}
          >
            <CartesianGrid
              stroke="var(--pulse-chart-grid)"
              strokeDasharray="4 4"
              vertical={false}
              opacity={0.7}
            />

            <XAxis
              dataKey="month"
              axisLine={false}
              tickLine={false}
              tickMargin={10}
              minTickGap={18}
              tick={{
                fill: "var(--pulse-text-muted)",
                fontSize: 11,
                fontWeight: 500,
              }}
            />

            <YAxis
              axisLine={false}
              tickLine={false}
              width={48}
              tickMargin={4}
              tick={{
                fill: "var(--pulse-text-muted)",
                fontSize: 10,
                fontWeight: 500,
              }}
              tickFormatter={(value) =>
                value >= 1000 ? `${(value / 1000).toFixed(0)}k` : value
              }
            />

            <Tooltip
              cursor={{
                stroke: "var(--pulse-primary)",
                strokeWidth: 1,
                strokeDasharray: "4 4",
                opacity: 0.35,
              }}
              contentStyle={{
                border: "1px solid var(--pulse-border)",
                borderRadius: "12px",
                background: "var(--pulse-surface)",
                boxShadow: "var(--pulse-shadow-md)",
                padding: "10px 12px",
              }}
              labelStyle={{
                color: "var(--pulse-text-muted)",
                fontSize: "11px",
                fontWeight: 500,
                marginBottom: "4px",
              }}
              itemStyle={{
                color: "var(--pulse-text-primary)",
                fontSize: "12px",
                fontWeight: 600,
              }}
              formatter={(value) => [Number(value).toLocaleString(), "Users"]}
            />

            <Line
              type="monotone"
              dataKey="users"
              stroke="var(--pulse-chart-primary)"
              strokeWidth={2.5}
              dot={false}
              activeDot={{
                r: 5,
                fill: "var(--pulse-chart-primary)",
                stroke: "var(--pulse-surface)",
                strokeWidth: 3,
              }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default UsersChart;
