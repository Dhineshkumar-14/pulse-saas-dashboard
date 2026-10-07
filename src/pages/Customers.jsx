import { useState } from "react";

import CustomerHeader from "../components/customers/CustomerHeader";
import CustomerFilters from "../components/customers/CustomerFilters";
import CustomerTable from "../components/customers/CustomerTable";
import CustomerPagination from "../components/customers/CustomerPagination";

import { useCustomers } from "../hooks/queries/useCustomers";

const ITEMS_PER_PAGE = 5;

const Customers = () => {
  // Pagination
  const [currentPage, setCurrentPage] = useState(1);

  // Search
  const [search, setSearch] = useState("");

  // Hair Color Filter
  const [hairColor, setHairColor] = useState("all");

  // Sort
  const [sortBy, setSortBy] = useState("default");

  const skip = (currentPage - 1) * ITEMS_PER_PAGE;

  const { data, isLoading, isError, error } = useCustomers({
    limit: ITEMS_PER_PAGE,
    skip,
    search,
    hairColor,
    sortBy,
  });

  const customers = data?.users ?? [];
  const totalItems = data?.total ?? 0;

  const totalPages = Math.ceil(totalItems / ITEMS_PER_PAGE);

  // Search
  const handleSearchChange = (value) => {
    setSearch(value);
    setCurrentPage(1);
  };

  // Hair color filter
  const handleHairColorChange = (value) => {
    setHairColor(value);
    setCurrentPage(1);
  };

  // Sort
  const handleSortChange = (value) => {
    setSortBy(value);
    setCurrentPage(1);
  };

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
        <CustomerFilters
          search={search}
          hairColor={hairColor}
          sortBy={sortBy}
          onSearchChange={handleSearchChange}
          onHairColorChange={handleHairColorChange}
          onSortChange={handleSortChange}
        />

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

        {/* Empty */}
        {!isLoading && !isError && customers.length === 0 && (
          <div className="flex min-h-[300px] flex-col items-center justify-center px-6 text-center">
            <p className="text-sm font-semibold text-text-primary">
              No customers found
            </p>

            <p className="mt-1 text-xs text-text-muted">
              Try changing your search or filters.
            </p>
          </div>
        )}

        {/* Success */}
        {!isLoading && !isError && customers.length > 0 && (
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
