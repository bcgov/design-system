# @bcgov/design-system-react-components

[![Lifecycle:Experimental](https://img.shields.io/badge/Lifecycle-Experimental-339999)](https://github.com/bcgov/repomountie/blob/master/doc/lifecycle-badges.md)

This package contains a library of React components built using [React Aria Components](https://react-spectrum.adobe.com/react-aria/react-aria-components.html) to implement the BC Design System.

Questions? Please email the <a href="mailto:DesignSystem@gov.bc.ca">GDX OSS Design Team</a>.

See repository: https://github.com/bcgov/design-system

To use, install this package and import the components into your application.

## Install

`npm install @bcgov/design-system-react-components`

### BC Sans font dependency

This package installs [@bcgov/bc-sans](https://www.npmjs.com/package/@bcgov/bc-sans) as a peer dependency. You must import the font-face declarations from @bcgov/bc-sans and ensure the font is reachable for your end user. The React components require that the `BC Sans` font-face is available to display correctly. The components do not ship their own copies of the font to minimize your bundle size.

**Important!** If you are on a BC Government-provisioned laptop, you already have the BC Sans font installed on your machine. This package uses `BC Sans` (with a space) for its font styles. If you are using this component library but not supplying the font, it's possible that your machine will still display the font correctly for you, **but not your end user**. Make sure to check this by disabling the font on your machine or by testing with another machine.

## Use

```jsx
// App.jsx

// If you're already importing the BC Sans font-face somewhere else in your
// project, there is no need to import it again. Just make sure the `BC Sans`
// declaration and font files are available.
import "@bcgov/bc-sans/css/BC_Sans.css";

// Import the individual components you need
import {
  Button,
  Footer,
  Header,
  TagGroup,
  TagList
} from "@bcgov/design-system-react-components";

export default function App() {
  return (
    <Header
      title="My application"
      skipLinks={[
        <a href="#main-content">Skip to main content</a>
      ]}
    >
      <Button variant="primary" size="small">Log in</Button>
    </Header>
    <main id="main-content">
      <TagGroup aria-label="Tag group with two items">
        <TagList
          items={[
            { id: "one", textValue: "One" },
            { id: "two", textValue: "Two" },
          ]}
        />
      </TagGroup>
    </main>
    <Footer/>
  );
}
```

## Component list

| Component              | React Aria Components docs link                           |
| ---------------------- | --------------------------------------------------------- |
| Button                 | https://react-spectrum.adobe.com/react-aria/Button.html   |
| Footer                 | N/A                                                       |
| Header                 | N/A                                                       |
| Select                 | https://react-spectrum.adobe.com/react-aria/Select.html   |
| TagGroup, TagList, Tag | https://react-spectrum.adobe.com/react-aria/TagGroup.html |

## Supported React versions

This package has a peer dependency on `react` and `react-dom` at these versions: `"^16.14.0 || ^17.0.0-rc.1 || ^18.0.0"`

By targeting v16.4.0 as a minimum, we get to use [React's modern JSX transformation](https://legacy.reactjs.org/blog/2020/09/22/introducing-the-new-jsx-transform.html) in `tsconfig.json`:

```json
"jsx": "react-jsx",
```

This means there's no need for unused `import React from "react"` statements in your JSX files.

## Versions

This project follows semantic versioning. See [CHANGELOG.md](./CHANGELOG.md) for version details.

## Development

### Components

Components live in `./src/components` and are targeted by the build process with an export in `./src/index.ts`.

### Storybook

Storybook stories live in `./src/stories`.

Run `npm run storybook-dev` to access the Storybook instance for the component library.

### Vite kitchen sink application

Vite uses the components code directly from `./src/components` in groups of content in `./src/pages`.

Run `npm run vite-dev` to access the Vite React demo app.

### Publish new versions

To generate an updated copy of the package for distribution, run the included Rollup script: `npm run rollup`.

This will place artifacts in the `dist` folder, which is targeted for publishing in `package.json` with the [`files` field](https://docs.npmjs.com/cli/v10/configuring-npm/package-json#files).

Update the package version in `package.json` and run `npm publish` to push a new version.
