import js from "@eslint/js";
import globals from "globals";

export default [
  js.configs.recommended,
  {
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: {
        ...globals.browser,

        // المكتبات الخارجية القادمة عبر CDN
        JXG: "readonly",
        bootstrap: "readonly",

        // الدوال العالمية المستدعاة مباشرة في أحداث الـ
        resetExercise: "readonly",
        nextExercise: "readonly",
        prevExercise: "readonly",
        setStoredTheme: "readonly",
      },
    },
  },
];
