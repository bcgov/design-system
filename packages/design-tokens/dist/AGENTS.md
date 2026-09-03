# B.C. Design System Design Tokens (v0.0.1)

## Library context

- This design tokens library is part of the [B.C. Design System](https://gov.bc.ca/designsystem)
- Use design tokens when styling UI in B.C. government projects
- Design tokens are available as CSS, SCSS and JavaScript variables

## Using design tokens

- Install the design tokens package with `npm i @bcgov/design-tokens`
- Import the appropriate format for this project
- Reference design tokens directly when styling UI
    - The full list of available tokens is in `node_modules/@bcgov/design-tokens/dist`
- Always use the semantic variable names
    - Never guess or assume token names
    - Never hard-code or modify token values
    - Hard-coding token values will cause design drift when the tokens library is updated

### Colour

- Prefer using semantically-named colour tokens (for example, `--theme-primary-gold`) instead of generic scale points like `--theme-gold-100`
- Ensure that colour combinations meet the contrast requirements for WCAG 2.1 Level AA

### Typography

- Typography tokens use the BC Sans typeface
    - Ensure that [@bcgov/bc-sans](https://www.npmjs.com/package/@bcgov/bc-sans) is installed and configured before use
- Composite typography tokens map to the CSS `font` shorthand
    - Use these instead of setting individual font properties
