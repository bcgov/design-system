/// <reference types="vitest/config" />
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vitejs.dev/config/
import { storybookTest } from "@storybook/addon-vitest/vitest-plugin";
import { playwright } from "@vitest/browser-playwright";
const dirname = import.meta.dirname;

// More info at: https://storybook.js.org/docs/next/writing-tests/integrations/vitest-addon
export default defineConfig({
  resolve: {
    alias: {
      "@": path.resolve(dirname, "./src"),
    },
  },
  plugins: [react()],
  root: ".",
  build: {
    outDir: "vite-dist",
  },
  test: {
    projects: [
      {
        // Runs unit tests defined in *.test.tsx files alongside components only.
        extends: true,
        test: {
          name: "unit",
          globals: true,
          environment: "jsdom",
          pool: "vmThreads",
          css: true,
          setupFiles: ["./src/vitest.unit.setup.ts"],
          include: [
            "./src/components/**/*.test.{ts,tsx,js,jsx}",
            "./src/hooks/**/*.test.{ts,tsx,js,jsx}",
          ],
        },
      },
      {
        extends: true,
        plugins: [
          // The plugin will run tests for the stories defined in your Storybook config
          // See options at: https://storybook.js.org/docs/next/writing-tests/integrations/vitest-addon#storybooktest
          storybookTest({
            configDir: path.join(dirname, ".storybook"),
          }),
        ],
        test: {
          name: "storybook",
          browser: {
            enabled: true,
            headless: true,
            provider: playwright({}),
            instances: [
              {
                browser: "chromium",
              },
            ],
          },
          setupFiles: [".storybook/vitest.setup.ts"],
        },
      },
      {
        // Visual regression tests: screenshots every story tagged `visual`.
        // Run via Docker (`npm run test-visual`) so baselines are consistent.
        extends: true,
        plugins: [
          storybookTest({
            configDir: path.join(dirname, ".storybook"),
            tags: { include: ["visual"] },
          }),
        ],
        test: {
          name: "visual",
          browser: {
            enabled: true,
            headless: true,
            provider: playwright({
              contextOptions: { deviceScaleFactor: 1 },
            }),
            viewport: { width: 1280, height: 800 },
            instances: [{ browser: "chromium" }],
            expect: {
              toMatchScreenshot: {
                comparatorName: "pixelmatch",
                comparatorOptions: {
                  threshold: 0.1,
                },
              },
            },
          },
          setupFiles: [".storybook/vitest.visual.setup.ts"],
        },
      },
    ],
  },
});
