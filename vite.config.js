import { defineConfig } from 'vite-plus';

export default defineConfig({
  ignorePatterns: ['dist/**', '.angular/**', 'node_modules/**'],

  semi: true,
  singleQuote: true,
  printWidth: 100,
  tabWidth: 2,
  trailingComma: 'all',

  staged: {
    '*.ts': 'vp check --fix',
    '*.{json,html}': 'vp fmt',
    '*.html': 'eslint --fix',
    '*.{css,scss}': ['vp fmt', 'stylelint --fix'],
  },
});
