import { defineConfig } from "rolldown";
import { dts } from "rolldown-plugin-dts";

export default defineConfig({
  input: "src/index.ts",
  external: (id) => id.endsWith(".css"),
  moduleTypes: {
    ".css": "js",
  },
  output: {
    dir: "dist",
    format: "esm",
  },
  plugins: [dts({ emitDtsOnly: true })],
});
