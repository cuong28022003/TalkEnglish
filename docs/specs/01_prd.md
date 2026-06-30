# 1. Product Requirements Document (PRD)

## 1.1 Project Overview and Goals
The objective is to build a comprehensive English learning platform modeled after **TalkEnglish.com**. The platform's primary goal is to help users "Learn English speaking so you can speak English fluently."

**Key Goals:**
- **Integrated Learning:** Provide a structure where users practice reading, listening, and speaking simultaneously to achieve fluency.
- **Accessibility:** Offer high-quality English education for free, accessible via web, mobile apps, and offline versions.
- **Comprehensive Curriculum:** Host a vast library covering scenario-based speaking, structured grammar, thematic vocabulary (English Vocabulary in Use model), and graded practice exercises.

---

## 1.2 Target Users
- **Beginners:** Need simple phrases to understand speaking fundamentals (A-J scenarios).
- **Intermediate Learners:** Master complex grammar (English Grammar in Use) and expand vocabulary (English Vocabulary in Use model).
- **Business Professionals:** Office English, interviews, professional idioms.
- **Travelers:** Situational English for navigation, hotels, tickets.
- **Self-Study Learners:** Need structured "facing pages" layout, graded exercises, and daily review system.

---

## 1.3 Core Features and Functionality
- **Lesson Search:** Robust search for grammar points, vocabulary, or situational phrases.
- **Audio-Visual Integration:**
  - **Audio Files:** Clickable play on every sentence, word, and example (using Web Speech API).
  - **Record Yourself:** MediaRecorder API — users record, play back, compare.
  - **AI Feedback:** Speech-to-Text comparison → accuracy score + word-level errors.
- **Interactive Exercises:**
  - **Grammar:** Input-field exercises with Check/Check All/Reset + scoring + progress bar.
  - **Vocabulary:** Facing-pages layout (Learn ↔ Practice) with graded exercises (match, fill-gap, categorize, write).
  - **"Over to You"** personalization prompts after each vocab unit.
  - **Daily Review** prompts using active recall techniques.
- **Practice Loop (detail-page):** Listen → Repeat → Record → AI Feedback → Next sentence (phase-gated workflow).
- **Offline Functionality:** Download versions for computer, Android, iOS.
- **Resource Library:** 1,000 daily-use sentences, interactive ebooks.

---

## 1.4 Content Structure

### English Lessons Hierarchy
1. **Speaking English Lessons (Scenario-Based — A-J Categories):**
   Lessons = real-life scenarios. Each scenario has Introduction → Patterns → Sentences → Pattern Expansion → Vocabulary → Dialogue → Practice (Listen/Repeat/Record/Feedback) → AI Conversation → Summary.

   **A. Daily Life** — Greetings, Introductions, Family, Friends, Hobbies, Daily Routine, Weekend, Shopping, Cooking, Cleaning, Laundry, Weather, Seasons, Pets, Birthday, Phone Call, Text Messages, Social Media, Movies, Music, Books, Sports

   **B. Food & Drink** — Restaurant, Coffee Shop, Fast Food, Bakery, Bar, Ordering Food, Take Away, Delivery, Cooking, Recipe, Supermarket, Market, Convenience Store, Dessert, Healthy Food

   **C. Travel** — Airport, Immigration, Customs, Taxi, Bus, Train, Subway, Hotel, Check In, Check Out, Tourist Attraction, Lost Passport, Lost Luggage, Asking Directions, Currency Exchange

   **D. Work** — Interview, Office, Meeting, Presentation, Project, Deadline, Feedback, Email, Phone Meeting, Online Meeting, Business Trip, Salary, Promotion, Customer Support, Negotiation

   **E. School** — Classroom, Teacher, Homework, Exam, Presentation, Library, Group Discussion, University, Research, Graduation

   **F. Health** — Doctor, Hospital, Pharmacy, Dentist, Emergency, Headache, Cold, Fever, Prescription, Appointment

   **G. Relationships** — Dating, Marriage, Wedding, Arguments, Apologizing, Giving Compliments, Invitations, Congratulations, Thank You, Goodbye

   **H. Money** — Bank, ATM, Credit Card, Loan, Saving Money, Investment, Insurance, Shopping Refund

   **I. Technology** — Computer, Internet, Software, Password, Technical Support, Online Shopping, Smartphone, Email, Social Media, AI Tools

   **J. Emergencies** — Police, Fire, Accident, Lost Child, Natural Disaster, Emergency Call, First Aid

2. **Grammar in Use (145 Units):**
   Interactive exercises with input fields, Check All, scoring, progress bar.
   - **Tenses:** Present and Past (units 1–6), Perfect (7–14), Future (19–25)
   - **Modals:** Can–Could, Must, May, Might, Should (26–37)
   - **Structure:** Passive (42–46), Reported Speech (47–48), Conditionals (38–40)
   - **Pronouns & Determiners** (82–91), **Relative Clauses** (92–97), **Adjectives & Adverbs** (98–111), **Phrasal Verbs** (137–145)

3. **Vocabulary in Use (English Vocabulary in Use model):**
   Facing-pages layout: **Learn (left)** — vocabulary list with definitions & examples + audio; **Practice (right)** — graded exercises (match, fill-gap, categorize, write). Each unit ends with **"Over to You"** personalization prompt + **Daily Review** tip.

   **Active Categories:**
   - The World Around Us (Weather, Geography, Environment)
   - People (Appearance, Personality, Family)
   - Daily Life (Routine, Home, Food)
   - Travel & Transport
   - Work & Study
   - Health & Fitness
   - Leisure & Entertainment

4. **Listening Lessons:** Basic, Intermediate, Advanced levels.

5. **Extra Lessons:** Pronunciation, English Grammar Basics, ESL Vocabulary.

---

## 1.5 Technical Requirements
- **Cross-Platform:** Responsive web + offline versions for Windows, Android, iOS.
- **Audio:** Web Speech API for TTS playback; MediaRecorder API for recording.
- **AI Feedback:** Speech-to-Text via Web Speech Recognition API; word-level accuracy scoring.
- **Offline Storage:** LocalStorage for progress, IndexedDB for downloaded content.
- **Search:** Full text index across all lessons, grammar units, and vocabulary items.
- **Angular:** Standalone components, lazy-loaded routes, ChangeDetectionStrategy.OnPush.

---

## 1.6 Success Metrics
- **Fluency Improvement:** Completion rate of scenario-based speaking lessons.
- **Engagement:** Time spent on vocabulary "facing pages" units and grammar exercises.
- **Accuracy:** Improvements in grammar exercise scores and AI speech feedback scores.
- **Vocabulary Retention:** Completion of daily review cycles and "Over to You" submissions.
- **Global Reach:** Geographic distribution of language selections.
