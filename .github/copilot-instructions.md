# TalkEnglish Workspace Instructions

## 1. Always Consult NotebookLM First

Before starting any task — whether answering a question, writing code, or making a decision — you MUST query the TalkEnglish NotebookLM notebook via the MCP tool to retrieve relevant context, facts, or prior research before proceeding.

- **Notebook URL:** https://notebooklm.google.com/notebook/8ed35ac6-1a09-43ca-8ccd-dd7e327c9be5
- Always call the NotebookLM MCP tool first before taking any other action.
- If NotebookLM returns no relevant results, say so explicitly, then proceed using your own knowledge.
- Only skip if the user explicitly says "skip NotebookLM" or "don't check the notebook".

## 2. Strict Adherence to Project Specifications

The single source of truth for this project is `TALK_ENGLISH_SPEC.md` and its linked modular files in `docs/specs/`.

### Pre-Task Review Rules
- For **UI/UX or styling tasks**: Read `docs/specs/04_style_guide_branding.md` and `docs/specs/03_wireframes.md`.
- For **architecture, logic, or file creation**: Read `docs/specs/06_coding_standards.md` and `docs/specs/05_api_specification.md`.
- For **user flow or feature planning**: Read `docs/specs/01_prd.md` and `docs/specs/02_sitemap_user_flow.md`.
- For **content and vocabulary rules**: Read `docs/specs/07_extras_and_appendix.md`.

### Compliance Rules
- Code, components, CSS variables, and file structures MUST match the specifications exactly.
- Do not invent new styling conventions or architectures if they conflict with existing specs.

## 3. Spec Maintenance

Whenever making changes related to the website:
1. **Identify the change**: Clearly state what pattern or rule was added, modified, or removed.
2. **Update TALK_ENGLISH_SPEC.md or relevant `docs/specs/` file**: Reflect the change in the appropriate section.
3. **Show what was changed**: Present the diff or addition.

Treat `TALK_ENGLISH_SPEC.md` as the single source of truth.

## 4. Project Architecture

This is an **Angular** project with feature-based modular architecture:
- **Framework:** Angular (standalone components)
- **Language:** TypeScript
- **Styling:** SCSS
- **Testing:** Jasmine/Karma

### Naming Conventions
| Element | Convention | Example |
|---------|------------|---------|
| Files | kebab-case | `speaking-basics-list.component.ts` |
| Classes/Interfaces | PascalCase (no "I" prefix) | `Lesson`, `GrammarUnit` |
| Variables/Functions | camelCase | `playSentenceAudio()`, `currentLesson` |
| Constants | UPPER_SNAKE_CASE | `MAX_LESSONS_SECTION_1 = 30` |

### Key Architecture Patterns
- **Smart/Dumb component pattern**: Smart components manage state/data; Dumb components focus on UI with `@Input()` / `@Output()`.
- **State management**: Services with BehaviorSubjects + LocalStorage for progress tracking.
- **Lazy loading**: All feature modules load on demand.
- **ChangeDetectionStrategy.OnPush** for static content.
- **Form elements**: Use Angular Reactive Forms for exercises.
- **Routing**: Feature-based lazy-loaded routes.

## 5. Styling Standards

- **Preprocessor:** SCSS exclusively.
- **Component Styling:** Encapsulated in component `.scss` files.
- **Global Styles:** Variables and themes in `src/styles.scss`.

### Color Palette
| Token | Hex Code | Usage |
|-------|----------|-------|
| Primary Navy | `#1A3A6C` | Headers, nav bars, unit markers |
| Secondary Blue | `#3498DB` | Hyperlinks, secondary nav |
| Educational Yellow | `#FFD700` | Grammar highlights, accents |
| Background Neutral | `#FFFFFF` | Main background |
| Text Primary | `#212529` | Body text |
| Success Green | `#27AE60` | Correct answer feedback |

### Typography
| Token | Size | Weight | Color | Usage |
|-------|------|--------|-------|-------|
| Hero (H3) | 32px | Bold | `#1A3A6C` | Main category titles |
| Section (H4/H5) | 24px | Semi-bold | `#1A3A6C` | Sub-categories |
| Body | 16px | Regular | `#212529` | Standard text |
| Lesson Indices | 14px | Regular | `#3498DB` | Sidebar items |

**Font Family:** Sans-serif (Roboto / Open Sans)

### Spacing
- 24px between lesson cards; 16px between list items.
- Sidebar: consistent left-hand "Full Lesson Index".
- "Facing pages" layout: left = explanations, right = exercises.

### Responsive Breakpoints
| Device | Range |
|--------|-------|
| Desktop | ≥ 1024px |
| Tablet | 768px – 1023px |
| Mobile | 320px – 767px |

## 6. Code Formatting

```json
{
  "semi": true,
  "trailingComma": "all",
  "singleQuote": true,
  "printWidth": 100,
  "tabWidth": 2
}
```

- Component selector prefix: `app-`, kebab-case.
- Strict `@typescript-eslint/no-explicit-any: error`.

## 7. Testing Standards

- **Unit Tests (Jasmine/Karma):** Required for logic-heavy services.
- **Integration Tests:** Ensure clicks trigger correct actions/URLs.
- Add tests for new components and services.

## 8. Performance & Accessibility

- Lazy load all feature modules.
- Use `ChangeDetectionStrategy.OnPush` where possible.
- Every interactive element must have `aria-label`.
- Keyboard navigation support for exercises.
- WCAG 2.1 AA contrast ratios.
- `lang` attribute must update dynamically on language switch.

## 9. Git Conventions

Use **Conventional Commits**:
```
feat(grammar): add present perfect unit exercises
fix(audio): resolve playback issue
docs(i18n): update Vietnamese translation
style(lessons): adjust card spacing
test(grammar): add unit tests
```

| Scope | Usage |
|-------|-------|
| `grammar` | Grammar units and exercises |
| `audio` | Audio playback features |
| `speaking` | Speaking lesson content |
| `i18n` | Multi-language instructions |
| `offline` | Download/offline features |
