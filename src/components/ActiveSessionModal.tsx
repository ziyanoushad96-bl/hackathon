import React, { useState, useEffect } from 'react';
import { Task, Milestone } from '../types';
import {
  X,
  Play,
  Pause,
  RotateCcw,
  CheckCircle2,
  Check
} from 'lucide-react';
import { generateMilestonesForTask } from '../services/smartSplit';

interface ActiveSessionModalProps {
  task: Task | null;
  onClose: () => void;
  onUpdateTask: (task: Task) => void;
}

export const ActiveSessionModal: React.FC<ActiveSessionModalProps> = ({
  task,
  onClose,
  onUpdateTask
}) => {
  if (!task) return null;

  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(true);

  // Initialize checklist from task.milestones or task-specific generated milestones
  const [checklist, setChecklist] = useState<Milestone[]>(() => {
    if (task.milestones && task.milestones.length > 0) {
      return task.milestones;
    }
    return generateMilestonesForTask(task);
  });

  // Sync checklist if task id changes
  useEffect(() => {
    if (task.milestones && task.milestones.length > 0) {
      setChecklist(task.milestones);
    } else {
      setChecklist(generateMilestonesForTask(task));
    }
  }, [task.id]);

  useEffect(() => {
    let interval: any = null;
    if (isActive) {
      interval = setInterval(() => {
        setSeconds(s => s + 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isActive]);

  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;
  const timeFormatted = `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;

  const handleToggleMilestone = (mId: string) => {
    setChecklist(prev => {
      const updated = prev.map(m =>
        m.id === mId ? { ...m, completed: !m.completed } : m
      );
      // Immediately notify central state
      onUpdateTask({
        ...task,
        milestones: updated
      });
      return updated;
    });
  };

  const handleLogSession = () => {
    // Log elapsed time in hours
    const elapsedHours = Math.max(0.25, Math.round((seconds / 3600) * 10) / 10);
    const newCompleted = Math.min(task.estimatedHours, Math.round((task.completedHours + elapsedHours) * 10) / 10);

    onUpdateTask({
      ...task,
      completedHours: newCompleted,
      milestones: checklist,
      status: newCompleted >= task.estimatedHours ? 'completed' : 'in_progress'
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-sm animate-in fade-in duration-150">
      <div className="bg-slate-900 text-white rounded-3xl border border-slate-800 shadow-2xl max-w-lg w-full p-6 sm:p-8 space-y-6">
        <div className="flex items-start justify-between">
          <div>
            <span className="text-[11px] font-bold uppercase tracking-wider text-indigo-400 bg-indigo-500/10 px-2.5 py-0.5 rounded-full border border-indigo-500/20">
              Active Focus Session
            </span>
            <h2 className="text-xl font-bold mt-2 text-white">{task.title}</h2>
            <p className="text-xs text-slate-400">{task.course}</p>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-white rounded-xl hover:bg-white/10 cursor-pointer"
            aria-label="Close session"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Stopwatch Display */}
        <div className="text-center py-6 bg-white/[0.03] rounded-2xl border border-white/5">
          <p className="font-mono text-5xl sm:text-6xl font-black tracking-widest text-indigo-300">
            {timeFormatted}
          </p>
          <div className="flex items-center justify-center gap-3 mt-4">
            <button
              onClick={() => setIsActive(!isActive)}
              className="px-5 py-2 rounded-xl bg-white text-slate-900 font-bold text-xs flex items-center gap-2 hover:bg-slate-200 transition-colors cursor-pointer"
            >
              {isActive ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5 fill-slate-900" />}
              <span>{isActive ? 'Pause Session' : 'Resume'}</span>
            </button>
            <button
              onClick={() => {
                setIsActive(false);
                setSeconds(0);
              }}
              className="p-2 rounded-xl bg-white/10 text-slate-300 hover:text-white transition-colors cursor-pointer"
              title="Reset stopwatch"
              aria-label="Reset stopwatch"
            >
              <RotateCcw className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Focus Checklist */}
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-[11px] uppercase font-bold text-slate-400 block tracking-wider">
              Session Checklist
            </span>
            <span className="text-[11px] text-slate-500 font-medium">
              {checklist.filter(c => c.completed).length} of {checklist.length} completed
            </span>
          </div>

          <div className="space-y-2 max-h-48 overflow-y-auto pr-1">
            {checklist.map(m => (
              <button
                key={m.id}
                type="button"
                role="checkbox"
                aria-checked={m.completed}
                tabIndex={0}
                onClick={() => handleToggleMilestone(m.id)}
                onKeyDown={(e) => {
                  if (e.key === ' ' || e.key === 'Enter') {
                    e.preventDefault();
                    handleToggleMilestone(m.id);
                  }
                }}
                className={`w-full flex items-center gap-3 p-3 rounded-xl transition-all cursor-pointer select-none text-left border focus:outline-hidden focus:ring-2 focus:ring-indigo-500 ${
                  m.completed
                    ? 'bg-emerald-500/15 border-emerald-500/30 text-emerald-200'
                    : 'bg-white/5 border-white/10 hover:bg-white/10 text-slate-200'
                }`}
              >
                <div
                  className={`w-5 h-5 rounded-md flex items-center justify-center shrink-0 transition-all pointer-events-none ${
                    m.completed
                      ? 'bg-emerald-500 text-white shadow-xs'
                      : 'border-2 border-slate-500 bg-slate-800/80'
                  }`}
                >
                  {m.completed && <Check className="w-3.5 h-3.5 stroke-[3] text-white" />}
                </div>
                <span
                  className={`text-xs font-medium flex-1 pointer-events-none leading-relaxed transition-all ${
                    m.completed ? 'line-through text-slate-400 font-normal' : 'text-slate-100 font-medium'
                  }`}
                >
                  {m.title}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Finish & Save Effort */}
        <div className="pt-2 border-t border-white/10 flex items-center justify-between">
          <button
            onClick={onClose}
            className="text-xs text-slate-400 hover:text-white px-3 py-2 transition-colors cursor-pointer"
          >
            Cancel
          </button>
          <button
            onClick={handleLogSession}
            className="px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs shadow-lg shadow-indigo-600/30 flex items-center gap-2 transition-colors cursor-pointer"
          >
            <CheckCircle2 className="w-4 h-4" />
            <span>Finish & Log Effort</span>
          </button>
        </div>
      </div>
    </div>
  );
};
