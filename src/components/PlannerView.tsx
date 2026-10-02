import React from 'react';
import { Task } from '../types';
import { formatDeadlinePretty } from '../utils/dateUtils';
import { formatHoursAndMinutes } from '../utils/durationUtils';
import { Calendar, Clock } from 'lucide-react';
import { RiskBadge } from './RiskBadge';
import { WeeklyWorkloadChart } from './WeeklyWorkloadChart';

interface PlannerViewProps {
  tasks: Task[];
  onOpenTask: (task: Task) => void;
  onOpenReversePlanner: () => void;
}

export const PlannerView: React.FC<PlannerViewProps> = ({
  tasks,
  onOpenTask,
  onOpenReversePlanner
}) => {
  const activeTasks = tasks
    .filter(t => t.status !== 'completed')
    .sort((a, b) => new Date(a.deadline).getTime() - new Date(b.deadline).getTime());

  const currentMonthName = new Intl.DateTimeFormat('en-US', { month: 'long', year: 'numeric' }).format(new Date());

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900 tracking-tight">Weekly Planner & Timeline</h1>
          <p className="text-xs text-slate-500 mt-0.5">
            Synchronize your study blocks against approaching academic deadlines
          </p>
        </div>

        <button
          onClick={onOpenReversePlanner}
          className="px-4 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs shadow-md transition-all flex items-center gap-2 cursor-pointer"
        >
          <Clock className="w-4 h-4 text-emerald-400" />
          <span>Launch Reverse Planner</span>
        </button>
      </div>

      {/* Workload Chart */}
      <WeeklyWorkloadChart tasks={tasks} />

      {/* Week Schedule Days Columns */}
      <div className="bg-white rounded-2xl border border-slate-200/80 p-5 shadow-xs space-y-4">
        <div className="flex items-center justify-between border-b border-slate-100 pb-3">
          <h3 className="font-bold text-slate-900 text-sm flex items-center gap-2">
            <Calendar className="w-4 h-4 text-indigo-600" />
            <span>Upcoming Submission Schedule</span>
          </h3>
          <span className="text-xs text-slate-500 font-medium">{currentMonthName}</span>
        </div>

        <div className="space-y-3">
          {activeTasks.length > 0 ? (
            activeTasks.map(task => {
              const deadlineDate = new Date(task.deadline);
              const monthStr = deadlineDate.toLocaleDateString('en-US', { month: 'short' });
              const dayNum = deadlineDate.getDate();

              return (
                <div
                  key={task.id}
                  onClick={() => onOpenTask(task)}
                  className="p-4 rounded-xl border border-slate-200 hover:border-indigo-300 bg-white hover:bg-slate-50/50 cursor-pointer transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs"
                >
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-xl bg-slate-100 flex flex-col items-center justify-center font-bold shrink-0">
                      <span className="text-[10px] uppercase text-slate-500">
                        {monthStr}
                      </span>
                      <span className="text-sm font-black text-slate-900 leading-none">
                        {dayNum}
                      </span>
                    </div>

                    <div>
                      <h4 className="font-bold text-sm text-slate-900">{task.title}</h4>
                      <div className="flex items-center gap-2 text-slate-500 mt-0.5">
                        <span className="font-medium text-slate-700">{task.course}</span>
                        <span>•</span>
                        <span>Due {formatDeadlinePretty(task.deadline)}</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 self-end sm:self-center">
                    <div className="text-right">
                      <span className="font-bold text-slate-800">
                        {formatHoursAndMinutes(task.remainingHours || 0)} left
                      </span>
                      <span className="text-[10px] text-indigo-600 font-medium block">
                        {task.completionPercentage || 0}% complete
                      </span>
                    </div>
                    <RiskBadge level={task.riskLevel} size="sm" />
                  </div>
                </div>
              );
            })
          ) : (
            <div className="p-8 text-center text-xs text-slate-400">
              No active commitments pending submission.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
