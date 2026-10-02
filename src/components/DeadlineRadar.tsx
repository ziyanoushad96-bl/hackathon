import React from 'react';
import { Task } from '../types';
import { formatCountdown, formatHoursAndMinutes, getHoursRemaining } from '../utils/dateUtils';
import { RiskBadge } from './RiskBadge';
import { Radio, Clock, Layers, ArrowUpRight, CheckCircle2 } from 'lucide-react';

interface DeadlineRadarProps {
  tasks: Task[];
  onOpenTask: (task: Task) => void;
}

export const DeadlineRadar: React.FC<DeadlineRadarProps> = ({ tasks, onOpenTask }) => {
  // Read live active tasks from central state; exclude completed
  const activeTasks = tasks
    .filter(t => t.status !== 'completed')
    .sort((a, b) => new Date(a.deadline).getTime() - new Date(b.deadline).getTime());

  // Horizons based on hours until deadline using current browser date/time:
  // 1. Immediate Horizon: 0–48 hours (and overdue active tasks)
  // 2. Mid-Range Horizon: > 48 hours and up to 5 days (120 hours)
  // 3. Upcoming: > 5 days (120 hours)
  const immediateTasks = activeTasks.filter(t => getHoursRemaining(t.deadline) <= 48);
  const midRangeTasks = activeTasks.filter(t => {
    const hours = getHoursRemaining(t.deadline);
    return hours > 48 && hours <= 120;
  });
  const upcomingTasks = activeTasks.filter(t => getHoursRemaining(t.deadline) > 120);

  return (
    <div className="bg-white rounded-2xl border border-slate-200/80 p-5 sm:p-6 shadow-xs">
      <div className="flex items-center justify-between gap-2 mb-4">
        <div>
          <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
            <Radio className="w-4 h-4 text-indigo-600 animate-pulse" />
            <span>Deadline Radar</span>
            <span className="text-xs px-2 py-0.5 rounded-full bg-indigo-50 text-indigo-700 font-semibold border border-indigo-100">
              Live Horizon
            </span>
          </h3>
          <p className="text-xs text-slate-500 mt-0.5">
            Temporal distribution of academic commitments ranked by imminent collision risk
          </p>
        </div>

        <span className="text-xs font-bold text-slate-700 bg-slate-100 px-2.5 py-1 rounded-full">
          {activeTasks.length} upcoming {activeTasks.length === 1 ? 'deadline' : 'deadlines'}
        </span>
      </div>

      {/* Radar Timeline Horizons */}
      <div className="space-y-4">
        {/* Horizon 1: Immediate Horizon (0–48 Hours) */}
        <div>
          <div className="flex items-center justify-between gap-2 mb-2">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-rose-500 animate-ping" />
              <span className="text-xs font-bold text-rose-700 uppercase tracking-wider">
                Immediate Horizon (0–48 Hours)
              </span>
            </div>
            <span className="text-[11px] text-rose-600 font-semibold">
              {immediateTasks.length} {immediateTasks.length === 1 ? 'task' : 'tasks'}
            </span>
          </div>

          {immediateTasks.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {immediateTasks.map(task => {
                const remaining = formatHoursAndMinutes(task.remainingHours || 0);
                const countdown = formatCountdown(task.deadline);
                const isOverdue = getHoursRemaining(task.deadline) <= 0;

                return (
                  <div
                    key={task.id}
                    onClick={() => onOpenTask(task)}
                    className="group cursor-pointer p-3.5 rounded-xl border border-rose-200/90 bg-gradient-to-r from-rose-50/70 to-white hover:from-rose-100/70 hover:to-rose-50/30 transition-all hover:shadow-xs hover:border-rose-300"
                  >
                    <div className="flex items-start justify-between gap-2 mb-1.5">
                      <div className="flex items-center gap-2 min-w-0">
                        <span className="w-2 h-2 rounded-full bg-rose-500 shrink-0" />
                        <h4 className="font-bold text-slate-900 text-sm truncate group-hover:text-rose-700 transition-colors">
                          {task.title}
                        </h4>
                      </div>
                      <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-rose-600 transition-colors shrink-0" />
                    </div>

                    <div className="flex items-center gap-2 text-xs text-slate-500 mb-2">
                      <span className="font-medium text-slate-700">{task.course}</span>
                      {isOverdue && (
                        <span className="text-[10px] font-bold text-rose-700 bg-rose-100 px-1.5 py-0.2 rounded">
                          OVERDUE
                        </span>
                      )}
                    </div>

                    <div className="flex items-center justify-between text-xs pt-2 border-t border-rose-100">
                      <div className="flex items-center gap-2.5">
                        <span className="text-amber-800 font-semibold flex items-center gap-1">
                          <Clock className="w-3.5 h-3.5 text-amber-600" />
                          {countdown}
                        </span>
                        <span className="text-slate-500 flex items-center gap-1">
                          <Layers className="w-3.5 h-3.5" />
                          {remaining} left
                        </span>
                      </div>
                      <RiskBadge level={task.riskLevel} size="sm" />
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="p-3 text-xs text-slate-400 rounded-xl bg-slate-50 border border-slate-100 text-center">
              No tasks due in the next 48 hours.
            </div>
          )}
        </div>

        {/* Horizon 2: Mid-Range Horizon (more than 48 hours and up to 5 days) */}
        <div>
          <div className="flex items-center justify-between gap-2 mb-2">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-amber-500" />
              <span className="text-xs font-bold text-amber-800 uppercase tracking-wider">
                Mid-Range Horizon (&gt; 48 Hours and up to 5 Days)
              </span>
            </div>
            <span className="text-[11px] text-amber-700 font-semibold">
              {midRangeTasks.length} {midRangeTasks.length === 1 ? 'task' : 'tasks'}
            </span>
          </div>

          {midRangeTasks.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {midRangeTasks.map(task => {
                const remaining = formatHoursAndMinutes(task.remainingHours || 0);
                const countdown = formatCountdown(task.deadline);

                return (
                  <div
                    key={task.id}
                    onClick={() => onOpenTask(task)}
                    className="group cursor-pointer p-3.5 rounded-xl border border-amber-200/80 bg-gradient-to-r from-amber-50/40 to-white hover:from-amber-100/50 hover:to-white transition-all hover:shadow-xs"
                  >
                    <div className="flex items-start justify-between gap-2 mb-1.5">
                      <div className="flex items-center gap-2 min-w-0">
                        <span className="w-2 h-2 rounded-full bg-amber-500 shrink-0" />
                        <h4 className="font-bold text-slate-900 text-sm truncate group-hover:text-amber-800 transition-colors">
                          {task.title}
                        </h4>
                      </div>
                      <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-amber-600 transition-colors shrink-0" />
                    </div>

                    <div className="flex items-center gap-2 text-xs text-slate-500 mb-2">
                      <span className="font-medium text-slate-700">{task.course}</span>
                    </div>

                    <div className="flex items-center justify-between text-xs pt-2 border-t border-amber-100">
                      <div className="flex items-center gap-2.5">
                        <span className="text-slate-700 font-medium flex items-center gap-1">
                          <Clock className="w-3.5 h-3.5 text-amber-500" />
                          {countdown}
                        </span>
                        <span className="text-slate-500 flex items-center gap-1">
                          <Layers className="w-3.5 h-3.5" />
                          {remaining} left
                        </span>
                      </div>
                      <RiskBadge level={task.riskLevel} size="sm" />
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="p-3 text-xs text-slate-400 rounded-xl bg-slate-50 border border-slate-100 text-center">
              No tasks due in 3 to 5 days.
            </div>
          )}
        </div>

        {/* Horizon 3: Upcoming (> 5 Days) */}
        <div>
          <div className="flex items-center justify-between gap-2 mb-2">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
              <span className="text-xs font-bold text-emerald-800 uppercase tracking-wider">
                Upcoming (More than 5 Days)
              </span>
            </div>
            <span className="text-[11px] text-emerald-700 font-semibold">
              {upcomingTasks.length} {upcomingTasks.length === 1 ? 'task' : 'tasks'}
            </span>
          </div>

          {upcomingTasks.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {upcomingTasks.map(task => {
                const remaining = formatHoursAndMinutes(task.remainingHours || 0);
                const countdown = formatCountdown(task.deadline);

                return (
                  <div
                    key={task.id}
                    onClick={() => onOpenTask(task)}
                    className="group cursor-pointer p-3.5 rounded-xl border border-slate-200 bg-white hover:bg-slate-50/80 transition-all hover:shadow-2xs"
                  >
                    <div className="flex items-start justify-between gap-2 mb-1.5">
                      <div className="flex items-center gap-2 min-w-0">
                        <span className="w-2 h-2 rounded-full bg-emerald-500 shrink-0" />
                        <h4 className="font-semibold text-slate-800 text-sm truncate group-hover:text-indigo-600 transition-colors">
                          {task.title}
                        </h4>
                      </div>
                      <RiskBadge level={task.riskLevel} size="sm" />
                    </div>

                    <div className="flex items-center justify-between text-xs text-slate-500 mt-2 pt-2 border-t border-slate-100">
                      <span>{task.course}</span>
                      <div className="flex items-center gap-2">
                        <span className="text-slate-500">{remaining} left</span>
                        <span className="text-emerald-700 font-medium">Due in {countdown}</span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="p-3 text-xs text-slate-400 rounded-xl bg-slate-50 border border-slate-100 text-center">
              No tasks due past 5 days.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
