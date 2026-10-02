import React, { useState } from 'react';
import { Task, ReversePlanBlock } from '../types';
import { generateReversePlan } from '../services/reversePlanner';
import {
  X,
  Timer,
  Sparkles,
  Clock,
  Play
} from 'lucide-react';
import { RiskBadge } from './RiskBadge';

interface ReversePlannerModalProps {
  isOpen: boolean;
  onClose: () => void;
  tasks: Task[];
  onStartSession: (task: Task) => void;
}

export const ReversePlannerModal: React.FC<ReversePlannerModalProps> = ({
  isOpen,
  onClose,
  tasks,
  onStartSession
}) => {
  if (!isOpen) return null;

  const [freeHours, setFreeHours] = useState(3.0);
  const [timeWindow, setTimeWindow] = useState('Tonight, 7:00 PM – 10:00 PM');
  const [startHour, setStartHour] = useState(19); // 7:00 PM

  const planResult = generateReversePlan(tasks, freeHours, startHour, 0);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/50 backdrop-blur-xs animate-in fade-in duration-150">
      <div className="bg-white rounded-2xl border border-slate-200 shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="p-6 border-b border-slate-100 flex items-start justify-between gap-4 sticky top-0 bg-white z-10">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="px-2.5 py-0.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-bold uppercase tracking-wider flex items-center gap-1.5">
                <Timer className="w-3.5 h-3.5 text-emerald-600" /> Reverse Planner
              </span>
              <span className="text-xs px-2 py-0.5 rounded bg-slate-100 text-slate-600 font-medium">
                Time-Blocked Allocation
              </span>
            </div>
            <h2 className="text-xl font-bold text-slate-900">Workload Capacity Allocation</h2>
            <p className="text-xs text-slate-500 mt-0.5">
              Tell WorkRadar your available study window, and it will allocate your time across competing deliverables.
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
          {/* Controls: Free time and Window selector */}
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-4">
            <div>
              <div className="flex items-center justify-between text-xs font-semibold mb-1.5">
                <span className="text-slate-700">How much free study time do you have?</span>
                <span className="text-indigo-600 font-bold text-sm">{freeHours} Hours</span>
              </div>
              <input
                type="range"
                min="1"
                max="6"
                step="0.5"
                value={freeHours}
                onChange={e => setFreeHours(parseFloat(e.target.value))}
                className="w-full accent-indigo-600 cursor-pointer"
              />
              <div className="flex justify-between text-[11px] text-slate-400 mt-1">
                <span>1 hour sprint</span>
                <span>3 hours (Recommended)</span>
                <span>6 hours deep work</span>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 border-t border-slate-200">
              <div>
                <label className="text-xs font-semibold text-slate-700 block mb-1">
                  When are you studying?
                </label>
                <select
                  value={startHour}
                  onChange={e => {
                    const h = parseInt(e.target.value, 10);
                    setStartHour(h);
                    setTimeWindow(h === 19 ? 'Tonight, 7:00 PM – 10:00 PM' : `Session starting at ${h}:00`);
                  }}
                  className="w-full text-xs p-2.5 rounded-lg border border-slate-300 bg-white font-medium cursor-pointer"
                >
                  <option value={19}>Tonight (7:00 PM – 10:00 PM)</option>
                  <option value={14}>Afternoon (2:00 PM – 5:00 PM)</option>
                  <option value={9}>Morning (9:00 AM – 12:00 PM)</option>
                  <option value={20}>Late Evening (8:00 PM – 11:00 PM)</option>
                </select>
              </div>

              <div>
                <label className="text-xs font-semibold text-slate-700 block mb-1">
                  Active Optimization Target
                </label>
                <div className="text-xs p-2.5 rounded-lg border border-slate-200 bg-white text-slate-700 font-medium">
                  Protect urgent deadlines & minimize collision risk
                </div>
              </div>
            </div>
          </div>

          {/* Time-Blocked Schedule Blocks */}
          <div>
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-600 flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-indigo-600" />
                <span>Recommended Study Schedule ({planResult.blocks.length} Blocks)</span>
              </h3>
              <span className="text-xs text-indigo-600 font-semibold">
                {planResult.totalAllocatedMinutes}m Allocated
              </span>
            </div>

            <div className="space-y-2.5">
              {planResult.blocks.map((block, idx) => {
                const targetTask = tasks.find(t => t.id === block.taskId);

                return (
                  <div
                    key={block.id}
                    className="p-4 rounded-xl border border-slate-200 bg-white hover:border-indigo-300 hover:shadow-xs transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs"
                  >
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-lg bg-indigo-50 border border-indigo-100 flex items-center justify-center font-bold text-indigo-700 shrink-0">
                        {idx + 1}
                      </div>

                      <div>
                        <div className="flex items-center gap-2">
                          <span className="font-mono font-bold text-slate-900">
                            {block.startTime} – {block.endTime}
                          </span>
                          <span className="text-[11px] font-semibold text-indigo-700 bg-indigo-50 px-2 py-0.5 rounded">
                            {block.durationMinutes} min
                          </span>
                        </div>
                        <h4 className="font-bold text-sm text-slate-900 mt-1">
                          {block.taskTitle}
                        </h4>
                        <p className="text-slate-500 text-[11px]">
                          {block.course} · Focus: {block.focusArea}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 self-end sm:self-center shrink-0">
                      <RiskBadge level={block.riskLevel} size="sm" />
                      {targetTask && (
                        <button
                          onClick={() => {
                            onClose();
                            onStartSession(targetTask);
                          }}
                          className="px-3 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-white font-semibold text-xs flex items-center gap-1 cursor-pointer"
                        >
                          <Play className="w-3 h-3 fill-white" />
                          <span>Start Block</span>
                        </button>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* "Why This Plan?" Card */}
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1.5">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-indigo-600" />
              <span>Why this schedule?</span>
            </h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              {planResult.whyThisPlan}
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="p-5 border-t border-slate-100 bg-slate-50/50 flex items-center justify-between sticky bottom-0 z-10">
          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-semibold text-slate-600 hover:bg-slate-200 rounded-xl cursor-pointer"
          >
            Close
          </button>

          <button
            onClick={() => {
              if (planResult.blocks.length > 0) {
                const firstTask = tasks.find(t => t.id === planResult.blocks[0].taskId);
                if (firstTask) {
                  onClose();
                  onStartSession(firstTask);
                }
              }
            }}
            className="px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs shadow-md transition-all flex items-center gap-2 hover:scale-[1.02] cursor-pointer"
          >
            <Play className="w-4 h-4 fill-white" />
            <span>Start Session with First Block</span>
          </button>
        </div>
      </div>
    </div>
  );
};
