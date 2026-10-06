import { Search, SlidersHorizontal } from "lucide-react";

const CustomerFilters = () => {
  return (
    <div
      className="
        flex
        flex-col
        gap-3
        border-b
        border-border
        p-4
        sm:p-5
        lg:flex-row
        lg:items-center
        lg:justify-between
      "
    >
      {/* Search */}
      <div className="relative w-full lg:max-w-sm">
        <Search
          className="
            absolute
            left-3
            top-1/2
            size-4
            -translate-y-1/2
            text-text-muted
          "
        />

        <input
          type="text"
          placeholder="Search customers..."
          className="
            h-10
            w-full
            rounded-lg
            border
            border-border
            bg-surface
            pl-9
            pr-3
            text-sm
            text-text-primary
            outline-none
            placeholder:text-text-muted
            transition
            focus:border-border-focus
            focus:ring-2
            focus:ring-primary-soft
          "
        />
      </div>

      {/* Filters */}
      <div className="flex w-full gap-2 sm:w-auto">
        <button
          type="button"
          className="
            flex
            flex-1
            items-center
            justify-center
            gap-2
            rounded-lg
            border
            border-border
            bg-surface
            px-3
            py-2
            text-xs
            font-medium
            text-text-secondary
            transition
            hover:bg-surface-hover
            sm:flex-none
            sm:text-sm
          "
        >
          <SlidersHorizontal className="size-4" />
          Filter
        </button>

        <select
          className="
            flex-1
            rounded-lg
            border
            border-border
            bg-surface
            px-3
            py-2
            text-xs
            font-medium
            text-text-secondary
            outline-none
            transition
            focus:border-border-focus
            sm:flex-none
            sm:text-sm
          "
        >
          <option>Sort by</option>
          <option>Name</option>
          <option>Newest</option>
          <option>Highest Spent</option>
        </select>
      </div>
    </div>
  );
};

export default CustomerFilters;