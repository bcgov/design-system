import { create } from '@storybook/theming/create';
import '@bcgov/bc-sans/css/BC_Sans.css';
import * as tokens from '@bcgov/design-tokens/js/variables.js';

export default create({

  // Typography
  fontBase: '"BC Sans", sans-serif',
  fontCode: 'monospace',

  // Colour
  colorPrimary: tokens.surfaceBrandBlue100,
  colorSecondary: tokens.surfaceBrandGold60,

  base: 'light',
  brandTitle: 'B.C. Design System',
  brandUrl: 'https://gov.bc.ca/designsystem',
  brandImage: 'packages/react-components/src/assets/BCID_H_rgb_pos.svg',
});