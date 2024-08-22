# Changelog

## 3.1.0

### Added

- Comments added to tokens to document intended usage
- `layout.padding.hair` added to match `layout.margin.hair`
- New color tokens added:
  - `surface.color.primary.default`
  - `surface.color.primary.hover`
  - `surface.color.primary.pressed`
  - `surface.color.primary.disabled`
  - `surface.color.secondary.default`
  - `surface.color.secondary.hover`
  - `surface.color.secondary.pressed`
  - `surface.color.secondary.disabled`
  - `surface.color.tertiary.default`
  - `surface.color.tertiary.hover`
  - `surface.color.tertiary.pressed`
  - `surface.color.tertiary.disabled`

## 3.0.1

### Changed

- `typography.fontWeights.italic` is marked as deprecated and will be removed in next major version

### Added

- `typography.fontWeights.italic.style` is added, replacing deprecated `typography.fontWeights.italic`
- `typography.fontWeights.italic.weight` is added, giving a default weight to italic type

## 3.0.0

### Changed

- (breaking) Many tokens have been renamed to bring the generated tokens in line with the intended token names from Figma
- (breaking) `brand` color tokens renamed to `theme` to differentiate from [BC Visual Identity Program](https://www2.gov.bc.ca/gov/content?id=CCB4862101CD43C195FF395CAED00F95)
- (breaking) `gold` color scale values reworked to be lighter
- (breaking) `label` font size changed from 0.875rem to 0.75rem
- (breaking) `surface` group tokens referring to colors now include component names (`button`, `form`, `menu`)
- (breaking) `surface.border.light` color renamed to `surface.color.border.default`
- (breaking) `borderRadius` moved from `surface` group to `layout` group
- (breaking) File names for JavaScript tokens are renamed from `variables.js` to `index.js` for shorter import statements
- Tokens in `layout` group use `rem` equivalent of previous `px` values where possible in Figma

### Added

- `primaryBlue` (equal to `blue100`) and `primaryGold` (equal to `gold100`) dedicated color tokens added
- `smallBody` font size added at 0.875rem (the old `label` size)
- `xxxdense` line height added
- CommonJS variables are included in `cjs` and `cjs-prefixed` directories (with and without the `bcds` prefix) in addition to the existing ESM variables in `js` and `js-prefixed` directories
- TypeScript type definitions are shipped with the JavaScript tokens
- Heading level 6 `typography` group tokens added

### Removed

- (breaking) Removed `surface.size` (legacy testing tokens)
- (breaking) Removed `surface.borderRadius` (these were duplicates from the `layout` group)

## 3.0.0-rc3

### Changed

- Tokens in `layout` group use `rem` equivalent of previous `px` values where possible in Figma

### Added

- Heading level 6 `typography` group tokens added

## 3.0.0-rc2

### Changed

- (breaking) File names for JavaScript tokens are renamed from `variables.js` to `index.js` for shorter import statements

### Added

- CommonJS variables are included in `cjs` and `cjs-prefixed` directories (with and without the `bcds` prefix) in addition to the existing ESM variables in `js` and `js-prefixed` directories
- TypeScript type definitions are shipped with the JavaScript tokens

## 3.0.0-rc1

### Changed

- (breaking) Many tokens have been renamed to bring the generated tokens in line with the intended token names from Figma
- (breaking) `brand` color tokens renamed to `theme` to differentiate from [BC Visual Identity Program](https://www2.gov.bc.ca/gov/content?id=CCB4862101CD43C195FF395CAED00F95)
- (breaking) `gold` color scale values reworked to be lighter
- (breaking) `label` font size changed from 0.875rem to 0.75rem
- (breaking) `surface` group tokens referring to colors now include component names (`button`, `form`, `menu`)
- (breaking) `surface.border.light` color renamed to `surface.color.border.default`
- (breaking) `borderRadius` moved from `surface` group to `layout` group

### Added

- `primaryBlue` (equal to `blue100`) and `primaryGold` (equal to `gold100`) dedicated color tokens added
- `smallBody` font size added at 0.875rem (the old `label` size)
- `xxxdense` line height added

### Removed

- (breaking) Removed `surface.size` (legacy testing tokens)
- (breaking) Removed `surface.borderRadius` (these were duplicates from the `layout` group)

## 2.0.1

### Changed

- Updated `surface.primary.default` to `#053662`

## 2.0.0

### Changed

- (breaking) `borderRadius` moved from `layout` group to `surface` group

### Added

- Added `surface.color.danger.disabled`
- Added `borderWidth` to `surface` group
- Added `surface.size.small` and `surface.size.medium` ([multi-value spacing tokens](https://docs.tokens.studio/available-tokens/spacing-tokens))

## 1.0.0

### Changed

- (breaking) `borderRadius` moves from `surface` group to `layout` group

### Added

- Added `icons.color.primaryInvert`

### Removed

- (breaking) `borderWidth` removed from `surface` group (already exists in `layout` group)
- (breaking) Removed `surface.color.danger.disabled` (disabled danger buttons shouldn't exist)

## 0.0.2

### Added

- Added versions of CSS and JS variables without `bcds` prefix to more closely match token names generated by Figma

## 0.0.1

### Added

- Added design tokens in CSS and JS format with `bcds` prefix
