
const CustomerTableSkeleton = ({ rows = 5 }) => {
  return (
    <div className="w-full overflow-x-auto">
      <table className="w-full min-w-[1050px] border-collapse">
        {/* Header */}
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

        {/* Skeleton rows */}
        <tbody className="divide-y divide-border-light">
          {Array.from({ length: rows }).map((_, index) => (
            <tr key={index}>
              {/* Customer */}
              <td className="px-5 py-4">
                <div className="flex items-center gap-3">
                  {/* Avatar */}
                  <div
                    className="
                      size-10
                      shrink-0
                      animate-pulse
                      rounded-full
                      bg-surface-hover
                    "
                  />

                  <div className="min-w-0 space-y-2">
                    {/* Name */}
                    <div
                      className="
                        h-3.5
                        w-28
                        animate-pulse
                        rounded-md
                        bg-surface-hover
                      "
                    />

                    {/* Customer ID */}
                    <div
                      className="
                        h-2.5
                        w-20
                        animate-pulse
                        rounded-md
                        bg-surface-hover
                      "
                    />
                  </div>
                </div>
              </td>

              {/* Contact */}
              <td className="px-5 py-4">
                <div className="space-y-2.5">
                  <div
                    className="
                      h-3
                      w-40
                      animate-pulse
                      rounded-md
                      bg-surface-hover
                    "
                  />

                  <div
                    className="
                      h-3
                      w-28
                      animate-pulse
                      rounded-md
                      bg-surface-hover
                    "
                  />
                </div>
              </td>

              {/* Hair Color */}
              <td className="px-5 py-4">
                <div
                  className="
                    h-6
                    w-20
                    animate-pulse
                    rounded-full
                    bg-surface-hover
                  "
                />
              </td>

              {/* Company */}
              <td className="px-5 py-4">
                <div
                  className="
                    h-3
                    w-32
                    animate-pulse
                    rounded-md
                    bg-surface-hover
                  "
                />
              </td>

              {/* Location */}
              <td className="px-5 py-4">
                <div className="space-y-2">
                  <div
                    className="
                      h-3
                      w-24
                      animate-pulse
                      rounded-md
                      bg-surface-hover
                    "
                  />

                  <div
                    className="
                      h-2.5
                      w-16
                      animate-pulse
                      rounded-md
                      bg-surface-hover
                    "
                  />
                </div>
              </td>

              {/* Age */}
              <td className="px-5 py-4">
                <div className="flex justify-end">
                  <div
                    className="
                      h-4
                      w-8
                      animate-pulse
                      rounded-md
                      bg-surface-hover
                    "
                  />
                </div>
              </td>

              {/* Actions */}
              <td className="px-4 py-4">
                <div
                  className="
                    ml-auto
                    size-8
                    animate-pulse
                    rounded-lg
                    bg-surface-hover
                  "
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CustomerTableSkeleton;