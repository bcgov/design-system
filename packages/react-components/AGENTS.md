# React components for the B.C. Design System

## Library context

- This React component library is part of the [B.C. Design System](https://designsystem.gov.bc.ca)
- Additional agent instructions for using the B.C. Design System are available in the [`bcgov/design-system` GitHub mono-repo](https://github.com/bcgov/design-system/blob/main/AGENTS.md)
  - Check out the repo at the commit SHA that matches the version of the library being used in your project

### Component documentation

- Technical docs for components are in [Storybook](https://github.com/bcgov/design-system/tree/main/packages/react-components/src/stories)
  - Build the Storybook locally by checking out the `bcgov/design-system` repo and running `npm run storybook-dev` in `./src/packages/react-components`
  - When Storybook is running locally, connect to the Storybook MCP server at http://localhost:6006/mcp
- For components based on React Aria primitives, also refer to the [React Aria docs](https://react-aria.adobe.com) for the full API reference
  - Start here: [Working with AI](https://react-aria.adobe.com/ai)

## Using the component library

- Install the React components package with `npm i @bcgov/design-system-react-components` and import individual components as needed
- Prefer the component library API over creating new components wherever possible
- Use component props and established patterns rather than bypassing them with ad hoc markup
- When a component is missing or insufficient, extend existing design system patterns rather than creating one-off UI
  - In this case, prefer using [React Aria primitives](https://react-aria.adobe.com) wherever possible

### Styling components

- Prefer component-level styling and design tokens over bespoke CSS
- Do not overwrite the `className` for existing design system components
- If writing new components, use design tokens from the `@bcgov/design-tokens` library to ensure coherence with other components
  - Import variables in the user's preferred format from `@bcgov/design-tokens`
  - Do not guess or invent new variables unless explicitly instructed
  - Always use semantic variables rather than hard-coding their values
