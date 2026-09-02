# B.C. Design System React Components

## Library context

- This React component library is part of the [B.C. Design System](https://gov.bc.ca/designsystem)

### Component documentation

- Technical docs for components are in [Storybook](https://github.com/bcgov/design-system/tree/main/packages/react-components/src/stories)
  - Build the Storybook locally by checking out the `bcgov/design-system` repo and running `npm run storybook-dev` in `./src/packages/react-components`
  - When Storybook is running locally, connect to the Storybook MCP server at http://localhost:6006/mcp
- For components based on React Aria primitives, also refer to the [React Aria docs](https://react-aria.adobe.com) for the full API reference
  - Append `.md` to React Aria docs URLs for a Markdown version

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
  - Refer to additional instructions for working with design tokens in `node_modules/@bcgov/design-tokens/dist/AGENTS.md`
