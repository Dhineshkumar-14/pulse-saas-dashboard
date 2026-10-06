import {
  ArrowUpRight,
  ArrowDownRight,
  DollarSign,
  Users,
  ShoppingCart,
  Percent,
} from "lucide-react";

const icons = {
  revenue: DollarSign,
  users: Users,
  conversion: Percent,
  orders: ShoppingCart,
};

const StatCard = ({ id, title, value, change, trend }) => {
  const Icon = icons[id];
  const isPositive = trend === "up";

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
        hover:-translate-y-0.5
        hover:shadow-md
        sm:p-5
      "
    >
      {/* Top */}
      <div className="flex items-start justify-between gap-4">
        <div className="min-w-0">
          <p
            className="
              text-[11px]
              font-medium
              text-text-muted
              sm:text-xs
            "
          >
            {title}
          </p>

          <h2
            className="
              mt-2
              truncate
              font-heading
              text-2xl
              font-bold
              tracking-tight
              text-text-primary
              sm:text-[26px]
            "
          >
            {value}
          </h2>
        </div>

        {/* Icon */}
        <div
          className="
            flex
            size-10
            shrink-0
            items-center
            justify-center
            rounded-xl
            bg-primary-soft
            text-primary
            transition-transform
            duration-200
            group-hover:scale-105
            sm:size-11
          "
        >
          <Icon className="size-[18px] sm:size-[19px]" strokeWidth={1.8} />
        </div>
      </div>

      {/* Divider */}
      <div className="my-4 h-px bg-border-light" />

      {/* Growth */}
      <div className="flex flex-wrap items-center gap-1.5">
        <div
          className={`
            flex
            items-center
            gap-0.5
            rounded-md
            px-1.5
            py-1
            ${
              isPositive
                ? "bg-success-soft text-success"
                : "bg-error-soft text-error"
            }
          `}
        >
          {isPositive ? (
            <ArrowUpRight className="size-3.5" strokeWidth={2} />
          ) : (
            <ArrowDownRight className="size-3.5" strokeWidth={2} />
          )}

          <span className="text-[11px] font-semibold sm:text-xs">{change}</span>
        </div>

        <span className="text-[10px] text-text-muted sm:text-xs">
          vs last month
        </span>
      </div>
    </div>
  );
};

export default StatCard;
