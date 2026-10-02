import React, { useState, useEffect } from 'react';
import { Task, Milestone } from '../types';
import { generateMilestonesForTask } from '../services/smartSplit';
import { formatHoursAndMinutes, formatDurationMinutes } from '../utils/durationUtils';
import {
  X,
  Split,
  Sparkles,
  CheckCircle,
  Check,
  RotateCcw
} from 'lucide-react';

interface SmartSplitModalProps {
  task: Task | null;
  onClose: () => void;
  onSaveMilestones: (taskId: string, milestones: Milestone[]) => void;
}

export const SmartSplitModal: React.FC<SmartSplitModalProps> = ({
  task,
  onClose,
  onSaveMilestones
}) => {
  if (!task) return null;

  // Controlled milestones state initialized for the current task
  const [milestones, setMilestones] = useState<Milestone[]>(() => {
    return task.milestones && task.milestones.length > 0
      ? task.milestones
      : generateMilestonesForTask(task);
  });

  // Whenever task.id changes, reset milestones for the newly selected task
  useEffect(() => {
    if (task) {
      setMilestones(
        task.milestones && task.milestones.length > 0
          ? task.milestones
          : generateMilestonesForTask(task)
      );
    }
  }, [task.id]);

  // Reliable single toggle handler without event conflict
  const handleToggle = (id: string) => {
    setMilestones(prev =>
      prev.map(m => (m.id === id ? { ...m, completed: !m.completed } : m))
    );
  };

  const handleRegenerate = () => {
    const fresh = generateMilestonesForTask(task);
    setMilestones(fresh);
  };

  const handleSave = () => {
    onSaveMilestones(task.id, milestones);
    onClose();
  };

  const totalMilestoneMinutes = milestones.reduce(
    (sum, m) => sum + (m.estimatedMinutes || (m.estimatedHours ? m.estimatedHours * 60 : 60)),
    0
  );
  const completedCount = milestones.filter(m => m.completed).length;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/50 backdrop-blur-xs animate-in fade-in duration-150">
      <div className="bg-white rounded-2xl border border-slate-200 shadow-2xl max-w-xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="p-6 border-b border-slate-100 flex items-start justify-between gap-4 sticky top-0 bg-white z-10">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="px-2.5 py-0.5 rounded-full bg-indigo-50 border border-indigo-200 text-indigo-700 text-xs font-bold uppercase tracking-wider flex items-center gap-1.5">
                <Split className="w-3.5 h-3.5" /> Work-Backwards Engine
              </span>
            </div>
            <h2 className="text-xl font-bold text-slate-900">
              Break Down "{task.title}"
            </h2>
            <p className="text-xs text-slate-500 mt-0.5">
              WorkRadar reverse-engineered your deadline into {milestones.length} tailored milestones for {task.course}.
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
        <div className="p-6 space-y-4">
          <div className="flex items-center justify-between text-xs text-slate-600 px-1 font-medium">
            <span>Milestone Schedule ({completedCount} of {milestones.length} completed)</span>
            <span>Total effort: {formatDurationMinutes(totalMilestoneMinutes)}</span>
          </div>

          <div className="space-y-3">
            {milestones.map((m, idx) => {
              const durationText = m.estimatedMinutes
                ? formatDurationMinutes(m.estimatedMinutes)
                : formatHoursAndMinutes(m.estimatedHours || 1.0);

              return (
                <button
                  key={m.id}
                  type="button"
                  role="checkbox"
                  aria-checked={m.completed}
                  tabIndex={0}
                  onClick={() => handleToggle(m.id)}
                  onKeyDown={e => {
                    if (e.key === ' ' || e.key === 'Enter') {
                      e.preventDefault();
                      handleToggle(m.id);
                    }
                  }}
                  className={`w-full p-4 rounded-xl border text-left transition-all cursor-pointer flex items-start gap-3.5 focus:outline-hidden focus:ring-2 focus:ring-indigo-500 select-none ${
                    m.completed
                      ? 'bg-emerald-50/50 border-emerald-300 shadow-2xs'
                      : 'bg-white border-slate-200 hover:border-indigo-400 shadow-2xs'
                  }`}
                >
                  {/* Visual Checkbox Indicator */}
                  <div
                    className={`w-7 h-7 rounded-lg flex items-center justify-center text-xs font-bold shrink-0 mt-0.5 transition-all pointer-events-none ${
                      m.completed
                        ? 'bg-emerald-600 text-white shadow-xs'
                        : 'bg-indigo-50 text-indigo-700 border border-indigo-200'
                    }`}
                  >
                    {m.completed ? <Check className="w-4 h-4 stroke-[3]" /> : idx + 1}
                  </div>

                  <div className="flex-1 min-w-0 pointer-events-none">
                    <div className="flex items-center justify-between gap-2">
                      <h4
                        className={`text-sm font-bold truncate transition-colors ${
                          m.completed ? 'line-through text-slate-400' : 'text-slate-900'
                        }`}
                      >
                        {m.title}
                      </h4>
                      <span
                        className={`text-[11px] font-semibold px-2.5 py-0.5 rounded shrink-0 transition-colors ${
                          m.completed
                            ? 'bg-emerald-100 text-emerald-800'
                            : 'bg-slate-100 text-slate-700'
                        }`}
                      >
                        {m.targetDay || 'Target'} · {durationText}
                      </span>
                    </div>
                    {m.description && (
                      <p className={`text-xs mt-1 transition-colors ${m.completed ? 'text-slate-400' : 'text-slate-500'}`}>
                        {m.description}
                      </p>
                    )}
                  </div>
                </button>
              );
            })}
          </div>

          <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-600 flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-indigo-600 shrink-0" />
            <span>
              Checking off milestones dynamically updates overall assignment completion on your dashboard!
            </span>
          </div>
        </div>

        {/* Footer */}
        <div className="p-5 border-t border-slate-100 bg-slate-50/50 flex items-center justify-between sticky bottom-0 z-10">
          <button
            type="button"
            onClick={handleRegenerate}
            className="text-xs font-semibold text-indigo-600 hover:text-indigo-800 flex items-center gap-1.5 px-3 py-2 rounded-lg hover:bg-indigo-50 transition-colors cursor-pointer"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Regenerate Milestones</span>
          </button>

          <button
            type="button"
            onClick={handleSave}
            className="px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs shadow-md transition-all flex items-center gap-1.5 hover:scale-[1.02] cursor-pointer"
          >
            <CheckCircle className="w-4 h-4 text-emerald-400" />
            <span>Apply Milestones to Task</span>
          </button>
        </div>
      </div>
    </div>
  );
};
