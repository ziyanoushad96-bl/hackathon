import React from 'react';
import { Task } from '../types';
import {
  Compass,
  Clock,
  Layers,
  Sparkles,
  Play,
  CheckCircle2,
  AlertCircle,
  ArrowRight
} from 'lucide-react';
import { formatCountdown } from '../utils/dateUtils';
import { formatHoursAndMinutes } from '../utils/durationUtils';
import { formatRecommendationAction } from '../utils/recommendationUtils';
import { RiskBadge } from './RiskBadge';

interface WhatShouldIDoNowProps {
  topTask: Task | null;
  onStartWorking: (task: Task) => void;
  onViewReasoning: (task: Task) => void;
  onOpenDetails: (task: Task) => void;
}

export const WhatShouldIDoNow: React.FC<WhatShouldIDoNowProps> = ({
  topTask,
  onStartWorking,
  onViewReasoning,
  onOpenDetails
}) => {
  if (!topTask) {
    return (
      <div className="bg-gradient-to-r from-emerald-50 via-teal-50 to-white rounded-2xl border border-emerald-100 p-6 shadow-xs flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-600">
            <CheckCircle2 className="w-6 h-6" />
          </div>
          <div>
            <h3 className="font-bold text-slate-900 text-lg">All caught up!</h3>
            <p className="text-sm text-slate-500">
              No pressing academic deadlines require immediate intervention. Great job!
            </p>
          </div>
        </div>
      </div>
    );
  }

  const remainingFormatted = formatHoursAndMinutes(topTask.remainingHours || 0);
  const countdown = formatCountdown(topTask.deadline);

  // Dynamic next recommended action formatted safely without verb duplication
  const actionTitle = formatRecommendationAction(topTask.title);
  const nextMilestone = topTask.milestones?.find(m => !m.completed);

  return (
    <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-slate-900 via-slate-900 to-indigo-950 text-white p-6 sm:p-7 shadow-xl shadow-slate-900/10 border border-slate-800">
      {/* Background ambient radar glow */}
      <div className="absolute -right-16 -top-16 w-64 h-64 bg-indigo-500/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute right-32 -bottom-20 w-56 h-56 bg-rose-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* Top Banner Tag */}
      <div className="relative z-10 flex flex-wrap items-center justify-between gap-3 mb-4">
        <div className="flex items-center gap-2">
          <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-indigo-500/20 border border-indigo-400/30 text-indigo-300 text-xs font-semibold tracking-wide uppercase">
            <Compass className="w-3.5 h-3.5 animate-spin" style={{ animationDuration: '8s' }} />
            WorkRadar Recommendation
          </span>
          <span className="text-xs text-slate-400 font-medium hidden sm:inline">
            What Should I Do Now?
          </span>
        </div>

        <div className="flex items-center gap-2">
          <RiskBadge level={topTask.riskLevel} size="sm" />
        </div>
      </div>

      {/* Main Focus Headline */}
      <div className="relative z-10 mb-6">
        <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold tracking-tight text-white mb-2 leading-tight">
          {actionTitle}
        </h2>
        <div className="flex flex-wrap items-center gap-2 text-sm text-slate-300">
          <span className="font-semibold text-indigo-300">{topTask.course}</span>
          <span>•</span>
          <span>Overall completion: {topTask.completionPercentage || 0}%</span>
          {nextMilestone && (
            <>
              <span>•</span>
              <span className="text-amber-300 font-medium">Next: {nextMilestone.title}</span>
            </>
          )}
        </div>
      </div>

      {/* Metric Cards Row (NO SCORES, ONLY QUALITATIVE STATUS) */}
      <div className="relative z-10 grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
        <div className="bg-white/5 backdrop-blur-xs rounded-xl p-3 border border-white/10">
          <p className="text-[11px] font-medium text-slate-400 uppercase tracking-wider mb-1">
            Due in
          </p>
          <p className="text-base sm:text-lg font-bold text-amber-300 flex items-center gap-1.5">
            <Clock className="w-4 h-4 text-amber-400" />
            <span>{countdown}</span>
          </p>
        </div>

        <div className="bg-white/5 backdrop-blur-xs rounded-xl p-3 border border-white/10">
          <p className="text-[11px] font-medium text-slate-400 uppercase tracking-wider mb-1">
            Estimated Remaining
          </p>
          <p className="text-base sm:text-lg font-bold text-white flex items-center gap-1.5">
            <Layers className="w-4 h-4 text-indigo-400" />
            <span>{remainingFormatted}</span>
          </p>
        </div>

        <div className="bg-white/5 backdrop-blur-xs rounded-xl p-3 border border-white/10">
          <p className="text-[11px] font-medium text-slate-400 uppercase tracking-wider mb-1">
            Completion
          </p>
          <p className="text-base sm:text-lg font-bold text-indigo-300 flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-indigo-400" />
            <span>{topTask.completionPercentage || 0}% Done</span>
          </p>
        </div>

        <div className="bg-white/5 backdrop-blur-xs rounded-xl p-3 border border-white/10">
          <p className="text-[11px] font-medium text-slate-400 uppercase tracking-wider mb-1">
            Workload Status
          </p>
          <p className="text-base sm:text-lg font-bold text-rose-400 flex items-center gap-1.5">
            <AlertCircle className="w-4 h-4" />
            <span>{topTask.riskLevel === 'CRITICAL' ? '🔴 Critical' : topTask.riskLevel === 'AT_RISK' ? '🟠 At Risk' : topTask.riskLevel === 'APPROACHING' ? '🟡 Approaching' : '🟢 Safe'}</span>
          </p>
        </div>
      </div>

      {/* Why this task? */}
      <div className="relative z-10 mb-6 bg-white/[0.04] rounded-xl p-3.5 border border-white/5">
        <p className="text-xs font-semibold text-indigo-200 uppercase tracking-wider mb-2 flex items-center gap-1.5">
          <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
          Why this task?
        </p>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-300">
          <li className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400 shrink-0" />
            <span>Deadline is approaching ({countdown} remaining)</span>
          </li>
          <li className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-rose-400 shrink-0" />
            <span>Significant work remains ({remainingFormatted} unfinished)</span>
          </li>
          <li className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 shrink-0" />
            <span>{topTask.isColliding ? 'It conflicts with another deadline in a 48h window' : 'Workload demand is elevated relative to available capacity'}</span>
          </li>
          <li className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0" />
            <span>Completing this step unlocks remaining work</span>
          </li>
        </ul>
      </div>

      {/* Action Buttons */}
      <div className="relative z-10 flex flex-wrap items-center justify-between gap-3 pt-1 border-t border-white/10">
        <div className="flex items-center gap-2.5">
          <button
            onClick={() => onStartWorking(topTask)}
            className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white hover:bg-slate-100 text-slate-900 font-bold text-sm shadow-lg shadow-white/10 transition-all hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
          >
            <Play className="w-4 h-4 fill-slate-900 text-slate-900" />
            <span>Start Task</span>
          </button>

          <button
            onClick={() => onViewReasoning(topTask)}
            className="flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-white/10 hover:bg-white/15 text-white text-xs font-semibold border border-white/10 transition-all cursor-pointer"
          >
            <span>View Reasoning</span>
          </button>
        </div>

        <button
          onClick={() => onOpenDetails(topTask)}
          className="text-xs text-slate-400 hover:text-white font-medium flex items-center gap-1 transition-colors cursor-pointer"
        >
          <span>Open Full Task Breakdown</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
};
