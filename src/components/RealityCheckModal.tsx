import React from 'react';
import { RealityCheckData, Task } from '../types';
import { formatHoursAndMinutes } from '../utils/dateUtils';
import {
  X,
  Scale,
  LifeBuoy,
  AlertTriangle,
  Clock,
  Layers,
  CheckCircle,
  ArrowRight,
  TrendingDown
} from 'lucide-react';
import { RiskBadge } from './RiskBadge';

interface RealityCheckModalProps {
  isOpen: boolean;
  onClose: () => void;
  realityCheck: RealityCheckData;
  onActivateSaveMe: () => void;
  onOpenTask: (task: Task) => void;
}

export const RealityCheckModal: React.FC<RealityCheckModalProps> = ({
  isOpen,
  onClose,
  realityCheck,
  onActivateSaveMe,
  onOpenTask
}) => {
  if (!isOpen) return null;

  const availableFormatted = formatHoursAndMinutes(realityCheck.availableHours);
  const requiredFormatted = formatHoursAndMinutes(realityCheck.requiredHours);
  const shortfallFormatted = formatHoursAndMinutes(realityCheck.shortfallHours);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/50 backdrop-blur-xs animate-in fade-in duration-150">
      <div className="bg-white rounded-2xl border border-slate-200 shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="p-6 border-b border-slate-100 flex items-start justify-between gap-4 sticky top-0 bg-white z-10">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="px-2.5 py-0.5 rounded-full bg-amber-50 border border-amber-200 text-amber-800 text-xs font-bold uppercase tracking-wider flex items-center gap-1.5">
                <Scale className="w-3.5 h-3.5 text-amber-600" /> Reality Check
              </span>
              <span className="text-xs px-2 py-0.5 rounded bg-slate-100 text-slate-600 font-medium">
                Next {realityCheck.daysAnalyzed} Days Horizon
              </span>
            </div>
            <h2 className="text-xl font-bold text-slate-900">Academic Time Deficit Analysis</h2>
            <p className="text-xs text-slate-500 mt-0.5">
              Determines whether you realistically possess enough study capacity before pending deadlines
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-slate-700 rounded-lg hover:bg-slate-100 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 space-y-6">
          {/* Overloaded / Balanced Big Status Banner */}
          <div
            className={`p-5 rounded-2xl border flex flex-col sm:flex-row sm:items-center justify-between gap-4 ${
              realityCheck.isOverloaded
                ? 'bg-rose-50/70 border-rose-200 text-rose-950'
                : 'bg-emerald-50/70 border-emerald-200 text-emerald-950'
            }`}
          >
            <div className="flex items-start gap-3.5">
              <div
                className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${
                  realityCheck.isOverloaded
                    ? 'bg-rose-500 text-white shadow-md shadow-rose-200'
                    : 'bg-emerald-500 text-white shadow-md shadow-emerald-200'
                }`}
              >
                {realityCheck.isOverloaded ? (
                  <AlertTriangle className="w-5 h-5" />
                ) : (
                  <CheckCircle className="w-5 h-5" />
                )}
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="font-bold text-lg leading-snug">
                    {realityCheck.isOverloaded ? "🔴 You're overloaded" : "🟢 Workload is Manageable"}
                  </h3>
                </div>
                <p className="text-xs opacity-90 mt-1 max-w-md">
                  {realityCheck.summaryText}
                </p>
              </div>
            </div>

            {realityCheck.isOverloaded && (
              <button
                onClick={() => {
                  onClose();
                  onActivateSaveMe();
                }}
                className="px-4 py-2.5 rounded-xl bg-rose-600 hover:bg-rose-700 text-white text-xs font-bold shadow-md shadow-rose-200 transition-all flex items-center justify-center gap-1.5 shrink-0 hover:scale-[1.02]"
              >
                <LifeBuoy className="w-4 h-4" />
                <span>Activate Save Me Mode</span>
              </button>
            )}
          </div>

          {/* 3 Metric Cards: Available vs Required vs Shortfall */}
          <div className="grid grid-cols-3 gap-3 text-center">
            <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
              <span className="text-[10px] uppercase font-bold text-slate-500 tracking-wider block mb-1">
                Available Time
              </span>
              <p className="text-lg font-bold text-slate-800">{availableFormatted}</p>
              <span className="text-[11px] text-slate-400 block mt-0.5">Study capacity</span>
            </div>

            <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
              <span className="text-[10px] uppercase font-bold text-slate-500 tracking-wider block mb-1">
                Required Work
              </span>
              <p className="text-lg font-bold text-slate-800">{requiredFormatted}</p>
              <span className="text-[11px] text-slate-400 block mt-0.5">Unfinished tasks</span>
            </div>

            <div
              className={`p-3.5 rounded-xl border ${
                realityCheck.isOverloaded
                  ? 'bg-rose-50 border-rose-200 text-rose-800'
                  : 'bg-emerald-50 border-emerald-200 text-emerald-800'
              }`}
            >
              <span className="text-[10px] uppercase font-bold tracking-wider block mb-1">
                {realityCheck.isOverloaded ? 'Shortfall Deficit' : 'Safety Buffer'}
              </span>
              <p className="text-lg font-bold">
                {realityCheck.isOverloaded ? `-${shortfallFormatted}` : `+${shortfallFormatted}`}
              </p>
              <span className="text-[11px] opacity-80 block mt-0.5">
                {realityCheck.isOverloaded ? 'Time deficit' : 'Extra capacity'}
              </span>
            </div>
          </div>

          {/* Contributing Tasks Breakdown */}
          <div>
            <div className="flex items-center justify-between mb-2.5">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-600">
                Tasks Contributing to Workload Demand
              </h4>
              <span className="text-xs text-slate-400">Ranked by required hours</span>
            </div>

            <div className="space-y-2">
              {realityCheck.contributingTasks.map(({ task, hours, percentageOfTotal }) => (
                <div
                  key={task.id}
                  onClick={() => {
                    onClose();
                    onOpenTask(task);
                  }}
                  className="p-3 rounded-xl border border-slate-200 bg-white hover:border-indigo-300 hover:bg-slate-50/50 cursor-pointer transition-all flex items-center justify-between gap-3 text-xs"
                >
                  <div className="flex items-center gap-2.5 min-w-0">
                    <span className="w-2 h-2 rounded-full bg-slate-400 shrink-0" />
                    <div className="min-w-0">
                      <p className="font-bold text-slate-900 truncate">{task.title}</p>
                      <p className="text-[11px] text-slate-500 truncate">
                        {task.course}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 shrink-0">
                    <div className="text-right">
                      <span className="font-bold text-slate-800">
                        {formatHoursAndMinutes(hours)}
                      </span>
                      <span className="text-[10px] text-slate-400 block font-medium">
                        {percentageOfTotal}% of total
                      </span>
                    </div>
                    <RiskBadge level={task.riskLevel} size="sm" />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Suggested Response Strategy */}
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700 flex items-center gap-1.5">
              <TrendingDown className="w-3.5 h-3.5 text-indigo-600" />
              <span>Recommended Tactical Response:</span>
            </h4>
            <ul className="space-y-1.5 text-xs text-slate-600">
              {realityCheck.suggestedActions.map((action, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 mt-1.5 shrink-0" />
                  <span>{action}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Footer */}
        <div className="p-5 border-t border-slate-100 bg-slate-50/50 flex items-center justify-between sticky bottom-0 z-10">
          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-semibold text-slate-600 hover:bg-slate-200 rounded-xl"
          >
            Dismiss
          </button>

          {realityCheck.isOverloaded && (
            <button
              onClick={() => {
                onClose();
                onActivateSaveMe();
              }}
              className="px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs shadow-md transition-all flex items-center gap-1.5 hover:scale-[1.02]"
            >
              <LifeBuoy className="w-4 h-4 text-indigo-400" />
              <span>Activate Save Me Mode</span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
