# Design Tokens for BC Design System

This package is being used to test publishing design tokens from Figma to npm.

Questions? Please email the <a href="mailto:corporatewebdesign@gov.bc.ca">GDX OSS Design Team</a>.

## Workflow

1. Collect design tokens input data from the [Tokens Studio for Figma](<https://www.figma.com/community/plugin/843461159747178978/Tokens-Studio-for-Figma-(Figma-Tokens)>) plugin
2. Transform the raw data from Tokens Studio using the [token-transformer npm package](https://www.npmjs.com/package/token-transformer)
3. Transform the processed data into different output style formats using [Style Dictionary](https://amzn.github.io/style-dictionary/#/)
4. Publish the output data on [npm](https://www.npmjs.com/)

## Steps to publish tokens

1. Use the Tokens Studio plugin in Figma to publish changes to the `feature/design-tokens/tokens-input` source branch on this repository.
2. Make a pull request with the source branch into the feature branch (`feature/design-tokens`) to update the contents of the `./input` directory. This is our "raw" JSON data from Tokens Studio. Merge this pull request.
3. Run `npm run transform-raw-tokens` to process our raw JSON data into a usable format using Tokens Studio's `token-transformer` plugin.
4. Run `npm run build-transformed-tokens` to run Style Dictionary using the settings in `config.json`. This outputs the design tokens in our target formats.
5. Run `npm run prepare-npm-package` to copy the contents of `build` into `dist`.
6. Run `npm run publish-npm-package` to publish to `npm`.

## Folder structure

```
.
├── build               - output of style-dictionary
├── dist                - published to npm as @bcgov/design-tokens
├── input               - raw design token JSON data from Tokens Studio for Figma
├── input-transformed   - output of token-transformer, input of style-dictionary
├── .gitignore          - package-specific .gitignore
├── .nvmrc              - major Node.js version used
├── config.json         - style-dictionary config
├── package.json        - contains npm scripts for performing transformations
└── README.md
```
