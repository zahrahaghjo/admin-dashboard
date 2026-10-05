import { orders } from "../data/mock";

const statusStyles = {
  Completed:
    "bg-emerald-50 text-emerald-700 dark:bg-emerald-500/10 dark:text-emerald-300",
  Pending:
    "bg-amber-50 text-amber-700 dark:bg-amber-500/10 dark:text-amber-300",
  Cancelled: "bg-rose-50 text-rose-700 dark:bg-rose-500/10 dark:text-rose-300",
};

export default function OrdersTable() {
  return (
    <div className="card">
      <div className="mb-4 flex items-center justify-between">
        <div>
          <h2 className="text-base font-semibold">Recent Orders</h2>
          <p className="text-sm text-slate-500 dark:text-slate-400">
            Latest transactions from your store
          </p>
        </div>
        <button className="rounded-lg border border-slate-200 px-3 py-1.5 text-sm font-medium hover:bg-slate-50 dark:border-slate-700 dark:hover:bg-slate-800">
          View all
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full min-w-[640px] text-left text-sm">
          <thead>
            <tr className="border-b border-slate-200 text-slate-500 dark:border-slate-800 dark:text-slate-400">
              <th className="pb-3 font-medium">Order</th>
              <th className="pb-3 font-medium">Customer</th>
              <th className="pb-3 font-medium">Product</th>
              <th className="pb-3 font-medium">Date</th>
              <th className="pb-3 font-medium">Amount</th>
              <th className="pb-3 font-medium">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
            {orders.map((o) => (
              <tr key={o.id} className="hover:bg-slate-50 dark:hover:bg-slate-800/50">
                <td className="py-3 font-medium">{o.id}</td>
                <td className="py-3">{o.customer}</td>
                <td className="py-3 text-slate-600 dark:text-slate-300">{o.product}</td>
                <td className="py-3 text-slate-500 dark:text-slate-400">{o.date}</td>
                <td className="py-3 font-medium">${o.amount.toFixed(2)}</td>
                <td className="py-3">
                  <span
                    className={`rounded-full px-2.5 py-1 text-xs font-medium ${statusStyles[o.status]}`}
                  >
                    {o.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
