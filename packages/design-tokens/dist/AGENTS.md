# B.C. Design System Design Tokens

## Library context

- This design tokens library (`@bcgov/design-tokens`) is part of the [B.C. Design System](https://gov.bc.ca/designsystem)
- Tokens are the single source of truth for colours, typography, spacing/shadows and icons in B.C. government UI
- Tokens are available as CSS, SCSS and JavaScript (ESM and CommonJS) variables

### Installation

- Install the design tokens package: `npm i @bcgov/design-tokens`
    - Also install [@bcgov/bc-sans](https://www.npmjs.com/package/@bcgov/bc-sans)

## Choosing a format
| Use case | Import | Notes |
| --- | --- | --- |
| JS/TS (try first) | `import * as tokens from "@bcgov/design-tokens/js"` | ESM with TypeScript definitions for autocomplete |
| JS/TS, name collisions | `@bcgov/design-tokens/js-prefixed` | All exports prefixed with `bcds` (ex: `bcdsThemeBlue100`) |
| CommonJS | `require("@bcgov/design-tokens/cjs")` | TypeScript definitions included |
| CommonJS, name collisions | `require("@bcgov/design-tokens/cjs-prefixed")` | Exports prefixed with `bcds` |
| Static CSS | `import "@bcgov/design-tokens/css/variables.css"` | All tokens as custom properties on `:root` |
| Static CSS, name collisions | `@bcgov/design-tokens/css-prefixed/variables.css` | Custom properties prefixed with `--bcds-` |
| SCSS | `@use "@bcgov/design-tokens/scss/variables";` | SCSS `$variables` |

- Verify imports against files in `node_modules/@bcgov/design-tokens/`
    - Do not guess import paths

## Token naming
- Token names follow the token's semantic path: `theme.blue.100` becomes:
    - CSS: `--theme-blue-100`
    - SCSS: `$theme-blue-100`
    - JavaScript: `themeBlue100`
    - Prefixed JavaScript: `bcdsThemeBlue100`
- Available token categories: 
    - `icons` 
    - `layout` 
    - `support`
    - `surface`
    - `theme`
    - `typography`
- To discover exact token names, check `js/index.d.ts` (JS) or `css/variables.css` (CSS) in the installed package
    - Always use the semantic variable names as written in those files
    - Never guess, invent, or abbreviate token names
    - Never hard-code or modify token values

## Using tokens
- Reference design tokens directly when styling UI
- Always use the semantic variable names
    - Never guess or assume token names
    - Never hard-code or modify token values

### Layout
- `layout.padding.*` and `layout.margin.*` tokens are for spacing *within* and *between* individual UI components inside a container 
    - For example: padding inside a card, gap between a button and its label, margin between list items
- There is no token category for page-level layout (page grid, column widths, breakpoints, major section spacing)
    - Use plain CSS (grid/flexbox) or the host framework's layout system with unitless/relative values 
    - Do not stretch `layout.padding.*` or `layout.margin.*` tokens to fill this gap

### Colour
- Prefer using semantically-named colour tokens (for example, `--theme-primary-gold`) instead of generic scale points like `--theme-gold-100`
- Ensure that colour combinations meet the contrast requirements for WCAG 2.2 Level AA

### Typography
- Typography tokens use the BC Sans typeface
    - Ensure that [@bcgov/bc-sans](https://www.npmjs.com/package/@bcgov/bc-sans) is installed and configured before use
- Composite typography tokens map to the CSS `font` shorthand
    - Use these instead of setting individual font properties
