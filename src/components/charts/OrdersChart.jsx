import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

const OrdersChart = ({ data = [] }) => {
  return (
    <div
      className="
        group
        w-full
        overflow-hidden
        rounded-2xl
        border border-border
        bg-surface
        p-4
        shadow-sm
        transition-all
        duration-200
        hover:shadow-md
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
              Orders Overview
            </h2>

            <span
              className="
                rounded-full
                bg-primary-soft
                px-2
                py-0.5
                text-[10px]
                font-semibold
                text-primary
                sm:text-[11px]
              "
            >
              +9.7%
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
            Order volume over the selected period
          </p>
        </div>

        {/* Total Orders */}
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
            Total Orders
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
            3,642
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
          <BarChart
            data={data}
            margin={{
              top: 8,
              right: 4,
              left: -18,
              bottom: 0,
            }}
            barCategoryGap="28%"
          >
            {/* Grid */}
            <CartesianGrid
              stroke="var(--pulse-chart-grid)"
              strokeDasharray="4 4"
              vertical={false}
              opacity={0.7}
            />

            {/* X Axis */}
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

            {/* Y Axis */}
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
                value >= 1000 ? `${(value / 1000).toFixed(1)}k` : value
              }
            />

            {/* Tooltip */}
            <Tooltip
              cursor={{
                fill: "var(--pulse-primary-soft)",
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
              formatter={(value) => [Number(value).toLocaleString(), "Orders"]}
            />

            {/* Orders */}
            <Bar
              dataKey="orders"
              fill="var(--pulse-chart-primary)"
              radius={[6, 6, 2, 2]}
              maxBarSize={42}
              animationDuration={800}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Footer */}
      <div
        className="
          mt-3
          flex
          items-center
          justify-between
          border-t
          border-border-light
          pt-3
        "
      >
        <span
          className="
            text-[10px]
            text-text-muted
            sm:text-xs
          "
        >
          Jan — Jun 2026
        </span>

        <div className="flex items-center gap-1.5">
          <span className="size-1.5 rounded-full bg-primary" />

          <span
            className="
              text-[10px]
              font-medium
              text-text-muted
              sm:text-xs
            "
          >
            Orders
          </span>
        </div>
      </div>
    </div>
  );
};

export default OrdersChart;
