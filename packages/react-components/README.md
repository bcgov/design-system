# @bcgov/design-system-react-components

This package contains a library of React components built using [React Aria Components](https://react-spectrum.adobe.com/react-aria/react-aria-components.html) to implement the BC Design System.

Questions? Please email the <a href="mailto:DesignSystem@gov.bc.ca">GDX OSS Design Team</a>.

See repository: https://github.com/bcgov/design-system

To use, install this package and import the components into your application.

## Install

`npm install @bcgov/design-system-react-components`

## Use

```jsx
// App.jsx

import { TagGroup, TagList } from "@bcgov/design-system-react-components";

export default function App() {
  return (
    <TagGroup aria-label="Tags">
      <TagList items={[]}>
    </TagGroup>
  )
}
```

## Component list

| Component              | React Aria Components docs link                           |
| ---------------------- | --------------------------------------------------------- |
| TagGroup, TagList, Tag | https://react-spectrum.adobe.com/react-aria/TagGroup.html |

## Supported React versions

This package has a peer dependency on `react` and `react-dom` at these versions: `"^16.14.0 || ^17.0.0-rc.1 || ^18.0.0"`

By targeting v16.4.0 as a minimum, we get to use [React's modern JSX transformation](https://legacy.reactjs.org/blog/2020/09/22/introducing-the-new-jsx-transform.html) in `tsconfig.json`:

```json
"jsx": "react-jsx",
```

This means there's no need for unused `import React from "react"` statements in your JSX files.

## Development

### Components

Components live in `./src/components` and are targeted by the build process with an export in `./src/index.ts`.

### Storybook

Storybook stories live in `./src/stories`.

Run `npm run storybook` to access the Storybook instance for the component library.

### Vite kitchen sink application

Vite uses the components code directly from `./src/components` in groups of content in `./src/pages`.

Run `npm run vite` to access the Vite React demo app.

### Publish new versions

To generate an updated copy of the package for distribution, run the included Rollup script: `npm run rollup`.

This will place artifacts in the `dist` folder, which is targeted for publishing in `package.json` with the [`files` field](https://docs.npmjs.com/cli/v10/configuring-npm/package-json#files).

Update the package version in `package.json` and run `npm run publish` to push a new version.
