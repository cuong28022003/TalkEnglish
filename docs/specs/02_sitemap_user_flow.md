# 2. Sitemap

## 2.1 Sitemap Hierarchy

```mermaid
graph TD
    Home[Home Page] --> Lang[Language Selection: 20+ Languages]
    Home --> FirstTime[Instructions for First Time Users]
    
    Home --> EngLessons[English Lessons]
    
    EngLessons --> Speaking[Speaking English Lessons]
    Speaking --> Basics[English Speaking Basics: I, II, III]
    Speaking --> Regular[Regular English Lessons]
    Speaking --> Business[Business English Lessons]
    Speaking --> Interview[Interview English Lessons]
    Speaking --> Travel[Travel English Lessons]
    Speaking --> Idioms[Idioms and Phrases]
    
    EngLessons --> Video[English Video Lessons]
    Video --> ConvVid[Conversation Videos]
    Video --> BusVid[Business English Videos]
    Video --> SpeakVid[English Speaking Videos]
    
    EngLessons --> Listening[English Listening Lessons]
    Listening --> LBasic[Basic]
    Listening --> LInter[Intermediate]
    Listening --> LAdv[Advanced]
    
    EngLessons --> Extra[Extra English Lessons]
    Extra --> Pron[Pronunciation]
    Extra --> Grammar[English Grammar Basics]
    Extra --> Vocab[English Vocabulary / ESL]
    
    Home --> Extras[Extras]
    Extras --> Articles[English Speaking Articles]
    Articles --> Rules[5 Rules for Speaking Fluency]
    Articles --> Study[Study Method / Intonation]
    
    Home --> Offline[Download Offline Version]
    Offline --> Comp[Computer Version]
    Offline --> Mobile[Android / iOS Apps]
    
    Home --> Index[Full Lesson Index]
    Home --> Search[Lesson Search Tool]
```

---

# 3. User Flow

## 3.1 New User First Visit & Orientation

```mermaid
sequenceDiagram
    participant User
    participant Home as Home Page
    participant Inst as Instructions
    User->>Home: Arrives at TalkEnglish.com
    Home->>User: Prompts "Select a Language"
    User->>Home: Selects native language (e.g., Español, 日本語)
    Home->>Inst: Redirects to "First Time? Start by reading Instructions"
    Inst->>User: Explains the "master reading, listening, and speaking at the same time" method
    User->>Home: Navigates back to main Lesson Menu
```

## 3.2 Browsing and Selecting a Lesson

```mermaid
graph LR
    Start[User on Home/Menu] --> Category[Selects Speaking English Lessons]
    Category --> SubCat[Selects English Speaking Basics]
    SubCat --> Section[Chooses Section I, II, or III]
    Section --> Lesson[Clicks on 1 of 90 Specific Lessons]
```

## 3.3 Completing a Grammar Exercise

```mermaid
graph TD
    Unit[User opens Grammar Unit] --> Theory[Reads Explanation & Examples]
    Theory --> Task[Navigates to Exercises Section]
    Task --> Practice[Completes "Fill in the blank" or "Word Order" tasks]
    Practice --> Check[Consults "Key to Exercises" for Answers]
    Check --> Review[Re-reads Explanation if errors occur]
```

## 3.4 Using Audio & "Record Yourself" Features

```mermaid
sequenceDiagram
    participant User
    participant Page as Detail Lesson Page
    participant Tool as Audio Engine
    User->>Page: Views lesson sentence (e.g., "I'm currently studying English")
    User->>Page: Clicks audio icon/text
    Page->>Tool: Plays native speaker pronunciation
    User->>Tool: Activates "Record Yourself" feature
    User->>Tool: Records own voice and compares to model
```

## 3.5 Searching for Specific Content

```mermaid
graph LR
    Home[Home Page] --> Input[Enters keyword in 'Lesson Search']
    Input --> Results[View List of Relevant Lessons]
    Results --> Direct[Clicks link to specific Detail Page]
    Home --> FullIndex[Clicks 'Full Lesson Index']
    FullIndex --> Browse[Alphabetical/Categorical Scan of all 1000+ Sentences]
```
