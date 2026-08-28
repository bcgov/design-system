# @bcgov/design-system-react-components

This package contains a library of React components, built using React Aria, as part of the B.C. Design System.

To use these components, install this package and import the components you need into your application.

- GitHub: https://github.com/bcgov/design-system/
- Storybook: https://designsystem.gov.bc.ca/react-components/
- Documentation: https://gov.bc.ca/designsystem/

If you have questions, you can:

- <a href="mailto:DesignSystem@gov.bc.ca">Email designsystem@gov.bc.ca</a>
- <a href="https://github.com/bcgov/design-system/issues">Open an issue on GitHub</a>

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

Most components are based on <a href="https://react-aria.adobe.com">React Aria</a> primitives.

| Component                                                                   | React Aria docs link                           |
| --------------------------------------------------------------------------- | ---------------------------------------------- |
| AlertBanner                                                                 | N/A                                            |
| AlertDialog                                                                 | N/A                                            |
| Accordion                                                                   | https://react-aria.adobe.com/Disclosure        |
| AccordionGroup                                                              | https://react-aria.adobe.com/DisclosureGroup   |
| Button                                                                      | https://react-aria.adobe.com/Button            |
| ButtonGroup                                                                 | N/A                                            |
| Calendar                                                                    | https://react-aria.adobe.com/Calendar          |
| Callout                                                                     | N/A                                            |
| Checkbox                                                                    | https://react-aria.adobe.com/Checkbox          |
| CheckboxGroup                                                               | https://react-aria.adobe.com/CheckboxGroup     |
| DatePicker                                                                  | https://react-aria.adobe.com/DatePicker        |
| Dialog                                                                      | https://react-aria.adobe.com/Dialog            |
| Footer                                                                      | N/A                                            |
| Form                                                                        | https://react-aria.adobe.com/Form              |
| Header                                                                      | N/A                                            |
| Heading                                                                     | https://react-spectrum.adobe.com/v3/Heading    |
| InlineAlert                                                                 | N/A                                            |
| Menu, MenuItem, MenuTrigger, SubmenuTrigger, MenuSection, MenuSectionHeader | https://react-aria.adobe.com/Menu              |
| Modal                                                                       | https://react-aria.adobe.com/Modal             |
| Link                                                                        | https://react-spectrum.adobe.com/v3/Link       |
| NumberField                                                                 | https://react-aria.adobe.com/NumberField       |
| ProgressBar                                                                 | https://react-aria.adobe.com/ProgressBar       |
| ProgressCircle                                                              | https://react-aria.adobe.com/ProgressBar       |
| RadioGroup, Radio                                                           | https://react-aria.adobe.com/RadioGroup        |
| Select                                                                      | https://react-aria.adobe.com/Select            |
| Separator                                                                   | https://react-aria.adobe.com/Separator         |
| Subheader                                                                   | N/A                                            |
| Switch                                                                      | https://react-aria.adobe.com/Switch            |
| TagGroup, TagList, Tag                                                      | https://react-aria.adobe.com/TagGroup          |
| Text                                                                        | https://react-spectrum.adobe.com/v3/Text       |
| TextArea, TextField                                                         | https://react-aria.adobe.com/TextField         |
| TimeField                                                                   | https://react-aria.adobe.com/TimeField         |
| ToggleButton                                                                | https://react-aria.adobe.com/ToggleButton      |
| ToggleButtonGroup                                                           | https://react-aria.adobe.com/ToggleButtonGroup |
| Tooltip, TooltipTrigger                                                     | https://react-aria.adobe.com/Tooltip           |

## Supported React versions

This package has a peer dependency on `react` and `react-dom` at these versions: `"^16.14.0 || ^17.0.0-rc.1 || ^18.0.0 || ^19.0.0"`

If using React v16 or v17, you'll need to use an [SSRProvider](https://react-aria.adobe.com/SSRProvider) to prevent errors from components that rely on the [useId hook](https://react-aria.adobe.com/useId).

