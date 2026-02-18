# Changelog

## 0.6.1

This is a patch release that fixes a bug in the DatePicker component.

### Added

- DatePicker: added test suite

### Changed

- DatePicker: format helper text now properly shows the default (`en-CA`) format, unless the component is explicitly configured to use the browser locale

This release uses:

- `react-aria-components` v1.14.0
- `@bcgov/design-tokens` v3.2.0

## 0.6.0

This is a milestone release that adds four new components, and includes enhancements to existing components.

### Added

- ToggleButton and ToggleButtonGroup
- DatePicker
- NumberField

### Changed

- InlineAlert: added support for a custom icon, overriding the default set by each variant
- TextField/TextArea: apply correct styling in disabled state
- Storybook: reorganised components and made it easier to find full API documentation for React Aria-based components

This release uses:

- `react-aria-components` v1.14.0
- `@bcgov/design-tokens` v3.2.0

## 0.5.2

This is a patch release that brings new options and refinements to the Button component.

### Changed

#### Button component

- Added new `large` and `xsmall` size variants
- Adjusted padding on all size variants to scale more consistently
- Focus ring is now displayed only on keyboard focus, using `data-focus-visible` attribute

This release uses:

- `react-aria-components` v1.13.0
- `@bcgov/design-tokens` v3.2.0

## 0.5.1

### Added

- Added Heading, Text and Link components.

This release uses:

- `react-aria-components` v1.6.0
- `@bcgov/design-tokens` v3.2.0

## 0.5.0

This is a milestone release that contains the following new components:

- Accordion and accordion group
- Alert Banner
- Callout

This release uses:

- `react-aria-components` v1.5.0
- `@bcgov/design-tokens`v3.2.0

Component changes since v0.4.0:

- Add an alternative `chip` style to Tag and Tag group component.

## 0.4.0

This is a milestone release that contains the following new components:

- AlertDialog
- Dialog
- Modal

This release uses:

- `react-aria-components` v1.3.3
- `@bcgov/design-tokens`v3.1.1

No component changes since v0.3.0.

## 0.3.1

### Added

- Added AlertDialog, Dialog, and Modal components.

## 0.3.0

This is a milestone release that contains the following new components:

- CheckboxGroup/Checkbox
- RadioGroup/Radio

This release uses:

- `react-aria-components` v1.3.3
- `@bcgov/design-tokens`v3.1.1

Component changes since v0.2.0:

- Switch component gets `prefers-reduced-motion` handling to turn off animation for users that prefer reduced motion.
- Switch component `cursor` styling applies to `children` text in addition to visual switch component.

## 0.2.3

### Changed

- Switch component gets `prefers-reduced-motion` handling to turn off animation for users that prefer reduced motion.
- Switch component `cursor` styling applies to `children` text in addition to visual switch component.

### Added

- Added RadioGroup/Radio components.

## 0.2.2

### Added

- Added CheckboxGroup/Checkbox components.

## 0.2.1

No changes from v0.2.0.

## 0.2.0

This is a milestone release that contains the following new components:

- ButtonGroup
- InlineAlert
- Switch

This release uses:

- `react-aria-components` v1.3.3
- `@bcgov/design-tokens`v3.1.1

No component changes from v0.1.4.

## 0.1.4

### Changed

- Use `react-aria-components` v1.3.3.
- Use `@bcgov/design-tokens` v3.1.1.
- InlineAlert close button is adjusted so it doesn't cause its container to stretch when there's only a single line of text in the alert.
- Select component list item vertical padding is updated, making lists slightly taller.

## 0.1.3

### Added

- ButtonGroup component

## 0.1.2

### Added

- InlineAlert component
- Switch component

## 0.1.1

### Changed

- Use `react-aria-components` v1.3.1.

## 0.1.0

This is a milestone release that contains the following components:

- Button
- Footer
- Form
- Header
- Select
- TagGroup (TagList, Tag)
- TextArea
- TextField
- Tooltip (TooltipTrigger)

This release uses:

- `react-aria-components` v1.2.1
- `@bcgov/design-tokens`v3.0.0

No component changes from v0.0.10.

## 0.0.10

### Changed

- Select, TextArea, and TextField components use "(required)" in label when `isRequired` prop is true, rather than "(optional)" when false.
- Select, TagGroup, TextArea, and TextField components have text slot spacing adjusted for consistency between components.

### Added

- Added Form utility component.

## 0.0.9

### Changed

- TextField label has extra padding removed.

### Added

- Added TextArea component.

## 0.0.8

### Changed

- Updated Button component focus state.
- Updated Tag component focus and select states.
- Fixed Select component long option text overflow bug.

### Added

- Added TextField component.

## 0.0.7

### Changed

- Use `@bcgov/design-tokens` v3.0.0.
  - Tag component's text appears visually smaller than the TagGroup's label, description, and error fields after a change in the `label` font-size token (`0.75rem` to `0.875rem`) and addition of `smallBody` font-size token (`0.875rem`).
- Use `react-aria-components` v1.2.1.
- Select component label uses `secondary` text color.
- Select component "(optional)" label uses `secondary` text color instead of `disabled`.

## 0.0.6

### Changed

- Updated Footer component:
  - Added FooterLinks sub-component for use in `links` slot or new `children` slot.
  - Default `contact` text updated to match current text on gov.bc.ca.
  - Style updates to align `acknowledgement` text.
- Rollup script updated to ensure `dist` directory code freshness.

### Added

- Added Tooltip and TooltipTrigger components.

## 0.0.5

### Added

- Added Footer component.

## 0.0.4

### Changed

- Use `react-aria-components` v1.1.1.
- Updated class names in Button, Select, Tag, TagGroup, and TagList to add `bcds-` prefix to prevent style collisions with other instances of React Aria Components.

### Added

- Added Header component.

## 0.0.3

### Changed

- Use `react-aria-components` v1.0.1, `@bcgov/bc-sans` v2.0.1.
- In TagList, use render prop pattern [rather than array.map()](https://react-spectrum.adobe.com/react-aria/collections.html#why-not-array-map) for performance.
- TagGroup sub-components get explicit class names to prevent styling collisions with sub-component instances in other components.

### Added

- Added Select component.

## 0.0.2

### Changed

- Moved `@bcgov/bc-sans` to peer dependencies and included import guidance in README, rather than bundling copies of the font in the rollup process.
- Moved design tokens CSS import out of Tag component and into common index export file.

### Added

- Added Button component.

## 0.0.1

### Added

- Added TagGroup/TagList/Tag components.
