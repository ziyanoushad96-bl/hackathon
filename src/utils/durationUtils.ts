/**
 * WorkRadar Centralized Duration Formatting Utility
 *
 * CRITICAL REQUIREMENT:
 * Minutes must ALWAYS be normalized to 0–59.
 * Never display:
 * 4h 60m, 2h 75m, 0h 60m
 * Correct:
 * 4h 60m -> 5h 00m
 * 2h 75m -> 3h 15m
 * 0h 60m -> 1h 00m
 *
 * Used uniformly across all components and views.
 */

/**
 * Formats a duration in minutes into a normalized string (e.g. "3h 15m", "45m", "2h 00m").
 */
export const formatDurationMinutes = (totalMinutes: number): string => {
  if (totalMinutes <= 0 || isNaN(totalMinutes)) return '0m';

  const roundMinutes = Math.round(totalMinutes);
  const normalizedHours = Math.floor(roundMinutes / 60);
  const normalizedMinutes = roundMinutes % 60;

  if (normalizedHours === 0) {
    return `${normalizedMinutes}m`;
  }

  if (normalizedMinutes === 0) {
    return `${normalizedHours}h 00m`;
  }

  const minsPadded = normalizedMinutes.toString().padStart(2, '0');
  return `${normalizedHours}h ${minsPadded}m`;
};

/**
 * Formats hours in decimal (e.g. 2.25, 4.0, 0.5) into normalized "Xh YYm"
 * Guarantees minutes are strictly between 0 and 59.
 */
export const formatHoursAndMinutes = (hoursDecimal: number): string => {
  if (hoursDecimal <= 0 || isNaN(hoursDecimal)) return '0m';

  const totalMinutes = Math.round(hoursDecimal * 60);
  const normalizedHours = Math.floor(totalMinutes / 60);
  const normalizedMinutes = totalMinutes % 60;

  if (normalizedHours === 0) {
    return `${normalizedMinutes}m`;
  }

  if (normalizedMinutes === 0) {
    return `${normalizedHours}h 00m`;
  }

  const minsPadded = normalizedMinutes.toString().padStart(2, '0');
  return `${normalizedHours}h ${minsPadded}m`;
};

/**
 * Compact duration formatter (e.g. "4h", "2.5h", "30m")
 */
export const formatCompactHours = (hoursDecimal: number): string => {
  if (hoursDecimal <= 0 || isNaN(hoursDecimal)) return '0h';
  const rounded = Math.round(hoursDecimal * 10) / 10;
  return `${rounded}h`;
};
