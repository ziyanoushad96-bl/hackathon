import React, { useState } from 'react';
import {
  Sparkles,
  ChevronUp,
  ChevronDown,
  RotateCcw,
  FileUp,
  Scale,
  Flame,
  LifeBuoy,
  Split,
  Compass,
  Play
} from 'lucide-react';

interface DemoToolbarProps {
  onStep1Dashboard: () => void;
  onStep2ImportNotice: () => void;
  onStep3DuplicateNotice: () => void;
  onStep4RealityCheck: () => void;
  onStep5WhatShouldIDoNow: () => void;
  onStep6SaveMeMode: () => void;
  onStep7PanicMode: () => void;
  onResetDemo: () => void;
}

export const DemoToolbar: React.FC<DemoToolbarProps> = ({
  onStep1Dashboard,
  onStep2ImportNotice,
  onStep3DuplicateNotice,
  onStep4RealityCheck,
  onStep5WhatShouldIDoNow,
  onStep6SaveMeMode,
  onStep7PanicMode,
  onResetDemo
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const steps = [
    { num: '1', title: 'Dashboard', desc: 'Active workload telemetry', action: onStep1Dashboard },
    { num: '2', title: 'Import Notice', desc: 'AI extracts messy notice', action: onStep2ImportNotice },
    { num: '3', title: 'Duplicate Detector', desc: 'Detects deadline extension', action: onStep3DuplicateNotice },
    { num: '4', title: 'Reality Check', desc: 'Shortfall: -4h 50m overload', action: onStep4RealityCheck },
    { num: '5', title: 'What to Do NOW?', desc: 'Top cognitive recommendation', action: onStep5WhatShouldIDoNow },
    { num: '6', title: 'Save Me Mode', desc: 'Triage MUST DO vs CAN REDUCE', action: onStep6SaveMeMode },
    { num: '7', title: 'Panic Mode', desc: 'Emergency 48-hour pipeline', action: onStep7PanicMode }
  ];

  return (
    <div className="fixed bottom-3 right-3 sm:right-6 z-40 max-w-xl transition-all">
      <div className="bg-slate-900/95 backdrop-blur-md text-white rounded-2xl border border-slate-800 shadow-2xl p-2.5 sm:p-3 text-xs">
        <div className="flex items-center justify-between gap-3 px-1">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="font-bold tracking-tight text-white flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>Hackathon Demo Guide</span>
            </span>
          </div>

          <div className="flex items-center gap-1.5">
            <button
              onClick={onResetDemo}
              className="px-2 py-1 rounded-lg bg-white/10 hover:bg-white/20 text-slate-300 hover:text-white text-[11px] font-medium transition-colors flex items-center gap-1"
              title="Reset all tasks to original demo baseline"
            >
              <RotateCcw className="w-3 h-3" />
              <span className="hidden sm:inline">Reset Baseline</span>
            </button>

            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="p-1 rounded-lg hover:bg-white/10 text-slate-400 hover:text-white transition-colors"
              title={isExpanded ? 'Collapse' : 'Expand step shortcuts'}
            >
              {isExpanded ? <ChevronDown className="w-4 h-4" /> : <ChevronUp className="w-4 h-4" />}
            </button>
          </div>
        </div>

        {/* Expanded Steps Grid */}
        {isExpanded && (
          <div className="mt-3 pt-2.5 border-t border-slate-800 grid grid-cols-2 sm:grid-cols-4 gap-1.5 animate-in fade-in duration-150">
            {steps.map(s => (
              <button
                key={s.num}
                onClick={s.action}
                className="p-2 rounded-xl bg-white/5 hover:bg-white/15 text-left transition-all border border-white/5 hover:border-indigo-400/50 group"
              >
                <div className="flex items-center justify-between text-[10px] text-slate-400 group-hover:text-indigo-300 font-bold mb-0.5">
                  <span>Step {s.num}</span>
                  <Play className="w-2.5 h-2.5 opacity-0 group-hover:opacity-100" />
                </div>
                <p className="font-bold text-slate-200 text-xs truncate group-hover:text-white">
                  {s.title}
                </p>
                <p className="text-[10px] text-slate-400 truncate mt-0.5">
                  {s.desc}
                </p>
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
