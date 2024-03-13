import { create } from "@storybook/theming/create";
import "@bcgov/bc-sans/css/BC_Sans.css";
import * as tokens from "@bcgov/design-tokens/js/variables.js";

export default create({
  // Typography
  fontBase: '"BC Sans", sans-serif',
  fontCode: "monospace",

  // Colour
  colorPrimary: tokens.surfaceBrandGold60,
  colorSecondary: tokens.surfaceBrandBlue100,

  // UI
  appBg: tokens.surfaceBackgroundLight,
  appContentBg: tokens.surfaceBackgroundWhite,
  appPreviewBg: tokens.surfaceBackgroundWhite,
  appBorderColor: tokens.surfaceBorderMedium,
  appBorderRadius: tokens.surfaceBorderRadiusMedium,

  // Text colors
  textColor: tokens.typographyColorPrimary,
  textInverseColor: tokens.typographyColorPrimaryInvert,

  // Toolbar default and active colors
  barTextColor: tokens.typographyColorSecondary,
  barSelectedColor: tokens.surfacePrimaryActive,
  barHoverColor: tokens.surfacePrimaryHover,
  barBg: tokens.surfaceBackgroundLight,

  // Form colors
  inputBg: tokens.surfaceBackgroundLight,
  inputBorder: tokens.surfaceBorderLight,
  inputTextColor: tokens.typographyColorSecondary,
  inputBorderRadius: tokens.surfaceBorderRadiusMedium,

  base: "light",
  brandTitle: "B.C. Design System",
  brandUrl: "/",
  brandImage: "BCID_H_rgb_pos.svg", // This lives in storybook-public
});
