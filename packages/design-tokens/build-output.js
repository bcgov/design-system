import { register } from "@tokens-studio/sd-transforms";
import StyleDictionary from "style-dictionary";

register(StyleDictionary);

const AUTO_LINE_HEIGHT_TRANSFORM = "bcds/typography/lineHeightAuto";

/* Rewrite Figma's `AUTO` line-height value to `normal` */
StyleDictionary.registerTransform({
  name: "bcds/typography/lineHeightAuto",
  type: "value",
  matcher: (token) =>
    token.type === "lineHeights" &&
    token.path?.join(".") === "typography.lineHeights.auto",
  transform: (token) => {
    if (typeof token.value !== "string") {
      return token.value;
    }

    return token.value.toUpperCase() === "AUTO" ? "normal" : token.value;
  },
});

const TOKENS_STUDIO_TRANSFORMS =
  StyleDictionary.hooks.transformGroups["tokens-studio"];
const TOKENS_STUDIO_TRANSFORMS_WITH_AUTO_LINE_HEIGHT = [
  ...TOKENS_STUDIO_TRANSFORMS,
  AUTO_LINE_HEIGHT_TRANSFORM,
];

const sd = new StyleDictionary({
  source: ["input/tokens.json"],
  preprocessors: ["tokens-studio"],
  log: {
    verbosity: "verbose",
  },
  platforms: {
    css: {
      transformGroup: "tokens-studio",
      transforms: [
        "bcds/typography/lineHeightAuto",
        "ts/descriptionToComment",
        "ts/size/px",
        "ts/opacity",
        "ts/size/lineheight",
        "ts/typography/fontWeight",
        "ts/resolveMath",
        "ts/size/css/letterspacing",
        "ts/color/css/hexrgba",
        "ts/color/modifiers",
        AUTO_LINE_HEIGHT_TRANSFORM,
        "name/kebab",
      ],
      buildPath: "build/css/",
      files: [
        {
          destination: "variables.css",
          format: "css/variables",
        },
      ],
    },
    cssPrefixed: {
      transformGroup: "tokens-studio",
      prefix: "bcds",
      transforms: [
        "bcds/typography/lineHeightAuto",
        "ts/descriptionToComment",
        "ts/size/px",
        "ts/opacity",
        "ts/size/lineheight",
        "ts/typography/fontWeight",
        "ts/resolveMath",
        "ts/size/css/letterspacing",
        "ts/color/css/hexrgba",
        "ts/color/modifiers",
        AUTO_LINE_HEIGHT_TRANSFORM,
        "name/kebab",
      ],
      buildPath: "build/css-prefixed/",
      files: [
        {
          destination: "variables.css",
          format: "css/variables",
        },
      ],
    },
    js: {
      transforms: TOKENS_STUDIO_TRANSFORMS_WITH_AUTO_LINE_HEIGHT,
      buildPath: "build/js/",
      files: [
        {
          destination: "index.js",
          format: "javascript/es6",
        },
        {
          destination: "index.d.ts",
          format: "typescript/es6-declarations",
        },
      ],
    },
    jsPrefixed: {
      transforms: TOKENS_STUDIO_TRANSFORMS_WITH_AUTO_LINE_HEIGHT,
      prefix: "bcds",
      buildPath: "build/js-prefixed/",
      files: [
        {
          destination: "index.js",
          format: "javascript/es6",
        },
        {
          destination: "index.d.ts",
          format: "typescript/es6-declarations",
        },
      ],
    },
    cjs: {
      transforms: TOKENS_STUDIO_TRANSFORMS_WITH_AUTO_LINE_HEIGHT,
      buildPath: "build/cjs/",
      files: [
        {
          destination: "index.js",
          format: "javascript/module-flat",
        },
        {
          destination: "index.d.ts",
          format: "typescript/es6-declarations",
        },
      ],
    },
    cjsPrefixed: {
      transforms: TOKENS_STUDIO_TRANSFORMS_WITH_AUTO_LINE_HEIGHT,
      prefix: "bcds",
      buildPath: "build/cjs-prefixed/",
      files: [
        {
          destination: "index.js",
          format: "javascript/module-flat",
        },
        {
          destination: "index.d.ts",
          format: "typescript/es6-declarations",
        },
      ],
    },
    scss: {
      transformGroup: "tokens-studio",
      transforms: ["bcds/typography/lineHeightAuto", "name/kebab"],
      buildPath: "build/scss/",
      files: [
        {
          destination: "variables.scss",
          format: "scss/map-deep",
          filter: (t) =>
            /* strip metadata */
            !["$themes", "$metadata"].includes(t),
          options: {
            mapName: "bcds",
            themeable: false,
          },
        },
      ],
    },
    scssPrefixed: {
      transformGroup: "tokens-studio",
      transforms: ["bcds/typography/lineHeightAuto", "name/kebab"],
      buildPath: "build/scss-prefixed/",
      prefix: "bcds",
      files: [
        {
          destination: "variables.scss",
          format: "scss/map-deep",
          filter: (t) =>
            /* strip metadata */
            !["$themes", "$metadata"].includes(t),
          options: {
            mapName: "bcds",
            themeable: false,
          },
        },
      ],
    },
  },
});

await sd.cleanAllPlatforms();
await sd.buildAllPlatforms();
