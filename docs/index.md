# B.C. Design System

## About the design system

### Summary

The B.C. Design System helps public sector design and development teams build consistent, accessible products. It provides a growing library of user interface components, resources and documentation to support a unified user experience across B.C. government digital products.

### Features

The design system provides:

- Design tokens, implemented as CSS and JavaScript variables, that developers can use to style UI elements
- A library of styled user interface components, implemented in React and based on [React Aria Components](https://react-spectrum.adobe.com/react-aria/index.html), that developers can use to build UI

To support cross-functional collaboration, designers can access design tokens and components via a [managed Figma library](https://www.figma.com/design/6BAmnRmL9FXxY2bkkSYiQj/B.C.-Design-System?m=auto&node-id=0-1&t=7ugpTBbyJUtB7AeG-1).

### Compatibility

The design system is an open-source library, available to anyone working on digital products for the B.C. government.

The design tokens library is platform-agnostic. The component library supports React only. Support for other front-end frameworks is not currently planned.

If you need a specific component that is not yet available in the design system, we recommend checking if it's available in [React Aria Components](https://react-spectrum.adobe.com/react-aria/index.html). This will give you an unstyled component with interactions and APIs that are consistent with the design system.

## How to get started

To get started with the design system, install the appropriate package via npm.

There are two separate packages:

- [@bcgov/design-tokens](https://www.npmjs.com/package/@bcgov/design-tokens)
- [@bcgov/design-system-react-components](https://www.npmjs.com/package/@bcgov/design-system-react-components)

### Availability

Updates are published via npm. [Release notes](https://github.com/bcgov/design-system/releases) are published on GitHub.

Both libraries follow semantic versioning. At this stage, we recommend installing new versions manually, and carefully reviewing the release notes.

We do not have a fixed release cycle, but we expect to ship new releases on an approximately monthly basis. Releases are currently focused on adding new components to the library, as we work towards v1.0.0.

## Getting help

If you need help, you can:

- Email [designsystem@gov.bc.ca](mailto:designsystem@gov.bc.ca)
- [Open an issue](https://github.com/bcgov/design-system/issues) or [start a discussion](https://github.com/bcgov/design-system/discussions) on GitHub
- [Join the Design Systems group](https://teams.microsoft.com/l/team/19%3AUQ8A8T8iTfGvQ9rnmaQe6_copVmFsQAadUUm9pbM6-Q1%40thread.tacv2/conversations?groupId=830b3f61-6aae-44de-b4fd-9807f1763666&tenantId=6fdb5200-3d0d-4a8a-b036-d3685e359adc) on Teams (IDIR required)

### Documentation

All components are fully documented. Go to [gov.bc.ca/designsystem](https://gov.bc.ca/designsystem) to browse foundational and component-level documentation.

Interactive examples and detailed technical documentation for each component are also [published in a Storybook](https://designsystem.gov.bc.ca/react-components/).

## Cost

There is no cost to use the design system.

## Support

The design system is maintained by the Corporate Online Services branch at Connected Services BC, part of the Ministry of Citizens' Services.
