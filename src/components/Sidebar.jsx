import {
  LayoutDashboard,
  ShoppingCart,
  Users,
  BarChart3,
  Settings,
  X,
} from "lucide-react";

const links = [
  { label: "Dashboard", icon: LayoutDashboard, active: true },
  { label: "Orders", icon: ShoppingCart },
  { label: "Customers", icon: Users },
  { label: "Analytics", icon: BarChart3 },
  { label: "Settings", icon: Settings },
];

export default function Sidebar({ open, onClose }) {
  return (
    <>
      {/* Mobile overlay */}
      {open && (
        <div
          className="fixed inset-0 z-30 bg-slate-900/50 lg:hidden"
          onClick={onClose}
        />
      )}

      <aside
        className={`fixed inset-y-0 left-0 z-40 w-64 transform border-r border-slate-200 bg-white transition-transform dark:border-slate-800 dark:bg-slate-900 lg:translate-x-0 ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex h-16 items-center justify-between px-6">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-indigo-600 text-sm font-bold text-white">
              A
            </div>
            <span className="text-lg font-semibold">AdminPro</span>
          </div>
          <button
            onClick={onClose}
            className="rounded-md p-1 text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800 lg:hidden"
            aria-label="Close menu"
          >
            <X size={20} />
          </button>
        </div>

        <nav className="mt-4 space-y-1 px-3">
          {links.map(({ label, icon: Icon, active }) => (
            <a
              key={label}
              href="#"
              className={`flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition ${
                active
                  ? "bg-indigo-50 text-indigo-700 dark:bg-indigo-500/10 dark:text-indigo-300"
                  : "text-slate-600 hover:bg-slate-100 dark:text-slate-400 dark:hover:bg-slate-800"
              }`}
            >
              <Icon size={18} />
              {label}
            </a>
          ))}
        </nav>
      </aside>
    </>
  );
}
