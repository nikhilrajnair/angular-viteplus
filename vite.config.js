import { defineConfig } from "oxlint";

export default defineConfig({
  ignorePatterns: ["dist/**", ".angular/**", "node_modules/**"],

  fmt: {
    semi: true,
    singleQuote: true,
    printWidth: 120,
    tabWidth: 2,
    trailingComma: "all"
  },

  staged: {
    "*.ts": "vp check --fix",
    "*.{json,html}": "vp fmt --fix",
    "*.html": "eslint --fix",
    "*.css": ["vp fmt --fix", "stylelint --fix"]
  }
});
