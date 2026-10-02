import React from 'react';
import {
  Plus,
  FileUp,
  Flame,
  Menu,
  Calendar
} from 'lucide-react';
import { RealityCheckData } from '../types';
import { formatHoursAndMinutes } from '../utils/durationUtils';

interface HeaderProps {
  onOpenAddTask: () => void;
  onOpenImportNotice: () => void;
  onOpenPanicMode: () => void;
  onOpenRealityCheck: () => void;
  realityCheck: RealityCheckData;
  onToggleMobileMenu: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  onOpenAddTask,
  onOpenImportNotice,
  onOpenPanicMode,
  onOpenRealityCheck,
  realityCheck,
  onToggleMobileMenu
}) => {
  // Format current browser date dynamically
  const todayFormatted = new Intl.DateTimeFormat('en-US', {
    weekday: 'long',
    month: 'short',
    day: 'numeric',
    year: 'numeric'
  }).format(new Date());

  return (
    <header className="sticky top-0 z-30 bg-white/90 backdrop-blur-md border-b border-slate-200/80 px-4 sm:px-6 py-3">
      <div className="flex items-center justify-between gap-4">
        {/* Left: Mobile Toggle & Dynamic Date Context */}
        <div className="flex items-center gap-3">
          <button
            onClick={onToggleMobileMenu}
            className="p-2 -ml-2 text-slate-500 hover:text-slate-800 lg:hidden rounded-lg hover:bg-slate-100 cursor-pointer"
            aria-label="Open navigation menu"
          >
            <Menu className="w-5 h-5" />
          </button>

          <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-100/70 border border-slate-200/60 text-xs text-slate-600 font-medium">
            <Calendar className="w-3.5 h-3.5 text-slate-500" />
            <span>{todayFormatted}</span>
            <span className="w-1 h-1 rounded-full bg-slate-400" />
            <span className="text-slate-500">Academic Session</span>
          </div>
        </div>

        {/* Center: Global Workload Status Pill */}
        <div
          onClick={onOpenRealityCheck}
          className={`cursor-pointer inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold border transition-all hover:scale-[1.02] shadow-2xs ${
            realityCheck.isOverloaded
              ? 'bg-rose-50 border-rose-200 text-rose-700 hover:bg-rose-100/80'
              : 'bg-emerald-50 border-emerald-200 text-emerald-700 hover:bg-emerald-100/80'
          }`}
          title="Click to open comprehensive Reality Check calculation"
        >
          {realityCheck.isOverloaded ? (
            <>
              <span className="w-2 h-2 rounded-full bg-rose-500 animate-pulse" />
              <span>Overloaded: {formatHoursAndMinutes(realityCheck.shortfallHours)} Shortfall</span>
              <span className="text-[11px] underline font-normal ml-0.5 hidden md:inline">Reality Check →</span>
            </>
          ) : (
            <>
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
              <span>Capacity Balanced</span>
            </>
          )}
        </div>

        {/* Right: Quick Action Buttons */}
        <div className="flex items-center gap-2">
          {/* Panic Mode quick button */}
          <button
            onClick={onOpenPanicMode}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-rose-50 hover:bg-rose-100 border border-rose-200 text-rose-700 text-xs font-semibold transition-all hover:shadow-2xs cursor-pointer"
            title="Switch to 48-Hour Emergency Panic View"
          >
            <Flame className="w-3.5 h-3.5 text-rose-600" />
            <span className="hidden sm:inline">Panic Mode</span>
          </button>

          {/* Import Academic Notice button */}
          <button
            onClick={onOpenImportNotice}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-indigo-50 hover:bg-indigo-100 border border-indigo-200/80 text-indigo-700 text-xs font-semibold transition-all hover:shadow-2xs cursor-pointer"
            title="Import assignment PDF, screenshot, or text"
          >
            <FileUp className="w-3.5 h-3.5 text-indigo-600" />
            <span className="hidden md:inline">Import Notice</span>
            <span className="md:hidden">Import</span>
          </button>

          {/* Add Task button */}
          <button
            onClick={onOpenAddTask}
            className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold transition-all shadow-2xs cursor-pointer"
            title="Manually create a new task"
          >
            <Plus className="w-3.5 h-3.5" />
            <span>Add Task</span>
          </button>
        </div>
      </div>
    </header>
  );
};
