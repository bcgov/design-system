# B.C. Design System agent instructions (v0.0.1)

<!--
These instructions are intended to help LLMs make more effective use of the B.C. Design System libraries when building UI. Copy these instructions to a new or existing `AGENTS.md` file at the root of your project.
-->

## Set up the B.C. Design System

- When building UI in this project, use the B.C. Design System as your primary reference
- Ensure that the project has the core B.C. Design System dependencies installed:
  - [@bcgov/bc-sans](https://www.npmjs.com/package/@bcgov/bc-sans)
  - [@bcgov/design-tokens](https://www.npmjs.com/package/@bcgov/design-tokens)
  - In React projects, [@bcgov/design-system-react-components](https://www.npmjs.com/package/@bcgov/design-system-react-components)
- When working with the B.C. Design System or Figma files, advise the user how to connect to the [Figma MCP server](https://developers.figma.com/docs/figma-mcp-server/)

## Using the design system

- **Design tokens**: get instructions for using the design tokens library from `node_modules/@bcgov/design-tokens/AGENTS.md`
- **Components**: in a React project, get instructions for using the React component library from `node_modules/@bcgov/design-system-react-components/AGENTS.md`
  - In non-React projects, refer to the [B.C. Design System Storybook](https://designsystem.gov.bc.ca/react-components/?path=/docs/introduction--docs) and align component styling with the patterns documented there

## Requirements for B.C. government products

- **Accessibility**: User interfaces must meet or exceed all WCAG 2.1 Level AA requirements
- **Plain language**: Text content should be readable at a Grade 8 reading level or lower. Test using the Flesch-Kincaid grade level formula
- **Style guide**: Refer to the [Web Style Guide](https://www2.gov.bc.ca/gov/content/governments/services-for-government/service-experience-digital-delivery/web-content-development-guides/web-style-guide) and the [Writing Guide for Indigenous Content](https://www2.gov.bc.ca/gov/content/governments/services-for-government/service-experience-digital-delivery/web-content-development-guides/web-style-guide/writing-guide-for-indigenous-content) when writing text content
