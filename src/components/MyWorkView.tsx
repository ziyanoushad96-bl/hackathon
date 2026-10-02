import React, { useState } from 'react';
import { Task } from '../types';
import { TaskCard } from './TaskCard';
import { compareTasksByUrgency } from '../services/priority';
import {
  Search,
  Plus,
  FileUp,
  AlertCircle,
  ArrowUpDown
} from 'lucide-react';

interface MyWorkViewProps {
  tasks: Task[];
  onOpenTask: (task: Task) => void;
  onStartWorking: (task: Task) => void;
  onBreakDown: (task: Task) => void;
  onViewReasoning: (task: Task) => void;
  onOpenAddTask: () => void;
  onOpenImportNotice: () => void;
}

export const MyWorkView: React.FC<MyWorkViewProps> = ({
  tasks,
  onOpenTask,
  onStartWorking,
  onBreakDown,
  onViewReasoning,
  onOpenAddTask,
  onOpenImportNotice
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filterTab, setFilterTab] = useState<'all' | 'critical' | 'in_progress' | 'completed'>('all');
  const [sortBy, setSortBy] = useState<'urgency' | 'deadline' | 'effort'>('urgency');

  const filteredTasks = tasks
    .filter(t => {
      // Search filter
      const matchesSearch =
        t.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        t.course.toLowerCase().includes(searchQuery.toLowerCase());
      if (!matchesSearch) return false;

      // Status/Risk tabs
      if (filterTab === 'critical') {
        return t.riskLevel === 'CRITICAL' || t.riskLevel === 'AT_RISK';
      }
      if (filterTab === 'in_progress') {
        return t.status === 'in_progress' || (t.completionPercentage || 0) > 0;
      }
      if (filterTab === 'completed') {
        return t.status === 'completed';
      }
      return true;
    })
    .sort((a, b) => {
      if (sortBy === 'urgency') {
        return compareTasksByUrgency(a, b);
      }
      if (sortBy === 'deadline') {
        return new Date(a.deadline).getTime() - new Date(b.deadline).getTime();
      }
      if (sortBy === 'effort') {
        return (b.remainingHours || 0) - (a.remainingHours || 0);
      }
      return 0;
    });

  return (
    <div className="space-y-6">
      {/* Top Banner */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900 tracking-tight">My Work & Deliverables</h1>
          <p className="text-xs text-slate-500 mt-0.5">
            Full inventory of academic tasks enriched with real-time risk state and completion tracking
          </p>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={onOpenImportNotice}
            className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl border border-indigo-200 bg-indigo-50 hover:bg-indigo-100 text-indigo-700 font-semibold text-xs transition-all shadow-xs cursor-pointer"
          >
            <FileUp className="w-3.5 h-3.5" />
            <span>Import Notice</span>
          </button>

          <button
            onClick={onOpenAddTask}
            className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs shadow-md transition-all shadow-slate-900/10 cursor-pointer"
          >
            <Plus className="w-4 h-4" />
            <span>Add Task</span>
          </button>
        </div>
      </div>

      {/* Search & Filter Toolbar */}
      <div className="p-4 bg-white rounded-2xl border border-slate-200 shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-3">
        {/* Search */}
        <div className="relative flex-1 max-w-md">
          <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search by assignment title, course code..."
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
            className="w-full pl-9 pr-3 py-2 text-xs rounded-xl border border-slate-200 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-hidden bg-slate-50/50"
          />
        </div>

        {/* Filter Tabs */}
        <div className="flex items-center gap-1 overflow-x-auto pb-1 md:pb-0 text-xs">
          <button
            onClick={() => setFilterTab('all')}
            className={`px-3 py-1.5 rounded-lg font-semibold transition-all whitespace-nowrap cursor-pointer ${
              filterTab === 'all'
                ? 'bg-slate-900 text-white'
                : 'text-slate-600 hover:bg-slate-100'
            }`}
          >
            All ({tasks.length})
          </button>
          <button
            onClick={() => setFilterTab('critical')}
            className={`px-3 py-1.5 rounded-lg font-semibold transition-all whitespace-nowrap cursor-pointer ${
              filterTab === 'critical'
                ? 'bg-rose-600 text-white'
                : 'text-slate-600 hover:bg-slate-100'
            }`}
          >
            Critical / At Risk ({tasks.filter(t => t.riskLevel === 'CRITICAL' || t.riskLevel === 'AT_RISK').length})
          </button>
          <button
            onClick={() => setFilterTab('in_progress')}
            className={`px-3 py-1.5 rounded-lg font-semibold transition-all whitespace-nowrap cursor-pointer ${
              filterTab === 'in_progress'
                ? 'bg-indigo-600 text-white'
                : 'text-slate-600 hover:bg-slate-100'
            }`}
          >
            In Progress
          </button>
          <button
            onClick={() => setFilterTab('completed')}
            className={`px-3 py-1.5 rounded-lg font-semibold transition-all whitespace-nowrap cursor-pointer ${
              filterTab === 'completed'
                ? 'bg-emerald-600 text-white'
                : 'text-slate-600 hover:bg-slate-100'
            }`}
          >
            Completed ({tasks.filter(t => t.status === 'completed').length})
          </button>
        </div>

        {/* Sort selector */}
        <div className="flex items-center gap-2 text-xs text-slate-500 shrink-0">
          <ArrowUpDown className="w-3.5 h-3.5" />
          <span className="hidden sm:inline">Sort:</span>
          <select
            value={sortBy}
            onChange={e => setSortBy(e.target.value as any)}
            className="p-1.5 bg-slate-50 border border-slate-200 rounded-lg text-slate-800 font-medium"
          >
            <option value="urgency">Highest Urgency</option>
            <option value="deadline">Soonest Deadline</option>
            <option value="effort">Remaining Effort</option>
          </select>
        </div>
      </div>

      {/* Task Grid */}
      {filteredTasks.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredTasks.map(task => (
            <TaskCard
              key={task.id}
              task={task}
              onOpenTask={onOpenTask}
              onStartWorking={onStartWorking}
              onBreakDown={onBreakDown}
              onViewReasoning={onViewReasoning}
            />
          ))}
        </div>
      ) : (
        <div className="p-12 text-center bg-white rounded-2xl border border-slate-200">
          <AlertCircle className="w-8 h-8 text-slate-400 mx-auto mb-2" />
          <h3 className="font-bold text-slate-800 text-sm">No assignments found</h3>
          <p className="text-xs text-slate-500 mt-1">Try changing your search query or filter tab.</p>
        </div>
      )}
    </div>
  );
};
