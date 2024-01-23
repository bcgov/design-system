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
          destination: "variables.js",
          format: "javascript/es6",
        },
      ],
    },
    jsPrefixed: {
      transformGroup: "tokens-studio",
      prefix: "bcds",
      buildPath: "build/js-prefixed/",
      files: [
        {
          destination: "variables.js",
          format: "javascript/es6",
        },
      ],
    },
    cjs: {
      transformGroup: "tokens-studio",
      buildPath: "build/cjs/",
      files: [
        {
          destination: "variables.js",
          format: "javascript/module-flat",
        },
      ],
    },
    cjsPrefixed: {
      transformGroup: "tokens-studio",
      prefix: "bcds",
      buildPath: "build/cjs-prefixed/",
      files: [
        {
          destination: "variables.js",
          format: "javascript/module-flat",
        },
      ],
    },
  },
});

sd.cleanAllPlatforms();
sd.buildAllPlatforms();
