# @bcgov/design-system-react-components

[![Lifecycle:Experimental](https://img.shields.io/badge/Lifecycle-Experimental-339999)](https://github.com/bcgov/repomountie/blob/master/doc/lifecycle-badges.md)

This package contains a library of React components built using [React Aria Components](https://react-spectrum.adobe.com/react-aria/components.html) to implement the [B.C. Design System](https://gov.bc.ca/designsystem).

Questions? Please email the <a href="mailto:DesignSystem@gov.bc.ca">GDX OSS Design Team</a>.

Storybook: https://designsystem.gov.bc.ca/react-components/

GitHub Repository: https://github.com/bcgov/design-system

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

| Component               | React Aria Components docs link                            |
| ----------------------- | ---------------------------------------------------------- |
| Button                  | https://react-spectrum.adobe.com/react-aria/Button.html    |
| Footer                  | N/A                                                        |
| Form                    | https://react-spectrum.adobe.com/react-aria/Form.html      |
| Header                  | N/A                                                        |
| Select                  | https://react-spectrum.adobe.com/react-aria/Select.html    |
| TagGroup, TagList, Tag  | https://react-spectrum.adobe.com/react-aria/TagGroup.html  |
| TextArea, TextField     | https://react-spectrum.adobe.com/react-aria/TextField.html |
| Tooltip, TooltipTrigger | https://react-spectrum.adobe.com/react-aria/Tooltip.html   |

## Supported React versions

This package has a peer dependency on `react` and `react-dom` at these versions: `"^16.14.0 || ^17.0.0-rc.1 || ^18.0.0"`

By targeting v16.14.0 as a minimum, we get to use [React's modern JSX transformation](https://legacy.reactjs.org/blog/2020/09/22/introducing-the-new-jsx-transform.html) in `tsconfig.json`:

```json
"jsx": "react-jsx",
```

This means there's no need for unused `import React from "react"` statements in your JSX files.

## Versions

This project follows semantic versioning. See [CHANGELOG.md](./CHANGELOG.md) for version details.

## Development

### Components

Components live in `./src/components` and are targeted by the build process with an export in `./src/index.ts`.

#### Testing components with Jest

Unit tests can be run with Jest using `npm run test`.

### Storybook

Storybook stories live in `./src/stories`.

Run `npm run storybook-dev` to access the Storybook instance for the component library.

New versions of Storybook are automatically built in a GitHub Actions workflow and deployed in the `-dev` namespace in the OpenShift Silver cluster. See `.github/build_react_component_library_apps.yaml`.

To deploy a new version of Storybook into `-test` or `-prod`, log in to the OpenShift CLI and run:

```sh
# Create a new layer in the `test` ImageStream from the latest `develop` image:
oc tag ed91fb-tools/design-system-react-components-storybook:develop ed91fb-tools/design-system-react-components-storybook:test

# `develop` to `production`
oc tag ed91fb-tools/design-system-react-components-storybook:develop ed91fb-tools/design-system-react-components-storybook:production
```

#### Testing with Storybook Test Runner

With Storybook running locally, use the `npm run test-storybook` script to run `@storybook/test-runner` using the configuration defined in `./.storybook/test-runner.ts`. [Learn more about Storybook Test Runner](https://storybook.js.org/docs/writing-tests/test-runner).

### Vite kitchen sink application

Vite uses the components code directly from `./src/components` in groups of content in `./src/pages`.

Run `npm run vite-dev` to access the Vite React demo app.

### Publish new versions

#### npm package

To generate an updated copy of the package for distribution, run the included Rollup script: `npm run rollup`.

This will place artifacts in the `dist` folder, which is targeted for publishing in `package.json` with the [`files` field](https://docs.npmjs.com/cli/v10/configuring-npm/package-json#files).

Update the package version in `package.json` and run `npm publish` to push a new version.

To publish a beta/release candidate version, use `npm publish --tag next`.

#### GitHub release

GitHub releases are based on git tags.

```sh
# From your `main` branch, cut a new tag locally based on a commit SHA
git tag @bcgov/design-system-react-components@<version here> <commit SHA here>

# Push the tag to GitHub
git push --tags
```

From the [Releases page](https://github.com/bcgov/design-system/releases), click "Draft a new release".

For "Choose a tag", select the tag you created. For the previous tag, use the previous version of the same package.

Copy the Changelog notes for the new version and link to the npm page for the new version.

### GitHub Actions

GitHub Actions to build and test the library are located in `/.github/workflows` in the project root.
