import React, { useState, useEffect } from 'react';
import { Task } from '../types';
import { getHoursRemaining, formatCountdown } from '../utils/dateUtils';
import { formatHoursAndMinutes } from '../utils/durationUtils';
import {
  Flame,
  ArrowLeft,
  Play,
  Pause,
  RotateCcw,
  CheckCircle,
  Clock,
  Layers,
  ChevronRight
} from 'lucide-react';
import { RiskBadge } from './RiskBadge';
import { compareTasksByUrgency } from '../services/priority';

interface PanicModeViewProps {
  tasks: Task[];
  onExitPanicMode: () => void;
  onUpdateTask: (task: Task) => void;
  onOpenTaskDetails: (task: Task) => void;
}

export const PanicModeView: React.FC<PanicModeViewProps> = ({
  tasks,
  onExitPanicMode,
  onUpdateTask,
  onOpenTaskDetails
}) => {
  // Filter only active tasks due within 48 hours (or overdue) and sort qualitatively
  const panicTasks = tasks
    .filter(t => t.status !== 'completed' && getHoursRemaining(t.deadline) <= 48)
    .sort(compareTasksByUrgency);

  // Focus Timer state (25m Pomodoro)
  const [secondsLeft, setSecondsLeft] = useState(25 * 60);
  const [timerRunning, setTimerRunning] = useState(false);

  useEffect(() => {
    let interval: any = null;
    if (timerRunning && secondsLeft > 0) {
      interval = setInterval(() => {
        setSecondsLeft(sec => sec - 1);
      }, 1000);
    } else if (secondsLeft === 0) {
      setTimerRunning(false);
    }
    return () => clearInterval(interval);
  }, [timerRunning, secondsLeft]);

  const minutes = Math.floor(secondsLeft / 60);
  const seconds = secondsLeft % 60;
  const timerFormatted = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;

  const handleQuickLog = (task: Task, hours: number) => {
    const newCompleted = Math.min(task.estimatedHours, Math.round((task.completedHours + hours) * 10) / 10);
    onUpdateTask({
      ...task,
      completedHours: newCompleted,
      status: newCompleted >= task.estimatedHours ? 'completed' : 'in_progress'
    });
  };

  return (
    <div className="space-y-6 animate-in fade-in duration-200">
      {/* Panic Mode Top Bar */}
      <div className="bg-gradient-to-r from-rose-950 via-slate-900 to-slate-900 text-white rounded-2xl p-6 sm:p-7 border border-rose-900/50 shadow-xl relative overflow-hidden">
        <div className="absolute right-0 top-0 bottom-0 w-80 bg-rose-600/10 blur-3xl pointer-events-none" />

        <div className="relative z-10 flex flex-wrap items-center justify-between gap-4 mb-4">
          <div className="flex items-center gap-3">
            <button
              onClick={onExitPanicMode}
              className="p-2 rounded-xl bg-white/10 hover:bg-white/20 text-slate-300 hover:text-white transition-colors cursor-pointer"
              title="Return to standard dashboard"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            <div className="flex items-center gap-2">
              <div className="w-9 h-9 rounded-xl bg-rose-500/20 border border-rose-500/40 flex items-center justify-center text-rose-400">
                <Flame className="w-5 h-5 animate-pulse" />
              </div>
              <div>
                <h1 className="text-xl sm:text-2xl font-black tracking-tight text-white flex items-center gap-2">
                  <span>Panic Mode</span>
                  <span className="text-xs px-2.5 py-0.5 rounded-full bg-rose-500/20 border border-rose-500/40 text-rose-300 font-bold uppercase tracking-wider">
                    Emergency View
                  </span>
                </h1>
                <p className="text-xs text-rose-200/80 font-medium">
                  Only the next 48 hours matter right now.
                </p>
              </div>
            </div>
          </div>

          {/* Quick Focus Timer */}
          <div className="flex items-center gap-3 bg-white/10 backdrop-blur-xs px-4 py-2 rounded-xl border border-white/10">
            <Clock className="w-4 h-4 text-rose-400" />
            <span className="font-mono text-lg font-bold text-white tracking-widest">
              {timerFormatted}
            </span>
            <button
              onClick={() => setTimerRunning(!timerRunning)}
              className="p-1.5 rounded-lg bg-rose-600 hover:bg-rose-500 text-white transition-colors cursor-pointer"
              title={timerRunning ? 'Pause timer' : 'Start 25m sprint'}
            >
              {timerRunning ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5 fill-white" />}
            </button>
            <button
              onClick={() => {
                setTimerRunning(false);
                setSecondsLeft(25 * 60);
              }}
              className="p-1.5 rounded-lg hover:bg-white/10 text-slate-400 hover:text-white transition-colors cursor-pointer"
              title="Reset 25m"
            >
              <RotateCcw className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* 48h Horizon Count */}
        <div className="relative z-10 flex items-center gap-2 text-xs text-slate-300">
          <span className="font-bold text-rose-400">{panicTasks.length} critical deliverables</span>
          <span>competing for submission in the immediate 48-hour window.</span>
        </div>
      </div>

      {/* Panic Staged Execution Pipeline: 1 - START NOW, 2 - NEXT, 3 - AFTER THAT */}
      {panicTasks.length > 0 ? (
        <div className="space-y-4">
          {panicTasks.map((task, idx) => {
            const isStartNow = idx === 0;
            const isNext = idx === 1;
            const remainingFormatted = formatHoursAndMinutes(task.remainingHours || 0);
            const countdown = formatCountdown(task.deadline);

            const stageLabel = isStartNow
              ? '1 — START NOW'
              : isNext
              ? '2 — NEXT'
              : `3 — AFTER THAT (${idx + 1})`;

            const stageBg = isStartNow
              ? 'bg-gradient-to-r from-rose-50 to-white border-rose-300 shadow-md ring-2 ring-rose-100'
              : isNext
              ? 'bg-amber-50/40 border-amber-200'
              : 'bg-white border-slate-200 opacity-80';

            const badgeBg = isStartNow
              ? 'bg-rose-600 text-white'
              : isNext
              ? 'bg-amber-600 text-white'
              : 'bg-slate-700 text-white';

            return (
              <div
                key={task.id}
                className={`p-5 sm:p-6 rounded-2xl border transition-all ${stageBg}`}
              >
                <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
                  <div className="flex items-center gap-2.5">
                    <span className={`text-xs font-black px-3 py-1 rounded-lg uppercase tracking-wider ${badgeBg}`}>
                      {stageLabel}
                    </span>
                    <span className="text-xs font-semibold text-slate-600">{task.course}</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <RiskBadge level={task.riskLevel} size="sm" />
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-slate-900">
                      {task.title}
                    </h3>
                    <p className="text-xs text-slate-500 mt-0.5 line-clamp-1">
                      {task.requirements ? task.requirements.join(' • ') : task.notes}
                    </p>
                  </div>

                  <div className="flex items-center gap-3 text-xs shrink-0">
                    <div className="bg-white/80 border border-slate-200 rounded-xl px-3 py-1.5">
                      <span className="text-[10px] uppercase font-bold text-slate-400 block">Due in</span>
                      <span className="font-bold text-rose-700">{countdown}</span>
                    </div>

                    <div className="bg-white/80 border border-slate-200 rounded-xl px-3 py-1.5">
                      <span className="text-[10px] uppercase font-bold text-slate-400 block">Remaining</span>
                      <span className="font-bold text-slate-800">{remainingFormatted}</span>
                    </div>
                  </div>
                </div>

                {/* Quick 1-Click Action Buttons */}
                <div className="pt-3 border-t border-slate-200/80 flex flex-wrap items-center justify-between gap-3">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-semibold text-slate-500 mr-1">Log sprint:</span>
                    <button
                      onClick={() => handleQuickLog(task, 0.5)}
                      className="px-2.5 py-1 rounded-lg bg-white border border-slate-300 hover:bg-slate-100 text-xs font-semibold text-slate-700 shadow-2xs cursor-pointer"
                    >
                      +30m Done
                    </button>
                    <button
                      onClick={() => handleQuickLog(task, 1.0)}
                      className="px-2.5 py-1 rounded-lg bg-white border border-slate-300 hover:bg-slate-100 text-xs font-semibold text-slate-700 shadow-2xs cursor-pointer"
                    >
                      +1h Done
                    </button>
                    <button
                      onClick={() => handleQuickLog(task, task.estimatedHours)}
                      className="px-2.5 py-1 rounded-lg bg-emerald-50 border border-emerald-200 hover:bg-emerald-100 text-xs font-semibold text-emerald-800 flex items-center gap-1 cursor-pointer"
                    >
                      <CheckCircle className="w-3.5 h-3.5" />
                      <span>Mark 100% Done</span>
                    </button>
                  </div>

                  <button
                    onClick={() => onOpenTaskDetails(task)}
                    className="text-xs font-semibold text-indigo-600 hover:text-indigo-800 flex items-center gap-1 cursor-pointer"
                  >
                    <span>View Breakdown</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <div className="p-12 text-center bg-white rounded-2xl border border-slate-200">
          <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto mb-3">
            <CheckCircle className="w-6 h-6" />
          </div>
          <h3 className="font-bold text-slate-900 text-lg">No Immediate 48h Deadlines!</h3>
          <p className="text-xs text-slate-500 mt-1 max-w-sm mx-auto">
            You don't have any assignments due in the next 48 hours. Panic Mode can safely be deactivated.
          </p>
          <button
            onClick={onExitPanicMode}
            className="mt-4 px-4 py-2 bg-slate-900 text-white rounded-xl text-xs font-semibold hover:bg-slate-800 cursor-pointer"
          >
            Exit Panic Mode
          </button>
        </div>
      )}
    </div>
  );
};
