# Angular + Oxlint Hybrid Linting (vite+)

This repository documents a practical Angular quality-tooling split:

- Keep Angular CLI for app lifecycle (`ng serve`, `ng build`, `ng test`)
- Use vite+ as a high-speed runner for linting, formatting, and staged-file checks
- Split linting by responsibility instead of forcing one tool to handle everything

## What Changed (and What Did Not)

Angular CLI is still the runtime/build/test tool:

```bash
npm start   # ng serve
npm run build
npm test
```

Only the quality layer changed:

- TypeScript linting moved to Oxlint (through vite+)
- Formatting moved to Oxfmt (through vite+)
- ESLint is used only where Angular requires it (templates)
- Stylelint remains for CSS rules

## Why This Hybrid Setup

The issue was workflow friction. Traditional ESLint + Prettier pipelines often become slow enough that:

- local linting gets skipped
- checks move to pre-commit only
- pre-commit gets bypassed

The hybrid setup restores fast feedback by routing each file type to the fastest tool that can correctly lint it.

## Tool Responsibility Split

| File type       | Formatting | Linting                             |
| --------------- | ---------- | ----------------------------------- |
| `.ts`           | Oxfmt      | Oxlint + Angular TS rules           |
| `.html`         | Oxfmt      | ESLint (`@angular-eslint/template`) |
| `.css`, `.scss` | Oxfmt      | Stylelint                           |

Important Angular limitation:

- Oxlint does not yet lint Angular templates.
- ESLint is still required for `.html` templates because template parsing is Angular-specific.

## vite+ as the Runner

vite+ bundles both Oxlint and Oxfmt, and it orchestrates staged checks through [vite.config.js](vite.config.js). This keeps tool execution focused and avoids overlap/conflicts.

## Quick Start

Install dependencies:

```bash
npm install
```

Run app locally:

```bash
npm start
```

## Linting and Formatting Commands

TypeScript/JavaScript (vite+):

```bash
npm run check       # vp check
npm run check:fix   # vp check --fix
npm run format      # vp fmt
npm run format:fix  # vp fmt
```

Angular templates and CSS:

```bash
npm run lint:templates
npm run lint:css
```

All checks:

```bash
npm run lint:all
npm run lint:all:fix
```

## CI Pipeline (Parallel Jobs)

The workflow in [.github/workflows/ci.yml](.github/workflows/ci.yml) runs three independent jobs in parallel:

- TS/JS lint: `npm run check`
- Template lint: `npm run lint:templates`
- CSS lint: `npm run lint:css`

Result: total CI lint time is bounded by the slowest single job, not the sum of all jobs.

## Current Config Files

- Oxlint rules: [.oxlintrc.json](.oxlintrc.json)
- ESLint flat config for templates: [eslint.config.js](eslint.config.js)
- Stylelint rules: [.stylelintrc.json](.stylelintrc.json)
- vite+ orchestration: [vite.config.js](vite.config.js)

## When This Is a Good Fit

Use this setup when:

- Angular linting is noticeably slow in your codebase
- developers are bypassing local or pre-commit checks
- you want faster feedback without losing Angular template lint coverage

You may not need this setup when:

- your project is small and existing lint performance is already fast

## References

- [Angular CLI](https://angular.dev/tools/cli)
- [vite+](https://vite-plus.dev/)
- [Oxlint](https://oxc-project.github.io/)
- [Oxfmt](https://oxc-project.github.io/docs/guide/formatter.html)
- [angular-eslint](https://github.com/angular-eslint/angular-eslint)
- [Stylelint](https://stylelint.io/)
