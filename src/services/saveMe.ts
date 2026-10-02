import { Task, SaveMeTriage } from '../types';
import { getHoursRemaining } from '../utils/dateUtils';

export const generateSaveMeTriage = (tasks: Task[], shortfallHours: number = 4.8): SaveMeTriage => {
  const activeTasks = tasks.filter(t => t.status !== 'completed');

  const mustDo: SaveMeTriage['mustDo'] = [];
  const canReduce: SaveMeTriage['canReduce'] = [];
  const canDelay: SaveMeTriage['canDelay'] = [];

  let totalTimeSaved = 0;

  activeTasks.forEach(task => {
    const remaining = Math.max(0, task.estimatedHours - task.completedHours);
    const hoursLeft = getHoursRemaining(task.deadline);

    // Rule 1: High urgency (< 48h with remaining >= 1.5h) or Critical risk -> MUST DO
    if ((hoursLeft <= 48 && remaining >= 1.5) || task.riskLevel === 'CRITICAL') {
      const saved = Math.round((remaining * 0.2) * 10) / 10; // saves 20% by skipping non-essential polish
      const mvpHours = Math.max(1, Math.round((remaining - saved) * 10) / 10);
      totalTimeSaved += saved;

      mustDo.push({
        task,
        mvpHours,
        savedHours: saved,
        strategy: [
          'Lock in core deliverables that directly satisfy mandatory requirements',
          'Use concise bullet points instead of lengthy prose if allowed',
          'Single pass proofread; avoid endless formatting revisions',
          'Submit directly once all mandatory checklist items are met'
        ]
      });
    }
    // Rule 2: Moderate urgency (<= 96h) where polish can be stripped -> CAN REDUCE
    else if (hoursLeft <= 96 && remaining > 1) {
      const saved = Math.round((remaining * 0.4) * 10) / 10; // saves 40%
      const mvpHours = Math.max(0.5, Math.round((remaining - saved) * 10) / 10);
      totalTimeSaved += saved;

      canReduce.push({
        task,
        mvpHours,
        savedHours: saved,
        strategy: [
          'Deliver an MVP solution meeting minimum passing criteria',
          'Omit discretionary visual polish, animations, or appendixes',
          'Focus 80% of effort on the key demonstration requirements'
        ]
      });
    }
    // Rule 3: Extended runway (> 4 days) or low workload -> CAN DELAY
    else {
      canDelay.push({
        task,
        strategy: [
          'Defer to next study block after urgent 48h deadlines clear',
          'Request an informal 48h extension buffer if needed',
          'Spend max 30 minutes on a quick draft if time frees up'
        ],
        recommendedNewDate: 'Next week (after imminent deadlines pass)'
      });
    }
  });

  const totalOriginalRemaining = activeTasks.reduce(
    (acc, t) => acc + Math.max(0, t.estimatedHours - t.completedHours),
    0
  );

  return {
    mustDo,
    canReduce,
    canDelay,
    totalTimeSaved,
    adjustedRequiredHours: Math.max(0, totalOriginalRemaining - totalTimeSaved)
  };
};
