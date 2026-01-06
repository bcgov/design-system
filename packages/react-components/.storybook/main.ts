import type { StorybookConfig } from "@storybook/react-vite";
import * as tokens from "@bcgov/design-tokens/cjs/index.js";

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-a11y",
    "@storybook/addon-docs",
    "@storybook/addon-vitest",
    "@etchteam/storybook-addon-design-token-tables",
  ],
  framework: {
    name: "@storybook/react-vite",
    options: {
      builder: {
        viteConfigPath: "vite.config.ts",
      },
      strictMode: false,
    },
  },
  staticDirs: ["../storybook-public"],

  // extra CSS for Storybook docs and UI, injected into <head>
  previewHead: (head) => `
    ${head}
    <style>
      .sbdocs .sbdocs-content a {
         color: ${tokens.typographyColorLink};
         text-decoration: underline;
      }
    </style>
 `,
};
export default config;
