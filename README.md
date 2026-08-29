# SSC Practice Platform

A high-performance interactive examination preparation platform for SSC aspirants, featuring Quantitative Aptitude, General Intelligence & Reasoning, and English Comprehension practice modules with bilingual question sets, official exam timers, and real-time score tracking.

## Architecture

- **`index.html`**: Entry Authentication Portal (Sign In, Sign Up, Password Recovery, Guest Instant Access, Active Session Detection).
- **`dashboard.html`**: Subject Selection Hub & Interactive Practice Workspace (3-Subject Hub: Quant, Reasoning, English; 35-question quiz sets, bilingual English/Hindi toggle, countdown timer, question palette, real-time feedback ratings, detailed step-by-step solutions, and performance scorecard).

## Technologies Used

- **Frontend**: HTML5, React 18 (Babel standalone), Vanilla JS
- **Styling**: Tailwind CSS, Google Fonts (Plus Jakarta Sans, Inter, Noto Sans Devanagari)
- **Backend & Database**: Supabase JS Client (v2) for Authentication, Question sets (`time_and_work_questions`), and Feedback collection (`question_feedback`).

---

## Authentication & Development Roadmap

### Phase 1: Authentication Portal (Completed)
- ✅ Dedicated login & registration portal with Supabase Auth.
- ✅ Password visibility toggle, live feedback toasts, and modal password reset.
- ✅ Instant guest mode bypass for test reviews.

### Phase 2: Session Management & Route Guarding (In Progress)
- 🔄 Session check on dashboard header displaying active user email/initials.
- 🔄 One-click logout with automatic cleanup and redirection.

### Phase 3: Personalized Progress & Attempt Persistence (Next)
- 📋 Record completed test attempts to Supabase (`user_attempts` table).
- 📋 Add "Bookmark Question" / "Save for Revision" feature.

### Phase 4: Performance Analytics & Weak Areas Diagnostic Widget (Completed)
- ✅ Real-time Aspirant Performance & Weak Types Diagnostics Tool.
- ✅ Tracks total questions attempted, correct/incorrect, net SSC Tier-1 score (+2, -0.5), and accuracy %.
- ✅ Sub-question type error diagnosis (<55% Critical Weak, 55-75% Review, >75% Mastered) with 1-click targeted practice.
- ✅ Subject-wise mastery comparison matrix and full practice test attempt history log with `localStorage` persistence.

### Phase 5: Social Logins & Aspirant Leaderboard
- 🌐 Google OAuth sign-in integration.
- 🏆 Live rankings and percentile benchmark against peers.