import React, { useState, useMemo, useCallback } from 'react';
import { Task, ModalType, RealityCheckData, Milestone } from './types';
import {
  loadStoredTasks,
  saveTasksToStorage,
  resetToDemoTasks,
  enrichTasks
} from './services/storage';
import { calculateRealityCheck } from './services/realityCheck';
import { compareTasksByUrgency } from './services/priority';
import { Sidebar } from './components/Sidebar';
import { Header } from './components/Header';
import { Dashboard } from './components/Dashboard';
import { MyWorkView } from './components/MyWorkView';
import { PlannerView } from './components/PlannerView';
import { InsightsView } from './components/InsightsView';
import { PanicModeView } from './components/PanicModeView';
import { TaskDetailsModal } from './components/TaskDetailsModal';
import { AddTaskModal } from './components/AddTaskModal';
import { ImportNoticeModal } from './components/ImportNoticeModal';
import { RealityCheckModal } from './components/RealityCheckModal';
import { SaveMeModal } from './components/SaveMeModal';
import { ReversePlannerModal } from './components/ReversePlannerModal';
import { SmartSplitModal } from './components/SmartSplitModal';
import { ActiveSessionModal } from './components/ActiveSessionModal';
import { ReasoningModal } from './components/ReasoningModal';
import { DemoToolbar } from './components/DemoToolbar';
import { DEMO_PRESETS } from './services/aiExtractor';

