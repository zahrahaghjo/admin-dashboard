import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { trafficData } from "../data/mock";

export default function TrafficChart() {
  return (
    <div className="card">
      <div className="mb-4">
        <h2 className="text-base font-semibold">Weekly Traffic</h2>
        <p className="text-sm text-slate-500 dark:text-slate-400">
          Visits and signups per day
        </p>
      </div>

      <div className="h-72">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={trafficData} margin={{ top: 5, right: 10, left: -10, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#94a3b8" strokeOpacity={0.25} vertical={false} />
            <XAxis dataKey="day" tick={{ fontSize: 12, fill: "#94a3b8" }} axisLine={false} tickLine={false} />
            <YAxis tick={{ fontSize: 12, fill: "#94a3b8" }} axisLine={false} tickLine={false} />
            <Tooltip
              cursor={{ fill: "rgba(148,163,184,0.12)" }}
              contentStyle={{ borderRadius: 12, border: "1px solid #e2e8f0", fontSize: 13 }}
            />
            <Legend iconType="circle" wrapperStyle={{ fontSize: 13 }} />
            <Bar dataKey="visits" name="Visits" fill="#6366f1" radius={[6, 6, 0, 0]} />
            <Bar dataKey="signups" name="Signups" fill="#10b981" radius={[6, 6, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
