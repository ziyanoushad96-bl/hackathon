import { Task } from '../types';
import { getHoursRemaining } from '../utils/dateUtils';

export interface CollisionGroup {
  tasks: Task[];
  windowHours: number;
  totalRemainingHours: number;
  description: string;
}

export const detectDeadlineCollisions = (tasks: Task[]): {
  collidingTaskIds: Set<string>;
  collisionGroups: CollisionGroup[];
  summaryMessage: string | null;
} => {
  const activeTasks = tasks.filter(t => t.status !== 'completed');
  const collidingTaskIds = new Set<string>();
  const collisionGroups: CollisionGroup[] = [];

  // Sort active tasks by deadline
  const sorted = [...activeTasks].sort(
    (a, b) => new Date(a.deadline).getTime() - new Date(b.deadline).getTime()
  );

  // Check 48-hour collision windows
  for (let i = 0; i < sorted.length; i++) {
    const current = sorted[i];
    const currentHours = getHoursRemaining(current.deadline);
    if (currentHours < 0) continue; // Skip overdue in collision grouping

    const collidingWithCurrent: Task[] = [current];
    let combinedWork = (current.estimatedHours - current.completedHours);

    for (let j = i + 1; j < sorted.length; j++) {
      const other = sorted[j];
      const otherHours = getHoursRemaining(other.deadline);
      const diffHours = Math.abs(otherHours - currentHours);

      // Within 48 hours of each other
      if (diffHours <= 48) {
        collidingWithCurrent.push(other);
        combinedWork += (other.estimatedHours - other.completedHours);
      }
    }

    // A collision is significant if there are 2 or more tasks with substantial combined work
    if (collidingWithCurrent.length >= 2 && combinedWork >= 5) {
      collidingWithCurrent.forEach(t => collidingTaskIds.add(t.id));
      
      // Avoid duplicate identical groups
      const ids = collidingWithCurrent.map(t => t.id).sort().join(',');
      const alreadyGrouped = collisionGroups.some(
        g => g.tasks.map(t => t.id).sort().join(',') === ids
      );

      if (!alreadyGrouped) {
        collisionGroups.push({
          tasks: collidingWithCurrent,
          windowHours: 48,
          totalRemainingHours: combinedWork,
          description: `${collidingWithCurrent.length} major assignments are competing for the same 48-hour window (${combinedWork.toFixed(1)}h total work).`
        });
      }
    }
  }

  let summaryMessage: string | null = null;
  if (collisionGroups.length > 0) {
    const topGroup = collisionGroups[0];
    summaryMessage = `Your workload is slightly overloaded this week. ${topGroup.tasks.length} major assignments are competing for the same 48-hour window.`;
  }

  return { collidingTaskIds, collisionGroups, summaryMessage };
};
