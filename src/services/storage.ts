import { Task, Milestone } from '../types';
import { determineTaskUrgency } from './priority';
import { calculateTaskRisk } from './risk';
import { detectDeadlineCollisions } from './collision';
import { getCurrentDate, createRelativeIsoDate, formatDeadlinePretty, getDayOfWeek } from '../utils/dateUtils';

const STORAGE_KEY = 'workradar_tasks_v2';

/**
 * Dynamically generates 6 realistic initial academic tasks with deadlines
 * strictly relative to the current browser date/time.
 */
export const createInitialTasks = (): Task[] => {
  const now = getCurrentDate();

  return [
    {
      id: 'task-1-research-paper',
      title: 'Research Paper',
      course: 'Computer Science',
      description: 'Distributed consensus algorithms formal analysis and comparative benchmark report.',
      deadline: createRelativeIsoDate(1, 18), // ~42 hours from now (Immediate Horizon / Critical)
      estimatedHours: 8.0,
      completedHours: 3.0, // 5.0h remaining
      requirements: [
        'Literature review on distributed consensus protocols (Raft, Paxos, PBFT)',
        'Benchmark comparison table of throughput and latency under network partitions',
        'Formal methodology and experimental evaluation setup',
        'IEEE formatted bibliography with at least 10 authoritative citations'
      ],
      milestones: [
        {
          id: 'ms-1-1',
          title: 'Complete consensus literature review',
          description: 'Survey 6 recent IEEE papers on leader election and state machine replication',
          estimatedMinutes: 120,
          estimatedHours: 2.0,
          completed: true,
          targetDay: 'Completed',
          notes: 'Annotated core papers on Raft & Paxos'
        },
        {
          id: 'ms-1-2',
          title: 'Draft benchmark comparison analysis',
          description: 'Synthesize latency and throughput benchmark metrics under fault injection',
          estimatedMinutes: 120,
          estimatedHours: 2.0,
          completed: false,
          targetDay: 'Today',
          notes: 'Compile comparison table'
        },
        {
          id: 'ms-1-3',
          title: 'Write methodology & formal evaluation',
          description: 'Document experimental parameters, network topology, and node failure scenarios',
          estimatedMinutes: 120,
          estimatedHours: 2.0,
          completed: false,
          targetDay: 'Tomorrow',
          notes: 'Detail testbed environment'
        },
        {
          id: 'ms-1-4',
          title: 'Format citations & IEEE bibliography',
          description: 'Verify all reference entries against IEEE formatting guidelines and export PDF',
          estimatedMinutes: 60,
          estimatedHours: 1.0,
          completed: false,
          targetDay: 'Day of Deadline',
          notes: 'Final proofread and reference validation'
        }
      ],
      status: 'in_progress',
      riskLevel: 'CRITICAL',
      recommendedStartDate: 'Active now',
      notes: 'Term capstone deliverable. High cognitive focus required.',
      source: 'manual',
      createdAt: new Date(now.getTime() - 4 * 24 * 3600 * 1000).toISOString()
    },
    {
      id: 'task-2-dbms-project',
      title: 'DBMS Mini Project',
      course: 'Database Systems',
      description: 'Relational database schema modeling, normalized DDL, SQL queries, and stored procedures.',
      deadline: createRelativeIsoDate(2, 14), // ~62 hours from now (Mid-Range Horizon / Colliding)
      estimatedHours: 5.0,
      completedHours: 1.0, // 4.0h remaining
      requirements: [
        'Relational ER diagram with normalization notes (Chen / Crow\'s Foot notation)',
        'PostgreSQL schema DDL script with primary/foreign key constraints',
        'Stored procedures and transaction rollback safety scripts',
        'Submission documentation PDF with query execution screenshots'
      ],
      milestones: [
        {
          id: 'ms-2-1',
          title: 'Understand project requirements & identify entities',
          description: 'Analyze banking transaction specifications and determine primary keys',
          estimatedMinutes: 60,
          estimatedHours: 1.0,
          completed: true,
          targetDay: 'Completed',
          notes: 'Identified Accounts, Customers, Transactions entities'
        },
        {
          id: 'ms-2-2',
          title: 'Create the ER diagram',
          description: 'Model 1:N and N:M relationships with cardinality and normalization rules',
          estimatedMinutes: 90,
          estimatedHours: 1.5,
          completed: false,
          targetDay: 'Tomorrow',
          notes: 'Export high-res diagram'
        },
        {
          id: 'ms-2-3',
          title: 'Write SQL schema DDL and stored procedures',
          description: 'Implement tables, check constraints, and ACID compliant transfer procedure',
          estimatedMinutes: 90,
          estimatedHours: 1.5,
          completed: false,
          targetDay: 'Day 3',
          notes: 'Test with mock dataset'
        },
        {
          id: 'ms-2-4',
          title: 'Review notation, screenshots & submit',
          description: 'Verify queries against rubric and prepare final submission package',
          estimatedMinutes: 60,
          estimatedHours: 1.0,
          completed: false,
          targetDay: 'Deadline Day',
          notes: 'Compile final PDF'
        }
      ],
      status: 'in_progress',
      riskLevel: 'AT_RISK',
      recommendedStartDate: 'Today',
      notes: 'Submission portal closes sharply at midnight.',
      source: 'import_notice',
      createdAt: new Date(now.getTime() - 2 * 24 * 3600 * 1000).toISOString()
    },
    {
      id: 'task-3-stats-quiz',
      title: 'Statistics Quiz Preparation',
      course: 'Statistics',
      description: 'Module 4: Hypothesis Testing, p-values, and two-tailed Student\'s t-distribution.',
      deadline: createRelativeIsoDate(0, 21), // ~21 hours from now (Immediate Horizon)
      estimatedHours: 2.0,
      completedHours: 0.0, // 2.0h remaining
      requirements: [
        'Review Module 4: Hypothesis Testing and significance levels',
        'Solve 5 practice problems on Student\'s t-distribution',
        'Prepare 1-page allowable formula cheat sheet'
      ],
      milestones: [
        {
          id: 'ms-3-1',
          title: 'Identify required topics & study concepts',
          description: 'Review lecture slides on null/alternative hypotheses and alpha thresholds',
          estimatedMinutes: 45,
          estimatedHours: 0.75,
          completed: false,
          targetDay: 'Today (AM)',
          notes: 'Formulas and test criteria'
        },
        {
          id: 'ms-3-2',
          title: 'Practice problems & review difficult questions',
          description: 'Work through problem set 4 and calculate critical t-values',
          estimatedMinutes: 50,
          estimatedHours: 0.85,
          completed: false,
          targetDay: 'Today (PM)',
          notes: 'Two-sample t-tests'
        },
        {
          id: 'ms-3-3',
          title: 'Final revision & formula cheat sheet',
          description: 'Consolidate formula sheet and verify allowable calculator functions',
          estimatedMinutes: 25,
          estimatedHours: 0.4,
          completed: false,
          targetDay: 'Tonight',
          notes: 'Formula sheet summary'
        }
      ],
      status: 'pending',
      riskLevel: 'CRITICAL',
      recommendedStartDate: 'Immediate',
      notes: 'In-class 30-minute closed book quiz.',
      source: 'manual',
      createdAt: new Date(now.getTime() - 1 * 24 * 3600 * 1000).toISOString()
    },
    {
      id: 'task-4-oop-pres',
      title: 'OOP Design Patterns Presentation',
      course: 'Object Oriented Programming',
      description: 'Architectural comparison and live code demonstration of Visitor and Observer patterns.',
      deadline: createRelativeIsoDate(3, 19), // ~91 hours from now (Mid-Range Horizon)
      estimatedHours: 4.8,
      completedHours: 1.5, // 3.3h remaining
      requirements: [
        '10-slide deck explaining Visitor and Observer structural & behavioral patterns',
        'Live Java code demonstration snippet with unit tests',
        'Speaker speaking notes and 2 interactive audience quiz questions'
      ],
      milestones: [
        {
          id: 'ms-4-1',
          title: 'Prepare presentation content & UML diagrams',
          description: 'Draft slide outline and class architecture diagrams for both patterns',
          estimatedMinutes: 90,
          estimatedHours: 1.5,
          completed: true,
          targetDay: 'Completed',
          notes: 'UML class diagrams finalized'
        },
        {
          id: 'ms-4-2',
          title: 'Create the slides & add diagrams',
          description: 'Build slide deck with clean diagrams and code callouts',
          estimatedMinutes: 100,
          estimatedHours: 1.7,
          completed: false,
          targetDay: 'Tomorrow',
          notes: 'Format visual deck'
        },
        {
          id: 'ms-4-3',
          title: 'Write Java demo snippet & rehearse timing',
          description: 'Write runnable demo and practice delivery to stay strictly under 12 minutes',
          estimatedMinutes: 95,
          estimatedHours: 1.6,
          completed: false,
          targetDay: 'Day 3',
          notes: 'Rehearse presentation'
        }
      ],
      status: 'in_progress',
      riskLevel: 'AT_RISK',
      recommendedStartDate: 'Tomorrow',
      notes: 'Team presentation in tutorial slot.',
      source: 'manual',
      createdAt: new Date(now.getTime() - 3 * 24 * 3600 * 1000).toISOString()
    },
    {
      id: 'task-5-lab-record',
      title: 'Operating Systems Lab Record',
      course: 'Programming Lab',
      description: 'Experiment 6: Banker\'s Deadlock Avoidance algorithm implementation and execution analysis.',
      deadline: createRelativeIsoDate(4, 16), // ~112 hours from now (Mid-Range Horizon)
      estimatedHours: 2.5,
      completedHours: 0.5, // 2.0h remaining
      requirements: [
        'Document Experiment 6: Banker\'s Deadlock Avoidance algorithm theory',
        'Annotated C source code with safety and resource-request algorithm logic',
        'Terminal execution logs demonstrating safe sequence and unsafe deadlock state'
      ],
      milestones: [
        {
          id: 'ms-5-1',
          title: 'Analyze algorithm & implement C code',
          description: 'Implement safety test and resource-allocation matrix logic',
          estimatedMinutes: 60,
          estimatedHours: 1.0,
          completed: false,
          targetDay: 'Day 3',
          notes: 'Write Banker\'s algorithm'
        },
        {
          id: 'ms-5-2',
          title: 'Test inputs & capture terminal screenshots',
          description: 'Run sample inputs with 5 processes and 3 resource types',
          estimatedMinutes: 60,
          estimatedHours: 1.0,
          completed: false,
          targetDay: 'Day 4',
          notes: 'Compile execution tables'
        }
      ],
      status: 'in_progress',
      riskLevel: 'APPROACHING',
      recommendedStartDate: 'In 2 days',
      notes: 'Weekly lab manual verification sign-off.',
      source: 'manual',
      createdAt: new Date(now.getTime() - 1 * 24 * 3600 * 1000).toISOString()
    },
    {
      id: 'task-6-reading',
      title: 'Communication Skills Reading Assignment',
      course: 'Communication Skills',
      description: 'Chapter 7: Cross-Cultural Technical Collaboration and peer feedback mechanisms.',
      deadline: createRelativeIsoDate(9, 12), // ~9.5 days from now (Upcoming Horizon)
      estimatedHours: 1.5,
      completedHours: 0.0, // 1.5h remaining
      requirements: [
        'Read Chapter 7: Cross-Cultural Technical Collaboration in software engineering',
        'Write 300-word reflection essay on structured code review etiquette'
      ],
      milestones: [
        {
          id: 'ms-6-1',
          title: 'Read chapter & write short reflection',
          description: 'Annotate key insights on asynchronous technical communication',
          estimatedMinutes: 90,
          estimatedHours: 1.5,
          completed: false,
          targetDay: 'Next week',
          notes: 'Draft reflection essay'
        }
      ],
      status: 'pending',
      riskLevel: 'SAFE',
      recommendedStartDate: 'In 5 days',
      notes: 'Supplementary reading reflection.',
      source: 'manual',
      createdAt: new Date(now.getTime() - 2 * 24 * 3600 * 1000).toISOString()
    }
  ];
};

