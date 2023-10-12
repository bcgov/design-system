# Design Tokens for BC Design System

This package is being used to test publishing design tokens from Figma to npm.

Questions? Please email the <a href="mailto:corporatewebdesign@gov.bc.ca">GDX OSS Design Team</a>.

## Workflow

1. Collect design tokens input data from the [Tokens Studio for Figma](<https://www.figma.com/community/plugin/843461159747178978/Tokens-Studio-for-Figma-(Figma-Tokens)>) plugin
2. Transform the raw data from Tokens Studio using the [Style Dictionary](https://amzn.github.io/style-dictionary/#/) along with the [@tokens-studio/sd-transforms](https://github.com/tokens-studio/sd-transforms) custom transforms package for Tokens Studio data
3. Publish the output data on [npm](https://www.npmjs.com/)

## Steps to publish tokens

1. Merge new token data into the JSON file `input/tokens.json`.
2. Run `npm run build` to run Style Dictionary, transforming the raw JSON data into usable token formats.
3. Run `npm run prepare-npm-package` to copy the contents of `build` into `dist`.
4. Run `npm run publish-npm-package` to publish to `npm`.

## Folder structure

```
.
├── build               - output of style-dictionary
├── dist                - published to npm as @bcgov/design-tokens
├── input               - raw design token JSON data from Tokens Studio for Figma
├── .gitignore          - package-specific .gitignore
├── .nvmrc              - major Node.js version used
├── package.json        - contains npm scripts for performing transformations
└── README.md
```
