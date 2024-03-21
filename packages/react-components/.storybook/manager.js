import { addons } from "@storybook/manager-api";
import bcdsTheme from "./bcdsTheme";

addons.setConfig({
  theme: bcdsTheme,
  panelPosition: 'bottom',
});