export const App: React.FC = () => {
  // 1. Central Single Source of Truth Task State
  const [tasks, setTasks] = useState<Task[]>(() => loadStoredTasks());

  // 2. Controlled Task Selection System: store ID only to prevent stale objects
  const [selectedTaskId, setSelectedTaskId] = useState<string | null>(null);

  // 3. Central Modal State System
  const [activeModal, setActiveModal] = useState<ModalType>(null);
  const [importNoticeInitialText, setImportNoticeInitialText] = useState<string>('');

  // 4. Navigation Tab State
  const [activeTab, setActiveTab] = useState<string>('dashboard');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // 5. Toast feedback
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = useCallback((msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 3500);
  }, []);

  // Dynamically enrich all tasks with risk, capacity, and collision engines
  const enrichedTasks = useMemo(() => enrichTasks(tasks), [tasks]);

  // Derive selected task strictly from live central state by ID
  const selectedTask: Task | null = useMemo(() => {
    if (!selectedTaskId) return null;
    return enrichedTasks.find(t => t.id === selectedTaskId) || null;
  }, [selectedTaskId, enrichedTasks]);

  // Derived Reality Check telemetry
  const realityCheckData: RealityCheckData = useMemo(() => {
    return calculateRealityCheck(enrichedTasks);
  }, [enrichedTasks]);

  // Dynamically calculated top recommended task for "What Should I Do Now?"
  const topTask: Task | null = useMemo(() => {
    const active = enrichedTasks.filter(t => t.status !== 'completed');
    if (active.length === 0) return null;
    return [...active].sort(compareTasksByUrgency)[0];
  }, [enrichedTasks]);

  // Central State Mutations
  const handleAddTask = (newTask: Task) => {
    const updated = [newTask, ...tasks];
    setTasks(updated);
    saveTasksToStorage(updated);
    showToast(`Added "${newTask.title}" to WorkRadar.`);
  };

  const handleUpdateTask = (updatedTask: Task) => {
    const updated = tasks.map(t => (t.id === updatedTask.id ? updatedTask : t));
    setTasks(updated);
    saveTasksToStorage(updated);
  };

  const handleDeleteTask = (taskId: string) => {
    const updated = tasks.filter(t => t.id !== taskId);
    setTasks(updated);
    saveTasksToStorage(updated);

    // Reset selection if deleted task was selected
    if (selectedTaskId === taskId) {
      setSelectedTaskId(null);
      if (activeModal === 'taskDetails' || activeModal === 'breakDown' || activeModal === 'focusSession' || activeModal === 'reasoning') {
        setActiveModal(null);
      }
    }
    showToast('Task removed from WorkRadar.');
  };

  const handleUpdateDeadline = (taskId: string, newDeadline: string) => {
    const updated = tasks.map(t => (t.id === taskId ? { ...t, deadline: newDeadline } : t));
    setTasks(updated);
    saveTasksToStorage(updated);
    showToast('Deadline extended and updated successfully.');
  };

  const handleSaveMilestones = (taskId: string, milestones: Milestone[]) => {
    const updated = tasks.map(t => {
      if (t.id === taskId) {
        const total = milestones.length;
        const completedCount = milestones.filter(m => m.completed).length;
        let newCompleted = t.completedHours;
        let newStatus = t.status;
        if (total > 0) {
          newCompleted = Math.round(((completedCount / total) * t.estimatedHours) * 10) / 10;
          newStatus = completedCount === total ? 'completed' : completedCount > 0 ? 'in_progress' : t.status;
        }
        return {
          ...t,
          milestones,
          completedHours: newCompleted,
          status: newStatus
        };
      }
      return t;
    });

    setTasks(updated);
    saveTasksToStorage(updated);
    showToast('Milestones saved & dashboard progress updated.');
  };

  const handleApplyTriage = (savedHours: number) => {
    showToast(`Triage applied! Saved ${savedHours}h across tasks.`);
  };

  const handleResetDemoData = () => {
    const baseline = resetToDemoTasks();
    setTasks(baseline);
    setSelectedTaskId(null);
    setActiveModal(null);
    setActiveTab('dashboard');
    showToast('Reset to original demo baseline with 6 assignments.');
  };

  // Modal open helpers with controlled selection
  const openTaskDetails = (task: Task) => {
    setSelectedTaskId(task.id);
    setActiveModal('taskDetails');
  };

  const openBreakDown = (task: Task) => {
    setSelectedTaskId(task.id);
    setActiveModal('breakDown');
  };

  const openFocusSession = (task: Task) => {
    setSelectedTaskId(task.id);
    setActiveModal('focusSession');
  };

  const openReasoning = (task: Task) => {
    setSelectedTaskId(task.id);
    setActiveModal('reasoning');
  };

  const closeModal = () => {
    setActiveModal(null);
  };

  // Counts for sidebar badges
  const criticalCount = enrichedTasks.filter(t => t.riskLevel === 'CRITICAL').length;
  const atRiskCount = enrichedTasks.filter(t => t.riskLevel === 'AT_RISK').length;

  return (
    <div className="min-h-screen bg-[#fafafa] text-slate-900 font-sans antialiased selection:bg-indigo-100 selection:text-indigo-900 flex">
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed top-5 right-5 z-50 bg-slate-900 text-white px-4 py-2.5 rounded-xl shadow-2xl text-xs font-semibold flex items-center gap-2 animate-in fade-in slide-in-from-top-3 border border-slate-700">
          <span className="w-2 h-2 rounded-full bg-emerald-400" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Left Sidebar */}
      <Sidebar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        onResetDemo={handleResetDemoData}
        criticalCount={criticalCount}
        atRiskCount={atRiskCount}
        isMobileOpen={isMobileMenuOpen}
        setIsMobileOpen={setIsMobileMenuOpen}
      />

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0 lg:pl-64">
        {/* Sticky Top Header */}
        <Header
          onOpenAddTask={() => setActiveModal('addTask')}
          onOpenImportNotice={() => {
            setImportNoticeInitialText('');
            setActiveModal('importNotice');
          }}
          onOpenPanicMode={() => setActiveTab('panic-mode')}
          onOpenRealityCheck={() => setActiveModal('realityCheck')}
          realityCheck={realityCheckData}
          onToggleMobileMenu={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        />

        {/* Dynamic Page Content View */}
        <main className="flex-1 p-4 sm:p-6 lg:p-8 max-w-7xl w-full mx-auto">
          {activeTab === 'dashboard' && (
            <Dashboard
              tasks={enrichedTasks}
              topTask={topTask}
              realityCheck={realityCheckData}
              onOpenTask={openTaskDetails}
              onStartWorking={openFocusSession}
              onBreakDown={openBreakDown}
              onViewReasoning={openReasoning}
              onOpenAddTask={() => setActiveModal('addTask')}
              onOpenImportNotice={() => {
                setImportNoticeInitialText('');
                setActiveModal('importNotice');
              }}
              onOpenPanicMode={() => setActiveTab('panic-mode')}
              onOpenRealityCheck={() => setActiveModal('realityCheck')}
              onOpenReversePlanner={() => setActiveModal('reversePlanner')}
              onNavigateToMyWork={() => setActiveTab('my-work')}
            />
          )}

          {activeTab === 'my-work' && (
            <MyWorkView
              tasks={enrichedTasks}
              onOpenTask={openTaskDetails}
              onStartWorking={openFocusSession}
              onBreakDown={openBreakDown}
              onViewReasoning={openReasoning}
              onOpenAddTask={() => setActiveModal('addTask')}
              onOpenImportNotice={() => {
                setImportNoticeInitialText('');
                setActiveModal('importNotice');
              }}
            />
          )}

          {activeTab === 'planner' && (
            <PlannerView
              tasks={enrichedTasks}
              onOpenTask={openTaskDetails}
              onOpenReversePlanner={() => setActiveModal('reversePlanner')}
            />
          )}

          {activeTab === 'insights' && (
            <InsightsView
              tasks={enrichedTasks}
              onOpenPanicMode={() => setActiveTab('panic-mode')}
              onOpenRealityCheck={() => setActiveModal('realityCheck')}
            />
          )}

          {activeTab === 'panic-mode' && (
            <PanicModeView
              tasks={enrichedTasks}
              onExitPanicMode={() => setActiveTab('dashboard')}
              onUpdateTask={handleUpdateTask}
              onOpenTaskDetails={openTaskDetails}
            />
          )}

          {activeTab === 'reality-check' && (
            <div className="py-4">
              <div className="bg-white rounded-2xl border border-slate-200 p-6">
                <RealityCheckModal
                  isOpen={true}
                  onClose={() => setActiveTab('dashboard')}
                  realityCheck={realityCheckData}
                  onActivateSaveMe={() => setActiveModal('saveMe')}
                  onOpenTask={openTaskDetails}
                />
              </div>
            </div>
          )}

          {activeTab === 'save-me' && (
            <div className="py-4">
              <div className="bg-white rounded-2xl border border-slate-200 p-6">
                <SaveMeModal
                  isOpen={true}
                  onClose={() => setActiveTab('dashboard')}
                  tasks={enrichedTasks}
                  shortfallHours={realityCheckData.shortfallHours}
                  onApplyTriage={handleApplyTriage}
                  onOpenTask={openTaskDetails}
                />
              </div>
            </div>
          )}

          {activeTab === 'reverse-planner' && (
            <div className="py-4">
              <div className="bg-white rounded-2xl border border-slate-200 p-6">
                <ReversePlannerModal
                  isOpen={true}
                  onClose={() => setActiveTab('dashboard')}
                  tasks={enrichedTasks}
                  onStartSession={openFocusSession}
                />
              </div>
            </div>
          )}
        </main>
      </div>

      {/* Floating Demo Toolbar for Live Hackathon Demonstrations */}
      <DemoToolbar
        onStep1Dashboard={() => setActiveTab('dashboard')}
        onStep2ImportNotice={() => {
          setImportNoticeInitialText(DEMO_PRESETS[0].text);
          setActiveModal('importNotice');
        }}
        onStep3DuplicateNotice={() => {
          setImportNoticeInitialText(DEMO_PRESETS[1].text);
          setActiveModal('importNotice');
        }}
        onStep4RealityCheck={() => setActiveModal('realityCheck')}
        onStep5WhatShouldIDoNow={() => {
          setActiveTab('dashboard');
          if (topTask) openReasoning(topTask);
        }}
        onStep6SaveMeMode={() => setActiveModal('saveMe')}
        onStep7PanicMode={() => setActiveTab('panic-mode')}
        onResetDemo={handleResetDemoData}
      />

      {/* Global Modals — All Controlled with Central State & Derived Selection */}
      <AddTaskModal
        isOpen={activeModal === 'addTask'}
        onClose={closeModal}
        onAddTask={handleAddTask}
      />

      <ImportNoticeModal
        isOpen={activeModal === 'importNotice'}
        onClose={() => {
          closeModal();
          setImportNoticeInitialText('');
        }}
        onAddTask={handleAddTask}
        onUpdateExistingDeadline={handleUpdateDeadline}
        existingTasks={enrichedTasks}
        initialText={importNoticeInitialText}
      />

      <RealityCheckModal
        isOpen={activeModal === 'realityCheck'}
        onClose={closeModal}
        realityCheck={realityCheckData}
        onActivateSaveMe={() => setActiveModal('saveMe')}
        onOpenTask={openTaskDetails}
      />

      <SaveMeModal
        isOpen={activeModal === 'saveMe'}
        onClose={closeModal}
        tasks={enrichedTasks}
        shortfallHours={realityCheckData.shortfallHours}
        onApplyTriage={handleApplyTriage}
        onOpenTask={openTaskDetails}
      />

      <ReversePlannerModal
        isOpen={activeModal === 'reversePlanner'}
        onClose={closeModal}
        tasks={enrichedTasks}
        onStartSession={openFocusSession}
      />

      {/* Task-Specific Modals reading live derived selectedTask */}
      <TaskDetailsModal
        task={activeModal === 'taskDetails' ? selectedTask : null}
        onClose={() => {
          closeModal();
          setSelectedTaskId(null);
        }}
        onStartWorking={openFocusSession}
        onBreakDown={openBreakDown}
        onUpdateTask={handleUpdateTask}
        onDeleteTask={handleDeleteTask}
        onViewReasoning={openReasoning}
      />

      <SmartSplitModal
        task={activeModal === 'breakDown' ? selectedTask : null}
        onClose={closeModal}
        onSaveMilestones={handleSaveMilestones}
      />

      <ActiveSessionModal
        task={activeModal === 'focusSession' ? selectedTask : null}
        onClose={closeModal}
        onUpdateTask={handleUpdateTask}
      />

      <ReasoningModal
        task={activeModal === 'reasoning' ? selectedTask : null}
        onClose={closeModal}
      />
    </div>
  );
};
