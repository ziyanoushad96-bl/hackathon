import { Task, ReversePlanBlock } from '../types';
import { compareTasksByUrgency } from './priority';
import { formatCountdown, formatHoursAndMinutes } from '../utils/dateUtils';

export interface ReversePlanResult {
  blocks: ReversePlanBlock[];
  totalAllocatedMinutes: number;
  unallocatedMinutes: number;
  whyThisPlan: string;
}

export const generateReversePlan = (
  tasks: Task[],
  freeHours: number = 3.0,
  startHour: number = 19, // 7:00 PM (19:00)
  startMinute: number = 0
): ReversePlanResult => {
  const totalAvailableMinutes = Math.round(freeHours * 60);
  const activeTasks = tasks.filter(t => t.status !== 'completed');

  // Sort tasks by qualitative urgency without numerical scores
  const sortedTasks = [...activeTasks].sort(compareTasksByUrgency);

  const blocks: ReversePlanBlock[] = [];
  let remainingBudget = totalAvailableMinutes;
  let currentMinutes = startHour * 60 + startMinute;

  const formatTime = (totalMin: number): string => {
    let hours = Math.floor(totalMin / 60) % 24;
    const minutes = totalMin % 60;
    const ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12 || 12;
    return `${hours}:${minutes.toString().padStart(2, '0')} ${ampm}`;
  };

  // Distribute time proportionally to top tasks
  for (let i = 0; i < sortedTasks.length && remainingBudget > 15; i++) {
    const task = sortedTasks[i];
    const remainingHours = Math.max(0, task.estimatedHours - task.completedHours);
    const remainingMinutes = Math.round(remainingHours * 60);
    if (remainingMinutes <= 0) continue;

    let chunkMinutes = 0;
    if (i === 0) {
      // Primary task gets 40% - 50% of available block
      chunkMinutes = Math.min(remainingBudget, Math.max(45, Math.min(remainingMinutes, 90)));
    } else if (i === 1) {
      // Secondary task gets 25% - 30%
      chunkMinutes = Math.min(remainingBudget, Math.max(30, Math.min(remainingMinutes, 45)));
    } else {
      // Third task gets remainder
      chunkMinutes = Math.min(remainingBudget, remainingMinutes > 0 ? remainingBudget : 0);
    }

    if (chunkMinutes <= 0) continue;

    const blockStart = currentMinutes;
    const blockEnd = currentMinutes + chunkMinutes;
    currentMinutes = blockEnd;
    remainingBudget -= chunkMinutes;

    let focusArea = 'Key milestone execution';
    if (task.requirements && task.requirements.length > 0) {
      focusArea = task.requirements[0];
    }

    const countdown = formatCountdown(task.deadline);
    const remainingFormatted = formatHoursAndMinutes(remainingHours);

    blocks.push({
      id: `block-${task.id}-${i}`,
      startTime: formatTime(blockStart),
      endTime: formatTime(blockEnd),
      durationMinutes: chunkMinutes,
      taskId: task.id,
      taskTitle: task.title,
      course: task.course,
      focusArea,
      riskLevel: task.riskLevel || 'APPROACHING',
      whyThis: `${task.riskLevel === 'CRITICAL' ? 'Critical' : 'High urgency'} deliverable due in ${countdown} with ${remainingFormatted} of work remaining.`
    });
  }

  const allocatedMinutes = totalAvailableMinutes - remainingBudget;

  const topTaskNames = blocks.map(b => b.taskTitle).slice(0, 2).join(' and ');
  const whyThisPlan = `WorkRadar allocated your ${freeHours}h study block strictly based on deadline urgency, remaining workload, and collision pressure. The lion's share is dedicated to ${topTaskNames} to eliminate the imminent bottleneck before switching to lower-urgency prep.`;

  return {
    blocks,
    totalAllocatedMinutes: allocatedMinutes,
    unallocatedMinutes: remainingBudget,
    whyThisPlan
  };
};
