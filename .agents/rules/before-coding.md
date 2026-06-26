---
trigger: always_on
---

# Strict Adherence to Project Specifications

Before writing code or making any architectural decisions, you MUST ALWAYS consult the project specifications to ensure consistency. The single source of truth for this project is `TALK_ENGLISH_SPEC.md` and its linked modular files located in the `docs/specs/` directory.

Follow these strict rules:

1. **Pre-Task Review:** Read `TALK_ENGLISH_SPEC.md` to understand the documentation layout. Based on the task you are given, you MUST read the relevant modular spec files before writing any code.
   - For UI/UX or styling tasks: Read `docs/specs/04_style_guide_branding.md` and `docs/specs/03_wireframes.md`.
   - For architecture, logic, or file creation: Read `docs/specs/06_coding_standards.md` and `docs/specs/05_api_specification.md`.
   - For user flow or feature planning: Read `docs/specs/01_prd.md` and `docs/specs/02_sitemap_user_flow.md`.
   - For content and vocabulary rules: Read `docs/specs/07_extras_and_appendix.md`.

2. **Strict Compliance:** Your proposed code, components, CSS variables, and file structures MUST perfectly match the rules defined in the specifications. Do not invent new styling conventions or architectures if they conflict with the existing specs.

3. **Spec Maintenance:** Whenever you introduce a new feature, rule, or architectural pattern, you MUST update the appropriate spec file in `docs/specs/` to reflect this change.
   - First, identify the change clearly.
   - Second, update the relevant file in `docs/specs/` (e.g., adding a new coding standard or vocabulary rule).
   - Third, present what was changed in the spec without waiting to be asked.
