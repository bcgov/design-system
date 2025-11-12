import { create } from "storybook/theming/create";
import "@bcgov/bc-sans/css/BC_Sans.css";
import * as tokens from "@bcgov/design-tokens/js";

export default create({
  // Typography
  fontBase: '"BC Sans", sans-serif',
  fontCode: "monospace",

  // Colour
  colorPrimary: tokens.themePrimaryGold,
  colorSecondary: tokens.themePrimaryBlue,

  // UI
  appBg: tokens.surfaceColorBackgroundLightBlue,
  appContentBg: tokens.surfaceColorBackgroundWhite,
  appPreviewBg: tokens.surfaceColorBackgroundWhite,
  appBorderColor: tokens.surfaceColorBorderDefault,
  appBorderRadius: tokens.layoutBorderRadiusMedium,

  // Text colors
  textColor: tokens.typographyColorPrimary,
  textInverseColor: tokens.typographyColorPrimaryInvert,
  textMutedColor: tokens.typographyColorSecondary,

  // Toolbar default and active colors
  barTextColor: tokens.typographyColorSecondary,
  barSelectedColor: tokens.surfaceColorBorderActive,
  barHoverColor: tokens.surfaceColorBorderActive,
  barBg: tokens.surfaceColorBackgroundLightGray,

  // Form colors
  inputBg: tokens.surfaceColorFormsDefault,
  inputBorder: tokens.surfaceColorBorderDefault,
  inputTextColor: tokens.typographyColorSecondary,
  inputBorderRadius: tokens.layoutBorderRadiusMedium,

  base: "light",
  brandTitle: "B.C. Design System",
  brandImage: "BCID_H_rgb_pos.svg", // This lives in storybook-public
});
