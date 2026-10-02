import React, { useState } from 'react';
import { Task, Milestone } from '../types';
import { RiskBadge } from './RiskBadge';
import {
  formatCountdown,
  formatDeadlinePretty,
  formatHoursAndMinutes,
  getHoursRemaining,
  toDateTimeLocalValue
} from '../utils/dateUtils';
import {
  X,
  Play,
  Split,
  CheckCircle,
  Clock,
  Layers,
  Calendar,
  AlertTriangle,
  CheckSquare,
  Square,
  Sparkles,
  Trash2,
  Edit2,
  ChevronRight,
  ShieldAlert
} from 'lucide-react';

interface TaskDetailsModalProps {
  task: Task | null;
  onClose: () => void;
  onStartWorking: (task: Task) => void;
  onBreakDown: (task: Task) => void;
  onUpdateTask: (updated: Task) => void;
  onDeleteTask: (taskId: string) => void;
  onViewReasoning: (task: Task) => void;
}

export const TaskDetailsModal: React.FC<TaskDetailsModalProps> = ({
  task,
  onClose,
  onStartWorking,
  onBreakDown,
  onUpdateTask,
  onDeleteTask,
  onViewReasoning
}) => {
  if (!task) return null;

  const [isEditing, setIsEditing] = useState(false);
  const [editTitle, setEditTitle] = useState(task.title);
  const [editCourse, setEditCourse] = useState(task.course);
  const [editEstimatedHours, setEditEstimatedHours] = useState(task.estimatedHours);
  const [editDeadline, setEditDeadline] = useState(() => {
    try {
      return toDateTimeLocalValue(new Date(task.deadline));
    } catch (e) {
      return task.deadline.slice(0, 16);
    }
  });

  const remainingHours = Math.max(0, task.estimatedHours - task.completedHours);
  const remainingFormatted = formatHoursAndMinutes(remainingHours);
  const deadlinePretty = formatDeadlinePretty(task.deadline);
  const countdown = formatCountdown(task.deadline);

  // Available study capacity before deadline (3.5h/day realistic threshold)
  const hoursLeft = getHoursRemaining(task.deadline);
  const daysLeft = Math.max(0.1, hoursLeft / 24);
  const availableHoursCalculated = task.availableHoursBeforeDeadline || Math.round(daysLeft * 3.5 * 10) / 10;
  const availableTimeFormatted = formatHoursAndMinutes(availableHoursCalculated);
  const capacityLabel = task.capacityStatus || (remainingHours > availableHoursCalculated ? 'Overloaded' : remainingHours >= availableHoursCalculated * 0.8 ? 'Tight' : 'Comfortable');
  const isOverloaded = capacityLabel === 'Overloaded';

  // Toggle milestone completion with single event
  const handleToggleMilestone = (mId: string) => {
    const updatedMilestones = (task.milestones || []).map(m => {
      if (m.id === mId) {
        return { ...m, completed: !m.completed };
      }
      return m;
    });

    const completedCount = updatedMilestones.filter(m => m.completed).length;
    const totalCount = updatedMilestones.length;
    let newCompletedHours = task.completedHours;
    if (totalCount > 0) {
      newCompletedHours = Math.round(((completedCount / totalCount) * task.estimatedHours) * 10) / 10;
    }

    onUpdateTask({
      ...task,
      milestones: updatedMilestones,
      completedHours: newCompletedHours,
      status: completedCount === totalCount ? 'completed' : 'in_progress'
    });
  };

  // Quick log progress (+0.5h or +1.0h or +2.0h)
  const handleLogProgress = (deltaHours: number) => {
    const newCompleted = Math.min(task.estimatedHours, Math.round((task.completedHours + deltaHours) * 10) / 10);
    onUpdateTask({
      ...task,
      completedHours: newCompleted,
      status: newCompleted >= task.estimatedHours ? 'completed' : 'in_progress'
    });
  };

  // Save manual edit
  const handleSaveEdit = () => {
    let newDeadlineIso = task.deadline;
    try {
      newDeadlineIso = new Date(editDeadline).toISOString();
    } catch (e) {
      newDeadlineIso = editDeadline;
    }

    onUpdateTask({
      ...task,
      title: editTitle.trim() || task.title,
      course: editCourse.trim() || task.course,
      estimatedHours: Math.max(0.5, Number(editEstimatedHours)),
      deadline: newDeadlineIso
    });
    setIsEditing(false);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/50 backdrop-blur-xs animate-in fade-in duration-150">
      <div className="bg-white rounded-2xl border border-slate-200 shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="p-6 border-b border-slate-100 flex items-start justify-between gap-4 sticky top-0 bg-white z-10">
          <div>
            <div className="flex items-center gap-2 mb-1.5 flex-wrap">
              <span className="text-xs px-2.5 py-0.5 rounded-md bg-slate-100 font-semibold text-slate-700">
                {task.course}
              </span>
              <RiskBadge level={task.riskLevel} />
            </div>
            {!isEditing ? (
              <h2 className="text-xl font-bold text-slate-900">{task.title}</h2>
            ) : (
              <input
                type="text"
                value={editTitle}
                onChange={e => setEditTitle(e.target.value)}
                className="text-lg font-bold text-slate-900 border border-slate-300 rounded-lg px-2.5 py-1 w-full"
              />
            )}
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setIsEditing(!isEditing)}
              className="p-2 text-slate-400 hover:text-slate-700 rounded-lg hover:bg-slate-100 transition-colors"
              title="Edit task parameters"
            >
              <Edit2 className="w-4 h-4" />
            </button>
            <button
              onClick={onClose}
              className="p-2 text-slate-400 hover:text-slate-700 rounded-lg hover:bg-slate-100 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Content Body */}
        <div className="p-6 space-y-6">
          {/* Edit Mode Panel */}
          {isEditing && (
            <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500">Edit Task</h4>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div>
                  <label className="text-xs text-slate-600 block mb-1">Course</label>
                  <input
                    type="text"
                    value={editCourse}
                    onChange={e => setEditCourse(e.target.value)}
                    className="w-full text-xs border border-slate-300 rounded-lg p-2"
                  />
                </div>
                <div>
                  <label className="text-xs text-slate-600 block mb-1">Deadline</label>
                  <input
                    type="datetime-local"
                    value={editDeadline}
                    onChange={e => setEditDeadline(e.target.value)}
                    className="w-full text-xs border border-slate-300 rounded-lg p-2"
                  />
                </div>
                <div>
                  <label className="text-xs text-slate-600 block mb-1">Estimated Hours</label>
                  <input
                    type="number"
                    step="0.5"
                    min="0.5"
                    value={editEstimatedHours}
                    onChange={e => setEditEstimatedHours(Number(e.target.value))}
                    className="w-full text-xs border border-slate-300 rounded-lg p-2"
                  />
                </div>
              </div>
              <div className="flex justify-end gap-2 pt-2">
                <button
                  onClick={() => setIsEditing(false)}
                  className="px-3 py-1.5 text-xs text-slate-600 hover:bg-slate-200 rounded-lg"
                >
                  Cancel
                </button>
                <button
                  onClick={handleSaveEdit}
                  className="px-3 py-1.5 text-xs bg-slate-900 text-white rounded-lg font-semibold"
                >
                  Save Changes
                </button>
              </div>
            </div>
          )}

          {/* Workload Status Card */}
          <div className="p-4 sm:p-5 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-3">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <div>
                <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider block">
                  Workload Status
                </span>
                <div className="flex items-center gap-2 mt-1">
                  <RiskBadge level={task.riskLevel} size="md" />
                  <span className="text-xs text-slate-600 font-medium">
                    {task.riskReason || task.urgencyReason || 'Automated cognitive workload assessment'}
                  </span>
                </div>
              </div>

              {onViewReasoning && (
                <button
                  onClick={() => onViewReasoning(task)}
                  className="text-xs font-semibold text-indigo-600 hover:text-indigo-800 flex items-center gap-1 shrink-0"
                >
                  <span>Why this status?</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              )}
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-5 gap-2.5 pt-3 border-t border-slate-200/70">
              <div className="p-2.5 rounded-xl bg-white border border-slate-200">
                <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider block">Deadline</span>
                <span className="text-xs font-bold text-slate-800 block mt-0.5">{countdown}</span>
              </div>
              <div className="p-2.5 rounded-xl bg-white border border-slate-200">
                <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider block">Remaining</span>
                <span className="text-xs font-bold text-slate-800 block mt-0.5">{remainingFormatted}</span>
              </div>
              <div className="p-2.5 rounded-xl bg-white border border-slate-200">
                <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider block">Completion</span>
                <span className="text-xs font-bold text-indigo-700 block mt-0.5">{task.completionPercentage || 0}%</span>
              </div>
              <div className="p-2.5 rounded-xl bg-white border border-slate-200">
                <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider block">Available Time</span>
                <span className="text-xs font-bold text-slate-800 block mt-0.5">{availableTimeFormatted}</span>
              </div>
              <div className="p-2.5 rounded-xl bg-white border border-slate-200">
                <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider block">Capacity</span>
                <span className={`text-xs font-bold block mt-0.5 ${isOverloaded ? 'text-rose-600' : 'text-emerald-700'}`}>
                  {capacityLabel}
                </span>
              </div>
            </div>
          </div>

          {/* Conflict Warning if colliding */}
          {task.isColliding && (
            <div className="p-3.5 rounded-xl bg-rose-50 border border-rose-200 flex items-start gap-3 text-xs text-rose-800">
              <AlertTriangle className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
              <div>
                <strong className="font-bold">Deadline Collision Detected:</strong> This assignment competes for cognitive hours with another major deliverable within a 48-hour window. Early milestone completion is strongly recommended.
              </div>
            </div>
          )}

          {/* Progress Slider & Quick Logging */}
          <div className="bg-slate-50 p-4 rounded-xl border border-slate-200/80 space-y-3">
            <div className="flex items-center justify-between text-xs font-semibold">
              <span className="text-slate-700">Log Completed Work</span>
              <span className="text-indigo-600">
                {task.completedHours} / {task.estimatedHours} hours logged
              </span>
            </div>

            <input
              type="range"
              min="0"
              max={task.estimatedHours}
              step="0.5"
              value={task.completedHours}
              onChange={e => {
                const val = parseFloat(e.target.value);
                onUpdateTask({
                  ...task,
                  completedHours: val,
                  status: val >= task.estimatedHours ? 'completed' : 'in_progress'
                });
              }}
              className="w-full accent-indigo-600 cursor-pointer"
            />

            <div className="flex items-center justify-between text-xs pt-1">
              <div className="flex items-center gap-2">
                <button
                  onClick={() => handleLogProgress(0.5)}
                  className="px-2.5 py-1 rounded-md bg-white border border-slate-200 hover:bg-slate-100 text-slate-700 font-medium text-xs shadow-2xs"
                >
                  +30 min
                </button>
                <button
                  onClick={() => handleLogProgress(1.0)}
                  className="px-2.5 py-1 rounded-md bg-white border border-slate-200 hover:bg-slate-100 text-slate-700 font-medium text-xs shadow-2xs"
                >
                  +1 hour
                </button>
                <button
                  onClick={() => handleLogProgress(2.0)}
                  className="px-2.5 py-1 rounded-md bg-white border border-slate-200 hover:bg-slate-100 text-slate-700 font-medium text-xs shadow-2xs"
                >
                  +2 hours
                </button>
              </div>

              {task.completedHours >= task.estimatedHours ? (
                <span className="text-xs font-bold text-emerald-700 flex items-center gap-1">
                  <CheckCircle className="w-3.5 h-3.5" /> Complete!
                </span>
              ) : (
                <button
                  onClick={() => {
                    onUpdateTask({
                      ...task,
                      completedHours: task.estimatedHours,
                      status: 'completed'
                    });
                  }}
                  className="text-xs text-indigo-600 hover:underline font-semibold"
                >
                  Mark 100% Complete
                </button>
              )}
            </div>
          </div>

          {/* Milestones / Smart Split Checklist */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-600 flex items-center gap-1.5">
                <Split className="w-3.5 h-3.5 text-indigo-600" />
                <span>Actionable Milestones ({task.milestones?.length || 0})</span>
              </h4>
              <button
                onClick={() => onBreakDown(task)}
                className="text-xs text-indigo-600 hover:text-indigo-800 font-semibold flex items-center gap-1"
              >
                <Sparkles className="w-3 h-3" />
                <span>Smart Split Milestones</span>
              </button>
            </div>

            {task.milestones && task.milestones.length > 0 ? (
              <div className="space-y-2">
                {task.milestones.map(m => (
                  <button
                    key={m.id}
                    type="button"
                    role="checkbox"
                    aria-checked={m.completed}
                    tabIndex={0}
                    onClick={() => handleToggleMilestone(m.id)}
                    onKeyDown={e => {
                      if (e.key === ' ' || e.key === 'Enter') {
                        e.preventDefault();
                        handleToggleMilestone(m.id);
                      }
                    }}
                    className={`w-full flex items-start gap-3 p-3 rounded-xl border text-xs cursor-pointer transition-all text-left select-none focus:outline-hidden focus:ring-2 focus:ring-indigo-500 ${
                      m.completed
                        ? 'bg-emerald-50/50 border-emerald-300 text-slate-400'
                        : 'bg-white border-slate-200 hover:border-indigo-300 text-slate-800 hover:shadow-xs'
                    }`}
                  >
                    <div
                      className={`mt-0.5 w-4 h-4 rounded flex items-center justify-center shrink-0 pointer-events-none transition-colors ${
                        m.completed ? 'text-emerald-600' : 'text-slate-400'
                      }`}
                    >
                      {m.completed ? (
                        <CheckSquare className="w-4 h-4 text-emerald-600" />
                      ) : (
                        <Square className="w-4 h-4 text-slate-400" />
                      )}
                    </div>
                    <div className="flex-1 pointer-events-none">
                      <div className="flex items-center justify-between">
                        <span className={`font-semibold ${m.completed ? 'line-through text-slate-400' : 'text-slate-900'}`}>
                          {m.title}
                        </span>
                        <span
                          className={`text-[11px] font-medium px-2 py-0.5 rounded ${
                            m.completed ? 'bg-emerald-100 text-emerald-800' : 'bg-slate-100 text-slate-600'
                          }`}
                        >
                          {m.targetDay || 'Pending'} · {formatHoursAndMinutes(m.estimatedHours || (m.estimatedMinutes ? m.estimatedMinutes / 60 : 1.0))}
                        </span>
                      </div>
                      {m.description && <p className="text-slate-500 text-[11px] mt-0.5">{m.description}</p>}
                    </div>
                  </button>
                ))}
              </div>
            ) : (
              <div className="p-4 rounded-xl border border-dashed border-slate-200 text-center">
                <p className="text-xs text-slate-500 mb-2">No milestones generated yet.</p>
                <button
                  onClick={() => onBreakDown(task)}
                  className="px-3 py-1.5 rounded-lg bg-indigo-50 text-indigo-700 border border-indigo-200 text-xs font-semibold hover:bg-indigo-100"
                >
                  Break into 3–5 Milestones
                </button>
              </div>
            )}
          </div>

          {/* Rubric / Requirements List */}
          {task.requirements && task.requirements.length > 0 && (
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-600 mb-2">
                Deliverable Requirements
              </h4>
              <ul className="space-y-1.5 text-xs text-slate-700">
                {task.requirements.map((req, i) => (
                  <li key={i} className="flex items-start gap-2 bg-slate-50 p-2.5 rounded-lg border border-slate-100">
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 mt-1.5 shrink-0" />
                    <span>{req}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Modal Footer Actions */}
        <div className="p-5 border-t border-slate-100 bg-slate-50/50 flex flex-wrap items-center justify-between gap-3 sticky bottom-0 z-10">
          <button
            onClick={() => {
              if (window.confirm(`Delete "${task.title}"?`)) {
                onDeleteTask(task.id);
                onClose();
              }
            }}
            className="flex items-center gap-1.5 px-3 py-2 text-rose-600 hover:bg-rose-50 rounded-lg text-xs font-semibold transition-colors"
          >
            <Trash2 className="w-3.5 h-3.5" />
            <span>Delete Task</span>
          </button>

          <div className="flex items-center gap-2">
            <button
              onClick={() => onBreakDown(task)}
              className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 text-slate-700 text-xs font-semibold shadow-2xs"
            >
              <Split className="w-3.5 h-3.5 text-indigo-600" />
              <span>Smart Split</span>
            </button>

            <button
              onClick={() => {
                onStartWorking(task);
                onClose();
              }}
              className="flex items-center gap-2 px-5 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold shadow-md shadow-slate-900/10 transition-all hover:scale-[1.02]"
            >
              <Play className="w-3.5 h-3.5 fill-white text-white" />
              <span>Start Working Session</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
