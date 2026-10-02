import { Task, Milestone } from '../types';
import { getHoursRemaining } from '../utils/dateUtils';

/**
 * Extracts specific subject/topic name from task title and course
 */
const extractTopicFromTitle = (title: string, course: string): string => {
  let cleaned = title.trim();
  const topic = cleaned
    .replace(/(mini\s+)?project/gi, '')
    .replace(/assignment(\s+\d+)?/gi, '')
    .replace(/homework(\s+\d+)?/gi, '')
    .replace(/lab(\s+record|\s+\d+)?/gi, '')
    .replace(/preparation/gi, '')
    .replace(/prep/gi, '')
    .replace(/submission/gi, '')
    .trim();

  return topic.length > 2 ? topic : cleaned;
};

interface MilestoneBlueprint {
  title: string;
  description: string;
  weight: number; // Fraction of total effort
}

/**
 * Generates task-specific, realistic academic milestones dynamically
 * based on the actual selected task's title, description, course,
 * requirements, estimated effort, and deadline runway.
 */
export const generateMilestonesForTask = (task: Task): Milestone[] => {
  const totalHours = Math.max(1.0, task.estimatedHours || 4.0);
  const totalMinutes = Math.round(totalHours * 60);
  const hoursLeft = getHoursRemaining(task.deadline);
  const daysLeft = Math.max(0.5, hoursLeft / 24);

  const titleLower = task.title.toLowerCase();
  const courseLower = (task.course || '').toLowerCase();
  const descLower = (task.description || '').toLowerCase();
  const notesLower = (task.notes || '').toLowerCase();
  const combinedContext = `${titleLower} ${courseLower} ${descLower} ${notesLower}`;
  const cleanTopic = extractTopicFromTitle(task.title, task.course);

  // Target day label helper based on deadline timeline
  const getTargetDay = (index: number, totalMilestones: number): string => {
    if (daysLeft <= 1) {
      if (index === 0) return 'Today (Morning)';
      if (index === 1) return 'Today (Afternoon)';
      return 'Tonight';
    }
    if (daysLeft <= 2) {
      if (index === 0) return 'Today';
      if (index < totalMilestones - 1) return 'Tomorrow';
      return 'Day of Deadline';
    }
    if (daysLeft <= 4) {
      if (index === 0) return 'Today';
      if (index === 1) return 'Tomorrow';
      if (index < totalMilestones - 1) return 'Day 3';
      return 'Deadline Day';
    }
    if (index === 0) return 'Today';
    if (index === 1) return 'Day 2';
    if (index === 2) return 'Day 3';
    if (index === 3) return 'Day 4';
    return 'Deadline Day';
  };

  let blueprints: MilestoneBlueprint[] = [];

  // 1. If explicit requirements were provided on the task, derive directly from them
  if (task.requirements && task.requirements.length >= 3) {
    blueprints = task.requirements.slice(0, 5).map((req, idx) => ({
      title: req.length > 55 ? req.slice(0, 52) + '...' : req,
      description: `Complete specific deliverable: ${req}`,
      weight: 1 / Math.min(5, task.requirements.length)
    }));
  }
  // 2. Specific Domain: DBMS / ER Diagram / Schema Modeling
  else if (
    combinedContext.includes('er diagram') ||
    combinedContext.includes('entity relationship') ||
    (combinedContext.includes('dbms') && (combinedContext.includes('diagram') || combinedContext.includes('project')))
  ) {
    blueprints = [
      {
        title: 'Understand project requirements',
        description: `Analyze functional specifications and identify required business rules for ${cleanTopic}`,
        weight: 0.2
      },
      {
        title: 'Identify entities and relationships',
        description: 'Map cardinalities, primary keys, foreign keys, and relationship types',
        weight: 0.25
      },
      {
        title: 'Create the ER diagram',
        description: `Draft the comprehensive entity-relationship model in Chen / Crow's foot notation`,
        weight: 0.3
      },
      {
        title: 'Review notation and requirements',
        description: 'Verify 3NF normalization rules and cross-check table constraints',
        weight: 0.15
      },
      {
        title: 'Finalize and submit',
        description: 'Export diagram assets and prepare final submission package',
        weight: 0.1
      }
    ];
  }
  // 3. Specific Domain: DSA / Circular Queue / Stack / Algorithms
  else if (
    combinedContext.includes('circular queue') ||
    combinedContext.includes('queue') ||
    combinedContext.includes('stack') ||
    combinedContext.includes('binary tree') ||
    combinedContext.includes('linked list') ||
    combinedContext.includes('dsa') ||
    combinedContext.includes('algorithm')
  ) {
    const algoName = combinedContext.includes('circular queue')
      ? 'circular queue'
      : combinedContext.includes('binary tree')
      ? 'binary search tree'
      : cleanTopic || 'algorithm';

    blueprints = [
      {
        title: `Understand ${algoName} algorithm`,
        description: `Review pointer logic, circular index modulo arithmetic, and edge cases for ${algoName}`,
        weight: 0.2
      },
      {
        title: 'Write the program',
        description: `Implement core ${algoName} operations, enqueue/dequeue methods, and data structures`,
        weight: 0.35
      },
      {
        title: 'Test sample inputs',
        description: 'Run standard test vectors and boundary overflow/underflow test cases',
        weight: 0.2
      },
      {
        title: 'Fix errors',
        description: 'Debug pointer offsets, memory leaks, and verify terminal execution logs',
        weight: 0.15
      },
      {
        title: 'Prepare final submission',
        description: 'Add clean code documentation, execution screenshots, and upload to portal',
        weight: 0.1
      }
    ];
  }
  // 4. Specific Domain: DELD / Presentations / Seminars / Slides
  else if (
    combinedContext.includes('presentation') ||
    combinedContext.includes('slides') ||
    combinedContext.includes('seminar') ||
    combinedContext.includes('deld')
  ) {
    blueprints = [
      {
        title: 'Prepare presentation content',
        description: `Gather topic fundamentals, key takeaways, and research on ${cleanTopic}`,
        weight: 0.25
      },
      {
        title: 'Create the slides',
        description: 'Draft title, problem statement, core architecture, and conclusion slides',
        weight: 0.3
      },
      {
        title: 'Add diagrams/examples',
        description: 'Insert architectural diagrams, circuit schematics, or code callout snippets',
        weight: 0.2
      },
      {
        title: 'Review presentation',
        description: 'Check slide visual progression, typography readability, and speaker notes',
        weight: 0.15
      },
      {
        title: 'Practice and finalize',
        description: 'Rehearse delivery timing against tutorial limit and export presentation deck',
        weight: 0.1
      }
    ];
  }
  // 5. Specific Domain: Maths / Physics / Exam / Quiz Preparation
  else if (
    combinedContext.includes('math') ||
    combinedContext.includes('calculus') ||
    combinedContext.includes('quiz') ||
    combinedContext.includes('exam') ||
    combinedContext.includes('prep') ||
    combinedContext.includes('statistics')
  ) {
    blueprints = [
      {
        title: 'Identify required topics',
        description: `Map out syllabus units, formulas, and theorems for ${cleanTopic}`,
        weight: 0.2
      },
      {
        title: 'Study concepts',
        description: 'Deep-dive into core theory, proofs, and standard problem patterns',
        weight: 0.3
      },
      {
        title: 'Practice problems',
        description: 'Solve textbook exercises and previous-year examination questions',
        weight: 0.3
      },
      {
        title: 'Review difficult questions',
        description: 'Re-attempt tricky problems, boundary conditions, and analyze mistakes',
        weight: 0.1
      },
      {
        title: 'Final revision',
        description: 'Review quick-reference formula cheat sheet and key theorem summaries',
        weight: 0.1
      }
    ];
  }
  // 6. Specific Domain: Research Paper / Literature Review / Essay / Thesis
  else if (
    combinedContext.includes('paper') ||
    combinedContext.includes('essay') ||
    combinedContext.includes('thesis') ||
    combinedContext.includes('research')
  ) {
    blueprints = [
      {
        title: `Gather & annotate academic literature on ${cleanTopic}`,
        description: 'Select authoritative papers, summarize state-of-the-art, and compile references',
        weight: 0.2
      },
      {
        title: 'Draft methodology and experimental setup',
        description: 'Formulate research questions, evaluation metrics, and system parameters',
        weight: 0.25
      },
      {
        title: 'Write core analysis & discussion',
        description: 'Synthesize findings, interpret benchmark data, and write main content sections',
        weight: 0.3
      },
      {
        title: 'Format citations & IEEE bibliography',
        description: 'Check referencing style guidelines and cross-check in-text citations',
        weight: 0.15
      },
      {
        title: 'Final proofreading & PDF submission',
        description: 'Verify typography, visual figure formatting, and export submission PDF',
        weight: 0.1
      }
    ];
  }
  // 7. Short Task (< 2.5 hours total effort) -> 3 concise milestones
  else if (totalHours <= 2.5) {
    blueprints = [
      {
        title: `Review guidelines for ${task.title}`,
        description: `Read instructions, prompt requirements, and required deliverables for ${task.course}`,
        weight: 0.3
      },
      {
        title: `Complete core work on ${cleanTopic}`,
        description: 'Execute primary assignment requirements with focused attention',
        weight: 0.5
      },
      {
        title: 'Verify work & submit',
        description: 'Review completeness, check output formatting, and upload to submission portal',
        weight: 0.2
      }
    ];
  }
  // 8. General Academic Project / Lab Record
  else {
    blueprints = [
      {
        title: `Understand ${task.title} specifications`,
        description: `Review prompt guidelines, required deliverables, and scoring criteria for ${task.course}`,
        weight: 0.2
      },
      {
        title: `Research and outline approach for ${cleanTopic}`,
        description: 'Gather reference materials, notes, and structure implementation approach',
        weight: 0.25
      },
      {
        title: `Execute main deliverable for ${cleanTopic}`,
        description: 'Complete core assignment requirements with concentrated study blocks',
        weight: 0.35
      },
      {
        title: `Review and verify ${task.title}`,
        description: 'Check for correctness, completeness, and adherence to instructions',
        weight: 0.1
      },
      {
        title: 'Finalize submission package',
        description: `Package files, add documentation, and submit for ${task.course}`,
        weight: 0.1
      }
    ];
  }

  // Calculate distributed minutes and hours
  const totalWeight = blueprints.reduce((sum, b) => sum + b.weight, 0);

  return blueprints.map((bp, idx) => {
    const rawMinutes = (bp.weight / totalWeight) * totalMinutes;
    // Round to nearest 5 minutes
    const estimatedMinutes = Math.max(15, Math.round(rawMinutes / 5) * 5);
    const estimatedHours = Math.round((estimatedMinutes / 60) * 10) / 10;
    const targetDay = getTargetDay(idx, blueprints.length);

    // Initial completion alignment with task's completed hours
    const cumulativeMinutesBefore = blueprints
      .slice(0, idx)
      .reduce((sum, b) => sum + (b.weight / totalWeight) * totalMinutes, 0);
    const isCompleted = (task.completedHours * 60) > cumulativeMinutesBefore + estimatedMinutes * 0.7;

    return {
      id: `ms-${task.id}-${idx + 1}-${Date.now() % 10000}`,
      title: bp.title,
      description: bp.description,
      estimatedMinutes,
      estimatedHours,
      completed: isCompleted,
      targetDay,
      notes: bp.description
    };
  });
};
