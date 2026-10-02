import { formatHoursAndMinutes, formatDurationMinutes } from './durationUtils';

export { formatHoursAndMinutes, formatDurationMinutes };

/**
 * WorkRadar Centralized Date & Time Utilities
 *
 * CRITICAL REQUIREMENT:
 * Never hard-code static historical dates.
 * Sample task deadlines must be generated relative to the current browser date/time.
 * All features use the same utility: Dashboard, Deadline Radar, Reality Check, etc.
 */

/**
 * Returns current browser date and time
 */
export const getCurrentDate = (): Date => {
  return new Date();
};

/**
 * Calculates hours remaining until deadline
 */
export const getHoursRemaining = (deadlineStr: string, fromDate: Date = getCurrentDate()): number => {
  try {
    const deadline = new Date(deadlineStr);
    const diffMs = deadline.getTime() - fromDate.getTime();
    return diffMs / (1000 * 60 * 60);
  } catch (e) {
    return 0;
  }
};

/**
 * Generates countdown string (e.g. "1 day 4h", "2 days 6h", "5h 20m", "45m", "Overdue")
 */
export const formatCountdown = (deadlineStr: string, fromDate: Date = getCurrentDate()): string => {
  const hoursRemaining = getHoursRemaining(deadlineStr, fromDate);
  if (hoursRemaining <= 0) return 'Overdue';

  const totalMinutes = Math.round(hoursRemaining * 60);
  const days = Math.floor(totalMinutes / (24 * 60));
  const remainingMinutesAfterDays = totalMinutes % (24 * 60);
  const hours = Math.floor(remainingMinutesAfterDays / 60);
  const minutes = remainingMinutesAfterDays % 60;

  if (days >= 2) {
    return hours > 0 ? `${days} days ${hours}h` : `${days} days`;
  }
  if (days === 1) {
    return hours > 0 ? `1 day ${hours}h` : '1 day';
  }
  if (hours > 0) {
    return `${hours}h ${minutes.toString().padStart(2, '0')}m`;
  }
  return `${minutes}m`;
};

/**
 * Formats deadline in a human-friendly string (e.g. "Tomorrow at 11:59 PM", "Friday at 5:00 PM")
 */
export const formatDeadlinePretty = (deadlineStr: string): string => {
  try {
    const d = new Date(deadlineStr);
    const now = getCurrentDate();
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const month = months[d.getMonth()];
    const day = d.getDate();
    let hours = d.getHours();
    const minutes = d.getMinutes().toString().padStart(2, '0');
    const ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12 || 12;

    // Check if Today or Tomorrow
    const isToday =
      d.getDate() === now.getDate() &&
      d.getMonth() === now.getMonth() &&
      d.getFullYear() === now.getFullYear();

    const tomorrow = new Date(now);
    tomorrow.setDate(tomorrow.getDate() + 1);
    const isTomorrow =
      d.getDate() === tomorrow.getDate() &&
      d.getMonth() === tomorrow.getMonth() &&
      d.getFullYear() === tomorrow.getFullYear();

    if (isToday) {
      return `Today at ${hours}:${minutes} ${ampm}`;
    }
    if (isTomorrow) {
      return `Tomorrow at ${hours}:${minutes} ${ampm}`;
    }

    return `${month} ${day}, ${hours}:${minutes} ${ampm}`;
  } catch (e) {
    return deadlineStr;
  }
};

/**
 * Returns day of week name (e.g. "Monday", "Tuesday")
 */
export const getDayOfWeek = (dateStr: string): string => {
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const d = new Date(dateStr);
  return days[d.getDay()];
};

/**
 * Adds days to date and returns ISO string
 */
export const addDaysToDate = (base: Date, days: number): string => {
  const d = new Date(base.getTime());
  d.setDate(d.getDate() + days);
  return d.toISOString();
};

/**
 * Generates an ISO string offset from now by days and hours
 */
export const createRelativeIsoDate = (daysOffset: number, hoursOffset: number = 0): string => {
  const now = getCurrentDate();
  const target = new Date(now.getTime() + daysOffset * 24 * 3600 * 1000 + hoursOffset * 3600 * 1000);
  return target.toISOString();
};

/**
 * Formats a Date to "YYYY-MM-DDTHH:mm" for HTML datetime-local inputs
 */
export const toDateTimeLocalValue = (date: Date): string => {
  const pad = (n: number) => n.toString().padStart(2, '0');
  const year = date.getFullYear();
  const month = pad(date.getMonth() + 1);
  const day = pad(date.getDate());
  const hours = pad(date.getHours());
  const minutes = pad(date.getMinutes());
  return `${year}-${month}-${day}T${hours}:${minutes}`;
};
