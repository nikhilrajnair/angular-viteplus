import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected tools: Tool[] = [
    {
      name: 'Oxlint',
      description:
        'Blazing-fast Rust-based linter for JS/TS. Catches bugs and enforces code quality with near-instant feedback.',
      badge: 'Linter',
      badgeClass: 'badge-blue',
    },
    {
      name: 'Oxfmt',
      description:
        'Opinionated Rust formatter for JS/TS. Enforces consistent style — single quotes, semicolons, print width — automatically.',
      badge: 'Formatter',
      badgeClass: 'badge-purple',
    },
    {
      name: 'ESLint',
      description:
        'Angular-specific template linting. Catches missing button types, accessibility issues, and Angular anti-patterns.',
      badge: 'Templates',
      badgeClass: 'badge-green',
    },
    {
      name: 'Stylelint',
      description:
        'Enforces CSS/SCSS conventions including property order, no named colors, and standard formatting rules.',
      badge: 'Styles',
      badgeClass: 'badge-orange',
    },
  ];
}

interface Tool {
  name: string;
  description: string;
  badge: string;
  badgeClass: string;
}
