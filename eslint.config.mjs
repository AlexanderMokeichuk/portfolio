import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,

  // Override default ignores of eslint-config-next.
  globalIgnores([".next/**", "out/**", "build/**", "next-env.d.ts"]),

  // Custom rules.
  {
    rules: {
      // Force === / !== to avoid type-coercion bugs.
      eqeqeq: ["error", "always"],

      // Encourage const when variable is never reassigned.
      "prefer-const": "error",

      // Warn (not error) on console usage — they are useful in dev,
      // but should be cleaned up before merging to main.
      "no-console": ["warn", { allow: ["warn", "error"] }],

      // Unused variables are errors, but allow `_`-prefixed ones
      // (common TS pattern for "intentionally unused", e.g. destructuring).
      "@typescript-eslint/no-unused-vars": [
        "error",
        {
          argsIgnorePattern: "^_",
          varsIgnorePattern: "^_",
          destructuredArrayIgnorePattern: "^_",
        },
      ],
    },
  },
]);

export default eslintConfig;
