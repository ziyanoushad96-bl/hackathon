import React, { useState, useMemo } from 'react';
import { Task } from '../types';
import { getCurrentDate, getHoursRemaining } from '../utils/dateUtils';
import { formatHoursAndMinutes } from '../utils/durationUtils';
import { AlertTriangle } from 'lucide-react';

interface WeeklyWorkloadChartProps {
  tasks: Task[];
  dailyCapacity?: number;
}

interface DayData {
  day: string;
  fullName: string;
  dateStr: string;
  hours: number;
  tasks: string[];
}

export const WeeklyWorkloadChart: React.FC<WeeklyWorkloadChartProps> = ({
  tasks,
  dailyCapacity = 4.0
}) => {
  const [hoveredDay, setHoveredDay] = useState<number | null>(null);

  // Dynamically compute the upcoming 7-day workload distribution from actual active tasks
  const daysData = useMemo(() => {
    const now = getCurrentDate();
    const active = tasks.filter(t => t.status !== 'completed');
    const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const fullNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    const result: DayData[] = [];

    // Initialize 7 days starting from today
    for (let i = 0; i < 7; i++) {
      const d = new Date(now.getTime() + i * 24 * 3600 * 1000);
      result.push({
        day: i === 0 ? 'Today' : dayNames[d.getDay()],
        fullName: i === 0 ? `Today (${fullNames[d.getDay()]})` : fullNames[d.getDay()],
        dateStr: d.toISOString().slice(0, 10),
        hours: 0,
        tasks: []
      });
    }

    // Distribute remaining effort for active tasks across available days before their deadline
    active.forEach(task => {
      const remaining = Math.max(0, task.estimatedHours - task.completedHours);
      if (remaining <= 0) return;

      const hoursToDeadline = getHoursRemaining(task.deadline, now);
      const daysUntilDeadline = Math.max(1, Math.min(7, Math.ceil(hoursToDeadline / 24)));

      // Distribute effort across days leading up to deadline
      const effortPerDay = remaining / daysUntilDeadline;

      for (let i = 0; i < daysUntilDeadline && i < 7; i++) {
        result[i].hours += effortPerDay;
        if (!result[i].tasks.includes(task.title)) {
          result[i].tasks.push(task.title);
        }
      }
    });

    // Round hours to 1 decimal place
    return result.map(d => ({
      ...d,
      hours: Math.round(d.hours * 10) / 10
    }));
  }, [tasks]);

  const maxHours = Math.max(...daysData.map(d => d.hours), dailyCapacity + 2.0);
  const highestDay = daysData.reduce(
    (prev, curr) => (curr.hours > prev.hours ? curr : prev),
    daysData[0] || { day: 'Today', fullName: 'Today', hours: 0, tasks: [], dateStr: '' }
  );

  return (
    <div className="bg-white rounded-2xl border border-slate-200/80 p-5 sm:p-6 shadow-xs">
      <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
        <div>
          <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
            <span>Weekly Workload Distribution</span>
            <span className="text-xs px-2 py-0.5 rounded-full bg-slate-100 text-slate-600 font-medium">
              Next 7 Days
            </span>
          </h3>
          <p className="text-xs text-slate-500 mt-0.5">
            Real active workload mapped against your {dailyCapacity}h daily study capacity threshold
          </p>
        </div>

        <div className="flex items-center gap-3 text-xs">
          <div className="flex items-center gap-1.5 text-slate-500">
            <span className="w-2.5 h-2.5 rounded-xs bg-indigo-500" />
            <span>Normal</span>
          </div>
          <div className="flex items-center gap-1.5 text-slate-500">
            <span className="w-2.5 h-2.5 rounded-xs bg-rose-500" />
            <span>Overloaded</span>
          </div>
          <div className="flex items-center gap-1.5 text-slate-500">
            <span className="w-3 border-b-2 border-dashed border-amber-500" />
            <span>Capacity ({dailyCapacity}h)</span>
          </div>
        </div>
      </div>

      {/* Interactive Bar Chart Visualization */}
      <div className="relative pt-6 pb-2">
        {/* Capacity Guideline */}
        <div
          className="absolute left-0 right-0 border-b-2 border-dashed border-amber-400/80 pointer-events-none z-10 flex items-center justify-end pr-2"
          style={{ bottom: `${(dailyCapacity / maxHours) * 160 + 32}px` }}
        >
          <span className="text-[10px] font-bold text-amber-800 bg-amber-50 px-1.5 py-0.5 rounded border border-amber-200">
            Limit: {dailyCapacity}h
          </span>
        </div>

        {/* Chart Bars Grid */}
        <div className="h-44 flex items-end justify-between gap-2 sm:gap-4 px-2">
          {daysData.map((d, idx) => {
            const isOverloaded = d.hours > dailyCapacity;
            const barHeightPercent = Math.min(100, Math.round((d.hours / maxHours) * 100));
            const isHovered = hoveredDay === idx;

            return (
              <div
                key={idx}
                className="flex-1 flex flex-col items-center group relative cursor-pointer"
                onMouseEnter={() => setHoveredDay(idx)}
                onMouseLeave={() => setHoveredDay(null)}
              >
                {/* Floating Tooltip */}
                {isHovered && (
                  <div className="absolute -top-20 z-30 bg-slate-900 text-white text-[11px] rounded-xl py-2 px-3 shadow-2xl whitespace-nowrap pointer-events-none transform -translate-x-1/2 left-1/2 animate-in fade-in zoom-in-95 duration-150 border border-slate-700">
                    <p className="font-bold">{d.fullName}: {formatHoursAndMinutes(d.hours)}</p>
                    <p className="text-slate-300 text-[10px] mt-0.5">
                      {isOverloaded
                        ? `⚠️ +${(d.hours - dailyCapacity).toFixed(1)}h over capacity limit`
                        : '✓ Within study capacity'}
                    </p>
                    {d.tasks.length > 0 && (
                      <p className="text-indigo-300 text-[10px] mt-1 max-w-[200px] truncate">
                        Tasks: {d.tasks.join(', ')}
                      </p>
                    )}
                    <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-slate-900" />
                  </div>
                )}

                {/* Hour Value on top of bar */}
                <span
                  className={`text-[11px] font-bold mb-1.5 transition-colors ${
                    isOverloaded ? 'text-rose-600' : 'text-slate-600'
                  }`}
                >
                  {d.hours > 0 ? `${d.hours}h` : '0h'}
                </span>

                {/* The Bar */}
                <div className="w-full max-w-[42px] h-36 bg-slate-100/70 rounded-t-lg relative flex items-end overflow-hidden">
                  <div
                    className={`w-full rounded-t-lg transition-all duration-300 ${
                      isOverloaded
                        ? 'bg-gradient-to-t from-rose-600 to-rose-400 group-hover:from-rose-500 group-hover:to-rose-300 shadow-sm shadow-rose-200'
                        : 'bg-gradient-to-t from-indigo-600 to-indigo-400 group-hover:from-indigo-500 group-hover:to-indigo-300 shadow-sm shadow-indigo-100'
                    }`}
                    style={{ height: `${Math.max(6, barHeightPercent)}%` }}
                  />
                </div>

                {/* Day Label */}
                <span
                  className={`mt-2 text-xs font-semibold ${
                    isOverloaded ? 'text-rose-700' : 'text-slate-600'
                  }`}
                >
                  {d.day}
                </span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Explanatory Callout Banner */}
      <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between flex-wrap gap-2 text-xs">
        <div className="flex items-center gap-2 text-slate-600">
          <AlertTriangle className="w-4 h-4 text-amber-500 shrink-0" />
          <span>
            {highestDay.hours > dailyCapacity ? (
              <>
                <strong className="text-slate-800">{highestDay.fullName}</strong> is your peak workload day with{' '}
                <strong className="text-rose-600">{formatHoursAndMinutes(highestDay.hours)}</strong> required ({Math.round((highestDay.hours - dailyCapacity) * 10) / 10}h over capacity).
              </>
            ) : (
              <>
                Your next 7 days are within comfortable study capacity ({formatHoursAndMinutes(highestDay.hours)} peak on {highestDay.fullName}).
              </>
            )}
          </span>
        </div>
      </div>
    </div>
  );
};
