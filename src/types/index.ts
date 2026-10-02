export type RiskLevel = 'SAFE' | 'APPROACHING' | 'AT_RISK' | 'CRITICAL';

export interface Milestone {
  id: string;
  title: string;
  description: string;
  estimatedMinutes: number;
  estimatedHours?: number; // Normalized convenience value
  completed: boolean;
  targetDay?: string; // e.g. "Today", "Tomorrow", "Thursday"
  notes?: string;
}

export interface Task {
  id: string;
  title: string;
  course: string;
  description: string;
  deadline: string; // ISO format date string relative to current time
  estimatedHours: number; // e.g. 5.0
  completedHours: number; // e.g. 1.0
  requirements: string[]; // Specific assignment deliverable requirements
  milestones: Milestone[];
  status: 'pending' | 'in_progress' | 'completed';
  riskLevel: RiskLevel;
  recommendedStartDate: string;
  source?: 'manual' | 'import_notice' | 'voice';
  createdAt: string;
  notes?: string;

  // Dynamically derived fields from WorkRadar intelligence engines:
  remainingHours?: number;
  completionPercentage?: number;
  riskReason?: string;
  urgencyReason?: string;
  availableHoursBeforeDeadline?: number;
  capacityStatus?: 'Overloaded' | 'Tight' | 'Comfortable';
  isColliding?: boolean;
  collidingWith?: string[]; // IDs of other tasks in collision window
}

export type ModalType =
  | 'addTask'
  | 'importNotice'
  | 'taskDetails'
  | 'breakDown'
  | 'reversePlanner'
  | 'realityCheck'
  | 'saveMe'
  | 'focusSession'
  | 'reasoning'
  | null;

export interface RealityCheckData {
  availableHours: number;
  requiredHours: number;
  shortfallHours: number;
  isOverloaded: boolean;
  daysAnalyzed: number;
  statusLabel: string;
  summaryText: string;
  contributingTasks: Array<{
    task: Task;
    hours: number;
    percentageOfTotal: number;
  }>;
  suggestedActions: string[];
}

export interface SaveMeTriage {
  mustDo: Array<{
    task: Task;
    strategy: string[];
    mvpHours: number;
    savedHours: number;
  }>;
  canReduce: Array<{
    task: Task;
    strategy: string[];
    mvpHours: number;
    savedHours: number;
  }>;
  canDelay: Array<{
    task: Task;
    strategy: string[];
    recommendedNewDate: string;
  }>;
  totalTimeSaved: number;
  adjustedRequiredHours: number;
}

export interface ReversePlanBlock {
  id: string;
  startTime: string; // e.g. "7:00 PM"
  endTime: string; // e.g. "8:30 PM"
  durationMinutes: number;
  taskId: string;
  taskTitle: string;
  course: string;
  focusArea: string;
  riskLevel: RiskLevel;
  whyThis: string;
}

export interface ExtractedNotice {
  task: string;
  course: string;
  deadline: string;
  deadlineFormatted?: string;
  requirements: string[];
  estimatedHours: number | null;
  notes: string;
  confidence: number;
  rawText?: string;
  detectedLanguage?: string;
}

export interface DuplicateConflict {
  existingTask: Task;
  extractedNotice: ExtractedNotice;
  newDeadline: string;
  previousDeadline: string;
  isExtension: boolean;
  matchScore: number;
}
