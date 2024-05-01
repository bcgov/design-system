import type { Preview } from "@storybook/react";
import bcdsTheme from "./bcdsTheme";

import "@bcgov/bc-sans/css/BC_Sans.css";

import "./global.css";

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
