import { defineConfig } from 'vite-plus';

export default defineConfig({
  ignorePatterns: ['dist/**', '.angular/**', 'node_modules/**'],

  staged: {
    '*.ts': 'vp check --fix',
    '*.{json,html}': 'vp fmt',
    '*.html': 'eslint --fix',
    '*.{css,scss}': ['vp fmt', 'stylelint --fix'],
  },
});
