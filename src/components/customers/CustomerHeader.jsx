import { Plus } from "lucide-react";

const CustomerHeader = () => {
  return (
    <div
      className="
        flex
        flex-col
        gap-4
        sm:flex-row
        sm:items-center
        sm:justify-between
      mx-2
      "
    >
      <div>
        <h1
          className="
            font-heading
            text-xl
            font-bold
            tracking-tight
            text-text-primary
            sm:text-2xl
          "
        >
          Customers
        </h1>

        <p className="mt-1 text-xs text-text-muted sm:text-sm">
          Manage and track your customers.
        </p>
      </div>

      <button
        type="button"
        className="
          flex
          w-full
          items-center
          justify-center
          gap-2
          rounded-lg
          bg-primary
          px-4
          py-2.5
          text-sm
          font-semibold
          text-primary-foreground
          shadow-sm
          transition-all
          duration-200
          hover:bg-primary-hover
          sm:w-auto
        "
      >
        <Plus className="size-4" />
        Add Customer
      </button>
    </div>
  );
};

export default CustomerHeader;
