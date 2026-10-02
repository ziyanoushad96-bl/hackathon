import React, { useState, useRef, useEffect } from 'react';
import { Task, ExtractedNotice, DuplicateConflict } from '../types';
import {
  parseAcademicNoticeDeterministic,
  DEMO_PRESETS
} from '../services/aiExtractor';
import { checkDuplicateDeadline } from '../services/duplicateDetector';
import {
  X,
  Sparkles,
  CheckCircle,
  AlertTriangle,
  UploadCloud,
  FileText,
  ChevronDown,
  ChevronUp,
  FlaskConical,
  Check
} from 'lucide-react';
import { formatDeadlinePretty } from '../utils/dateUtils';

export { DEMO_PRESETS };

interface ImportNoticeModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAddTask: (task: Task) => void;
  onUpdateExistingDeadline: (taskId: string, newDeadline: string) => void;
  existingTasks: Task[];
  initialText?: string;
}

const EXTRACTION_STEPS = [
  'Deadline detected',
  'Requirements found',
  'Workload estimated'
];

export const ImportNoticeModal: React.FC<ImportNoticeModalProps> = ({
  isOpen,
  onClose,
  onAddTask,
  onUpdateExistingDeadline,
  existingTasks,
  initialText = ''
}) => {
  if (!isOpen) return null;

  const [inputMode, setInputMode] = useState<'paste' | 'upload'>('paste');
  const [noticeText, setNoticeText] = useState(initialText);
  const [fileName, setFileName] = useState<string | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [stepIndex, setStepIndex] = useState(0);
  const [extractedResult, setExtractedResult] = useState<ExtractedNotice | null>(null);
  const [duplicateConflict, setDuplicateConflict] = useState<DuplicateConflict | null>(null);

  // Demo presets control - behind clean demo toggle
  const [isDemoModeOpen, setIsDemoModeOpen] = useState(Boolean(initialText));
  const [selectedPresetId, setSelectedPresetId] = useState<string | null>(() => {
    const match = DEMO_PRESETS.find(p => p.text === initialText);
    return match ? match.id : null;
  });

  // Editable extracted fields
  const [editTitle, setEditTitle] = useState('');
  const [editCourse, setEditCourse] = useState('');
  const [editDeadline, setEditDeadline] = useState('');
  const [editHours, setEditHours] = useState(5.0);

  const fileInputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    setNoticeText(initialText);
    setFileName(null);
    setIsProcessing(false);
    setExtractedResult(null);
    setDuplicateConflict(null);
    if (initialText) {
      setIsDemoModeOpen(true);
      const match = DEMO_PRESETS.find(p => p.text === initialText);
      setSelectedPresetId(match ? match.id : null);
    } else {
      setSelectedPresetId(null);
    }
  }, [isOpen, initialText]);

  // Controlled preset selection
  const handleSelectPreset = (presetId: string) => {
    const preset = DEMO_PRESETS.find(p => p.id === presetId);
    if (!preset) return;

    setSelectedPresetId(preset.id);
    setNoticeText(preset.text);
    setInputMode('paste');
    setFileName(null);
    setExtractedResult(null);
    setDuplicateConflict(null);
  };

  const handleProcessNotice = () => {
    if (!noticeText.trim()) return;

    setIsProcessing(true);
    setStepIndex(0);
    setExtractedResult(null);
    setDuplicateConflict(null);

    // Multi-step progressive feedback
    const stepInterval = setInterval(() => {
      setStepIndex(prev => {
        if (prev < EXTRACTION_STEPS.length - 1) {
          return prev + 1;
        } else {
          clearInterval(stepInterval);
          finishExtraction();
          return prev;
        }
      });
    }, 350);
  };

  const finishExtraction = () => {
    const extracted = parseAcademicNoticeDeterministic(noticeText);
    setExtractedResult(extracted);
    setEditTitle(extracted.task);
    setEditCourse(extracted.course);
    setEditDeadline(extracted.deadline);
    setEditHours(extracted.estimatedHours || 5.0);

    // Check for duplicate deadline conflicts against existing user workload
    const conflict = checkDuplicateDeadline(extracted, existingTasks);
    if (conflict) {
      setDuplicateConflict(conflict);
    }

    setIsProcessing(false);
  };

  const handleConfirmAdd = () => {
    if (!extractedResult) return;

    const newTask: Task = {
      id: `task-${Date.now()}`,
      title: editTitle.trim() || extractedResult.task,
      course: editCourse.trim() || extractedResult.course,
      description: extractedResult.notes || editTitle,
      deadline: editDeadline || extractedResult.deadline,
      estimatedHours: Math.max(0.5, Number(editHours)),
      completedHours: 0,
      requirements: extractedResult.requirements || ['Complete assignment requirements'],
      milestones: [],
      status: 'pending',
      riskLevel: 'APPROACHING',
      recommendedStartDate: 'Today',
      notes: extractedResult.notes || '',
      source: 'import_notice',
      createdAt: new Date().toISOString()
    };

    onAddTask(newTask);
    handleClose();
  };

  const handleResolveUpdateDeadline = () => {
    if (!duplicateConflict) return;
    onUpdateExistingDeadline(duplicateConflict.existingTask.id, duplicateConflict.newDeadline);
    handleClose();
  };

  const handleClose = () => {
    setExtractedResult(null);
    setDuplicateConflict(null);
    setIsProcessing(false);
    onClose();
  };

  const handleFile = (file: File) => {
    setFileName(file.name);
    if (file.name.endsWith('.txt')) {
      const reader = new FileReader();
      reader.onload = e => {
        const text = (e.target?.result as string) || '';
        setNoticeText(text);
        setInputMode('paste');
      };
      reader.readAsText(file);
    } else {
      // Simulate extraction from PDF / Image screenshot
      const baseName = file.name.replace(/\.[^/.]+$/, '');
      setNoticeText(
        `[Extracted from ${file.name}]\nAssignment: ${baseName}\nDeadline: In 3 days at 11:59 PM.\nCourse: Computer Science\nRequirements: Complete implementation, document test methodology, and submit final report.\nEstimated effort: 4.5 hours.`
      );
      setInputMode('paste');
    }
  };

  const handleFileDrop = (e: React.DragEvent) => {
    e.preventDefault();
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFile(e.dataTransfer.files[0]);
    }
  };

  const handleFileInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      handleFile(e.target.files[0]);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/50 backdrop-blur-xs animate-in fade-in duration-150">
      <div className="bg-white rounded-2xl border border-slate-200 shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="p-6 border-b border-slate-100 flex items-start justify-between gap-4 sticky top-0 bg-white z-10">
          <div>
            <h2 className="text-xl font-bold text-slate-900">Import Academic Notice</h2>
            <p className="text-xs text-slate-500 mt-0.5">
              Drop a screenshot, PDF, or paste your academic notice. We'll turn it into structured work.
            </p>
          </div>

          <button
            type="button"
            onClick={handleClose}
            className="p-2 text-slate-400 hover:text-slate-700 rounded-lg hover:bg-slate-100 transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 space-y-4">
          {/* Mode Switcher Tabs */}
          <div className="flex items-center justify-between border-b border-slate-200 text-xs font-semibold">
            <div className="flex">
              <button
                type="button"
                onClick={() => setInputMode('paste')}
                className={`pb-2.5 px-4 border-b-2 transition-all flex items-center gap-2 cursor-pointer ${
                  inputMode === 'paste'
                    ? 'border-indigo-600 text-indigo-600 font-bold'
                    : 'border-transparent text-slate-500 hover:text-slate-800'
                }`}
              >
                <FileText className="w-3.5 h-3.5" />
                <span>Paste Text / Notice</span>
              </button>
              <button
                type="button"
                onClick={() => setInputMode('upload')}
                className={`pb-2.5 px-4 border-b-2 transition-all flex items-center gap-2 cursor-pointer ${
                  inputMode === 'upload'
                    ? 'border-indigo-600 text-indigo-600 font-bold'
                    : 'border-transparent text-slate-500 hover:text-slate-800'
                }`}
              >
                <UploadCloud className="w-3.5 h-3.5" />
                <span>Drag & Drop PDF / Screenshot</span>
              </button>
            </div>

            {/* Discreet Demo Mode Toggle */}
            <button
              type="button"
              onClick={() => setIsDemoModeOpen(!isDemoModeOpen)}
              className="text-[11px] font-medium text-slate-500 hover:text-indigo-600 flex items-center gap-1 pb-2 px-2 transition-colors cursor-pointer"
            >
              <FlaskConical className="w-3.5 h-3.5 text-indigo-500" />
              <span>{isDemoModeOpen ? 'Hide Demo Mode' : 'Demo Mode'}</span>
            </button>
          </div>

          {/* Controlled Demo Mode Presets List (shown only when Demo Mode is opened) */}
          {isDemoModeOpen && (
            <div className="rounded-xl border border-indigo-100 bg-indigo-50/40 p-3 space-y-2 animate-in fade-in duration-150">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-indigo-950 flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-indigo-600" />
                  <span>Demo Notice Presets:</span>
                </span>
                <span className="text-[11px] text-slate-500">Click to populate notice</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {DEMO_PRESETS.map(preset => {
                  const isSelected = selectedPresetId === preset.id;
                  return (
                    <button
                      key={preset.id}
                      type="button"
                      onClick={() => handleSelectPreset(preset.id)}
                      className={`text-xs p-2.5 rounded-xl border text-left transition-all cursor-pointer flex items-center justify-between ${
                        isSelected
                          ? 'bg-indigo-600 text-white font-bold border-indigo-600 shadow-xs'
                          : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-50 hover:border-indigo-300'
                      }`}
                    >
                      <span className="truncate pr-2">{preset.label}</span>
                      {isSelected && <Check className="w-3.5 h-3.5 shrink-0 stroke-[3]" />}
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* Upload or Paste Form */}
          {inputMode === 'upload' ? (
            <div
              onDragOver={e => e.preventDefault()}
              onDrop={handleFileDrop}
              onClick={() => fileInputRef.current?.click()}
              className="border-2 border-dashed border-slate-300 hover:border-indigo-500 rounded-2xl p-8 text-center bg-slate-50/50 hover:bg-indigo-50/20 transition-all cursor-pointer group select-none"
            >
              <input
                ref={fileInputRef}
                type="file"
                accept=".png,.jpg,.jpeg,.pdf,.txt"
                onChange={handleFileInputChange}
                className="hidden"
              />
              <div className="w-12 h-12 rounded-2xl bg-indigo-50 text-indigo-600 flex items-center justify-center mx-auto mb-3 group-hover:scale-105 transition-transform">
                <UploadCloud className="w-6 h-6" />
              </div>
              <p className="text-sm font-bold text-slate-800">
                {fileName ? fileName : 'Drop your notice or screenshot here, or click to browse'}
              </p>
              <p className="text-xs text-slate-500 mt-1">
                Supports PNG, JPG, PDF, TXT (up to 10MB)
              </p>
              {fileName && (
                <div className="mt-3 inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-white border border-slate-200 text-xs font-medium text-slate-700 shadow-xs">
                  <FileText className="w-3.5 h-3.5 text-indigo-500" />
                  <span>File loaded & ready for extraction</span>
                </div>
              )}
            </div>
          ) : (
            <div className="space-y-2">
              <textarea
                rows={6}
                value={noticeText}
                onChange={e => {
                  setNoticeText(e.target.value);
                  setSelectedPresetId(null);
                }}
                placeholder="Paste WhatsApp message, LMS announcement, syllabus circular, or professor email here..."
                className="w-full text-xs font-mono p-4 rounded-xl border border-slate-300 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-hidden bg-slate-50/40 text-slate-800 transition-all resize-y"
              />
            </div>
          )}

          {/* Trigger Process Button */}
          {!extractedResult && !isProcessing && (
            <button
              type="button"
              onClick={handleProcessNotice}
              disabled={!noticeText.trim()}
              className="w-full py-3.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 disabled:bg-slate-200 disabled:text-slate-400 disabled:cursor-not-allowed text-white font-bold text-sm shadow-md shadow-indigo-200 transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <Sparkles className="w-4 h-4" />
              <span>Extract Assignment</span>
            </button>
          )}

          {/* Multi-step Loading State */}
          {isProcessing && (
            <div className="p-6 rounded-2xl bg-indigo-50/70 border border-indigo-100 space-y-4">
              <div className="flex items-center justify-between text-xs font-semibold text-indigo-950">
                <span className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-indigo-600 animate-ping" />
                  Analyzing your notice...
                </span>
                <span className="text-slate-500">Step {stepIndex + 1} of {EXTRACTION_STEPS.length}</span>
              </div>

              {/* Progress Bar */}
              <div className="w-full bg-indigo-200/60 rounded-full h-1.5 overflow-hidden">
                <div
                  className="bg-indigo-600 h-full rounded-full transition-all duration-300"
                  style={{ width: `${((stepIndex + 1) / EXTRACTION_STEPS.length) * 100}%` }}
                />
              </div>

              {/* Extraction Steps */}
              <div className="space-y-2 pt-1">
                {EXTRACTION_STEPS.map((step, idx) => (
                  <div
                    key={idx}
                    className={`flex items-center gap-2.5 text-xs transition-opacity duration-200 ${
                      idx <= stepIndex ? 'opacity-100 text-indigo-950 font-medium' : 'opacity-30 text-slate-400'
                    }`}
                  >
                    {idx < stepIndex ? (
                      <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                    ) : idx === stepIndex ? (
                      <span className="w-4 h-4 rounded-full border-2 border-indigo-600 border-t-transparent animate-spin shrink-0" />
                    ) : (
                      <span className="w-4 h-4 rounded-full border border-slate-300 shrink-0" />
                    )}
                    <span>✓ {step}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Duplicate Deadline Update Conflict Alert (if detected) */}
          {duplicateConflict && (
            <div className="p-4 rounded-xl bg-amber-50 border border-amber-200 space-y-2.5 animate-in fade-in zoom-in-95 duration-200">
              <div className="flex items-start gap-2.5">
                <AlertTriangle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-amber-900 uppercase tracking-wide">
                    Possible Deadline Update Detected
                  </h4>
                  <p className="text-xs text-amber-800 mt-0.5">
                    This notice appears to reference an assignment already in your WorkRadar:{' '}
                    <strong className="text-slate-900">"{duplicateConflict.existingTask.title}"</strong>.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2 text-xs bg-white p-3 rounded-lg border border-amber-200">
                <div>
                  <span className="text-[10px] text-slate-400 font-bold uppercase block">Previous Deadline</span>
                  <span className="font-semibold text-rose-700">
                    {formatDeadlinePretty(duplicateConflict.previousDeadline)}
                  </span>
                </div>
                <div>
                  <span className="text-[10px] text-slate-400 font-bold uppercase block">New Detected Deadline</span>
                  <span className="font-bold text-emerald-700">
                    {formatDeadlinePretty(duplicateConflict.newDeadline)} (Extension)
                  </span>
                </div>
              </div>

              <div className="flex items-center justify-end gap-2 pt-1">
                <button
                  type="button"
                  onClick={() => setDuplicateConflict(null)}
                  className="px-3 py-1.5 rounded-lg border border-slate-300 bg-white text-slate-700 text-xs font-medium hover:bg-slate-50 cursor-pointer"
                >
                  Keep Both
                </button>
                <button
                  type="button"
                  onClick={handleResolveUpdateDeadline}
                  className="px-3.5 py-1.5 rounded-lg bg-amber-600 hover:bg-amber-700 text-white text-xs font-bold shadow-xs flex items-center gap-1.5 cursor-pointer"
                >
                  <CheckCircle className="w-3.5 h-3.5" />
                  <span>Update Deadline</span>
                </button>
              </div>
            </div>
          )}

          {/* Clean Confirmation Card (Only Useful Academic Information) */}
          {extractedResult && !isProcessing && (
            <div className="p-5 sm:p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-4 animate-in fade-in duration-200">
              <div className="flex items-center justify-between border-b border-slate-200 pb-3">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-emerald-600" />
                  <span className="font-bold text-sm text-slate-900">Extracted Assignment Details</span>
                </div>
                <button
                  type="button"
                  onClick={() => setExtractedResult(null)}
                  className="text-xs text-indigo-600 hover:text-indigo-800 font-medium cursor-pointer"
                >
                  Edit Notice
                </button>
              </div>

              {/* Useful Academic Fields */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <div>
                  <label className="text-slate-500 font-semibold block mb-1">Task</label>
                  <input
                    type="text"
                    value={editTitle}
                    onChange={e => setEditTitle(e.target.value)}
                    className="w-full p-2.5 bg-white border border-slate-300 rounded-xl font-bold text-slate-900 focus:border-indigo-500 outline-hidden"
                  />
                </div>

                <div>
                  <label className="text-slate-500 font-semibold block mb-1">Course / Subject</label>
                  <input
                    type="text"
                    value={editCourse}
                    onChange={e => setEditCourse(e.target.value)}
                    className="w-full p-2.5 bg-white border border-slate-300 rounded-xl text-slate-800 focus:border-indigo-500 outline-hidden"
                  />
                </div>

                <div>
                  <label className="text-slate-500 font-semibold block mb-1">Deadline</label>
                  <input
                    type="text"
                    value={editDeadline}
                    onChange={e => setEditDeadline(e.target.value)}
                    className="w-full p-2.5 bg-white border border-slate-300 rounded-xl font-semibold text-rose-700 focus:border-indigo-500 outline-hidden"
                  />
                  <span className="text-[11px] text-slate-400 block mt-1">
                    {formatDeadlinePretty(editDeadline)}
                  </span>
                </div>

                <div>
                  <label className="text-slate-500 font-semibold block mb-1">Estimated Effort</label>
                  <div className="relative">
                    <input
                      type="number"
                      step="0.5"
                      value={editHours}
                      onChange={e => setEditHours(Number(e.target.value))}
                      className="w-full p-2.5 bg-white border border-slate-300 rounded-xl font-semibold text-slate-800 focus:border-indigo-500 outline-hidden pr-14"
                    />
                    <span className="absolute right-3 top-2.5 text-xs text-slate-400 font-medium">hours</span>
                  </div>
                </div>
              </div>

              {/* Requirements Checklist */}
              {extractedResult.requirements && extractedResult.requirements.length > 0 && (
                <div>
                  <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block mb-1.5">
                    Requirements
                  </span>
                  <div className="space-y-1.5 max-h-36 overflow-y-auto pr-1">
                    {extractedResult.requirements.map((req, i) => (
                      <div
                        key={i}
                        className="flex items-start gap-2 p-2 rounded-lg bg-white border border-slate-200 text-xs text-slate-700"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 shrink-0 mt-1.5" />
                        <span className="leading-relaxed">{req}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Notes if available */}
              {extractedResult.notes && (
                <div className="p-3 rounded-xl bg-white border border-slate-200 text-xs">
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-0.5">
                    Notes
                  </span>
                  <p className="text-slate-600">{extractedResult.notes}</p>
                </div>
              )}

              {/* Bottom Actions */}
              <div className="pt-3 border-t border-slate-200/80 flex items-center justify-between">
                <button
                  type="button"
                  onClick={() => setExtractedResult(null)}
                  className="px-4 py-2 text-xs font-semibold text-slate-600 hover:bg-slate-200 rounded-xl transition-colors cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="button"
                  onClick={handleConfirmAdd}
                  className="px-6 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs shadow-md shadow-indigo-600/20 transition-all flex items-center gap-2 hover:scale-[1.02] cursor-pointer"
                >
                  <CheckCircle className="w-4 h-4" />
                  <span>Add to WorkRadar</span>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
