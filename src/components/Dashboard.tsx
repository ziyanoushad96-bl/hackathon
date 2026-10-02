import React from 'react';
import { Task, RealityCheckData } from '../types';
import { WhatShouldIDoNow } from './WhatShouldIDoNow';
import { WeeklyWorkloadChart } from './WeeklyWorkloadChart';
import { DeadlineRadar } from './DeadlineRadar';
import { TaskCard } from './TaskCard';
import {
  FileUp,
  Plus,
  Timer,
  Flame,
  ArrowRight
} from 'lucide-react';

interface DashboardProps {
  tasks: Task[];
  topTask: Task | null;
  realityCheck: RealityCheckData;
  onOpenTask: (task: Task) => void;
  onStartWorking: (task: Task) => void;
  onBreakDown: (task: Task) => void;
  onViewReasoning: (task: Task) => void;
  onOpenAddTask: () => void;
  onOpenImportNotice: () => void;
  onOpenPanicMode: () => void;
  onOpenRealityCheck: () => void;
  onOpenReversePlanner: () => void;
  onNavigateToMyWork: () => void;
}

export const Dashboard: React.FC<DashboardProps> = ({
  tasks,
  topTask,
  realityCheck,
  onOpenTask,
  onStartWorking,
  onBreakDown,
  onViewReasoning,
  onOpenAddTask,
  onOpenImportNotice,
  onOpenPanicMode,
  onOpenRealityCheck,
  onOpenReversePlanner,
  onNavigateToMyWork
}) => {
  const activeTasks = tasks.filter(t => t.status !== 'completed');
  const criticalCount = tasks.filter(t => t.riskLevel === 'CRITICAL').length;
  const atRiskCount = tasks.filter(t => t.riskLevel === 'AT_RISK').length;
  const safeCount = tasks.filter(t => t.riskLevel === 'SAFE' || t.riskLevel === 'APPROACHING').length;

  // AI-style explanation computed dynamically
  const aiExplanation = realityCheck.isOverloaded
    ? 'Your workload is slightly overloaded this week. Several assignments are competing for the same time window.'
    : criticalCount > 0
    ? 'You have high-urgency deliverables due within the next 48 hours requiring dedicated attention.'
    : 'Your workload is balanced and achievable within standard daily study hours.';

  return (
    <div className="space-y-7 pb-12">
      {/* 1. Top Section Greeting */}
      <div>
        <h1 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
          Good evening, Ziya 👋
        </h1>
        <p className="text-sm text-slate-500 font-medium mt-1">
          Here's what needs your attention.
        </p>
      </div>

      {/* 2. Main Workload Status Card */}
      <div className="rounded-2xl border border-slate-200/90 bg-gradient-to-r from-slate-50 via-white to-indigo-50/30 p-5 sm:p-6 shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="space-y-2">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
              Workload Status
            </span>
            <span className="text-slate-300">•</span>
            <span className="text-xs font-bold text-slate-800">
              You have {activeTasks.length} active {activeTasks.length === 1 ? 'task' : 'tasks'}
            </span>
            <span className="text-slate-300">•</span>
            <span className="text-xs font-semibold text-rose-600 bg-rose-50 px-2 py-0.5 rounded-full border border-rose-200">
              {criticalCount} Critical
            </span>
            <span className="text-xs font-semibold text-orange-600 bg-orange-50 px-2 py-0.5 rounded-full border border-orange-200">
              {atRiskCount} At Risk
            </span>
            <span className="text-xs font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
              {safeCount} Safe
            </span>
          </div>

          <p className="text-sm font-medium text-slate-800 leading-snug">
            "{aiExplanation}"
          </p>
        </div>

        <button
          onClick={onOpenRealityCheck}
          className="self-start md:self-center px-4 py-2.5 rounded-xl bg-white hover:bg-slate-50 border border-slate-200 text-slate-900 font-bold text-xs shadow-xs hover:shadow-sm transition-all flex items-center gap-1.5 shrink-0 group cursor-pointer"
        >
          <span>View Reality Check</span>
          <ArrowRight className="w-3.5 h-3.5 text-slate-500 group-hover:translate-x-0.5 transition-transform" />
        </button>
      </div>

      {/* 3. "WHAT SHOULD I DO NOW?" Hero Recommendation Card */}
      <WhatShouldIDoNow
        topTask={topTask}
        onStartWorking={onStartWorking}
        onViewReasoning={onViewReasoning}
        onOpenDetails={onOpenTask}
      />

      {/* 4. Quick Actions (4 Action Cards) */}
      <div>
        <h2 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">
          Quick Actions
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
          {/* Card 1: Import Notice */}
          <div
            onClick={onOpenImportNotice}
            className="p-4 rounded-2xl border border-indigo-100 bg-indigo-50/40 hover:bg-indigo-50 hover:border-indigo-300 transition-all cursor-pointer shadow-2xs group flex flex-col justify-between"
          >
            <div>
              <div className="w-9 h-9 rounded-xl bg-indigo-600 text-white flex items-center justify-center mb-3 shadow-xs shadow-indigo-200 group-hover:scale-105 transition-transform">
                <FileUp className="w-4 h-4" />
              </div>
              <h3 className="font-bold text-slate-900 text-sm group-hover:text-indigo-700 transition-colors">
                Import Notice
              </h3>
              <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                Upload a screenshot, PDF, or paste notice to extract deadlines.
              </p>
            </div>
            <span className="text-[11px] font-bold text-indigo-600 mt-3 flex items-center gap-1">
              <span>Drop File / Paste</span>
              <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
            </span>
          </div>

          {/* Card 2: Add Task */}
          <div
            onClick={onOpenAddTask}
            className="p-4 rounded-2xl border border-slate-200 bg-white hover:bg-slate-50/80 hover:border-slate-300 transition-all cursor-pointer shadow-2xs group flex flex-col justify-between"
          >
            <div>
              <div className="w-9 h-9 rounded-xl bg-slate-900 text-white flex items-center justify-center mb-3 shadow-xs group-hover:scale-105 transition-transform">
                <Plus className="w-4 h-4" />
              </div>
              <h3 className="font-bold text-slate-900 text-sm group-hover:text-indigo-600 transition-colors">
                Add Task
              </h3>
              <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                Manually enter an assignment with deadline and requirements.
              </p>
            </div>
            <span className="text-[11px] font-bold text-slate-700 mt-3 flex items-center gap-1">
              <span>Create Task</span>
              <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
            </span>
          </div>

          {/* Card 3: Reverse Planner */}
          <div
            onClick={onOpenReversePlanner}
            className="p-4 rounded-2xl border border-emerald-100 bg-emerald-50/30 hover:bg-emerald-50 hover:border-emerald-300 transition-all cursor-pointer shadow-2xs group flex flex-col justify-between"
          >
            <div>
              <div className="w-9 h-9 rounded-xl bg-emerald-600 text-white flex items-center justify-center mb-3 shadow-xs shadow-emerald-200 group-hover:scale-105 transition-transform">
                <Timer className="w-4 h-4" />
              </div>
              <h3 className="font-bold text-slate-900 text-sm group-hover:text-emerald-800 transition-colors">
                Reverse Planner
              </h3>
              <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                Allocate free study time across urgent assignments.
              </p>
            </div>
            <span className="text-[11px] font-bold text-emerald-700 mt-3 flex items-center gap-1">
              <span>Time-Block Study</span>
              <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
            </span>
          </div>

          {/* Card 4: Panic Mode */}
          <div
            onClick={onOpenPanicMode}
            className="p-4 rounded-2xl border border-rose-100 bg-rose-50/30 hover:bg-rose-50 hover:border-rose-300 transition-all cursor-pointer shadow-2xs group flex flex-col justify-between"
          >
            <div>
              <div className="w-9 h-9 rounded-xl bg-rose-600 text-white flex items-center justify-center mb-3 shadow-xs shadow-rose-200 group-hover:scale-105 transition-transform">
                <Flame className="w-4 h-4" />
              </div>
              <h3 className="font-bold text-slate-900 text-sm group-hover:text-rose-800 transition-colors">
                Panic Mode
              </h3>
              <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                Focus strictly on deliverables due within the next 48 hours.
              </p>
            </div>
            <span className="text-[11px] font-bold text-rose-700 mt-3 flex items-center gap-1">
              <span>Next 48 Hours Only</span>
              <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
            </span>
          </div>
        </div>
      </div>

      {/* 5. Weekly Workload Chart & Deadline Radar Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <WeeklyWorkloadChart tasks={tasks} />
        <DeadlineRadar tasks={tasks} onOpenTask={onOpenTask} />
      </div>

      {/* 6. Active Tasks Section */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <div>
            <h2 className="text-lg font-bold text-slate-900">Active Commitments</h2>
            <p className="text-xs text-slate-500">
              Ranked by urgency level and workload risk profile
            </p>
          </div>

          <button
            onClick={onNavigateToMyWork}
            className="text-xs font-semibold text-indigo-600 hover:text-indigo-800 flex items-center gap-1 cursor-pointer"
          >
            <span>View All ({tasks.length})</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {activeTasks.slice(0, 6).map(task => (
            <TaskCard
              key={task.id}
              task={task}
              onOpenTask={onOpenTask}
              onStartWorking={onStartWorking}
              onBreakDown={onBreakDown}
              onViewReasoning={onViewReasoning}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
