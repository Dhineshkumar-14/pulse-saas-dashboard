import { useState } from "react";

import { customers } from "../data/customers";

import CustomerHeader from "../components/customers/CustomerHeader";
import CustomerFilters from "../components/customers/CustomerFilters";
import CustomerTable from "../components/customers/CustomerTable";
import CustomerPagination from "../components/customers/CustomerPagination";

const ITEMS_PER_PAGE = 5;

const Customers = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(customers.length / ITEMS_PER_PAGE);

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;

  const paginatedCustomers = customers.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE,
  );

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

        <CustomerTable customers={paginatedCustomers} />

        <CustomerPagination
          currentPage={currentPage}
          totalPages={totalPages}
          totalItems={customers.length}
          itemsPerPage={ITEMS_PER_PAGE}
          onPageChange={setCurrentPage}
        />
      </div>
    </div>
  );
};

export default Customers;
