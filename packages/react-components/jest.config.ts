import type { Config } from "jest";

const config: Config = {
  // Limit search for tests to the `components` directory
  roots: ["./src/components"],

  // Start with the presets from the `ts-jest` package
  preset: "ts-jest",

  // Use `jsdom` as the test environment because we are testing React components
  testEnvironment: "jsdom",

  // Mocks for static file imports
  moduleNameMapper: {
    // Necessary because of our CSS file imports like `import "./Button.css"`
    "\\.(css)$": "identity-obj-proxy",
  },

  // Log each test result instead of a summary
  verbose: true,
};

export default config;
