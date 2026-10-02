import { Task, RiskLevel } from '../types';
import { getHoursRemaining, formatHoursAndMinutes, formatCountdown } from '../utils/dateUtils';

export interface TaskUrgencyAssessment {
  urgencyLevel: RiskLevel;
  explanation: string;
  reasons: string[];
  availableHours: number;
  capacityStatus: 'Overloaded' | 'Tight' | 'Comfortable';
  shortfallHours: number;
}

/**
 * Evaluates academic workload urgency qualitatively based on:
 * 1. Deadline urgency (hours left)
 * 2. Remaining workload vs allocated capacity
 * 3. Completion percentage
 * 4. Temporal deadline collision (overlapping submissions)
 * 5. Task requirements & blocking status
 * 
 * Returns qualitative urgency level (CRITICAL, AT RISK, APPROACHING, SAFE)
 * and natural language reasoning with zero numerical scores.
 */
export const determineTaskUrgency = (
  task: Task,
  isColliding: boolean = false,
  dailyCapacity: number = 3.5
): TaskUrgencyAssessment => {
  if (task.status === 'completed') {
    return {
      urgencyLevel: 'SAFE',
      explanation: 'Task is completed and submitted.',
      reasons: ['All requirements completed', 'Submission finalized'],
      availableHours: 0,
      capacityStatus: 'Comfortable',
      shortfallHours: 0
    };
  }

  const hoursToDeadline = getHoursRemaining(task.deadline);
  const remainingHours = Math.max(0, task.estimatedHours - task.completedHours);
  const daysLeft = Math.max(0.1, hoursToDeadline / 24);
  const countdown = formatCountdown(task.deadline);
  const remainingFormatted = formatHoursAndMinutes(remainingHours);

  // Realistic study time allocated before this deadline
  const availableHours = Math.round(daysLeft * dailyCapacity * 10) / 10;
  const shortfallHours = Math.max(0, Math.round((remainingHours - availableHours) * 10) / 10);

  let capacityStatus: 'Overloaded' | 'Tight' | 'Comfortable' = 'Comfortable';
  if (shortfallHours > 0.5) {
    capacityStatus = 'Overloaded';
  } else if (remainingHours >= availableHours * 0.8) {
    capacityStatus = 'Tight';
  }

  const reasons: string[] = [];

  // Qualitative Urgency Level Decision
  let urgencyLevel: RiskLevel = 'SAFE';
  let explanation = '';

  if (hoursToDeadline <= 0) {
    urgencyLevel = 'CRITICAL';
    explanation = `Past due deadline with ${remainingFormatted} unfinished work.`;
    reasons.push('Deadline has passed');
    reasons.push(`${remainingFormatted} required immediately`);
  } else if (shortfallHours > 0.5 || (hoursToDeadline <= 48 && remainingHours >= 2.5) || (isColliding && hoursToDeadline <= 72 && remainingHours >= 3.5)) {
    urgencyLevel = 'CRITICAL';
    if (shortfallHours > 0.5) {
      explanation = `Approximately ${remainingFormatted} of work remain, but only ${formatHoursAndMinutes(availableHours)} of available study time are allocated before the deadline.`;
    } else {
      explanation = `Deadline is in ${countdown} and significant work remains.`;
    }
    reasons.push(`Deadline is approaching (${countdown})`);
    reasons.push(`Significant work remains (${remainingFormatted})`);
    if (isColliding) {
      reasons.push('The task is part of a 48-hour deadline collision');
    }
    if (capacityStatus === 'Overloaded') {
      reasons.push('Workload exceeds available study capacity');
    }
  } else if (capacityStatus === 'Tight' || (hoursToDeadline <= 72 && remainingHours >= 2) || (isColliding && remainingHours >= 1.5)) {
    urgencyLevel = 'AT_RISK';
    explanation = `Approximately ${remainingFormatted} of work remain, but only ${formatHoursAndMinutes(availableHours)} of available study time are allocated before the deadline.`;
    reasons.push(`Approaching deadline in ${countdown}`);
    reasons.push(`Remaining workload (${remainingFormatted}) is close to capacity limit`);
    if (isColliding) {
      reasons.push('Overlaps with another major deadline window');
    }
  } else if (hoursToDeadline <= 120 || remainingHours >= 2) {
    urgencyLevel = 'APPROACHING';
    explanation = `Deadline is in ${Math.round(daysLeft)} days with ${remainingFormatted} of work remaining.`;
    reasons.push(`Upcoming deadline in ${Math.round(daysLeft)} days`);
    reasons.push(`${remainingFormatted} work remaining to schedule`);
  } else {
    urgencyLevel = 'SAFE';
    explanation = `Comfortable buffer with ${formatHoursAndMinutes(availableHours)} available for ${remainingFormatted} of work.`;
    reasons.push(`Ample study time available before submission`);
    reasons.push('No deadline conflicts detected');
  }

  return {
    urgencyLevel,
    explanation,
    reasons,
    availableHours,
    capacityStatus,
    shortfallHours
  };
};

/**
 * Intelligent internal ranking comparator for task ordering without displaying numerical scores.
 */
export const compareTasksByUrgency = (a: Task, b: Task): number => {
  // 1. Completed tasks go to the bottom
  if (a.status === 'completed' && b.status !== 'completed') return 1;
  if (b.status === 'completed' && a.status !== 'completed') return -1;

  // 2. Risk Level Hierarchy
  const riskWeight: Record<RiskLevel, number> = {
    CRITICAL: 4,
    AT_RISK: 3,
    APPROACHING: 2,
    SAFE: 1
  };
  const weightA = riskWeight[a.riskLevel || 'APPROACHING'];
  const weightB = riskWeight[b.riskLevel || 'APPROACHING'];
  if (weightB !== weightA) return weightB - weightA;

  // 3. Deadline urgency (closer deadline first)
  const diffA = getHoursRemaining(a.deadline);
  const diffB = getHoursRemaining(b.deadline);
  if (Math.abs(diffA - diffB) > 6) return diffA - diffB;

  // 4. Collision status
  if (a.isColliding && !b.isColliding) return -1;
  if (!a.isColliding && b.isColliding) return 1;

  // 5. Remaining workload (more work remaining first)
  const remA = Math.max(0, a.estimatedHours - a.completedHours);
  const remB = Math.max(0, b.estimatedHours - b.completedHours);
  return remB - remA;
};
