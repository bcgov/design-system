import type { Preview } from "@storybook/react";

import "@bcgov/bc-sans/css/BC_Sans.css";
import "@bcgov/design-tokens/css/variables.css";

import "./global.css";
import bcdsTheme from "./bcdsTheme";

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    docs: { 
      theme: bcdsTheme, 
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    options: {
      storySort: {
        order: ["Introduction"],
      },
    },
  },
};

export default preview;
