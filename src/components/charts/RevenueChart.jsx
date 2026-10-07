import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

import { useRevenueChart } from "../../hooks/queries/useRevenueChart";

const MONTHS = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

const RevenueChart = () => {
  const { data, isLoading, isError } = useRevenueChart();

  if (isLoading) {
    return (
      <div
        className="
          h-[360px]
          animate-pulse
          rounded-2xl
          border border-border
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
          border border-border
          bg-surface
        "
      >
        <p className="text-sm text-text-muted">Failed to load revenue data</p>
      </div>
    );
  }

  const carts = data?.carts ?? [];

  /*
   * DummyJSON does not provide order dates.
   * We distribute the available cart revenue across
   * 12 monthly buckets for dashboard visualization.
   */
  const monthlyRevenue = MONTHS.map((month, index) => {
    const monthCarts = carts.filter(
      (_, cartIndex) => cartIndex % MONTHS.length === index,
    );

    const revenue = monthCarts.reduce(
      (total, cart) => total + (cart.discountedTotal || 0),
      0,
    );

    return {
      month,
      revenue,
    };
  });

  return (
    <div
      className="
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
      <div className="mb-6">
        <h3 className="text-sm font-semibold text-text-primary">Revenue</h3>

        <p className="mt-1 text-xs text-text-muted">
          Revenue generated from orders
        </p>
      </div>

      {/* Chart */}
      <div className="h-[280px]">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            data={monthlyRevenue}
            margin={{
              top: 10,
              right: 10,
              left: 5,
              bottom: 0,
            }}
          >
            <defs>
              <linearGradient id="revenueGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopOpacity={0.2} />

                <stop offset="100%" stopOpacity={0} />
              </linearGradient>
            </defs>

            <CartesianGrid strokeDasharray="3 3" vertical={false} />

            <XAxis
              dataKey="month"
              axisLine={false}
              tickLine={false}
              tick={{
                fontSize: 11,
              }}
            />

            <YAxis
              axisLine={false}
              tickLine={false}
              tick={{
                fontSize: 11,
              }}
              tickFormatter={(value) => {
                if (value >= 1000) {
                  return `₹${Math.round(value / 1000)}K`;
                }

                return `₹${value}`;
              }}
            />

            <Tooltip
              cursor={{
                strokeDasharray: "4 4",
              }}
              formatter={(value) => [
                `₹${Number(value).toLocaleString("en-IN")}`,
                "Revenue",
              ]}
              labelFormatter={(label) => `${label} revenue`}
            />

            <Area
              type="monotone"
              dataKey="revenue"
              strokeWidth={2}
              fill="url(#revenueGradient)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default RevenueChart;
