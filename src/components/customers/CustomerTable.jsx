import { Mail, Phone, MoreHorizontal } from "lucide-react";

const CustomerTable = ({ customers = [] }) => {
  return (
    <div className="w-full overflow-x-auto">
      <table className="w-full min-w-[850px] border-collapse">
        <thead>
          <tr className="border-b border-border-light bg-surface-muted">
            <th className="px-5 py-3.5 text-left text-[11px] font-semibold uppercase tracking-wider text-text-muted">
              Customer
            </th>

            <th className="px-5 py-3.5 text-left text-[11px] font-semibold uppercase tracking-wider text-text-muted">
              Contact
            </th>

            <th className="px-5 py-3.5 text-left text-[11px] font-semibold uppercase tracking-wider text-text-muted">
              Status
            </th>

            <th className="px-5 py-3.5 text-left text-[11px] font-semibold uppercase tracking-wider text-text-muted">
              Joined
            </th>

            <th className="px-5 py-3.5 text-right text-[11px] font-semibold uppercase tracking-wider text-text-muted">
              Total Spent
            </th>

            <th className="w-12 px-4 py-3.5" />
          </tr>
        </thead>

        <tbody className="divide-y divide-border-light">
          {customers.map((customer) => {
            const isActive = customer.status === "Active";

            return (
              <tr
                key={customer.id}
                className="
                  group
                  transition-colors
                  duration-150
                  hover:bg-surface-hover
                "
              >
                {/* Customer */}
                <td className="px-5 py-4">
                  <div className="flex items-center gap-3">
                    <div
                      className="
                        flex size-10 shrink-0
                        items-center justify-center
                        rounded-full
                        bg-primary-soft
                      "
                    >
                      <span className="text-sm font-semibold text-primary">
                        {customer.name.charAt(0)}
                      </span>
                    </div>

                    <div className="min-w-0">
                      <p className="truncate text-sm font-semibold text-text-primary">
                        {customer.name}
                      </p>

                      <p className="mt-0.5 text-xs text-text-muted">
                        Customer #{String(customer.id).padStart(4, "0")}
                      </p>
                    </div>
                  </div>
                </td>

                {/* Contact */}
                <td className="px-5 py-4">
                  <div className="space-y-1.5">
                    <div className="flex items-center gap-2">
                      <Mail
                        className="size-3.5 shrink-0 text-text-subtle"
                        strokeWidth={1.8}
                      />

                      <span className="text-xs text-text-secondary">
                        {customer.email}
                      </span>
                    </div>

                    <div className="flex items-center gap-2">
                      <Phone
                        className="size-3.5 shrink-0 text-text-subtle"
                        strokeWidth={1.8}
                      />

                      <span className="text-xs text-text-muted">
                        {customer.phone}
                      </span>
                    </div>
                  </div>
                </td>

                {/* Status */}
                <td className="px-5 py-4">
                  <span
                    className={`
                      inline-flex
                      items-center
                      gap-1.5
                      rounded-full
                      px-2.5
                      py-1
                      text-[11px]
                      font-semibold
                      ${
                        isActive
                          ? "bg-success-soft text-success"
                          : "bg-surface-hover text-text-muted"
                      }
                    `}
                  >
                    <span
                      className={`
                        size-1.5
                        rounded-full
                        ${isActive ? "bg-success" : "bg-text-subtle"}
                      `}
                    />

                    {customer.status}
                  </span>
                </td>

                {/* Joined */}
                <td className="px-5 py-4">
                  <span className="text-xs font-medium text-text-secondary">
                    {customer.joined}
                  </span>
                </td>

                {/* Spent */}
                <td className="px-5 py-4 text-right">
                  <span className="font-heading text-sm font-semibold text-text-primary">
                    ${customer.spent.toLocaleString()}
                  </span>
                </td>

                {/* Actions */}
                <td className="px-4 py-4">
                  <button
                    type="button"
                    aria-label={`Actions for ${customer.name}`}
                    className="
                      flex size-8
                      items-center justify-center
                      rounded-lg
                      text-text-muted
                      opacity-0
                      transition-all
                      duration-150
                      hover:bg-surface
                      hover:text-text-primary
                      group-hover:opacity-100
                      focus:opacity-100
                    "
                  >
                    <MoreHorizontal className="size-4" strokeWidth={1.8} />
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default CustomerTable;
