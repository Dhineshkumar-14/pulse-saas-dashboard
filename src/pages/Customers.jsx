import { useState } from "react";

import CustomerHeader from "../components/customers/CustomerHeader";
import CustomerFilters from "../components/customers/CustomerFilters";
import CustomerTable from "../components/customers/CustomerTable";
import CustomerPagination from "../components/customers/CustomerPagination";

import { useCustomers } from "../hooks/queries/useCustomers";

const ITEMS_PER_PAGE = 5;

const Customers = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const skip = (currentPage - 1) * ITEMS_PER_PAGE;

  const { data, isLoading, isError, error } = useCustomers({
    limit: ITEMS_PER_PAGE,
    skip,
  });

  const customers = data?.users ?? [];
  const totalItems = data?.total ?? 0;

  const totalPages = Math.ceil(totalItems / ITEMS_PER_PAGE);

  return (
    <div className="w-full">
      <CustomerHeader />

      <div
        className="
          mt-6
          overflow-hidden
          rounded-2xl
          border border-border
          bg-surface
          shadow-sm
        "
      >
        <CustomerFilters />

        {/* Loading */}
        {isLoading && (
          <div className="flex min-h-[300px] items-center justify-center">
            <p className="text-sm text-text-muted">Loading customers...</p>
          </div>
        )}

        {/* Error */}
        {isError && (
          <div className="flex min-h-[300px] flex-col items-center justify-center px-6 text-center">
            <p className="text-sm font-semibold text-error">
              Failed to load customers
            </p>

            <p className="mt-1 text-xs text-text-muted">
              {error?.message || "Something went wrong."}
            </p>
          </div>
        )}

        {/* Success */}
        {!isLoading && !isError && (
          <>
            <CustomerTable customers={customers} />

            <CustomerPagination
              currentPage={currentPage}
              totalPages={totalPages}
              totalItems={totalItems}
              itemsPerPage={ITEMS_PER_PAGE}
              onPageChange={setCurrentPage}
            />
          </>
        )}
      </div>
    </div>
  );
};

export default Customers;
