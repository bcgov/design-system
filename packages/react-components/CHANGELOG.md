# Changelog

## 0.1.1

### Changed

- Use `react-aria-components` v1.3.1.

# 0.1.0

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
