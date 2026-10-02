import React, { useMemo } from 'react';
import { Task } from '../types';
import { formatHoursAndMinutes } from '../utils/durationUtils';
import { getCurrentDate, getHoursRemaining } from '../utils/dateUtils';
import {
  BarChart3,
  TrendingUp,
  AlertTriangle,
  CheckCircle2,
  Calendar,
  Layers,
  Sparkles,
  PieChart
} from 'lucide-react';
import { WeeklyWorkloadChart } from './WeeklyWorkloadChart';

interface InsightsViewProps {
  tasks: Task[];
  onOpenPanicMode: () => void;
  onOpenRealityCheck: () => void;
}

export const InsightsView: React.FC<InsightsViewProps> = ({
  tasks,
  onOpenPanicMode,
  onOpenRealityCheck
}) => {
  const activeTasks = tasks.filter(t => t.status !== 'completed');

  // Workload this week
  const totalRemainingHours = activeTasks.reduce(
    (sum, t) => sum + Math.max(0, t.estimatedHours - t.completedHours),
    0
  );

  // Average task completion
  const totalEstimated = tasks.reduce((sum, t) => sum + t.estimatedHours, 0);
  const totalCompleted = tasks.reduce((sum, t) => sum + t.completedHours, 0);
  const avgCompletion = totalEstimated > 0 ? Math.round((totalCompleted / totalEstimated) * 100) : 0;

  // High-risk tasks count
  const highRiskCount = tasks.filter(t => t.riskLevel === 'CRITICAL' || t.riskLevel === 'AT_RISK').length;

  // Major deadline clusters
  const collidingCount = tasks.filter(t => t.isColliding).length;

  // Risk distribution
  const criticalCount = tasks.filter(t => t.riskLevel === 'CRITICAL').length;
  const atRiskCount = tasks.filter(t => t.riskLevel === 'AT_RISK').length;
  const approachingCount = tasks.filter(t => t.riskLevel === 'APPROACHING').length;
  const safeCount = tasks.filter(t => t.riskLevel === 'SAFE').length;

  // Dynamic observation for imminent deadlines
  const urgentTasks = activeTasks.filter(t => getHoursRemaining(t.deadline) <= 48);
  const urgentWorkload = urgentTasks.reduce(
    (sum, t) => sum + Math.max(0, t.estimatedHours - t.completedHours),
    0
  );

  return (
    <div className="space-y-6">
      {/* Top Banner */}
      <div>
        <h1 className="text-2xl font-bold text-slate-900 tracking-tight">Workload Intelligence & Insights</h1>
        <p className="text-xs text-slate-500 mt-0.5">
          High-level telemetry on deadline clustering, cognitive burnout risk, and task velocity
        </p>
      </div>

      {/* 4 Core Summary Stat Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="p-5 rounded-2xl bg-white border border-slate-200/80 shadow-xs">
          <div className="flex items-center justify-between text-slate-400 mb-2">
            <span className="text-[11px] font-bold uppercase tracking-wider">Remaining Work</span>
            <Layers className="w-4 h-4 text-indigo-500" />
          </div>
          <p className="text-2xl font-black text-slate-900">
            {formatHoursAndMinutes(totalRemainingHours)}
          </p>
          <span className="text-[11px] text-slate-500 block mt-1">Across {activeTasks.length} active tasks</span>
        </div>

        <div className="p-5 rounded-2xl bg-white border border-slate-200/80 shadow-xs">
          <div className="flex items-center justify-between text-slate-400 mb-2">
            <span className="text-[11px] font-bold uppercase tracking-wider">Avg Completion</span>
            <CheckCircle2 className="w-4 h-4 text-emerald-500" />
          </div>
          <p className="text-2xl font-black text-emerald-600">{avgCompletion}%</p>
          <span className="text-[11px] text-slate-500 block mt-1">
            {formatHoursAndMinutes(totalCompleted)} logged of {formatHoursAndMinutes(totalEstimated)}
          </span>
        </div>

        <div
          onClick={onOpenPanicMode}
          className="p-5 rounded-2xl bg-white border border-slate-200/80 shadow-xs cursor-pointer hover:border-rose-300 transition-colors"
        >
          <div className="flex items-center justify-between text-slate-400 mb-2">
            <span className="text-[11px] font-bold uppercase tracking-wider">High-Risk Tasks</span>
            <AlertTriangle className="w-4 h-4 text-rose-500" />
          </div>
          <p className="text-2xl font-black text-rose-600">{highRiskCount}</p>
          <span className="text-[11px] text-rose-500 font-semibold block mt-1 flex items-center gap-0.5">
            Panic Mode Eligible →
          </span>
        </div>

        <div
          onClick={onOpenRealityCheck}
          className="p-5 rounded-2xl bg-white border border-slate-200/80 shadow-xs cursor-pointer hover:border-amber-300 transition-colors"
        >
          <div className="flex items-center justify-between text-slate-400 mb-2">
            <span className="text-[11px] font-bold uppercase tracking-wider">Deadline Collisions</span>
            <Calendar className="w-4 h-4 text-amber-500" />
          </div>
          <p className="text-2xl font-black text-amber-600">{collidingCount}</p>
          <span className="text-[11px] text-amber-600 font-semibold block mt-1 flex items-center gap-0.5">
            View Reality Check →
          </span>
        </div>
      </div>

      {/* Strategic AI Observations Callouts (100% dynamically derived from real state) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="p-4 rounded-xl bg-gradient-to-r from-rose-50/80 to-white border border-rose-200 flex items-start gap-3">
          <div className="w-8 h-8 rounded-lg bg-rose-500/10 text-rose-600 flex items-center justify-center shrink-0 mt-0.5">
            <AlertTriangle className="w-4 h-4" />
          </div>
          <div>
            <h4 className="font-bold text-xs uppercase tracking-wider text-rose-900">
              Imminent Deadline Distribution
            </h4>
            <p className="text-xs text-slate-700 mt-1 leading-relaxed">
              {urgentTasks.length > 0 ? (
                <>
                  You have <strong className="text-rose-700">{urgentTasks.length} {urgentTasks.length === 1 ? 'assignment' : 'assignments'}</strong> due in the next 48 hours requiring <strong className="text-rose-700">{formatHoursAndMinutes(urgentWorkload)}</strong> of focused effort.
                </>
              ) : (
                <>
                  No deliverables are due in the next 48 hours. Your short-term cognitive schedule is clear.
                </>
              )}
            </p>
          </div>
        </div>

        <div className="p-4 rounded-xl bg-gradient-to-r from-amber-50/80 to-white border border-amber-200 flex items-start gap-3">
          <div className="w-8 h-8 rounded-lg bg-amber-500/10 text-amber-600 flex items-center justify-center shrink-0 mt-0.5">
            <Sparkles className="w-4 h-4" />
          </div>
          <div>
            <h4 className="font-bold text-xs uppercase tracking-wider text-amber-900">
              Workload Recommendation
            </h4>
            <p className="text-xs text-slate-700 mt-1 leading-relaxed">
              {collidingCount > 0 ? (
                <>
                  <strong className="text-amber-800">{collidingCount} deliverables are competing for the same 48-hour window</strong>. Early milestone completion prevents deadline compression.
                </>
              ) : (
                <>
                  Your academic commitments are well-spaced with healthy buffers between submissions.
                </>
              )}
            </p>
          </div>
        </div>
      </div>

      {/* Charts Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Weekly Bar Chart (2 columns) */}
        <div className="lg:col-span-2">
          <WeeklyWorkloadChart tasks={tasks} />
        </div>

        {/* Risk Distribution Card */}
        <div className="bg-white rounded-2xl border border-slate-200/80 p-5 shadow-xs space-y-4">
          <div className="flex items-center justify-between border-b border-slate-100 pb-3">
            <h3 className="font-bold text-slate-900 text-sm flex items-center gap-2">
              <PieChart className="w-4 h-4 text-indigo-600" />
              <span>Risk Distribution</span>
            </h3>
            <span className="text-xs text-slate-400">{tasks.length} total tasks</span>
          </div>

          <div className="space-y-3">
            <div>
              <div className="flex items-center justify-between text-xs font-semibold mb-1 text-slate-700">
                <span className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-rose-500" />
                  <span>Critical (Immediate Attention)</span>
                </span>
                <span>{criticalCount} tasks</span>
              </div>
              <div className="w-full bg-slate-100 rounded-full h-2 overflow-hidden">
                <div
                  className="bg-rose-500 h-full rounded-full transition-all duration-300"
                  style={{ width: `${tasks.length > 0 ? (criticalCount / tasks.length) * 100 : 0}%` }}
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between text-xs font-semibold mb-1 text-slate-700">
                <span className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-orange-500" />
                  <span>At Risk (Buffer Tight)</span>
                </span>
                <span>{atRiskCount} tasks</span>
              </div>
              <div className="w-full bg-slate-100 rounded-full h-2 overflow-hidden">
                <div
                  className="bg-orange-500 h-full rounded-full transition-all duration-300"
                  style={{ width: `${tasks.length > 0 ? (atRiskCount / tasks.length) * 100 : 0}%` }}
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between text-xs font-semibold mb-1 text-slate-700">
                <span className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-500" />
                  <span>Approaching (3–5 Days)</span>
                </span>
                <span>{approachingCount} tasks</span>
              </div>
              <div className="w-full bg-slate-100 rounded-full h-2 overflow-hidden">
                <div
                  className="bg-amber-500 h-full rounded-full transition-all duration-300"
                  style={{ width: `${tasks.length > 0 ? (approachingCount / tasks.length) * 100 : 0}%` }}
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between text-xs font-semibold mb-1 text-slate-700">
                <span className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                  <span>Safe (Controlled Runway)</span>
                </span>
                <span>{safeCount} tasks</span>
              </div>
              <div className="w-full bg-slate-100 rounded-full h-2 overflow-hidden">
                <div
                  className="bg-emerald-500 h-full rounded-full transition-all duration-300"
                  style={{ width: `${tasks.length > 0 ? (safeCount / tasks.length) * 100 : 0}%` }}
                />
              </div>
            </div>
          </div>

          <div className="pt-2 text-xs text-slate-500 border-t border-slate-100">
            WorkRadar automatically updates risk classifications as deadlines approach or milestones are checked off.
          </div>
        </div>
      </div>
    </div>
  );
};
