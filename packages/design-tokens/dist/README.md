# @bcgov/design-tokens

This package is used to export and publish design tokens from Figma to npm for the BC Design System.

Questions? Please email the <a href="mailto:DesignSystem@gov.bc.ca">GDX OSS Design Team</a>.

See main repository: https://github.com/bcgov/design-system

To use, install this package (`npm i @bcgov/design-tokens`) and import the design tokens for your platform. Reference the design tokens according to your platform's needs.

## React example:

```js
// Import the variables file that makes sense for your platform.
import "@bcgov/design-tokens/css/variables.css";

function Button({ children, ...props }) {
  return (
    <button
      style={{
        backgroundColor: "var(--bcds-surface-primary-default)",
        color: "var(--bcds-text-primary-invert)",
      }}
    >
      {children}
    </button>
  );
}
```
