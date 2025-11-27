import type { Preview } from "@storybook/react-vite";
import bcdsTheme from "./bcdsTheme";

import "@bcgov/bc-sans/css/BC_Sans.css";

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
        order: ["Introduction", "Changelog"],
      },
    },

    a11y: {
      // 'todo' - show a11y violations in the test UI only
      // 'error' - fail CI on a11y violations
      // 'off' - skip a11y checks entirely
      test: "todo",
    },
  },
};

export default preview;
