import type { Preview } from "@storybook/react-vite";
import bcdsTheme from "./bcdsTheme";
import rawTokens from "@bcgov/design-tokens/css/variables.css?raw";

import "@bcgov/bc-sans/css/BC_Sans.css";
import "@bcgov/design-tokens/css/variables.css";

import "./global.css";

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    docs: {
      theme: bcdsTheme,
      canvas: {
        withToolbar: true,
      },
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    options: {
      storySort: {
        order: [
          "Introduction",
          "Changelog",
          "Foundations",
          "Navigation and structure",
          "Inputs and controls",
          "Notifications and feedback",
          "Content",
          "Utility",
        ],
      },
    },
    a11y: {
      // 'todo' - show a11y violations in the test UI only
      // 'error' - fail CI on a11y violations
      // 'off' - skip a11y checks entirely
      test: "error",
    },
    designTokenTables: {
      collections: {
        "surface-opacity": "opacity",
        "surface-shadow": "shadow",
        "surface-color-primary-button": "color",
        "surface-color-primary-danger-button": "color",
        "surface-color-primary": "color",
        "surface-color-secondary-button": "color",
        "surface-color-secondary": "color",
        "surface-color-tertiary-button": "color",
        "surface-color-tertiary": "color",
        "surface-color-menus": "color",
        "surface-color-forms": "color",
        "surface-color-background": "color",
        "surface-color-border": "color",
        "surface-color-overlay": "color",
        "support-surface-color": "color",
        "support-border-color": "color",
        "icons-size": "font-size",
        "icons-color": "color",
        "layout-border-width": "spacing",
        "layout-padding": "spacing",
        "layout-margin": "spacing",
        "layout-border-radius": "radius",
        "typography-font-families": "font-family",
        "typography-line-heights": "line-height",
        "typography-font-weights": "font-weight",
        "typography-font-size": "font-size",
        "typography-letter-spacing": "spacing",
        "typography-paragraph-spacing": "spacing",
        "typography-regular": "font-family",
        "typography-bold": "font-family",
        "typography-italic": "font-family",
        "typography-text-case": "string",
        "typography-text-decoration": "string",
        "typography-paragraph-indent": "spacing",
        "typography-color": "color",
        "theme-gold": "color",
        "theme-blue": "color",
        "theme-gray": "color",
        "theme-primary": "color",
      },
      tokens: [rawTokens],
    },
  },
};

export default preview;
