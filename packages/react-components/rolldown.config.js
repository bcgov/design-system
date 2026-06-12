import { defineConfig } from "rolldown";
import { createRequire } from "module";

const require = createRequire(import.meta.url);
const pkg = require("./package.json");

const STYLE_INJECT_ID = "\0style-inject";
const STYLE_INJECT_CODE = `
export function styleInject(css) {
  if (typeof document === "undefined") return;
  var head = document.head || document.getElementsByTagName("head")[0];
  var style = document.createElement("style");
  style.type = "text/css";
  head.appendChild(style);
  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}
`;

function cssInject() {
  return {
    name: "css-inject",
    resolveId(id) {
      if (id === STYLE_INJECT_ID) return id;
    },
    load(id) {
      if (id === STYLE_INJECT_ID) {
        return { code: STYLE_INJECT_CODE, map: { mappings: "" } };
      }
    },
    transform(code, id) {
      if (!id.endsWith(".css")) return null;
      const escaped = code
        .replace(/\\/g, "\\\\")
        .replace(/`/g, "\\`")
        .replace(/\$/g, "\\$");
      return {
        code: `
import { styleInject } from "${STYLE_INJECT_ID}";
var css = \`${escaped}\`;
styleInject(css);
export default css;
`,
        map: { mappings: "" },
        moduleType: "js",
      };
    },
  };
}

export default defineConfig({
  input: "src/index.ts",
  external: ["react", "react-dom", "react/jsx-runtime", "@bcgov/bc-sans"],
  platform: "browser",
  moduleTypes: {
    ".css": "js",
  },
  transform: {
    jsx: "react-jsx",
  },
  output: [
    {
      file: pkg.main,
      format: "cjs",
      sourcemap: true,
    },
    {
      file: pkg.module,
      format: "esm",
      sourcemap: true,
    },
  ],
  plugins: [cssInject()],
});
