import { defineConfig, globalIgnores } from "eslint/config";
import eslint from "@eslint/js";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import storybook from "eslint-plugin-storybook";
import globals from "globals";
import tseslint from "typescript-eslint";
import parser from "@typescript-eslint/parser";

export default defineConfig([
  {
    languageOptions: {
      ecmaVersion: 2020,
      sourceType: "module",
      globals: {
        ...globals.browser,
      },
      parser: parser,
    },
  },
  globalIgnores([
    "!.storybook", // Un-ignore the `.storybook` directory to lint it.
    "dist", // Ignore the `build` script's output directory.
    "storybook-static", // Ignore the `storybook-build` script's output directory.
    "vite-dist", // Ignore the `vite-build` script's output directory.
  ]),
  eslint.configs.recommended,
  reactHooks.configs.flat.recommended,
  reactRefresh.configs.recommended,
  tseslint.configs.recommended,
  storybook.configs["flat/recommended"],
]);
