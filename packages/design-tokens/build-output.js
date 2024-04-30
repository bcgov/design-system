import { registerTransforms } from "@tokens-studio/sd-transforms";
import StyleDictionary from "style-dictionary";

registerTransforms(StyleDictionary);

const sd = StyleDictionary.extend({
  source: ["input/tokens.json"],
  platforms: {
    css: {
      transforms: [
        "ts/descriptionToComment",
        "ts/size/px",
        "ts/opacity",
        "ts/size/lineheight",
        "ts/typography/fontWeight",
        "ts/resolveMath",
        "ts/size/css/letterspacing",
        "ts/typography/css/fontFamily",
        "ts/typography/css/shorthand",
        "ts/border/css/shorthand",
        "ts/shadow/css/shorthand",
        "ts/color/css/hexrgba",
        "ts/color/modifiers",
        "name/cti/kebab",
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
      prefix: "bcds",
      transforms: [
        "ts/descriptionToComment",
        "ts/size/px",
        "ts/opacity",
        "ts/size/lineheight",
        "ts/typography/fontWeight",
        "ts/resolveMath",
        "ts/size/css/letterspacing",
        "ts/typography/css/fontFamily",
        "ts/typography/css/shorthand",
        "ts/border/css/shorthand",
        "ts/shadow/css/shorthand",
        "ts/color/css/hexrgba",
        "ts/color/modifiers",
        "name/cti/kebab",
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
      transformGroup: "tokens-studio",
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
      transformGroup: "tokens-studio",
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
      transformGroup: "tokens-studio",
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
      transformGroup: "tokens-studio",
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
  },
});

sd.cleanAllPlatforms();
sd.buildAllPlatforms();