/**
 * Enriches tasks dynamically with real-time risk, collision, and urgency engines.
 */
export const enrichTasks = (tasks: Task[]): Task[] => {
  const { collidingTaskIds } = detectDeadlineCollisions(tasks);

  return tasks.map(task => {
    const remainingHours = Math.max(0, task.estimatedHours - task.completedHours);
    const completionPercentage = task.estimatedHours > 0
      ? Math.min(100, Math.round((task.completedHours / task.estimatedHours) * 100))
      : 0;

    const isColliding = collidingTaskIds.has(task.id);
    const urgencyResult = determineTaskUrgency(task, isColliding);
    const riskResult = calculateTaskRisk(task, isColliding);

    return {
      ...task,
      remainingHours,
      completionPercentage,
      riskLevel: urgencyResult.urgencyLevel || riskResult.riskLevel,
      riskReason: urgencyResult.explanation || riskResult.riskReason,
      urgencyReason: urgencyResult.explanation,
      availableHoursBeforeDeadline: urgencyResult.availableHours,
      capacityStatus: urgencyResult.capacityStatus,
      isColliding
    };
  });
};

/**
 * Loads tasks from localStorage. If empty or corrupted, initializes with fresh relative sample data.
 */
export const loadStoredTasks = (): Task[] => {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) {
      const initial = createInitialTasks();
      saveTasksToStorage(initial);
      return enrichTasks(initial);
    }
    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed) || parsed.length === 0) {
      const initial = createInitialTasks();
      saveTasksToStorage(initial);
      return enrichTasks(initial);
    }
    return enrichTasks(parsed as Task[]);
  } catch (e) {
    console.error('Error loading stored tasks, resetting to fresh sample:', e);
    const fallback = createInitialTasks();
    saveTasksToStorage(fallback);
    return enrichTasks(fallback);
  }
};

/**
 * Persists tasks to localStorage.
 */
export const saveTasksToStorage = (tasks: Task[]): void => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
  } catch (e) {
    console.error('Error saving tasks to storage:', e);
  }
};

/**
 * Resets tasks to freshly generated relative demo tasks.
 */
export const resetToDemoTasks = (): Task[] => {
  const fresh = createInitialTasks();
  saveTasksToStorage(fresh);
  return enrichTasks(fresh);
};
