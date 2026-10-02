import React, { useState, useMemo } from 'react';
import { Task, SaveMeTriage } from '../types';
import { generateSaveMeTriage } from '../services/saveMe';
import { formatHoursAndMinutes } from '../utils/durationUtils';
import { formatCountdown } from '../utils/dateUtils';
import {
  X,
  LifeBuoy,
  Scissors,
  CalendarClock,
  ShieldCheck,
  Check,
  CheckCircle2,
  Clock,
  Layers
} from 'lucide-react';
import { RiskBadge } from './RiskBadge';

interface SaveMeModalProps {
  isOpen: boolean;
  onClose: () => void;
  tasks: Task[];
  shortfallHours: number;
  onApplyTriage: (savedHours: number) => void;
  onOpenTask: (task: Task) => void;
}

export const SaveMeModal: React.FC<SaveMeModalProps> = ({
  isOpen,
  onClose,
  tasks,
  shortfallHours,
  onApplyTriage,
  onOpenTask
}) => {
  if (!isOpen) return null;

  // Always compute triage dynamically from live tasks and shortfall
  const triage = useMemo(() => {
    return generateSaveMeTriage(tasks, shortfallHours);
  }, [tasks, shortfallHours]);

  const [isApplied, setIsApplied] = useState(false);

  const handleApply = () => {
    setIsApplied(true);
    onApplyTriage(triage.totalTimeSaved);
    setTimeout(() => {
      onClose();
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/50 backdrop-blur-xs animate-in fade-in duration-150">
      <div className="bg-white rounded-2xl border border-slate-200 shadow-2xl max-w-3xl w-full max-h-[92vh] overflow-y-auto">
        {/* Header */}
        <div className="p-6 border-b border-slate-100 flex items-start justify-between gap-4 sticky top-0 bg-white z-10">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="px-2.5 py-0.5 rounded-full bg-indigo-50 border border-indigo-200 text-indigo-700 text-xs font-bold uppercase tracking-wider flex items-center gap-1.5">
                <LifeBuoy className="w-3.5 h-3.5" /> Emergency Triage Protocol
              </span>
              <span className="text-xs px-2 py-0.5 rounded bg-rose-50 text-rose-700 font-semibold border border-rose-200">
                Shortfall: -{formatHoursAndMinutes(shortfallHours)}
              </span>
            </div>
            <h2 className="text-xl font-bold text-slate-900">Save Me Mode</h2>
            <p className="text-xs text-slate-500 mt-0.5">
              Triage your workload into MUST DO, CAN REDUCE, and CAN DELAY to eliminate time deficits.
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-slate-700 rounded-lg hover:bg-slate-100 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 space-y-6">
          {/* Recovery Overview Callout */}
          <div className="p-4 rounded-xl bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-indigo-500/5 border border-indigo-200/80 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <p className="text-xs font-bold text-indigo-950 uppercase tracking-wider">
                Minimum Viable Strategy Results:
              </p>
              <p className="text-xs text-slate-600 mt-0.5">
                By trimming optional polish and deferring lower-urgency assignments, we recover{' '}
                <strong className="text-emerald-700 font-bold">
                  {formatHoursAndMinutes(triage.totalTimeSaved)}
                </strong>
                , bringing your deficit back to safe bounds.
              </p>
            </div>

            <div className="text-right shrink-0">
              <span className="text-xs text-slate-500 block">Recovered Capacity</span>
              <span className="text-lg font-bold text-emerald-600">
                +{formatHoursAndMinutes(triage.totalTimeSaved)}
              </span>
            </div>
          </div>

          {/* 1. MUST DO (Red / High Impact) */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <h3 className="text-xs font-bold uppercase tracking-wider text-rose-700 flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-rose-500" />
                <span>MUST DO — Urgent & Non-Negotiable ({triage.mustDo.length})</span>
              </h3>
              <span className="text-[11px] text-slate-400">Strict submission targets</span>
            </div>

            <div className="space-y-3">
              {triage.mustDo.map(({ task, strategy, mvpHours, savedHours }) => {
                const remaining = formatHoursAndMinutes(task.remainingHours || 0);
                const countdown = formatCountdown(task.deadline);

                return (
                  <div
                    key={task.id}
                    className="p-4 rounded-xl border border-rose-200 bg-rose-50/30 space-y-2.5"
                  >
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <div className="flex items-center gap-2">
                          <h4 className="font-bold text-slate-900 text-sm">{task.title}</h4>
                          <RiskBadge level={task.riskLevel} size="sm" />
                        </div>
                        <div className="flex items-center gap-2 text-xs text-slate-500 mt-0.5">
                          <span>{task.course}</span>
                          <span>•</span>
                          <span className="font-semibold text-rose-700 flex items-center gap-1">
                            <Clock className="w-3 h-3" /> Due in {countdown}
                          </span>
                          <span>•</span>
                          <span className="font-semibold text-slate-700 flex items-center gap-1">
                            <Layers className="w-3 h-3" /> {remaining} remaining
                          </span>
                        </div>
                      </div>

                      <div className="text-right text-xs shrink-0">
                        <span className="font-bold text-slate-800 block">MVP: {formatHoursAndMinutes(mvpHours)}</span>
                        <span className="text-emerald-600 text-[11px] font-semibold">
                          Saves {formatHoursAndMinutes(savedHours)}
                        </span>
                      </div>
                    </div>

                    {/* MVP Strategy Checklist */}
                    <div className="bg-white p-3 rounded-lg border border-rose-100 space-y-1 text-xs text-slate-700">
                      <span className="text-[10px] font-bold uppercase text-slate-400 block mb-1">
                        Minimum Viable Submission Strategy:
                      </span>
                      {strategy.map((item, idx) => (
                        <div key={idx} className="flex items-start gap-1.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-rose-500 mt-0.5 shrink-0" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* 2. CAN REDUCE (Amber / Strip Discretionary Polish) */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <h3 className="text-xs font-bold uppercase tracking-wider text-amber-700 flex items-center gap-1.5">
                <Scissors className="w-3.5 h-3.5 text-amber-600" />
                <span>CAN REDUCE — Strip Discretionary Polish ({triage.canReduce.length})</span>
              </h3>
              <span className="text-[11px] text-slate-400">Aim for passing MVP</span>
            </div>

            <div className="space-y-3">
              {triage.canReduce.map(({ task, strategy, mvpHours, savedHours }) => {
                const remaining = formatHoursAndMinutes(task.remainingHours || 0);
                const countdown = formatCountdown(task.deadline);

                return (
                  <div
                    key={task.id}
                    className="p-4 rounded-xl border border-amber-200 bg-amber-50/20 space-y-2.5"
                  >
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <div className="flex items-center gap-2">
                          <h4 className="font-bold text-slate-900 text-sm">{task.title}</h4>
                          <RiskBadge level={task.riskLevel} size="sm" />
                        </div>
                        <div className="flex items-center gap-2 text-xs text-slate-500 mt-0.5">
                          <span>{task.course}</span>
                          <span>•</span>
                          <span className="font-semibold text-amber-800">Due in {countdown}</span>
                          <span>•</span>
                          <span className="font-semibold text-slate-700">{remaining} remaining</span>
                        </div>
                      </div>

                      <div className="text-right text-xs shrink-0">
                        <span className="font-bold text-slate-800 block">MVP: {formatHoursAndMinutes(mvpHours)}</span>
                        <span className="text-emerald-600 text-[11px] font-semibold">
                          Saves {formatHoursAndMinutes(savedHours)}
                        </span>
                      </div>
                    </div>

                    <div className="bg-white p-3 rounded-lg border border-amber-100 space-y-1 text-xs text-slate-700">
                      {strategy.map((item, idx) => (
                        <div key={idx} className="flex items-start gap-1.5">
                          <Scissors className="w-3.5 h-3.5 text-amber-500 mt-0.5 shrink-0" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* 3. CAN DELAY (Green / Lower Urgency) */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <h3 className="text-xs font-bold uppercase tracking-wider text-emerald-800 flex items-center gap-1.5">
                <CalendarClock className="w-3.5 h-3.5 text-emerald-600" />
                <span>CAN DELAY — Postpone Until Bottleneck Clears ({triage.canDelay.length})</span>
              </h3>
              <span className="text-[11px] text-slate-400">Low urgency runway</span>
            </div>

            <div className="space-y-2">
              {triage.canDelay.map(({ task, strategy, recommendedNewDate }) => (
                <div
                  key={task.id}
                  className="p-3.5 rounded-xl border border-slate-200 bg-white flex items-center justify-between gap-3 text-xs"
                >
                  <div>
                    <h4 className="font-bold text-slate-800">{task.title}</h4>
                    <p className="text-slate-500 text-[11px]">
                      {task.course} · Due next week
                    </p>
                  </div>

                  <div className="text-right">
                    <span className="text-[11px] text-emerald-700 font-semibold block">
                      Recommended: {recommendedNewDate}
                    </span>
                    <span className="text-[10px] text-slate-400">Postpone low urgency work</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="p-5 border-t border-slate-100 bg-slate-50/50 flex items-center justify-between sticky bottom-0 z-10">
          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-semibold text-slate-600 hover:bg-slate-200 rounded-xl cursor-pointer"
          >
            Cancel
          </button>

          <button
            onClick={handleApply}
            disabled={isApplied}
            className={`px-5 py-2.5 rounded-xl font-bold text-xs shadow-md transition-all flex items-center gap-2 cursor-pointer ${
              isApplied
                ? 'bg-emerald-600 text-white'
                : 'bg-indigo-600 hover:bg-indigo-700 text-white hover:scale-[1.02]'
            }`}
          >
            {isApplied ? (
              <>
                <Check className="w-4 h-4" />
                <span>Triage Protocol Applied!</span>
              </>
            ) : (
              <>
                <ShieldCheck className="w-4 h-4" />
                <span>Apply Triage Plan & Save {formatHoursAndMinutes(triage.totalTimeSaved)}</span>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};
