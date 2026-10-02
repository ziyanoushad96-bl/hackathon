import { Task, RiskLevel } from '../types';
import { getHoursRemaining, formatHoursAndMinutes } from '../utils/dateUtils';

// Standard realistic daily student study capacity (hours/day dedicated to non-class assignments)
export const DEFAULT_DAILY_CAPACITY_HOURS = 3.5;

export interface RiskAnalysis {
  riskLevel: RiskLevel;
  riskReason: string;
  capacityShortfallHours: number;
  availableHoursBeforeDeadline: number;
  remainingWorkHours: number;
}

export const calculateTaskRisk = (
  task: Task,
  isColliding: boolean = false,
  dailyCapacity: number = DEFAULT_DAILY_CAPACITY_HOURS
): RiskAnalysis => {
  const remainingWork = Math.max(0, task.estimatedHours - task.completedHours);
  const hoursToDeadline = getHoursRemaining(task.deadline);
  const daysToDeadline = Math.max(0.1, hoursToDeadline / 24);

  // Realistic available focused study hours before this deadline
  const availableHours = daysToDeadline * dailyCapacity;
  const shortfall = remainingWork - availableHours;

  let riskLevel: RiskLevel = 'SAFE';
  let riskReason = 'Workload is comfortably within available study hours.';

  if (hoursToDeadline <= 0 && remainingWork > 0) {
    riskLevel = 'CRITICAL';
    riskReason = `Past due deadline with ${formatHoursAndMinutes(remainingWork)} unfinished work.`;
  } else if (shortfall > 0.5) {
    riskLevel = 'CRITICAL';
    riskReason = `You're approximately ${formatHoursAndMinutes(shortfall)} over capacity before the deadline.`;
  } else if (hoursToDeadline <= 48 && remainingWork >= 3) {
    riskLevel = 'CRITICAL';
    riskReason = `High remaining workload (${formatHoursAndMinutes(remainingWork)}) due within 48 hours.`;
  } else if (isColliding && hoursToDeadline <= 72 && remainingWork >= 3.5) {
    riskLevel = 'CRITICAL';
    riskReason = `Collision conflict: ${formatHoursAndMinutes(remainingWork)} required in an overlapping deadline window.`;
  } else if (shortfall > -1.5 || (hoursToDeadline <= 72 && remainingWork >= 2.5) || (isColliding && remainingWork >= 2)) {
    riskLevel = 'AT_RISK';
    riskReason = isColliding
      ? `Competing with other overlapping deadlines in a tight window (${formatHoursAndMinutes(remainingWork)} left).`
      : `Tight buffer: ${formatHoursAndMinutes(remainingWork)} work vs ${formatHoursAndMinutes(availableHours)} available.`;
  } else if (hoursToDeadline <= 120 || remainingWork >= 2) {
    riskLevel = 'APPROACHING';
    riskReason = `Due in ${Math.round(daysToDeadline)} days with ${formatHoursAndMinutes(remainingWork)} work remaining.`;
  } else {
    riskLevel = 'SAFE';
    riskReason = `Ample time (${Math.round(daysToDeadline)} days) for ${formatHoursAndMinutes(remainingWork)} of work.`;
  }

  return {
    riskLevel,
    riskReason,
    capacityShortfallHours: Math.max(0, shortfall),
    availableHoursBeforeDeadline: availableHours,
    remainingWorkHours: remainingWork
  };
};
