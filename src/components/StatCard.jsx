import { DollarSign, ShoppingCart, Users, TrendingUp, ArrowUpRight, ArrowDownRight } from "lucide-react";

const icons = {
  dollar: DollarSign,
  cart: ShoppingCart,
  users: Users,
  trend: TrendingUp,
};

export default function StatCard({ label, value, change, icon }) {
  const Icon = icons[icon] ?? DollarSign;
  const positive = change >= 0;

  return (
    <div className="card">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm text-slate-500 dark:text-slate-400">{label}</p>
          <p className="mt-2 text-2xl font-semibold">{value}</p>
        </div>
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600 dark:bg-indigo-500/10 dark:text-indigo-300">
          <Icon size={20} />
        </div>
      </div>

      <div className="mt-4 flex items-center gap-1 text-sm">
        <span
          className={`inline-flex items-center gap-0.5 font-medium ${
            positive ? "text-emerald-600 dark:text-emerald-400" : "text-rose-600 dark:text-rose-400"
          }`}
        >
          {positive ? <ArrowUpRight size={16} /> : <ArrowDownRight size={16} />}
          {Math.abs(change)}%
        </span>
        <span className="text-slate-500 dark:text-slate-400">vs last month</span>
      </div>
    </div>
  );
}
