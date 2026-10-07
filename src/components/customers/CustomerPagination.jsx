import { ChevronLeft, ChevronRight, MoreHorizontal } from "lucide-react";

const CustomerPagination = ({
  currentPage = 1,
  totalPages = 1,
  totalItems = 0,
  itemsPerPage = 10,
  onPageChange,
}) => {
  const startItem = totalItems === 0 ? 0 : (currentPage - 1) * itemsPerPage + 1;

  const endItem = Math.min(currentPage * itemsPerPage, totalItems);

  const getPageNumbers = () => {
    // Small number of pages → show everything
    if (totalPages <= 7) {
      return Array.from({ length: totalPages }, (_, index) => index + 1);
    }

    // Near beginning
    if (currentPage <= 4) {
      return [1, 2, 3, 4, 5, "ellipsis-right", totalPages];
    }

    // Near end
    if (currentPage >= totalPages - 3) {
      return [
        1,
        "ellipsis-left",
        totalPages - 4,
        totalPages - 3,
        totalPages - 2,
        totalPages - 1,
        totalPages,
      ];
    }

    // Middle
    return [
      1,
      "ellipsis-left",
      currentPage - 1,
      currentPage,
      currentPage + 1,
      "ellipsis-right",
      totalPages,
    ];
  };

  const pages = getPageNumbers();

  const goToPage = (page) => {
    if (page < 1 || page > totalPages || page === currentPage) {
      return;
    }

    onPageChange?.(page);
  };

  return (
    <div
      className="
        flex
        flex-col
        gap-3
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
      <p className="text-center text-xs text-text-muted sm:text-left">
        Showing{" "}
        <span className="font-semibold text-text-secondary">
          {startItem}–{endItem}
        </span>{" "}
        of{" "}
        <span className="font-semibold text-text-secondary">{totalItems}</span>{" "}
        customers
      </p>

      {/* Pagination */}
      <nav
        aria-label="Customer pagination"
        className="flex items-center justify-center"
      >
        <div className="flex items-center gap-1">
          {/* Previous */}
          <button
            type="button"
            disabled={currentPage === 1}
            onClick={() => goToPage(currentPage - 1)}
            aria-label="Previous page"
            className="
              flex size-9 shrink-0
              items-center justify-center
              rounded-lg
              border border-border
              bg-surface
              text-text-muted

              transition-all
              duration-150

              hover:border-border-hover
              hover:bg-surface-hover
              hover:text-text-primary

              focus:outline-none
              focus:ring-2
              focus:ring-primary-soft

              disabled:pointer-events-none
              disabled:opacity-40

              sm:size-9
            "
          >
            <ChevronLeft className="size-4" strokeWidth={1.8} />
          </button>

          {/* Page numbers */}
          <div className="hidden items-center gap-1 sm:flex">
            {pages.map((page, index) => {
              // Ellipsis
              if (typeof page !== "number") {
                return (
                  <span
                    key={`${page}-${index}`}
                    className="
                      flex size-9
                      items-center justify-center
                      text-text-muted
                    "
                    aria-hidden="true"
                  >
                    <MoreHorizontal className="size-4" strokeWidth={1.8} />
                  </span>
                );
              }

              const isActive = page === currentPage;

              return (
                <button
                  key={page}
                  type="button"
                  onClick={() => goToPage(page)}
                  aria-current={isActive ? "page" : undefined}
                  className={`
                    flex size-9
                    items-center justify-center
                    rounded-lg
                    text-xs
                    font-semibold
                    transition-all
                    duration-150

                    focus:outline-none
                    focus:ring-2
                    focus:ring-primary-soft

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

          {/* Mobile page indicator */}
          <div
            className="
              flex
              h-9
              min-w-[76px]
              items-center
              justify-center
              rounded-lg
              border
              border-border
              bg-surface
              px-3
              text-xs
              font-semibold
              text-text-secondary

              sm:hidden
            "
          >
            {currentPage}
            <span className="mx-1 text-text-muted">/</span>
            {totalPages}
          </div>

          {/* Next */}
          <button
            type="button"
            disabled={currentPage === totalPages || totalPages === 0}
            onClick={() => goToPage(currentPage + 1)}
            aria-label="Next page"
            className="
              flex size-9 shrink-0
              items-center justify-center
              rounded-lg
              border border-border
              bg-surface
              text-text-muted

              transition-all
              duration-150

              hover:border-border-hover
              hover:bg-surface-hover
              hover:text-text-primary

              focus:outline-none
              focus:ring-2
              focus:ring-primary-soft

              disabled:pointer-events-none
              disabled:opacity-40

              sm:size-9
            "
          >
            <ChevronRight className="size-4" strokeWidth={1.8} />
          </button>
        </div>
      </nav>
    </div>
  );
};

export default CustomerPagination;
