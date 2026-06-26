# 7. Coding Standards

## 7.1 Project Structure Conventions

The project follows a **feature-based modular architecture** for Angular:

```
src/
├── app/
│   ├── core/                    # Singleton services (AuthService, LanguageService)
│   ├── shared/                  # Reusable components (AudioPlayerComponent, SearchInputComponent)
│   ├── features/
│   │   ├── speaking/            # SpeakingModule: Basics, Business, Interview
│   │   ├── grammar/             # GrammarModule: 145 interactive units
│   │   ├── listening/           # ListeningModule: Basic, Intermediate, Advanced
│   │   └── offline/             # OfflineModule: Download logic
│   └── ...
```

## 7.2 TypeScript Naming Conventions

| Element | Convention | Example |
|---------|------------|---------|
| **Files** | kebab-case | `speaking-basics-list.component.ts` |
| **Classes/Interfaces** | PascalCase (no "I" prefix) | `Lesson`, `GrammarUnit`, `DailySentence` |
| **Variables/Functions** | camelCase | `playSentenceAudio()`, `currentLesson` |
| **Constants** | UPPER_SNAKE_CASE | `MAX_LESSONS_SECTION_1 = 30` |

## 7.3 Angular Component Architecture

Utilize the **Smart/Dumb component pattern**:

- **Smart Components (Containers):** Manage state and data fetching. E.g., `GrammarUnitContainer` fetches unit explanations and exercises based on URL parameters.
- **Dumb Components (Presentational):** Focus on UI. `SentenceListComponent` receives sentences via `@Input()` and emits `@Output()` when "Play" is clicked.
- **Integrated practice:** Components must support simultaneous display of text, audio controls, and recording triggers.

## 7.4 State Management Approach

- **Services with BehaviorSubjects:** For UI state (selected language, audio playback status)
- **LocalStorage:** Track progress through "Full Lesson Index" and grammar "Study Guide"
- **Lazy Loading:** Every major feature (Speaking, Video, Listening) loaded on demand

## 7.5 Code Formatting

**Prettier Config:**
```json
{
  "semi": true,
  "trailingComma": "all",
  "singleQuote": true,
  "printWidth": 100,
  "tabWidth": 2
}
```

**ESLint Rules:**
- Standard Angular rules enforced
- Strict `@typescript-eslint/no-explicit-any: error`
- `@angular-eslint/component-selector`: prefix `app-`, kebab-case

## 7.6 Git Workflow and Commit Conventions

Use **Conventional Commits**:

```bash
feat(grammar): add present perfect unit exercises
fix(audio): resolve playback issue in Speaking Basics
docs(i18n): update Vietnamese translation for instructions
style(lessons): adjust card spacing on menu page
perf(speaking): lazy load audio files for Basics section
test(grammar): add unit tests for ExerciseEvaluator
```

| Scope | Usage |
|-------|-------|
| `grammar` | Grammar units and interactive exercises |
| `audio` | Audio playback features |
| `speaking` | Speaking lesson content |
| `i18n` | Multi-language instructions |
| `offline` | Download/offline features |

## 7.7 Testing Standards

- **Unit Tests (Jasmine/Karma):** Required for logic-heavy services like `ExerciseEvaluator` (checks answers against "Answer Key")
- **Integration Tests:** Ensure clicking a sentence triggers the correct audio URL
- **E2E Tests (Cypress):** Validate critical paths: "Language Selection → Lesson Browsing → Exercise Completion"

## 7.8 Performance Optimization

- **Lazy Loading:** All feature modules load on demand
- **Audio Optimization:** Stream on-demand, don't pre-load 900+ files
- **Change Detection:** `ChangeDetectionStrategy.OnPush` for static content (e.g., "1000 Daily Use Sentences")
- **Image Optimization:** Use WebP format with lazy loading

## 7.9 Accessibility (a11y) Standards

- **Aria-Labels:** Every audio play button must have a descriptive label (e.g., "Play audio for: I'm so tired")
- **Keyboard Navigation:** All interactive grammar exercises must be completable without a mouse
- **Language Support:** `lang` attribute must update dynamically on language selection
- **WCAG 2.1 AA:** Minimum contrast ratio 4.5:1 for text, 3:1 for large text
- **Screen Readers:** All icons must have `aria-label` or be hidden with `aria-hidden`

## 7.10 Documentation Standards

- **JSDoc:** Required for all public methods in services (recording logic, progress tracking)
- **README per Module:** Each feature module includes a `README.md` explaining content hierarchy
- **API Documentation:** Use OpenAPI/Swagger for all endpoints
- **Component Documentation:** Use Storybook for shared UI components
