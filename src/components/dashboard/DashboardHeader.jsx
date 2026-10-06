const DashboardHeader = () => {
  return (
    <div
      className="
        mb-6
        flex flex-col
        gap-4
        sm:flex-row
        sm:items-center
        sm:justify-between
      "
    >
      <div>
        <h1
          className="
            font-heading
            text-2xl
            font-bold
            text-text-primary
          "
        >
          Dashboard
        </h1>

        <p className="mt-1 text-sm text-text-muted">
          Overview of your business performance.
        </p>
      </div>

      <select
        className="
          rounded-lg
          border border-border
          bg-surface
          px-3 py-2
          text-sm
          text-text-primary
          outline-none
          focus:border-primary
        "
      >
        <option>Last 30 days</option>
        <option>Last 7 days</option>
        <option>Last 3 months</option>
        <option>Last 12 months</option>
      </select>
    </div>
  );
};

export default DashboardHeader;
