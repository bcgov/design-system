import { create } from '@storybook/theming/create';
import '@bcgov/bc-sans/css/BC_Sans.css';
import "@bcgov/design-tokens/js/variables.js";

export default create({

  // Typography
  fontBase: '"BC Sans", sans-serif',
  fontCode: 'monospace',

  // Colour
  colorPrimary: 'surfaceBrandBlue100',
  colorSecondary: 'surfaceBrandGold60',

  base: 'light',
  brandTitle: 'B.C. Design System',
  brandUrl: 'https://gov.bc.ca/designsystem',
  brandImage: 'packages/react-components/src/assets/BCID_H_rgb_pos.svg',
});