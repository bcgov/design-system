# @bcgov/design-tokens

This package contains design tokens from the B.C. Design System.

Questions? Please email the <a href="mailto:DesignSystem@gov.bc.ca">GDX OSS Design Team</a>.

See main repository: https://github.com/bcgov/design-system

To use, install this package (`npm i @bcgov/design-tokens`) and import the design tokens for your platform. Reference the design tokens according to your platform's needs.

## Included file formats

This package includes tokens in JavaScript (ECMAScript Module and CommonJS) and CSS formats.

### JavaScript (ECMAScript Module)

> **Try this first!** Using JavaScript variables can give you a better developer experience with autocomplete.

The `js` directory contains an index file with the tokens in ESM format: `js/index.js`

TypeScript definitions are includes at: `js/index.d.ts`

Example import:

`import * as tokens from "@bcgov/design-tokens/js";`

To help avoid name collisions, prefixed versions of the ESM variables with `bcds` added are available: `js-prefixed/index.js`

### JavaScript (CommonJS)

Some environments don't support ESM imports. For these situations, a CommonJS module is included.

The `cjs` directory contains an index file with tokens in CJS format: `cjs/index.js`

TypeScript definitions are included at: `cjs/index.d.ts`

Example import:

`const tokens = require("@bcgov/design-tokens/cjs");`

To help avoid name collisions, prefixed versions of the CJS variables with `bcds` added are available: `cjs-prefixed/index.js`

### CSS

CSS variables are included at: `css/variables.css`

To help avoid name collisions, prefixed versions of the CSS variables with `bcds` added are available: `css-prefixed/variables.css`

## Examples

### ESM variables in React:

```jsx
import * as tokens from "@bcgov/design-tokens/js";

function Button({ children, ...props }) {
  return (
    <button
      style={{
        backgroundColor: tokens.surfaceColorPrimaryButtonDefault,
        color: tokens.typographyColorPrimaryInvert,
      }}
    >
      {children}
    </button>
  );
}
```

### CSS variables in React:

```jsx
import "@bcgov/design-tokens/css/variables.css";

function Button({ children, ...props }) {
  return (
    <button
      style={{
        backgroundColor: "var(--surface-color-primary-button-default)",
        color: "var(--typography-color-primary-invert)",
      }}
    >
      {children}
    </button>
  );
}
```
