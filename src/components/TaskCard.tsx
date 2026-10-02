import React from 'react';
import { Task } from '../types';
import { RiskBadge } from './RiskBadge';
import { formatCountdown, formatDeadlinePretty } from '../utils/dateUtils';
import { formatHoursAndMinutes, formatCompactHours } from '../utils/durationUtils';
import {
  Clock,
  Play,
  Split,
  ChevronRight,
  Layers,
  Calendar,
  AlertCircle
} from 'lucide-react';

interface TaskCardProps {
  task: Task;
  onOpenTask: (task: Task) => void;
  onStartWorking: (task: Task) => void;
  onBreakDown: (task: Task) => void;
  onViewReasoning?: (task: Task) => void;
}

export const TaskCard: React.FC<TaskCardProps> = ({
  task,
  onOpenTask,
  onStartWorking,
  onBreakDown,
  onViewReasoning
}) => {
  const remainingFormatted = formatHoursAndMinutes(task.remainingHours || 0);
  const estimatedFormatted = formatHoursAndMinutes(task.estimatedHours);
  const deadlinePretty = formatDeadlinePretty(task.deadline);
  const countdown = formatCountdown(task.deadline);

  // Border and accent tone based on risk
  const borderTone =
    task.riskLevel === 'CRITICAL'
      ? 'border-rose-200/90 hover:border-rose-300 bg-white'
      : task.riskLevel === 'AT_RISK'
      ? 'border-orange-200/90 hover:border-orange-300 bg-white'
      : task.riskLevel === 'APPROACHING'
      ? 'border-amber-200/80 hover:border-amber-300 bg-white'
      : 'border-slate-200/80 hover:border-slate-300 bg-white';

  return (
    <div
      className={`rounded-2xl border ${borderTone} p-5 shadow-xs hover:shadow-md transition-all flex flex-col justify-between group`}
    >
      <div>
        {/* Top Badges Row */}
        <div className="flex items-center justify-between gap-2 mb-3">
          <div className="flex items-center gap-1.5 flex-wrap">
            <span className="text-xs px-2.5 py-0.5 rounded-md bg-slate-100 font-semibold text-slate-700">
              {task.course}
            </span>
          </div>

          <div className="flex items-center gap-1.5">
            <RiskBadge level={task.riskLevel} size="sm" />
          </div>
        </div>

        {/* Title */}
        <div className="mb-3">
          <h3
            onClick={() => onOpenTask(task)}
            className="text-base font-bold text-slate-900 group-hover:text-indigo-600 transition-colors cursor-pointer"
          >
            {task.title}
          </h3>
          {task.description && (
            <p className="text-xs text-slate-500 mt-1 line-clamp-1">
              {task.description}
            </p>
          )}
        </div>

        {/* Progress & Metrics Breakdown */}
        <div className="mb-4 bg-slate-50 rounded-xl p-3 border border-slate-100">
          <div className="flex items-center justify-between text-xs mb-1.5 font-medium">
            <span className="text-slate-600">Completed: {task.completionPercentage || 0}%</span>
            <span className="text-slate-800 font-bold">{remainingFormatted} remaining</span>
          </div>

          {/* Progress track */}
          <div className="w-full bg-slate-200/80 rounded-full h-2 overflow-hidden">
            <div
              className={`h-full rounded-full transition-all duration-500 ${
                task.riskLevel === 'CRITICAL'
                  ? 'bg-rose-500'
                  : task.riskLevel === 'AT_RISK'
                  ? 'bg-orange-500'
                  : 'bg-indigo-600'
              }`}
              style={{ width: `${task.completionPercentage || 0}%` }}
            />
          </div>

          <div className="flex items-center justify-between text-[11px] text-slate-500 mt-1.5 font-medium">
            <span>Estimated effort: {estimatedFormatted}</span>
            <span>Remaining: {remainingFormatted}</span>
          </div>
        </div>

        {/* Deadline & Start Date Context */}
        <div className="grid grid-cols-2 gap-2 text-xs mb-4 text-slate-600">
          <div className="flex items-center gap-1.5">
            <Clock className="w-3.5 h-3.5 text-slate-400 shrink-0" />
            <div className="truncate">
              <span className="text-slate-400 block text-[10px] uppercase font-bold">Due</span>
              <span className="font-semibold text-slate-800">{deadlinePretty}</span>
              <span className="text-[11px] text-amber-700 block font-medium">({countdown})</span>
            </div>
          </div>

          <div className="flex items-center gap-1.5">
            <Calendar className="w-3.5 h-3.5 text-slate-400 shrink-0" />
            <div className="truncate">
              <span className="text-slate-400 block text-[10px] uppercase font-bold">Start By</span>
              <span className="font-medium text-slate-700">
                {task.recommendedStartDate || 'Immediate'}
              </span>
              {task.isColliding && (
                <span className="text-[10px] text-rose-600 font-semibold block flex items-center gap-0.5">
                  <AlertCircle className="w-2.5 h-2.5" /> 48h Collision
                </span>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Buttons */}
      <div className="pt-3 border-t border-slate-100 flex items-center justify-between gap-2">
        <div className="flex items-center gap-1.5">
          <button
            onClick={() => onStartWorking(task)}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-semibold shadow-2xs transition-all active:scale-[0.98] cursor-pointer"
            title="Start active focus session"
          >
            <Play className="w-3.5 h-3.5 fill-white text-white" />
            <span>Start Working</span>
          </button>

          <button
            onClick={() => onBreakDown(task)}
            className="flex items-center gap-1 px-2.5 py-1.5 rounded-lg border border-slate-200 hover:bg-slate-50 text-slate-700 text-xs font-medium transition-colors cursor-pointer"
            title="Smart Split into tailored milestones"
          >
            <Split className="w-3.5 h-3.5 text-indigo-500" />
            <span className="hidden sm:inline">Break Down</span>
          </button>
        </div>

        <button
          onClick={() => onOpenTask(task)}
          className="text-xs font-semibold text-slate-500 hover:text-slate-900 flex items-center gap-0.5 transition-colors p-1 cursor-pointer"
        >
          <span>Open</span>
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
