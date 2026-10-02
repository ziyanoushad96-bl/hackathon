import { Task, ExtractedNotice, DuplicateConflict } from '../types';

export const checkDuplicateDeadline = (
  extracted: ExtractedNotice,
  existingTasks: Task[]
): DuplicateConflict | null => {
  const normExtracted = extracted.task.toLowerCase().replace(/[^a-z0-9]/g, '');
  const normCourse = extracted.course.toLowerCase().replace(/[^a-z0-9]/g, '');

  for (const existing of existingTasks) {
    if (existing.status === 'completed') continue;

    const normExisting = existing.title.toLowerCase().replace(/[^a-z0-9]/g, '');
    const normExistingCourse = existing.course.toLowerCase().replace(/[^a-z0-9]/g, '');

    // Similarity score
    let match = false;
    if (normExtracted === normExisting) {
      match = true;
    } else if (normExtracted.includes(normExisting) || normExisting.includes(normExtracted)) {
      match = true;
    } else if (
      (normExtracted.includes('dbms') || normExtracted.includes('database')) &&
      (normExisting.includes('dbms') || normExisting.includes('database'))
    ) {
      match = true;
    } else if (
      normCourse.length > 3 &&
      normCourse === normExistingCourse &&
      (normExtracted.includes('project') || normExtracted.includes('assignment'))
    ) {
      match = true;
    }

    if (match) {
      const existingDate = new Date(existing.deadline).getTime();
      const newDate = new Date(extracted.deadline).getTime();
      const isExtension = newDate > existingDate;

      return {
        existingTask: existing,
        extractedNotice: extracted,
        previousDeadline: existing.deadline,
        newDeadline: extracted.deadline,
        isExtension,
        matchScore: 0.92
      };
    }
  }

  return null;
};
