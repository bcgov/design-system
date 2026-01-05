# Getting started

The B.C. Design System is split into two packages, both installable via npm:

- [@bcgov/design-tokens](https://www.npmjs.com/package/@bcgov/design-tokens): provides CSS and JavaScript style variables that you can use to apply consistent layout, colour and typography
- [@bcgov/design-system-react-components](https://www.npmjs.com/package/@bcgov/design-system-react-components): provides styled React components for building user interfaces

## Dependencies

The component library requires React v16.14.0 or later.

### React Aria Components

The component library uses [react-aria-components](https://www.npmjs.com/package/react-aria-components) as a core dependency. [React Aria](https://react-spectrum.adobe.com/react-aria/index.html) provides an extensive library of unstyled components and APIs.

If you need a component that is not yet available in the design system, you can use React Aria alongside the design system. You will need to provide your own styling for these components, but they will behave predictably and interoperate well with the design system.

### BC Sans

Both packages use the BC Sans typeface, and install [@bcgov/bc-sans](https://www.npmjs.com/package/@bcgov/bc-sans) as a peer dependency. You must import the font-face declarations from @bcgov/bc-sans and ensure the font is reachable for your end user.

## Installation

To install the packages, run:

```
npm i @bcgov/design-tokens
npm i @bcgov/design-system-react-components
```

Both packages follow semantic versioning. Minor and patch versions will not include breaking changes. At this time, we nonetheless recommend pinning to a specific version in your `package.json` and installing updates manually (after reviewing the release notes carefully.)
