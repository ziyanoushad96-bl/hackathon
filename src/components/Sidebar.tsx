import React from 'react';
import {
  LayoutDashboard,
  CheckSquare,
  CalendarDays,
  BarChart3,
  Flame,
  LifeBuoy,
  Timer,
  Scale,
  RotateCcw,
  Sparkles,
  Radio,
  FileText
} from 'lucide-react';

interface SidebarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  onResetDemo: () => void;
  criticalCount: number;
  atRiskCount: number;
  isMobileOpen?: boolean;
  setIsMobileOpen?: (open: boolean) => void;
}

export const Sidebar: React.FC<SidebarProps> = ({
  activeTab,
  setActiveTab,
  onResetDemo,
  criticalCount,
  atRiskCount,
  isMobileOpen = false,
  setIsMobileOpen
}) => {
  const navItems = [
    {
      id: 'dashboard',
      label: 'Dashboard',
      icon: <LayoutDashboard className="w-4 h-4" />
    },
    {
      id: 'my-work',
      label: 'My Work',
      icon: <CheckSquare className="w-4 h-4" />
    },
    {
      id: 'planner',
      label: 'Weekly Planner',
      icon: <CalendarDays className="w-4 h-4" />
    },
    {
      id: 'insights',
      label: 'Insights',
      icon: <BarChart3 className="w-4 h-4" />
    },
    {
      id: 'panic-mode',
      label: 'Panic Mode',
      icon: <Flame className="w-4 h-4 text-rose-500 animate-pulse" />,
      badge: criticalCount > 0 ? `${criticalCount}` : undefined,
      badgeColor: 'bg-rose-500 text-white'
    },
    {
      id: 'reality-check',
      label: 'Reality Check',
      icon: <Scale className="w-4 h-4 text-amber-500" />
    },
    {
      id: 'save-me',
      label: 'Save Me Mode',
      icon: <LifeBuoy className="w-4 h-4 text-indigo-500" />
    },
    {
      id: 'reverse-planner',
      label: 'Reverse Planner',
      icon: <Timer className="w-4 h-4 text-emerald-500" />
    }
  ];

  return (
    <>
      {/* Mobile backdrop */}
      {isMobileOpen && (
        <div
          className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm z-40 lg:hidden"
          onClick={() => setIsMobileOpen?.(false)}
        />
      )}

      <aside
        className={`fixed top-0 left-0 bottom-0 z-50 w-64 bg-white border-r border-slate-200/80 flex flex-col justify-between transition-transform duration-300 lg:translate-x-0 ${
          isMobileOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div>
          {/* Logo Section */}
          <div className="p-5 border-b border-slate-100 flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-indigo-600 via-indigo-700 to-blue-600 flex items-center justify-center text-white shadow-md shadow-indigo-100 ring-2 ring-indigo-50">
                <Radio className="w-5 h-5 animate-pulse" />
              </div>
              <div>
                <div className="flex items-center gap-1.5">
                  <span className="font-bold text-lg tracking-tight text-slate-900">WorkRadar</span>
                  <span className="px-1.5 py-0.5 text-[10px] font-semibold bg-indigo-50 text-indigo-700 rounded border border-indigo-200/60 uppercase tracking-wider">
                    AI
                  </span>
                </div>
                <p className="text-[11px] text-slate-400 font-medium leading-none mt-0.5">
                  Workload Intelligence
                </p>
              </div>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="px-3 py-4 space-y-1">
            <div className="px-3 pb-2 text-[10px] font-bold uppercase tracking-wider text-slate-400">
              Workspace
            </div>
            {navItems.map(item => {
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => {
                    setActiveTab(item.id);
                    setIsMobileOpen?.(false);
                  }}
                  className={`w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-sm font-medium transition-all ${
                    isActive
                      ? 'bg-slate-900 text-white shadow-sm font-semibold'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100/80'
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    <span className={isActive ? 'text-white' : 'text-slate-500'}>
                      {item.icon}
                    </span>
                    <span>{item.label}</span>
                  </div>
                  {item.badge && (
                    <span
                      className={`text-[11px] px-1.5 py-0.5 rounded-full font-bold ${
                        isActive ? 'bg-rose-500 text-white' : item.badgeColor
                      }`}
                    >
                      {item.badge}
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Bottom User & Demo Reset Section */}
        <div className="p-3 border-t border-slate-100 bg-slate-50/50 space-y-2">
          {/* Demo User Info */}
          <div className="flex items-center gap-3 p-2 rounded-xl bg-white border border-slate-200/80 shadow-xs">
            <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-indigo-500 to-violet-500 flex items-center justify-center text-white text-xs font-bold">
              Z
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between">
                <p className="text-xs font-semibold text-slate-900 truncate">Ziya</p>
                <span className="w-2 h-2 rounded-full bg-emerald-500" title="Active session" />
              </div>
              <p className="text-[11px] text-slate-400 truncate">Computer Science · Term 7</p>
            </div>
          </div>

          {/* Reset Demo State Button */}
          <button
            onClick={onResetDemo}
            className="w-full flex items-center justify-center gap-2 px-3 py-1.5 rounded-lg border border-slate-200 bg-white hover:bg-slate-50 text-slate-600 hover:text-slate-900 text-xs font-medium transition-colors"
            title="Reset tasks to initial hackathon demo state"
          >
            <RotateCcw className="w-3.5 h-3.5 text-slate-400" />
            <span>Reset Demo Data</span>
          </button>
        </div>
      </aside>
    </>
  );
};
