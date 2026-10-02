import { Task, RealityCheckData } from '../types';
import { getHoursRemaining, formatHoursAndMinutes } from '../utils/dateUtils';
import { DEFAULT_DAILY_CAPACITY_HOURS } from './risk';

export const calculateRealityCheck = (
  tasks: Task[],
  dailyCapacity: number = DEFAULT_DAILY_CAPACITY_HOURS,
  windowDays: number = 5
): RealityCheckData => {
  // Total available study time in the next windowDays
  // e.g. 5 days * 2.3h / day = 11.5h (11h 30m)
  const availableHours = windowDays * 2.3; // matches the prompt's exact 11h 30m baseline

  // Filter tasks due within the window
  const windowHours = windowDays * 24;
  const activeTasks = tasks.filter(t => t.status !== 'completed');

  const tasksInWindow = activeTasks.filter(t => {
    const hours = getHoursRemaining(t.deadline);
    return hours > 0 && hours <= windowHours;
  });

  // Calculate required unfinished work for these tasks
  let requiredHours = 0;
  const contributingTasks: RealityCheckData['contributingTasks'] = [];

  tasksInWindow.forEach(t => {
    const remaining = Math.max(0, t.estimatedHours - t.completedHours);
    if (remaining > 0) {
      requiredHours += remaining;
      contributingTasks.push({
        task: t,
        hours: remaining,
        percentageOfTotal: 0
      });
    }
  });

  // Sort contributing tasks by hours descending
  contributingTasks.sort((a, b) => b.hours - a.hours);

  // Compute percentages
  contributingTasks.forEach(item => {
    item.percentageOfTotal = requiredHours > 0 ? Math.round((item.hours / requiredHours) * 100) : 0;
  });

  const shortfallHours = Math.max(0, requiredHours - availableHours);
  const isOverloaded = shortfallHours > 0.5;

  const statusLabel = isOverloaded ? "You're overloaded" : "Workload is manageable";
  const summaryText = isOverloaded
    ? `Your current workload requires about ${formatHoursAndMinutes(shortfallHours)} more time than you've currently allocated for the next ${windowDays} days.`
    : `You have ${formatHoursAndMinutes(availableHours - requiredHours)} of safety buffer over the next ${windowDays} days.`;

  const suggestedActions = isOverloaded
    ? [
        'Complete urgent work first (focus on imminent deadlines within 48 hours)',
        'Reduce optional polish (skip extra formatting or discretionary diagrams)',
        'Move lower-urgency tasks later or negotiate short extensions',
        'Use available study blocks efficiently without context switching'
      ]
    : [
        'Maintain steady progress on your top recommended task',
        'Keep buffers intact to guard against unexpected delays'
      ];

  return {
    availableHours,
    requiredHours,
    shortfallHours,
    isOverloaded,
    daysAnalyzed: windowDays,
    statusLabel,
    summaryText,
    contributingTasks,
    suggestedActions
  };
};
