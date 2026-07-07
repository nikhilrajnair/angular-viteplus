import templateParser from "@angular-eslint/template-parser";
import templatePlugin from "@angular-eslint/eslint-plugin-template";

export default [
  {
    files: ["**/*.html"],
    languageOptions: {
      parser: templateParser,
    },
    plugins: {
      "@angular-eslint/template": templatePlugin,
    },
    rules: {
      "@angular-eslint/template/button-has-type": "error",
      "@angular-eslint/template/no-negated-async": "warn",
      "@angular-eslint/template/alt-text": "error",
    },
  },
];
