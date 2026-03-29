# Angular OxLint Hybrid Linting

An Angular 20 project with **hybrid linting & formatting** across TypeScript, templates, and styles.

## Linting Architecture

### Unified TS/JS via [vite+](https://vite-plus.dev/)
**vite+** is a modern toolchain that bundles **Oxlint** and **Oxfmt**:
- **[Oxlint](https://oxc-project.github.io/)** — Blazingly fast linting (Rust-based), replaces ESLint for TS/JS
- **[Oxfmt](https://oxc-project.github.io/docs/guide/formatter.html)** — Opinionated code formatting (included in vite+)
- Commands: `vp check` and `vp fmt` (abstracted via npm scripts)

### Complementary Linters
- **[ESLint](https://eslint.org/)** — Angular template linting (`.html` files only)
- **[Stylelint](https://stylelint.io/)** — CSS/SCSS linting

### Why This Stack?
- **vite+** handles TypeScript/JavaScript fast (Oxlint is ~100x faster than ESLint for JS)
- **ESLint** specializes in Angular template rules (directives, bindings, accessibility)
- **Stylelint** enforces CSS/SCSS conventions
- **Parallel CI** — Run all three simultaneously; total time = slowest job

## Quick Start

Install dependencies:
```bash
npm install
```

Start the development server:
```bash
npm start
```

Navigate to `http://localhost:4200/`.

## Linting & Formatting

### Lint TS/JS (via vite+)
```bash
npm run check              # vp check — runs Oxlint
npm run check:fix         # vp check --fix — auto-fix with Oxlint
npm run format:fix        # vp fmt --fix — auto-format with Oxfmt
```

### Lint Templates & Styles
```bash
npm run lint:templates    # ESLint (Angular .html files)
npm run lint:css          # Stylelint (CSS/SCSS files)
```

### Run All Linters
```bash
npm run lint:all          # Run all checks (sequential)
npm run lint:all:fix      # Auto-fix all (sequential)
```

## Code Scaffolding

Generate new components with Angular CLI:
```bash
ng generate component component-name
ng generate --help  # Full list of schematics
```

## Building

Build for production:
```bash
ng build
```

Build artifacts are stored in the `dist/` directory.

## Testing

Run unit tests:
```bash
npm test
```

## CI Pipeline

GitHub Actions runs linting jobs **in parallel** on push to `main` and pull requests:
- **TS/JS lint + format** — `vp check` (Oxlint via vite+) — ~2-3 seconds
- **Angular template lint** — `npm run lint:templates` (ESLint) — scoped to `.html` files
- **CSS lint** — `npm run lint:css` (Stylelint) — scoped to `.css` files

**Benefit:** Total CI time = max(slowest job), not sum of all jobs. Since vite+ is near-instant, you're effectively waiting only for the template linter.

See [`.github/workflows/ci.yml`](.github/workflows/ci.yml) for workflow config.

## Resources

- [Angular CLI](https://angular.dev/tools/cli)
- **[vite+](https://vite-plus.dev/)** — Unified toolchain for TS/JS
  - [Oxlint](https://oxc-project.github.io/) — Fast linting engine
  - [Oxfmt](https://oxc-project.github.io/docs/guide/formatter.html) — Code formatter
- [ESLint Angular Plugin](https://github.com/angular-eslint/angular-eslint) — Template linting
- [Stylelint](https://stylelint.io/) — CSS/SCSS linting
