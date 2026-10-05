import { Cell, Legend, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";
import { categoryData } from "../data/mock";

const COLORS = ["#6366f1", "#10b981", "#f59e0b", "#ec4899", "#94a3b8"];

export default function CategoryChart() {
  return (
    <div className="card">
      <div className="mb-4">
        <h2 className="text-base font-semibold">Sales by Category</h2>
        <p className="text-sm text-slate-500 dark:text-slate-400">
          Share of total sales (%)
        </p>
      </div>

      <div className="h-72">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={categoryData}
              dataKey="value"
              nameKey="name"
              innerRadius={60}
              outerRadius={95}
              paddingAngle={3}
              stroke="none"
            >
              {categoryData.map((_, i) => (
                <Cell key={i} fill={COLORS[i % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip
              formatter={(v) => `${v}%`}
              contentStyle={{ borderRadius: 12, border: "1px solid #e2e8f0", fontSize: 13 }}
            />
            <Legend iconType="circle" wrapperStyle={{ fontSize: 13 }} />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