By targeting v16.14.0 as a minimum, we get to use [React's modern JSX transformation](https://legacy.reactjs.org/blog/2020/09/22/introducing-the-new-jsx-transform.html) in `tsconfig.json`:

```json
"jsx": "react-jsx",
```

This means there's no need for unused `import React from "react"` statements in your JSX files.

## Versions

This project follows semantic versioning. See [CHANGELOG.md](./CHANGELOG.md) for version details.

## Development

### Development Principles

- We must maintain an **extremely high bar for accessibility**. For example, every action possible with a mouse needs to be possible with a keyboard (or other assistive technology). Adobe's `react-aria-components` is very adept at cross-device support for this, which is one of the main reasons we chose it as our base, un-styled component library.
- We endeavour to **follow semantic versioning**, though we have not yet released a major version 1. On v0, we are still willing to carefully make breaking changes if the alternative is painting ourselves into a corner. Our rationale here comes from [item #4 of the SemVer spec](https://semver.org/#spec-item-4).
  - Once we are on a major version 1, we will be much more strict about only making breaking changes with major version bumps. [Here's an example of a breaking component change that we consider okay in v0](https://github.com/bcgov/design-system/pull/844#issuecomment-5431222716).
  - We endeavour to release a major version 1 as soon as we consider our initial component set complete.
  - We **do NOT want to make life hard for early adopters**, so we think very hard about breaking changes and we publish specific guidance with releases that involve breaks.
- We **keep our dependencies extremely minimal**. New `devDependencies` are fine and anticipated, but `dependencies` that get shipped with the library need very careful consideration. So far, we have only added dependencies from under the umbrella of Adobe's Spectrum design system, and only where it's necessary because a particular piece of functionality isn't exposed directly from `react-aria-components`.
- We want to **support as many new and existing React projects as possible**. To this end, we avoid dependencies that might conflict with existing choices in a project:
  - We avoid importing BC Sans in case a project is already shipping it themselves. It's much worse to ship the heavy BC Sans font files twice in production than to show a generic serifed font in development until the developer figures out that something is wrong.
  - The library should work on as wide a range of React versions as possible given the `react-aria-components` dependency. We chose to very slightly narrow their support version range to start our own support at v16.14.0. This is the version where it's no longer necessary to import unused `react` dependencies into every component file (see [Introducing the New JSX Transform](https://legacy.reactjs.org/blog/2020/09/22/introducing-the-new-jsx-transform.html)).
    - Choices that make things harder for apps on older versions of React to adopt the library should be thought through. [Here's an example of thinking through a mitigation that affects React v16 and v17 projects](https://github.com/bcgov/design-system/pull/760#issuecomment-5321364758).
  - We write our CSS styles without the use of a CSS-in-JS tool to avoid conflicts with any existing tools that existing projects might be using.
  - We don't use a CSS framework like Tailwind or Bootstrap.
- We want to **keep all tests passing**. GitHub Actions is used to run test suites when a PR is made. PRs should not be merged to `main` if new breaks are introduced.
- Nitty gritty code details below:
  - Class names:
    - Class names start like this:
      - When a React Aria component is being styled: `.bcds-react-aria-<RACComponentName>`
        - React Aria Components are unstyled components that use default class names like `.react-aria-<RACComponentName>`. We append `bcds-` for "B.C. Design System" to scope our styles in case people are using RAC for other things.
      - When a generic HTML tag is the top level component: `.bcds-<ComponentName>`
        - For example, the `Header` and `Footer` are just `<header>` and `<footer>` elements, not components from RAC.
    - Class names use vaguely BEM-like conventions after the first chunk. Ex: `.bcds-react-aria-Disclosure--Panel`
    - We are not currently doing any kind of unique ID-based class name generation/scoping, so it's important to be somewhat verbose in selecting class names. If you accidentally reuse a class like `.bcds-react-aria-Button` as part of some composite selector, its styles will collide with the styles from the `Button` component.
  - We always want to use tokens from our tokens library where possible. Where a hard-coded value is being used because no token is available, it's a good idea to raise it to the team so designers can make the call on whether a new token should be added or if a particular hard-coded value is a genuine one-off.
  - We lint our styles with `stylelint`, and should endeavour to pass the [`no-descending-specificity` rule](https://stylelint.io/user-guide/rules/no-descending-specificity/).

### Components

Components live in `./src/components` and are targeted by the build process with an export in `./src/index.ts`.

The `*.figma.tsx` files alongside each component are used to map component props to their counterpart properties in Figma via [Code Connect](https://help.figma.com/hc/en-us/articles/23920389749655-Code-Connect).

#### Testing components with Vitest

Unit tests can be run with Vitest using `npm run test`. Use `npm run test:watch` to run Vitest in watch mode.

### Storybook

Storybook stories live in `./src/stories`.

Run `npm run storybook-dev` to access the Storybook instance for the component library.

New versions of Storybook are automatically built in a GitHub Actions workflow and deployed in the `-dev` namespace in the OpenShift Silver cluster. New builds are automatically deployed to the `-prod` namespace when a GitHub release is published. See `.github/build_react_component_library_apps.yaml`.

To manually deploy a new version of Storybook into `-test` or `-prod`, log in to the OpenShift CLI and run:

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

ESLint is used for linting TypeScript files. See configuration file `eslint.config.js` and `lint:ts` script in `package.json`.

Stylelint is used for linting CSS files. See configuration file `stylelint.config.mjs` and `lint:css` script in `package.json`.

The `lint` script in `package.json` runs both the TypeScript and CSS linting in series.

### Formatting

Prettier is used for formatting. See configuration file `prettier.config.js` and `format` scripts in `package.json`.

### Publish new versions

#### npm package

Publishing new versions of the package is done via GitHub Actions.

GitHub Actions are located in `/.github/workflows` in the project root. Actions are included to:

- Build the Storybook and Vite applications on merge to `main`
- Test (Vitest and Playwright) on pull request
- Publish new versions of the library to npm (`next` tag) and GitHub Packages on merge to `main`
- Publish new production versions of the library to npm (`latest` tag) and GitHub Packages when a GitHub release is published

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
