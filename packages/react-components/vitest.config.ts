import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    // Limit search for tests to the `components` directory
    include: ["./src/components/**/*.{test,spec}.{js,ts,jsx,tsx}"],

    // Use `jsdom` as the test environment for React components
    environment: "jsdom",

    // Mocks for static file imports
    alias: {
      "\\.(css)$": "identity-obj-proxy",
    },

    // Log each test result instead of a summary
    reporters: "verbose",
  },
});
