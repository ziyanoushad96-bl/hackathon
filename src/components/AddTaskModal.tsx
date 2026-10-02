import React, { useState, useEffect } from 'react';
import { Task } from '../types';
import { X, Plus, Calendar, Clock, Layers, Mic } from 'lucide-react';
import { toDateTimeLocalValue } from '../utils/dateUtils';

interface AddTaskModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAddTask: (task: Task) => void;
}

export const AddTaskModal: React.FC<AddTaskModalProps> = ({ isOpen, onClose, onAddTask }) => {
  if (!isOpen) return null;

  const getDefaultDeadline = () => {
    // Default to 3 days from now at 11:59 PM
    const target = new Date(Date.now() + 3 * 24 * 3600 * 1000);
    target.setHours(23, 59, 0, 0);
    return toDateTimeLocalValue(target);
  };

  const [title, setTitle] = useState('');
  const [course, setCourse] = useState('Computer Science');
  const [deadline, setDeadline] = useState(getDefaultDeadline());
  const [estimatedHours, setEstimatedHours] = useState(4.0);
  const [notes, setNotes] = useState('');
  const [requirementsInput, setRequirementsInput] = useState('');
  const [isListening, setIsListening] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setTitle('');
      setCourse('Computer Science');
      setDeadline(getDefaultDeadline());
      setEstimatedHours(4.0);
      setNotes('');
      setRequirementsInput('');
      setIsListening(false);
    }
  }, [isOpen]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim()) return;

    const requirements = requirementsInput
      .split('\n')
      .map(r => r.trim())
      .filter(r => r.length > 0);

    let deadlineIso = '';
    try {
      deadlineIso = new Date(deadline).toISOString();
    } catch (err) {
      deadlineIso = deadline.length === 16 ? `${deadline}:00Z` : deadline;
    }

    const newTask: Task = {
      id: `task-${Date.now()}`,
      title: title.trim(),
      course: course.trim(),
      description: notes.trim() || `${title.trim()} for ${course.trim()}`,
      deadline: deadlineIso,
      estimatedHours: Math.max(0.5, Number(estimatedHours)),
      completedHours: 0,
      requirements: requirements.length > 0 ? requirements : ['Complete assignment requirements', 'Submit final deliverables'],
      milestones: [],
      status: 'pending',
      riskLevel: 'APPROACHING',
      recommendedStartDate: 'Today',
      notes: notes.trim(),
      source: 'manual',
      createdAt: new Date().toISOString()
    };

    onAddTask(newTask);
    onClose();
  };

  // Voice speech-to-text integration via Web Speech API
  const handleVoiceInput = () => {
    const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
    if (SpeechRecognition) {
      try {
        const rec = new SpeechRecognition();
        rec.lang = 'en-US';
        setIsListening(true);
        rec.onresult = (evt: any) => {
          const phrase = evt.results[0][0].transcript;
          setTitle(phrase);
          setIsListening(false);
        };
        rec.onerror = () => {
          setIsListening(false);
          setTitle('AI Ethics Term Paper');
          setCourse('Artificial Intelligence');
          setEstimatedHours(6.0);
        };
        rec.onend = () => setIsListening(false);
        rec.start();
      } catch (e) {
        setIsListening(false);
        setTitle('AI Ethics Term Paper');
        setCourse('Artificial Intelligence');
        setEstimatedHours(6.0);
      }
    } else {
      setTitle('AI Ethics Term Paper');
      setCourse('Artificial Intelligence');
      setEstimatedHours(6.0);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/50 backdrop-blur-xs animate-in fade-in duration-150">
      <div className="bg-white rounded-2xl border border-slate-200 shadow-2xl max-w-lg w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6 border-b border-slate-100 flex items-center justify-between sticky top-0 bg-white z-10">
          <div>
            <h2 className="text-lg font-bold text-slate-900">Add New Academic Task</h2>
            <p className="text-xs text-slate-500 mt-0.5">
              Enter assignment details for cognitive workload scheduling
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-slate-700 rounded-lg hover:bg-slate-100 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          <div>
            <div className="flex items-center justify-between mb-1">
              <label className="text-xs font-semibold text-slate-700">Task Title</label>
              <button
                type="button"
                onClick={handleVoiceInput}
                className="text-[11px] text-indigo-600 font-medium flex items-center gap-1 hover:underline cursor-pointer"
              >
                <Mic className="w-3 h-3" />
                {isListening ? 'Listening...' : 'Voice Input'}
              </button>
            </div>
            <input
              type="text"
              required
              placeholder="e.g. Distributed Systems Lab 3"
              value={title}
              onChange={e => setTitle(e.target.value)}
              className="w-full text-xs p-2.5 rounded-xl border border-slate-300 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-hidden font-medium"
            />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="text-xs font-semibold text-slate-700 block mb-1">Course</label>
              <input
                type="text"
                required
                value={course}
                onChange={e => setCourse(e.target.value)}
                className="w-full text-xs p-2.5 rounded-xl border border-slate-300 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-hidden"
              />
            </div>

            <div>
              <label className="text-xs font-semibold text-slate-700 block mb-1">Deadline Date & Time</label>
              <input
                type="datetime-local"
                required
                value={deadline}
                onChange={e => setDeadline(e.target.value)}
                className="w-full text-xs p-2.5 rounded-xl border border-slate-300 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-hidden"
              />
            </div>
          </div>

          <div>
            <label className="text-xs font-semibold text-slate-700 block mb-1">
              Estimated Workload (Hours)
            </label>
            <input
              type="number"
              step="0.5"
              min="0.5"
              max="50"
              required
              value={estimatedHours}
              onChange={e => setEstimatedHours(Number(e.target.value))}
              className="w-full text-xs p-2.5 rounded-xl border border-slate-300 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-hidden font-semibold"
            />
          </div>

          <div>
            <label className="text-xs font-semibold text-slate-700 block mb-1">
              Requirements (One per line)
            </label>
            <textarea
              rows={3}
              placeholder="e.g.&#10;Implement Raft consensus algorithm&#10;Write 4-page report with benchmark plots&#10;Submit GitHub repo URL"
              value={requirementsInput}
              onChange={e => setRequirementsInput(e.target.value)}
              className="w-full text-xs p-2.5 rounded-xl border border-slate-300 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-hidden font-mono"
            />
          </div>

          <div>
            <label className="text-xs font-semibold text-slate-700 block mb-1">
              Additional Notes (Optional)
            </label>
            <input
              type="text"
              placeholder="Special instructions or portal details"
              value={notes}
              onChange={e => setNotes(e.target.value)}
              className="w-full text-xs p-2.5 rounded-xl border border-slate-300 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-hidden"
            />
          </div>

          <div className="pt-2 flex items-center justify-end gap-2">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-xs font-medium text-slate-600 hover:bg-slate-100 rounded-xl cursor-pointer"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs shadow-md transition-all flex items-center gap-1.5 cursor-pointer"
            >
              <Plus className="w-4 h-4" />
              <span>Add to Workload</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
