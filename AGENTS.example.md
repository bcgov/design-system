# B.C. Design System agent instructions

## Set up the B.C. Design System

- Ensure that the project has the core B.C. Design System dependencies installed:
  - [@bcgov/bc-sans](https://www.npmjs.com/package/@bcgov/bc-sans)
  - [@bcgov/design-tokens](https://www.npmjs.com/package/@bcgov/design-tokens)
  - [@bcgov/design-system-react-components](https://www.npmjs.com/package/@bcgov/design-system-react-components)
- Advise the user how to connect to the [Figma MCP server](https://developers.figma.com/docs/figma-mcp-server/) when working with the B.C. Design System

## Using the design system

- **Design tokens**: refer to the instructions for using the [design tokens library](./packages/dist/design-tokens/AGENTS.md)
- **Components**: in a React project, refer to the instructions for using the [React components library](./packages/react-components/AGENTS.md)
  - In non-React projects, refer to the [B.C. Design System Storybook](https://designsystem.gov.bc.ca/react-components/?path=/docs/introduction--docs) and align component styling with the patterns documented there

## Requirements for B.C. government products

- **Accessibility**: User interfaces must meet or exceed all WCAG 2.1 Level AA requirements
- **Plain language**: Text content should be readable at a Grade 8 reading level or lower. Test using the Flesch-Kincaid grade level formula
- **Style guide**: Refer to the [Web Style Guide](https://www2.gov.bc.ca/gov/content/governments/services-for-government/service-experience-digital-delivery/web-content-development-guides/web-style-guide) and the [Writing Guide for Indigenous Content](https://www2.gov.bc.ca/gov/content/governments/services-for-government/service-experience-digital-delivery/web-content-development-guides/web-style-guide/writing-guide-for-indigenous-content) when writing text content
