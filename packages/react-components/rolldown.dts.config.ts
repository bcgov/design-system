import { defineConfig, type Plugin } from "rolldown";
import { dts } from "rolldown-plugin-dts";

// Stylesheet imports have no types, so drop them from the declarations.
function ignoreCss(): Plugin {
  return {
    name: "ignore-css",
    resolveId(id) {
      if (id.endsWith(".css")) return { id: "\0ignored-css", external: false };
    },
    load(id) {
      if (id === "\0ignored-css") return "";
    },
  };
}

// Bundles the public type declarations into a single `dist/index.d.ts`.
export default defineConfig({
  input: { index: "src/index.ts" },
  external: (id) => !id.endsWith(".css") && /^(?!\.|\/|@\/)/.test(id),
  plugins: [
    ignoreCss(),
    dts({
      // `isolatedDeclarations` in this tsconfig makes the plugin use Oxc.
      tsconfig: "tsconfig.build.json",
      emitDtsOnly: true,
    }),
  ],
  output: {
    dir: "dist",
  },
});
