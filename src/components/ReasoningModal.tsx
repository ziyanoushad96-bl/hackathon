import React from 'react';
import { Task } from '../types';
import { formatHoursAndMinutes, formatCountdown } from '../utils/dateUtils';
import {
  X,
  Sparkles,
  Clock,
  Layers,
  AlertTriangle,
  CheckCircle2,
  Calendar,
  Compass
} from 'lucide-react';
import { RiskBadge } from './RiskBadge';

interface ReasoningModalProps {
  task: Task | null;
  onClose: () => void;
}

export const ReasoningModal: React.FC<ReasoningModalProps> = ({ task, onClose }) => {
  if (!task) return null;

  const remaining = formatHoursAndMinutes(task.remainingHours || 0);
  const countdown = formatCountdown(task.deadline);
  const urgencyExplanation =
    task.urgencyReason ||
    task.riskReason ||
    `Deadline is in ${countdown} and significant work remains.`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/50 backdrop-blur-xs animate-in fade-in duration-150">
      <div className="bg-white rounded-2xl border border-slate-200 shadow-2xl max-w-lg w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="p-6 border-b border-slate-100 flex items-start justify-between gap-4 sticky top-0 bg-white z-10">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="px-2.5 py-0.5 rounded-full bg-indigo-50 border border-indigo-200 text-indigo-700 text-xs font-bold uppercase tracking-wider flex items-center gap-1.5">
                <Compass className="w-3.5 h-3.5" /> Decision Reasoning
              </span>
            </div>
            <h2 className="text-xl font-bold text-slate-900">Why Was This Task Selected?</h2>
            <p className="text-xs text-slate-500 mt-0.5">
              Workload assistant analysis based on deadline urgency, capacity, and conflicts
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-slate-700 rounded-lg hover:bg-slate-100 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 space-y-5">
          {/* Selected Task Overview */}
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-between gap-3">
            <div>
              <h3 className="font-bold text-slate-900 text-sm">{task.title}</h3>
              <p className="text-xs text-slate-500">{task.course}</p>
            </div>
            <RiskBadge level={task.riskLevel} size="md" />
          </div>

          {/* Natural Language Explanation Quote Card */}
          <div className="p-4 rounded-xl bg-indigo-50/80 border border-indigo-200 text-xs text-indigo-950 font-medium leading-relaxed flex items-start gap-2.5">
            <Sparkles className="w-4 h-4 text-indigo-600 shrink-0 mt-0.5" />
            <span>«"{urgencyExplanation}"»</span>
          </div>

          {/* Qualitative Decision Factors */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500">
              Key Decision Factors
            </h4>

            {/* 1. Deadline Urgency */}
            <div className="p-3.5 rounded-xl border border-slate-200 bg-white space-y-1">
              <div className="flex items-center justify-between text-xs font-semibold">
                <span className="flex items-center gap-1.5 text-slate-700">
                  <Clock className="w-4 h-4 text-amber-500" /> Deadline Proximity
                </span>
                <span className="font-bold text-slate-900">{countdown} remaining</span>
              </div>
              <p className="text-[11px] text-slate-500">
                Deadline is approaching rapidly. Timely start prevents last-minute cramming.
              </p>
            </div>

            {/* 2. Remaining Workload */}
            <div className="p-3.5 rounded-xl border border-slate-200 bg-white space-y-1">
              <div className="flex items-center justify-between text-xs font-semibold">
                <span className="flex items-center gap-1.5 text-slate-700">
                  <Layers className="w-4 h-4 text-indigo-500" /> Remaining Workload & Progress
                </span>
                <span className="font-bold text-slate-900">
                  {remaining} ({task.completionPercentage}% done)
                </span>
              </div>
              <p className="text-[11px] text-slate-500">
                {task.completionPercentage && task.completionPercentage > 0
                  ? `Substantial progress made, but ${remaining} of focused work remains.`
                  : `Work has not yet begun. Requires ${remaining} of dedicated focus.`}
              </p>
            </div>

            {/* 3. Study Capacity & Time Window */}
            <div className="p-3.5 rounded-xl border border-slate-200 bg-white space-y-1">
              <div className="flex items-center justify-between text-xs font-semibold">
                <span className="flex items-center gap-1.5 text-slate-700">
                  <Calendar className="w-4 h-4 text-emerald-600" /> Study Capacity Window
                </span>
                <span
                  className={`font-bold px-2 py-0.5 rounded text-[11px] ${
                    task.capacityStatus === 'Overloaded'
                      ? 'bg-rose-100 text-rose-700'
                      : task.capacityStatus === 'Tight'
                      ? 'bg-amber-100 text-amber-700'
                      : 'bg-emerald-100 text-emerald-700'
                  }`}
                >
                  {task.capacityStatus || 'Overloaded'}
                </span>
              </div>
              <p className="text-[11px] text-slate-500">
                Estimated {task.availableHoursBeforeDeadline || 4}h available study time before deadline versus{' '}
                {remaining} required work.
              </p>
            </div>

            {/* 4. Conflict & Collision */}
            <div className="p-3.5 rounded-xl border border-slate-200 bg-white space-y-1">
              <div className="flex items-center justify-between text-xs font-semibold">
                <span className="flex items-center gap-1.5 text-slate-700">
                  <AlertTriangle className="w-4 h-4 text-rose-500" /> Deadline Collision Check
                </span>
                <span className="font-bold text-slate-900">
                  {task.isColliding ? 'Collision Detected' : 'Clear Window'}
                </span>
              </div>
              <p className="text-[11px] text-slate-500">
                {task.isColliding
                  ? 'Coincides with another assignment deadline in the same 48-hour window.'
                  : 'Independent submission window without immediate academic conflict.'}
              </p>
            </div>
          </div>

          {/* Qualitative Workload Status Card */}
          <div className="p-4 rounded-xl bg-slate-900 text-white flex items-center justify-between">
            <div>
              <span className="text-[11px] text-slate-400 uppercase font-bold tracking-wider block">
                Workload Status
              </span>
              <span className="text-xs text-slate-300">Capacity: {task.capacityStatus || 'Overloaded'}</span>
            </div>
            <RiskBadge level={task.riskLevel} size="md" />
          </div>
        </div>

        {/* Footer */}
        <div className="p-5 border-t border-slate-100 bg-slate-50/50 flex justify-end sticky bottom-0 z-10">
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl bg-slate-900 text-white font-bold text-xs hover:bg-slate-800 transition-colors"
          >
            Got It
          </button>
        </div>
      </div>
    </div>
  );
};
