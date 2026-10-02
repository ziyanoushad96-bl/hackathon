/**
 * Formats a task title or action string into a natural, safe recommendation headline.
 * 
 * Rules:
 * 1. If the title already starts with an action verb (e.g., Complete, Finish, Submit, Prepare, Create, Review, Study, Practice),
 *    do NOT prepend another action verb (prevents "Complete Complete...").
 * 2. If the title ends with "preparation" or "prep" (e.g., "Maths exam preparation"),
 *    use "Start ..." to avoid duplicating action words ("Prepare ... preparation").
 * 3. Otherwise, prepend "Complete ..." (e.g., "Complete DBMS ER Diagram Project").
 */
export const formatRecommendationAction = (rawTitle: string): string => {
  if (!rawTitle) return '';
  const trimmed = rawTitle.trim();
  if (!trimmed) return '';

  // Recognized common academic action verbs
  const ACTION_VERBS = [
    'complete',
    'finish',
    'submit',
    'prepare',
    'create',
    'review',
    'study',
    'practice',
    'work on',
    'start',
    'implement',
    'write',
    'draft',
    'read',
    'solve',
    'build',
    'conduct',
    'analyze'
  ];

  const lower = trimmed.toLowerCase();
  const words = lower.split(/\s+/);
  const firstWord = words[0];
  const firstTwoWords = words.slice(0, 2).join(' ');

  // 1. If the title already begins with an action verb, return as-is
  const startsWithAction = ACTION_VERBS.some(verb => {
    if (verb.includes(' ')) {
      return firstTwoWords === verb;
    }
    return firstWord === verb;
  });

  if (startsWithAction) {
    return trimmed;
  }

  // 2. If the title ends with "preparation" or "prep", use "Start" to avoid duplicating action words
  if (lower.endsWith('preparation') || lower.endsWith('prep')) {
    return `Start ${trimmed}`;
  }

  // 3. Otherwise, prepend "Complete "
  return `Complete ${trimmed}`;
};
