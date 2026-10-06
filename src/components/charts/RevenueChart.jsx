import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

const RevenueChart = ({ data = [] }) => {
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
              Revenue Overview
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
              +12.5%
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
            Revenue performance over the selected period
          </p>
        </div>

        {/* Current Revenue */}
        <div className="sm:text-right">
          <p className="text-[10px] font-medium uppercase tracking-wide text-text-muted">
            Total Revenue
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
            $128,450
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
          <AreaChart
            data={data}
            margin={{
              top: 8,
              right: 4,
              left: -18,
              bottom: 0,
            }}
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
              tickFormatter={(value) => `$${value / 1000}k`}
            />

            {/* Tooltip */}
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
              formatter={(value) => [
                `$${Number(value).toLocaleString()}`,
                "Revenue",
              ]}
            />

            {/* Gradient */}
            <defs>
              <linearGradient id="revenueGradient" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="0%"
                  stopColor="var(--pulse-primary)"
                  stopOpacity={0.22}
                />

                <stop
                  offset="100%"
                  stopColor="var(--pulse-primary)"
                  stopOpacity={0}
                />
              </linearGradient>
            </defs>

            {/* Revenue Area */}
            <Area
              type="monotone"
              dataKey="revenue"
              stroke="var(--pulse-chart-primary)"
              fill="url(#revenueGradient)"
              strokeWidth={2.5}
              activeDot={{
                r: 5,
                fill: "var(--pulse-chart-primary)",
                stroke: "var(--pulse-surface)",
                strokeWidth: 3,
              }}
              dot={false}
            />
          </AreaChart>
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
        <span className="text-[10px] text-text-muted sm:text-xs">
          Jan — Jun 2026
        </span>

        <div className="flex items-center gap-1.5">
          <span className="size-1.5 rounded-full bg-primary" />

          <span className="text-[10px] font-medium text-text-muted sm:text-xs">
            Revenue
          </span>
        </div>
      </div>
    </div>
  );
};

export default RevenueChart;
