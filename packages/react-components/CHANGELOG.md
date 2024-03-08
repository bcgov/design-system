# Changelog

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
