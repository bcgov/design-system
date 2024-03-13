import { create } from '@storybook/theming/create';
import '@bcgov/bc-sans/css/BC_Sans.css';
import * as tokens from '@bcgov/design-tokens/js/variables.js';

export default create({

  // Typography
  fontBase: 'BC Sans", sans-serif',
  fontCode: 'monospace',

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

  base: 'light',
  brandTitle: 'B.C. Design System',
  brandUrl: 'https://gov.bc.ca/designsystem',
  brandImage: '../src/assets/BCID_H_rgb_pos.svg',
  
});