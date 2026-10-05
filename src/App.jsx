import { useEffect, useState } from "react";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import StatCard from "./components/StatCard";
import RevenueChart from "./components/RevenueChart";
import TrafficChart from "./components/TrafficChart";
import CategoryChart from "./components/CategoryChart";
import OrdersTable from "./components/OrdersTable";
import { stats } from "./data/mock";

export default function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [dark, setDark] = useState(
    () => window.matchMedia?.("(prefers-color-scheme: dark)").matches ?? false
  );

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  return (
    <div className="min-h-screen">
      <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      <div className="lg:pl-64">
        <Header
          onMenuClick={() => setSidebarOpen(true)}
          dark={dark}
          onToggleDark={() => setDark((d) => !d)}
        />

        <main className="mx-auto max-w-7xl space-y-6 p-4 sm:p-6">
          <div>
            <h1 className="text-2xl font-semibold">Dashboard</h1>
            <p className="text-sm text-slate-500 dark:text-slate-400">
              Welcome back! Here is what is happening with your store today.
            </p>
          </div>

          <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {stats.map((s) => (
              <StatCard key={s.id} {...s} />
            ))}
          </section>

          <section className="grid grid-cols-1 gap-6 xl:grid-cols-3">
            <div className="xl:col-span-2">
              <RevenueChart />
            </div>
            <CategoryChart />
          </section>

          <section className="grid grid-cols-1 gap-6 xl:grid-cols-3">
            <TrafficChart />
            <div className="xl:col-span-2">
              <OrdersTable />
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
