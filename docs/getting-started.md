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

Both packages use the BC Sans typeface, and install [@bcgov/bc-sans](https://www.npmjs.com/package/@bcgov/bc-sans) as a peer dependency. as a peer dependency. You must import the font-face declarations from @bcgov/bc-sans and ensure the font is reachable for your end user.

## Installation

To install the packages, run:

```
npm i @bcgov/design-tokens
npm i @bcgov/design-system-react-components
```

## Using the design system

### Design tokens

The design tokens library includes the full [design tokens schema](https://www2.gov.bc.ca/gov/content/digital/design-system/foundations/design-tokens) implemented as:

- JavaScript/TypeScript variables (ESM and CommonJS)
- CSS variables

Import your preferred format in order to use tokens to style your UI elements.

The library also includes a prefixed implementation, which prepends each variable with a `bcds` namespace. This can help prevent naming collisions, especially if you're already using variables.

### Components

The component library is structured so that you can import individual components as-needed, for example:

```javascript
import { Header, Footer } from "@bcgov/design-system-react-components";

export default function App() {
  return (
    <Header
      title="My application"
      skipLinks={[
        <a href="#main-content">Skip to main content</a>
      ]}
    >
      <Button variant="primary" size="small">Log in</Button>
    </Header>
    <main id="main-content" />
    <Footer/>
  );
}
```

Some components have subcomponents that also need to be imported. For example, the Dialog component relies on Modal and DialogTrigger components:

```javascript
import {
  AlertDialog,
  Dialog,
  DialogTrigger,
  Modal,
} from "@bcgov/design-system-react-components";
```

Each component has an extensive set of props that you can use to configure their appearance, behaviour and interactions with other components.

Consult the [component documentation in Storybook](https://designsystem.gov.bc.ca/react-components/) to learn more about a component's structure and supported props.
