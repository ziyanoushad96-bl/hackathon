# WorkRadar — AI Academic Workload Intelligence Platform

> **"See the work. Understand the risk. Take the next step."**

WorkRadar is an AI-powered academic workload intelligence platform built to answer the core question:
> *"What do I need to do, how urgent and important is it, do I realistically have enough time, and what should I do next?"*

---

## 🚀 Live Demo Quickstart

The application runs locally on `http://localhost:3000`.

To start or restart the server:
```powershell
node server.js
```
The server watches `src/` and automatically recompiles TypeScript and JSX into `dist/bundle.js` with `esbuild`.

---

## 🎯 Hackathon Presentation Demo Flow

WorkRadar includes a floating **Hackathon Demo Guide** in the bottom-right corner to execute the live demonstration with 1 click per step:

1. **Step 1: Dashboard Context**
   - Greeting: `"Good evening, Alex 👋"`
   - Telemetry: `"You have 6 active tasks: 2 Critical · 2 At Risk · 2 Safe"`
   - Deadline Collision Warning: `"Two major assignments are competing for the same 48-hour window."`

2. **Step 2: Import Academic Notice (AI Extraction)**
   - Click **Import Notice** in Quick Actions or top header.
   - Choose from pre-configured demo presets (DBMS Project, AI Ethics Paper, or Multilingual notices in Hindi/Tamil).
   - Experience the tangible step-by-step AI progress indicator:
     - `Analyzing notice syntax...`
     - `✓ Deadline detected`
     - `✓ Core requirements found`
     - `✓ Workload hours estimated`
     - `✓ Workload risk calculated`
   - Review extracted task name, course, deadline, estimated workload, and requirements before adding.

3. **Step 3: Duplicate Deadline Detector**
   - Select the **"DBMS Deadline Extension"** demo preset.
   - WorkRadar automatically matches it to the existing `DBMS Mini Project` and alerts:
     - `"Possible deadline update detected! Previous: Friday, Oct 4 vs New: Monday, Oct 7 (Extension)"`
     - Allows 1-click **Update Existing Deadline** or **Keep Both**.

4. **Step 4: Reality Check Deficit Analysis**
   - Click the top header pill or **"View Reality Check"** button.
   - Analyzes available study capacity (11h 30m over 5 days) vs required work (16h 20m).
   - Displays prominent status: 🔴 **You're overloaded (-4h 50m Shortfall)**.
   - Shows contributing tasks ranked by required effort and strategic recommendations.

5. **Step 5: "What Should I Do NOW?"**
   - Large hero card recommends the highest-leverage task (**Research Paper**).
   - Shows countdown (`2 days 14h`), remaining effort (`5h 0m`), and bulleted reasons.
   - Click **"View Reasoning"** to inspect the transparent mathematical breakdown (Urgency + Workload Pressure + Remaining Work & Completion + Conflict Penalty).

6. **Step 6: Save Me Mode (Emergency Triage)**
   - Click **"Activate Save Me Mode"**.
   - Partitions work into **MUST DO** (urgent deliverables), **CAN REDUCE** (strip non-essential polish/MVP submission), and **CAN DELAY** (defer lower urgency items).
   - Shows recovered time (+4.3h saved), bringing the student back to safety.

7. **Step 7: Panic Mode (Next 48 Hours Only)**
   - Visual emergency view isolating only tasks due within 48 hours.
   - Strict staging:
     - **1 — START NOW**: Top priority deliverable with 25-minute Pomodoro timer.
     - **2 — NEXT**: Queue task.
     - **3 — AFTER THAT**: Remaining 48-hour items.
     - 1-click progress buttons (`+30m Done`, `+1h Done`, `Mark 100% Done`).

8. **Step 8: Reverse Planner & Smart Split**
   - **Reverse Planner**: Enter available free time (e.g. 3 hours tonight) to generate an optimal time-blocked study schedule with mathematical justification.
   - **Smart Split**: Click **"Break Down"** on any assignment to generate 3–5 work-backwards milestones from the deadline date.

---

## 🧠 Core Algorithmic Engines

- **Priority Score Engine (`src/services/priority.ts`)**: Rule-based transparent composite score (0–100) based on deadline urgency (up to 35 pts), workload pressure & capacity (up to 30 pts), remaining work & completion percentage (up to 20 pts), and deadline collision/conflict pressure (up to 15 pts). No academic grade weight is used anywhere in the product.
- **Risk Engine (`src/services/risk.ts`)**: Evaluates required work against available daily capacity (3.5h standard threshold), assigning `CRITICAL`, `AT_RISK`, `APPROACHING`, or `SAFE`.
- **Collision Detector (`src/services/collision.ts`)**: Identifies cognitive bottlenecks when 2 or more heavy deliverables fall within a 48-hour window.
- **Reality Check Engine (`src/services/realityCheck.ts`)**: Computes net deficit over a 5-day horizon.
- **Save Me Triage Engine (`src/services/saveMe.ts`)**: Generates minimum viable submission strategies to eliminate capacity shortfalls without missing deadlines.
- **AI Notice Extractor (`src/services/aiExtractor.ts`)**: Deterministic and LLM extraction parser with multi-step progressive UI states and multilingual support (Hindi, Tamil, Malayalam).
- **Duplicate Detector (`src/services/duplicateDetector.ts`)**: Fuzzy assignment matcher and deadline extension detector.

---

## 🎨 Design System & Accessibility

- **Typography**: Plus Jakarta Sans for ultra-crisp UI and JetBrains Mono for telemetry/timers.
- **Color Palette**: Clean light SaaS aesthetic with accessible risk color tokens:
  - 🟢 **Safe**: Emerald
  - 🟡 **Approaching**: Amber
  - 🟠 **At Risk**: Orange
  - 🔴 **Critical**: Rose/Red
- **Accessibility**: All risk levels pair icons and clear textual badges alongside colors.
