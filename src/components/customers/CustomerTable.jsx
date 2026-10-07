import {
  Mail,
  Phone,
  MoreHorizontal,
  MapPin,
  Building2,
  Palette,
} from "lucide-react";

const CustomerTable = ({ customers = [] }) => {
  const hairColorStyles = {
    Black: "bg-surface-hover text-text-primary",
    Brown: "bg-warning-soft text-warning",
    Blond: "bg-primary-soft text-primary",
    Red: "bg-error-soft text-error",
    White: "bg-surface-muted text-text-secondary",
  };

  return (
    <div className="w-full overflow-x-auto">
      <table className="w-full min-w-[1050px] border-collapse">
        <thead>
          <tr className="border-b border-border-light bg-surface-muted">
            <th className="px-5 py-3.5 text-left text-[11px] font-semibold uppercase tracking-wider text-text-muted">
              Customer
            </th>

            <th className="px-5 py-3.5 text-left text-[11px] font-semibold uppercase tracking-wider text-text-muted">
              Contact
            </th>

            <th className="px-5 py-3.5 text-left text-[11px] font-semibold uppercase tracking-wider text-text-muted">
              Hair Color
            </th>

            <th className="px-5 py-3.5 text-left text-[11px] font-semibold uppercase tracking-wider text-text-muted">
              Company
            </th>

            <th className="px-5 py-3.5 text-left text-[11px] font-semibold uppercase tracking-wider text-text-muted">
              Location
            </th>

            <th className="px-5 py-3.5 text-right text-[11px] font-semibold uppercase tracking-wider text-text-muted">
              Age
            </th>

            <th className="w-12 px-4 py-3.5" />
          </tr>
        </thead>

        <tbody className="divide-y divide-border-light">
          {customers.map((customer) => {
            const name = `${customer.firstName} ${customer.lastName}`;

            const hairColor = customer.hair?.color || "Unknown";

            const hairColorClass =
              hairColorStyles[hairColor] || "bg-surface-hover text-text-muted";

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
                        overflow-hidden
                        rounded-full
                        bg-primary-soft
                      "
                    >
                      {customer.image ? (
                        <img
                          src={customer.image}
                          alt={name}
                          className="size-full object-cover"
                        />
                      ) : (
                        <span className="text-sm font-semibold text-primary">
                          {customer.firstName?.charAt(0)}
                        </span>
                      )}
                    </div>

                    <div className="min-w-0">
                      <p className="truncate text-sm font-semibold text-text-primary">
                        {name}
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

                {/* Hair Color */}
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
                      capitalize
                      ${hairColorClass}
                    `}
                  >
                    <Palette className="size-3" strokeWidth={1.8} />

                    {hairColor}
                  </span>
                </td>

                {/* Company */}
                <td className="px-5 py-4">
                  <div className="flex max-w-[190px] items-center gap-2">
                    <Building2
                      className="size-3.5 shrink-0 text-text-subtle"
                      strokeWidth={1.8}
                    />

                    <span className="truncate text-xs font-medium text-text-secondary">
                      {customer.company?.name || "—"}
                    </span>
                  </div>
                </td>

                {/* Location */}
                <td className="px-5 py-4">
                  <div className="flex max-w-[180px] items-center gap-2">
                    <MapPin
                      className="size-3.5 shrink-0 text-text-subtle"
                      strokeWidth={1.8}
                    />

                    <div className="min-w-0">
                      <p className="truncate text-xs font-medium text-text-secondary">
                        {customer.address?.city || "—"}
                      </p>

                      <p className="truncate text-[10px] text-text-muted">
                        {customer.address?.country || "—"}
                      </p>
                    </div>
                  </div>
                </td>

                {/* Age */}
                <td className="px-5 py-4 text-right">
                  <span className="font-heading text-sm font-semibold text-text-primary">
                    {customer.age}
                  </span>
                </td>

                {/* Actions */}
                <td className="px-4 py-4">
                  <button
                    type="button"
                    aria-label={`Actions for ${name}`}
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
