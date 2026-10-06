import {
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

const CustomerPagination = ({
  currentPage = 1,
  totalPages = 3,
  totalItems = 24,
  itemsPerPage = 10,
  onPageChange,
}) => {
  const startItem =
    totalItems === 0 ? 0 : (currentPage - 1) * itemsPerPage + 1;

  const endItem = Math.min(
    currentPage * itemsPerPage,
    totalItems
  );

  const getPageNumbers = () => {
    const pages = [];

    for (let page = 1; page <= totalPages; page++) {
      pages.push(page);
    }

    return pages;
  };

  return (
    <div
      className="
        flex
        flex-col
        gap-4
        border-t
        border-border-light
        px-4
        py-4
        sm:flex-row
        sm:items-center
        sm:justify-between
        sm:px-5
      "
    >
      {/* Result count */}
      <p className="text-xs text-text-muted">
        Showing{" "}
        <span className="font-semibold text-text-secondary">
          {startItem}–{endItem}
        </span>{" "}
        of{" "}
        <span className="font-semibold text-text-secondary">
          {totalItems}
        </span>{" "}
        customers
      </p>

      {/* Pagination */}
      <div className="flex items-center justify-between gap-2 sm:justify-end">
        {/* Previous */}
        <button
          type="button"
          disabled={currentPage === 1}
          onClick={() => onPageChange?.(currentPage - 1)}
          aria-label="Previous page"
          className="
            flex size-9
            items-center justify-center
            rounded-lg
            border border-border
            bg-surface
            text-text-muted
            transition-colors
            duration-150
            hover:bg-surface-hover
            hover:text-text-primary
            disabled:cursor-not-allowed
            disabled:opacity-40
          "
        >
          <ChevronLeft
            className="size-4"
            strokeWidth={1.8}
          />
        </button>

        {/* Page numbers */}
        <div className="flex items-center gap-1">
          {getPageNumbers().map((page) => {
            const isActive = page === currentPage;

            return (
              <button
                key={page}
                type="button"
                onClick={() => onPageChange?.(page)}
                aria-current={isActive ? "page" : undefined}
                className={`
                  flex size-9
                  items-center justify-center
                  rounded-lg
                  text-xs
                  font-semibold
                  transition-colors
                  duration-150
                  ${
                    isActive
                      ? "bg-primary text-primary-foreground shadow-sm"
                      : "text-text-secondary hover:bg-surface-hover hover:text-text-primary"
                  }
                `}
              >
                {page}
              </button>
            );
          })}
        </div>

        {/* Next */}
        <button
          type="button"
          disabled={currentPage === totalPages}
          onClick={() => onPageChange?.(currentPage + 1)}
          aria-label="Next page"
          className="
            flex size-9
            items-center justify-center
            rounded-lg
            border border-border
            bg-surface
            text-text-muted
            transition-colors
            duration-150
            hover:bg-surface-hover
            hover:text-text-primary
            disabled:cursor-not-allowed
            disabled:opacity-40
          "
        >
          <ChevronRight
            className="size-4"
            strokeWidth={1.8}
          />
        </button>
      </div>
    </div>
  );
};

export default CustomerPagination;