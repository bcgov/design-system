# @bcgov/design-system-react-components

This package contains a library of React components built using [React Aria](https://react-aria.adobe.com) to implement the [B.C. Design System](https://gov.bc.ca/designsystem).

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

| Component               | React Aria docs link                           |
| ----------------------- | ---------------------------------------------- |
| AlertBanner             | N/A                                            |
| AlertDialog             | N/A                                            |
| Accordion               | https://react-aria.adobe.com/Disclosure        |
| AccordionGroup          | https://react-aria.adobe.com/DisclosureGroup   |
| Button                  | https://react-aria.adobe.com/Button            |
| ButtonGroup             | N/A                                            |
| Calendar                | https://react-aria.adobe.com/Calendar          |
| Callout                 | N/A                                            |
| Checkbox                | https://react-aria.adobe.com/Checkbox          |
| CheckboxGroup           | https://react-aria.adobe.com/CheckboxGroup     |
| DatePicker              | https://react-aria.adobe.com/DatePicker        |
| Dialog                  | https://react-aria.adobe.com/Dialog            |
| Footer                  | N/A                                            |
| Form                    | https://react-aria.adobe.com/Form              |
| Header                  | N/A                                            |
| Heading                 | https://react-spectrum.adobe.com/v3/Heading    |
| InlineAlert             | N/A                                            |
| Modal                   | https://react-aria.adobe.com/Modal             |
| Link                    | https://react-spectrum.adobe.com/v3/Link       |
| RadioGroup, Radio       | https://react-aria.adobe.com/RadioGroup        |
| Select                  | https://react-aria.adobe.com/Select            |
| Switch                  | https://react-aria.adobe.com/Switch            |
| TagGroup, TagList, Tag  | https://react-aria.adobe.com/TagGroup          |
| Text                    | https://react-spectrum.adobe.com/v3/Text       |
| TextArea, TextField     | https://react-aria.adobe.com/TextField         |
| ToggleButton            | https://react-aria.adobe.com/ToggleButton      |
| ToggleButtonGroup       | https://react-aria.adobe.com/ToggleButtonGroup |
| Tooltip, TooltipTrigger | https://react-aria.adobe.com/Tooltip           |

## Supported React versions

This package has a peer dependency on `react` and `react-dom` at these versions: `"^16.14.0 || ^17.0.0-rc.1 || ^18.0.0 || ^19.0.0"`

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

#### Testing components with Vitest

Unit tests can be run with Vitest using `npm run test`. Use `npm run test:watch` to run Vitest in watch mode.

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

#### Testing Storybook with Vitest

With Storybook running locally, use the `npm run test-storybook` script to test Storybook with Vitest's browser mode. This script uses the configuration defined in `./vite.config.ts`. [Learn more about Storybook's Vitest addon.](https://storybook.js.org/docs/next/writing-tests/integrations/vitest-addon).

### Vite kitchen sink application

Vite uses the components code directly from `./src/components` in groups of content in `./src/pages`.

Run `npm run vite-dev` to access the Vite React demo app.

### Build library code for publishing

#### Build scripts

Scripts are included in `package.json` for building the component library for publishing:

- `clean` removes any existing local `dist` directory
- `build:js` uses Rollup to create ESM and CJS versions of the components in `dist/esm` and `dist/cjs`
- `build:types` uses the TypeScript compiler `tsc` to generate type declarations in `dist/types`
- `build:dts` uses Rollup to bundle the `.d.ts` files from `dist/types` into a single `dist/index.d.ts` file
- `build` runs all of the scripts above in sequence

The files that get published are specified in the `files` section of `package.json`. The `dist/types` folder isn't included in this bundle in favor of publishing just the single aggregated `dist/index.d.ts` file.

#### Check files to be published

Use `npm pack --dry-run` to see the files that will be published in the package tarball. See [npm-pack documentation](https://docs.npmjs.com/cli/v11/commands/npm-pack).

#### Testing a local build

Use `npm link` to test a build of the component library locally. See [npm-link documentation](https://docs.npmjs.com/cli/v11/commands/npm-link).

In your `./packages/react-components` folder, run `npm link`.

Then in a local React project folder, use `npm link @bcgov/design-system-react-components` to link the test build into your test project.

### Linting

ESLint is used for linting. See configuration file `eslint.config.js`.

### Publish new versions

#### npm package

Publishing new versions of the package to npm is done via GitHub Actions.

GitHub Actions are located in `/.github/workflows` in the project root. Actions are included to:

- Build the Storybook and Vite applications on merge to `main`
- Test (Vitest and Playwright) on pull request
- Publish new versions of the library on npm (`next` tag) on merge to `main`
- Publish new versions of the library on npm (`latest` tag) when a GitHub release is published

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

Copy the changelog notes for the new version and link to the npm page for the new version. Ensure that `package.json` has been updated with the correct version number.

Publish the release to publish the latest version of the library on npm. The release tag must start with `@bcgov/design-system-react-components` to trigger the publish workflow.
