# @bcgov/design-tokens

This package is being used to test publishing design tokens from Figma to npm.

Questions? Please email the <a href="mailto:corporatewebdesign@gov.bc.ca">GDX OSS Design Team</a>.

See main repository: https://github.com/bcgov/design-tokens

To use, install this package (`npm i @bcgov/design-tokens`) and import the design tokens for your platform. Reference the design tokens according to your platform's needs.

React example:

```js
// Import the variables file that makes sense for your platform.
import "@bcgov/design-tokens/css/variables.css";

function Button({ children, ...props }) {
  return (
    <button
      style={{
        backgroundColor: "var(--button-primary-background)",
        color: "var(--button-primary-text)",
      }}
    >
      {children}
    </button>
  );
}
```
