# Configuration

## Design tokens

The design tokens library includes the full [design tokens schema](https://www2.gov.bc.ca/gov/content/digital/design-system/foundations/design-tokens) implemented as:

- JavaScript/TypeScript variables (ESM and CommonJS)
- CSS variables

Import your preferred format in order to use tokens to style your UI elements.

The library also includes an alternative `prefixed` implementation, which prefixes each variable with a `bcds` namespace. This can help prevent naming collisions, especially if you're already using variables.

## Components

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

If you need a specific component not included in the design system, [React Aria Components](https://react-aria.adobe.com) provides an extensive library of unstyled components. You can mix-and-match components from both libraries as needed, to leverage common APIs and ensure consistent interactions and behaviours.
