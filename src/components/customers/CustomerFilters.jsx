import {
  Search,
  SlidersHorizontal,
  X,
  ArrowUpDown,
  ChevronDown,
} from "lucide-react";

const CustomerFilters = ({
  search,
  hairColor,
  sortBy,
  onSearchChange,
  onHairColorChange,
  onSortChange,
  hasFilters,
  handleClearFilters,
}) => {
  return (
    <div
      className="
        border-b border-border
        p-4
        sm:p-5
      "
    >
      <div
        className="
          flex flex-col gap-3
          lg:flex-row
          lg:items-center
          lg:justify-between
        "
      >
        {/* Search */}
        <div className="relative w-full lg:max-w-md">
          <Search
            className="
              pointer-events-none
              absolute left-3 top-1/2
              size-4
              -translate-y-1/2
              text-text-muted
            "
            strokeWidth={1.8}
          />

          <input
            type="text"
            value={search}
            onChange={(event) => onSearchChange(event.target.value)}
            placeholder="Search customers..."
            className="
              h-10
              w-full
              rounded-lg
              border border-border
              bg-surface
              pl-9 pr-9
              text-sm
              text-text-primary
              outline-none
              placeholder:text-text-muted
              transition-all duration-150
              hover:border-border-hover
              focus:border-border-focus
              focus:ring-2
              focus:ring-primary-soft
            "
          />

          {search && (
            <button
              type="button"
              onClick={() => onSearchChange("")}
              aria-label="Clear search"
              className="
                absolute right-2 top-1/2
                flex size-6
                -translate-y-1/2
                items-center justify-center
                rounded-md
                text-text-muted
                transition-colors
                hover:bg-surface-hover
                hover:text-text-primary
              "
            >
              <X className="size-3.5" strokeWidth={2} />
            </button>
          )}
        </div>

        {/* Controls */}
        <div
          className="
            grid
            grid-cols-1
            gap-2
            sm:grid-cols-[minmax(140px,1fr)_minmax(155px,1fr)_auto]
            lg:flex
            lg:w-auto
            lg:items-center
          "
        >
          {/* Hair Color Filter */}
          <div className="relative w-full sm:min-w-[140px]">
            <SlidersHorizontal
              className="
                pointer-events-none
                absolute left-3 top-1/2
                z-10
                size-3.5
                -translate-y-1/2
                text-text-muted
              "
              strokeWidth={1.8}
            />

            <select
              value={hairColor}
              onChange={(event) => onHairColorChange(event.target.value)}
              className="
                h-10
                w-full
                appearance-none
                rounded-lg
                border border-border
                bg-surface
                pl-9 pr-9
                text-sm
                font-medium
                text-text-secondary
                outline-none
                transition-all duration-150
                cursor-pointer

                hover:border-border-hover
                hover:bg-surface-hover

                focus:border-border-focus
                focus:ring-2
                focus:ring-primary-soft

                [&>option]:bg-surface
                [&>option]:text-text-primary
              "
            >
              <option value="all">All hair colors</option>
              <option value="Brown">Brown</option>
              <option value="Black">Black</option>
              <option value="Blond">Blond</option>
              <option value="Red">Red</option>
              <option value="White">White</option>
            </select>

            <ChevronDown
              className="
                pointer-events-none
                absolute right-3 top-1/2
                size-3.5
                -translate-y-1/2
                text-text-muted
              "
              strokeWidth={2}
            />
          </div>

          {/* Sort */}
          <div className="relative w-full sm:min-w-[155px]">
            <ArrowUpDown
              className="
                pointer-events-none
                absolute left-3 top-1/2
                z-10
                size-3.5
                -translate-y-1/2
                text-text-muted
              "
              strokeWidth={1.8}
            />

            <select
              value={sortBy}
              onChange={(event) => onSortChange(event.target.value)}
              className="
                h-10
                w-full
                appearance-none
                rounded-lg
                border border-border
                bg-surface
                pl-9 pr-9
                text-sm
                font-medium
                text-text-secondary
                outline-none
                transition-all duration-150
                cursor-pointer

                hover:border-border-hover
                hover:bg-surface-hover

                focus:border-border-focus
                focus:ring-2
                focus:ring-primary-soft

                [&>option]:bg-surface
                [&>option]:text-text-primary
              "
            >
              <option value="default">Sort by</option>
              <option value="name-asc">Name A–Z</option>
              <option value="name-desc">Name Z–A</option>
              <option value="age-asc">Age: Low → High</option>
              <option value="age-desc">Age: High → Low</option>
            </select>

            <ChevronDown
              className="
                pointer-events-none
                absolute right-3 top-1/2
                size-3.5
                -translate-y-1/2
                text-text-muted
              "
              strokeWidth={2}
            />
          </div>

          {/* Clear */}
          {hasFilters && (
            <button
              type="button"
              onClick={handleClearFilters}
              className="
                inline-flex
                h-10
                w-full
                items-center
                justify-center
                gap-1.5
                rounded-lg
                border border-border
                bg-surface
                px-3
                text-sm
                font-semibold
                text-text-secondary
                transition-all duration-150
                hover:border-border-hover
                hover:bg-surface-hover
                hover:text-text-primary
                sm:w-auto
              "
            >
              <X className="size-3.5" strokeWidth={2} />
              <span>Clear</span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default CustomerFilters;
