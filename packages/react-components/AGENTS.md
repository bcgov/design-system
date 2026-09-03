# B.C. Design System React Components (v0.0.1)

## Library context

- This React component library is part of the [B.C. Design System](https://gov.bc.ca/designsystem)
- Use this library when composing UI in a React project for the B.C. government

## Using the component library

- Install the React components package with `npm i @bcgov/design-system-react-components` and import individual components as needed
- Prefer the component library API over creating new components wherever possible
- Use component props and established patterns rather than bypassing them with ad hoc markup
- When a component is missing or insufficient, extend existing design system patterns rather than creating one-off UI
  - In this case, prefer using [React Aria primitives](https://react-aria.adobe.com) wherever possible

### Component documentation

- Technical docs for components are in [Storybook](https://github.com/bcgov/design-system/tree/main/packages/react-components/src/stories)
- For components based on React Aria primitives, also refer to the React Aria docs for the full API reference

### Available components

| Component                                                                   | Summary                                                       | Component MDX file                                                                                           | React Aria primitive                              |
| --------------------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------- |
| AlertBanner                                                                 | Displays an important status or announcement message.         | https://github.com/bcgov/design-system/blob/main/packages/react-components/src/stories/AlertBanner.mdx       | N/A                                               |
| AlertDialog                                                                 | Presents a high-priority confirmation or warning dialog.      | https://github.com/bcgov/design-system/blob/main/packages/react-components/src/stories/AlertDialog.mdx       | https://react-aria.adobe.com/Dialog.md            |
| Accordion                                                                   | Expands and collapses sections of content.                    | N/A                                                                                                          | https://react-aria.adobe.com/Disclosure.md        |
| AccordionGroup                                                              | Groups related expandable sections together.                  | https://github.com/bcgov/design-system/blob/main/packages/react-components/src/stories/AccordionGroup.mdx    | https://react-aria.adobe.com/DisclosureGroup.md   |
| Button                                                                      | Triggers an action or navigates to a new state.               | https://github.com/bcgov/design-system/blob/main/packages/react-components/src/stories/Button.mdx            | https://react-aria.adobe.com/Button.md            |
| ButtonGroup                                                                 | Groups related action buttons.                                | https://github.com/bcgov/design-system/blob/main/packages/react-components/src/stories/ButtonGroup.mdx       | N/A                                               |
| Calendar                                                                    | Lets users browse and select dates.                           | https://github.com/bcgov/design-system/blob/main/packages/react-components/src/stories/Calendar.mdx          | https://react-aria.adobe.com/Calendar.md          |
| Callout                                                                     | Highlights informational content or tips.                     | https://github.com/bcgov/design-system/blob/main/packages/react-components/src/stories/Callout.mdx           | N/A                                               |
| Checkbox                                                                    | Enables a true/false selection.                               | N/A                                                                                                          | https://react-aria.adobe.com/Checkbox.md          |
| CheckboxGroup                                                               | Lets users choose multiple related options.                   | https://github.com/bcgov/design-system/blob/main/packages/react-components/src/stories/CheckboxGroup.mdx     | https://react-aria.adobe.com/CheckboxGroup.md     |
| DatePicker                                                                  | Lets users select a date in a calendar-based input.           | https://github.com/bcgov/design-system/blob/main/packages/react-components/src/stories/DatePicker.mdx        | https://react-aria.adobe.com/DatePicker.md        |
| Dialog                                                                      | Displays a modal dialog for focused workflow or messaging.    | https://github.com/bcgov/design-system/blob/main/packages/react-components/src/stories/Dialogs.mdx           | https://react-aria.adobe.com/Dialog.md            |
| Footer                                                                      | Shows common site or page footer information.                 | https://github.com/bcgov/design-system/blob/main/packages/react-components/src/stories/Footer.mdx            | N/A                                               |
| Form                                                                        | Organizes fields and a submit flow.                           | https://github.com/bcgov/design-system/blob/main/packages/react-components/src/stories/Form.mdx              | https://react-aria.adobe.com/Form.md              |
| Header                                                                      | Displays a page or section header.                            | https://github.com/bcgov/design-system/blob/main/packages/react-components/src/stories/Header.mdx            | N/A                                               |
| InlineAlert                                                                 | Communicates a short, inline status message.                  | https://github.com/bcgov/design-system/blob/main/packages/react-components/src/stories/InlineAlert.mdx       | N/A                                               |
| Menu, MenuItem, MenuTrigger, SubmenuTrigger, MenuSection, MenuSectionHeader | Displays a menu of actions or navigation choices.             | https://github.com/bcgov/design-system/blob/main/packages/react-components/src/stories/Menu.mdx              | https://react-aria.adobe.com/Menu.md              |
| Modal                                                                       | Displays a layered overlay for focused interaction.           | N/A                                                                                                          | https://react-aria.adobe.com/Modal.md             |
| NumberField                                                                 | Lets users input numeric values with validation.              | https://github.com/bcgov/design-system/blob/main/packages/react-components/src/stories/NumberField.mdx       | https://react-aria.adobe.com/NumberField.md       |
| ProgressBar                                                                 | Shows completion progress for a long-running task.            | https://github.com/bcgov/design-system/blob/main/packages/react-components/src/stories/ProgressBar.mdx       | https://react-aria.adobe.com/ProgressBar.md       |
| ProgressCircle                                                              | Shows a circular progress indicator.                          | N/A                                                                                                          | https://react-aria.adobe.com/ProgressBar.md       |
| RadioGroup, Radio                                                           | Lets users choose one option from a set.                      | https://github.com/bcgov/design-system/blob/main/packages/react-components/src/stories/RadioGroup.mdx        | https://react-aria.adobe.com/RadioGroup.md        |
| Select                                                                      | Lets users choose one option from a dropdown list.            | https://github.com/bcgov/design-system/blob/main/packages/react-components/src/stories/Select.mdx            | https://react-aria.adobe.com/Select.md            |
| Separator                                                                   | Visually separates content sections.                          | https://github.com/bcgov/design-system/blob/main/packages/react-components/src/stories/Separator.mdx         | https://react-aria.adobe.com/Separator.md         |
| Subheader                                                                   | Provides a secondary heading or section label.                | https://github.com/bcgov/design-system/blob/main/packages/react-components/src/stories/Subheader.mdx         | N/A                                               |
| Switch                                                                      | Toggles a setting between on and off.                         | https://github.com/bcgov/design-system/blob/main/packages/react-components/src/stories/Switch.mdx            | https://react-aria.adobe.com/Switch.md            |
| TagGroup, TagList, Tag                                                      | Displays small labels or filtered selections.                 | https://github.com/bcgov/design-system/blob/main/packages/react-components/src/stories/TagGroup.mdx          | https://react-aria.adobe.com/TagGroup.md          |
| TextArea, TextField                                                         | Accepts short or multi-line text input.                       | https://github.com/bcgov/design-system/blob/main/packages/react-components/src/stories/TextField.mdx         | https://react-aria.adobe.com/TextField.md         |
| TimeField                                                                   | Lets users input a time value.                                | https://github.com/bcgov/design-system/blob/main/packages/react-components/src/stories/TimeField.mdx         | https://react-aria.adobe.com/TimeField.md         |
| ToggleButton                                                                | Toggles an action between active and inactive states.         | N/A                                                                                                          | https://react-aria.adobe.com/ToggleButton.md      |
| ToggleButtonGroup                                                           | Groups related toggle actions together.                       | https://github.com/bcgov/design-system/blob/main/packages/react-components/src/stories/ToggleButtonGroup.mdx | https://react-aria.adobe.com/ToggleButtonGroup.md |
| Tooltip, TooltipTrigger                                                     | Shows contextual help or extra information on hover or focus. | https://github.com/bcgov/design-system/blob/main/packages/react-components/src/stories/Tooltip.mdx           | https://react-aria.adobe.com/Tooltip.md           |
| Heading                                                                     | Renders a styled semantic heading.                              | https://github.com/bcgov/design-system/blob/main/packages/react-components/src/stories/Heading.mdx           | https://react-aria.adobe.com/Heading.md           |
| Link                                                                        | Renders an accessible, configurable hyperlink.                  | https://github.com/bcgov/design-system/blob/main/packages/react-components/src/stories/Link.mdx              | https://react-aria.adobe.com/Link.md              |
| Text                                                                        | Renders styled text content.                                    | https://github.com/bcgov/design-system/blob/main/packages/react-components/src/stories/Text.mdx              | https://react-aria.adobe.com/Text.md              |

## Styling components

- Component CSS is bundled internally
  - Do not overwrite the `className` for design system components
- Components are designed to work well in flexbox and grid layouts
  - The design system does not assume or enforce a specific grid or layout convention
- If writing new components, use design tokens from the `@bcgov/design-tokens` library to ensure coherence with other components
  - Prefer component-level styling and design tokens over bespoke CSS
  - Refer to additional instructions for working with design tokens in `node_modules/@bcgov/design-tokens/AGENTS.md`
