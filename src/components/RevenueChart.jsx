import {
  Area,
  AreaChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { revenueData } from "../data/mock";

export default function RevenueChart() {
  return (
    <div className="card">
      <div className="mb-4">
        <h2 className="text-base font-semibold">Revenue Overview</h2>
        <p className="text-sm text-slate-500 dark:text-slate-400">
          Revenue vs expenses over the last 12 months
        </p>
      </div>

      <div className="h-72">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={revenueData} margin={{ top: 5, right: 10, left: -10, bottom: 0 }}>
            <defs>
              <linearGradient id="gRevenue" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#6366f1" stopOpacity={0.35} />
                <stop offset="95%" stopColor="#6366f1" stopOpacity={0} />
              </linearGradient>
              <linearGradient id="gExpenses" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#f59e0b" stopOpacity={0.3} />
                <stop offset="95%" stopColor="#f59e0b" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="#94a3b8" strokeOpacity={0.25} />
            <XAxis dataKey="month" tick={{ fontSize: 12, fill: "#94a3b8" }} axisLine={false} tickLine={false} />
            <YAxis
              tick={{ fontSize: 12, fill: "#94a3b8" }}
              axisLine={false}
              tickLine={false}
              tickFormatter={(v) => `$${v / 1000}k`}
            />
            <Tooltip
              formatter={(v) => `$${v.toLocaleString()}`}
              contentStyle={{ borderRadius: 12, border: "1px solid #e2e8f0", fontSize: 13 }}
            />
            <Legend iconType="circle" wrapperStyle={{ fontSize: 13 }} />
            <Area
              type="monotone"
              dataKey="revenue"
              name="Revenue"
              stroke="#6366f1"
              strokeWidth={2.5}
              fill="url(#gRevenue)"
            />
            <Area
              type="monotone"
              dataKey="expenses"
              name="Expenses"
              stroke="#f59e0b"
              strokeWidth={2.5}
              fill="url(#gExpenses)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
