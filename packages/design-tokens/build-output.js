import { register } from "@tokens-studio/sd-transforms";
import StyleDictionary from "style-dictionary";

register(StyleDictionary);

// TODO: Remove the `bcds` custom transformations and keep the default new
//       behavior for these tokens when we have a breaking change that will
//       move us to a new major version.

// Matches 6 or 8 digit hex color codes
const hexColorRegex = /#([0-9a-fA-F]{6}([0-9a-fA-F]{2})?)/g;

// Keep old capitalization of hex codes behavior.
StyleDictionary.registerTransform({
  name: "bcds/color/uppercase",
  type: "value",
  filter: function (token) {
    return token.type === "color";
  },
  transform: function (token) {
    return hexColorRegex.test(token)
      ? token.original.value.toUpperCase()
      : token.original.value;
  },
});

// Matches dimension rules with leading "0" characters like "0px"
const leadingZeroValueRegex = /^0(?:em||px|rem|%)$/g;

// Keep old "0" dimension value behavior where units are left off the "0" token.
StyleDictionary.registerTransform({
  name: "bcds/css/size/zero",
  type: "value",
  filter: function (token) {
    return token.type === "dimension";
  },
  transform: function (token) {
    return leadingZeroValueRegex.test(token) ? "0" : token.original.value;
  },
});

StyleDictionary.registerTransform({
  name: "bcds/js/size/zero",
  type: "value",
  filter: function (token) {
    return token.type === "dimension";
  },
  transform: function (token) {
    // `layout.margin.none` was already using "0rem" so handle it specifically.
    if (["layoutMarginNone", "bcdsLayoutMarginNone"].includes(token.name)) {
      return "0rem";
    }

    return token.value === "0rem" ? "0" : token.value;
  },
});

// Keep old "italic" font v3 values.
// Without this transformation, the order of the `font` shorthand tokens for the
// italic font faces has its first two values flipped. The new default format
// with Style Dictionary v4 and sd-transforms v1 is better - it matches the CSS
// `font` shorthand: https://developer.mozilla.org/en-US/docs/Web/CSS/font
StyleDictionary.registerTransform({
  name: "bcds/typography/italic",
  type: "value",
  transitive: true,
  filter: function (token) {
    if (token.type === "typography" && token?.name?.includes("Italic")) {
      return true;
    }

    return false;
  },
  transform: function (token) {
    // `token` ex: `italic 400 1rem/1.688rem 'BC Sans'`
    const arr = token.value.split(" ");

    let newArr = [];

    arr.forEach((chunk, index) => {
      if (index === 1) {
        newArr.unshift(chunk);
      } else {
        newArr.push(chunk);
      }
    });

    // Returns ex: `400 italic 1rem/1.688rem 'BC Sans'`
    return newArr.join(" ");
  },
});

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
        "bcds/typography/italic",
        "bcds/color/uppercase",
        "bcds/css/size/zero",
        "ts/descriptionToComment",
        "ts/size/px",
        "ts/opacity",
        "ts/size/lineheight",
        "ts/typography/fontWeight",
        "ts/resolveMath",
        "ts/size/css/letterspacing",
        "ts/color/css/hexrgba",
        "ts/color/modifiers",
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
        "bcds/typography/italic",
        "bcds/color/uppercase",
        "bcds/css/size/zero",
        "ts/descriptionToComment",
        "ts/size/px",
        "ts/opacity",
        "ts/size/lineheight",
        "ts/typography/fontWeight",
        "ts/resolveMath",
        "ts/size/css/letterspacing",
        "ts/color/css/hexrgba",
        "ts/color/modifiers",
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
      transformGroup: "tokens-studio",
      transforms: [
        "bcds/typography/italic",
        "bcds/color/uppercase",
        "bcds/js/size/zero",
      ],
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
      transforms: [
        "bcds/typography/italic",
        "bcds/color/uppercase",
        "bcds/js/size/zero",
      ],
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
      transforms: [
        "bcds/typography/italic",
        "bcds/color/uppercase",
        "bcds/js/size/zero",
      ],
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
      transforms: [
        "bcds/typography/italic",
        "bcds/color/uppercase",
        "bcds/js/size/zero",
      ],
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
      transforms: [
        "bcds/typography/italic",
        "bcds/color/uppercase",
        "bcds/css/size/zero",
        "name/kebab",
      ],
      buildPath: "build/scss/",
      files: [
        {
          destination: "variables.scss",
          format: "scss/map-deep",
          filter: (t) => (
            /* strip metadata */
            !(['$themes', '$metadata'].includes(t))
          ),
          options: {
            "mapName": "bcds",
            "themeable": false
          }
        },
      ],
    },
    scssPrefixed: {
      transformGroup: "tokens-studio",
      transforms: [
        "bcds/typography/italic",
        "bcds/color/uppercase",
        "bcds/css/size/zero",
        "name/kebab",
      ],
      buildPath: "build/scss-prefixed/",
      prefix: "bcds",
      files: [
        {
          destination: "variables.scss",
          format: "scss/map-deep",
          filter: (t) => (
            /* strip metadata */
            !(['$themes', '$metadata'].includes(t))
          ),
          options: {
            "mapName": "bcds",
            "themeable": false
          }
        },
      ],
    },
  },
});

await sd.cleanAllPlatforms();
await sd.buildAllPlatforms();
