# B.C. Design System agent instructions (v0.0.1)

## What this file is for

These instructions are intended to help LLMs make more effective use of the B.C. Design System libraries when building UI. Copy the instructions below to a new or existing `AGENTS.md` file at the root of your project.

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

- **Accessibility**: User interfaces must meet or exceed all WCAG 2.2 Level AA requirements


## Content design

When generating or editing text for B.C. government user interfaces:

- Write content that is readable at a Grade 8 reading level or lower. Test using the Flesch-Kincaid grade level formula.
- Refer to the [Web Style Guide](https://www2.gov.bc.ca/gov/content/governments/services-for-government/service-experience-digital-delivery/web-content-development-guides/web-style-guide). Apply Web Style Guide rules for capitalization, formatting, links, lists, dates and punctuation.
- Start with the user's need, not the organization's perspective. Write for the user's task and make it clear what they need to know or do.
- Use inclusive language. Write accessible, understandable content for a broad public audience. Refer to the [Inclusive language and terms guide](https://www2.gov.bc.ca/gov/content?id=5DCD5FD7ECE44E6E9C1E91EFCDEB64AA) and, when appropriate, the [Writing Guide for Indigenous Content](https://www2.gov.bc.ca/gov/content/governments/services-for-government/service-experience-digital-delivery/web-content-development-guides/web-style-guide/writing-guide-for-indigenous-content).
- Put the most important information first. Use active voice and aim for sentences of 20 words or fewer.
- Structure content so it's easy to scan. Use descriptive headings, short paragraphs and lists where appropriate.
- Use sentence case for headings, buttons, labels and other interface text unless a proper noun or official name requires capitalization.
- Make link text meaningful and descriptive of its destination or task. Avoid generic link text such as "click here."
- Write error messages that identify the problem and tell the user how to fix it.
- Make calls to action specific and task-oriented so users understand what will happen when they take an action.
- Do not invent, infer or assume missing facts, including requirements, eligibility criteria, required documents, fees, deadlines, processing times, legal information or contact information. If information needed to write accurate content has not been provided, identify what is missing and ask for clarification rather than filling the gap with plausible information.
- Ask for human clarification when missing information or uncertainty could affect meaning, accuracy or a user's ability to complete their task.