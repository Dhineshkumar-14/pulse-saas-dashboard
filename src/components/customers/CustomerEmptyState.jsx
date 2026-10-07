import { SearchX, Users, X } from "lucide-react";

const CustomerEmptyState = ({ hasFilters = false, onClearFilters }) => {
  return (
    <div
      className="
        flex
        min-h-[300px]
        flex-col
        items-center
        justify-center
        px-6
        py-10
        text-center
      "
    >
      {/* Icon */}
      <div
        className="
          flex
          size-12
          items-center
          justify-center
          rounded-full
          bg-surface-muted
          text-text-muted
        "
      >
        {hasFilters ? (
          <SearchX className="size-5" strokeWidth={1.8} />
        ) : (
          <Users className="size-5" strokeWidth={1.8} />
        )}
      </div>

      {/* Title */}
      <p className="mt-4 text-sm font-semibold text-text-primary">
        {hasFilters ? "No customers found" : "No customers available"}
      </p>

      {/* Description */}
      <p className="mt-1 max-w-sm text-xs leading-5 text-text-muted">
        {hasFilters
          ? "No customers match your current search or filters. Try adjusting your filters."
          : "There are no customers to display right now."}
      </p>

      {/* Clear filters */}
      {hasFilters && (
        <button
          type="button"
          onClick={onClearFilters}
          className="
            mt-4
            inline-flex
            h-9
            items-center
            justify-center
            gap-1.5
            rounded-lg
            border
            border-border
            bg-surface
            px-3.5
            text-xs
            font-semibold
            text-text-secondary
            transition-all
            duration-150
            hover:border-border-hover
            hover:bg-surface-hover
            hover:text-text-primary
            focus:outline-none
            focus:ring-2
            focus:ring-primary-soft
          "
        >
          <X className="size-3.5" strokeWidth={2} />
          Clear filters
        </button>
      )}
    </div>
  );
};

export default CustomerEmptyState;
