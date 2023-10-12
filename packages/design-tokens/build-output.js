const { registerTransforms } = require("@tokens-studio/sd-transforms");
const StyleDictionary = require("style-dictionary");

registerTransforms(StyleDictionary);

const sd = StyleDictionary.extend({
  source: ["input/tokens.json"],
  platforms: {
    js: {
      transformGroup: "tokens-studio",
      prefix: "bcds",
      buildPath: "build/js/",
      files: [
        {
          destination: "variables.js",
          format: "javascript/es6",
        },
      ],
    },
    css: {
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
      buildPath: "build/css/",
      files: [
        {
          destination: "variables.css",
          format: "css/variables",
        },
      ],
    },
  },
});

sd.cleanAllPlatforms();
sd.buildAllPlatforms();
