import { defineConfig, type Plugin } from "vite";
import react from "@vitejs/plugin-react";
import cssInjectedByJs from "vite-plugin-css-injected-by-js";
import path from "path";
import { isExternal } from "./build.externals.ts";

const dirname = import.meta.dirname;

// Prepends `"use client"` to every chunk. Runs after the CSS injection plugin
// so the directive stays the first statement, as React requires.
function prependUseClientDirective(): Plugin {
  return {
    name: "use-client-directive",
    enforce: "post",
    generateBundle(_options, bundle) {
      for (const chunk of Object.values(bundle)) {
        if (chunk.type === "chunk") {
          chunk.code = `"use client";\n${chunk.code}`;
        }
      }
    },
  };
}

// Library build. Dev server, Storybook and tests use `vite.config.ts`.
export default defineConfig({
  resolve: {
    alias: {
      "@": path.resolve(dirname, "./src"),
    },
  },
  plugins: [
    react(),
    // Keep CSS injected at runtime from the JS, matching the previous Rollup
    // output, so consumers don't need to import a stylesheet.
    cssInjectedByJs(),
    prependUseClientDirective(),
  ],
  build: {
    outDir: "dist",
    emptyOutDir: true,
    sourcemap: true,
    minify: false,
    copyPublicDir: false,
    lib: {
      entry: path.resolve(dirname, "src/index.ts"),
      formats: ["es", "cjs"],
    },
    rolldownOptions: {
      external: isExternal,
      output: [
        {
          format: "es",
          dir: "dist/esm",
          entryFileNames: "[name].js",
          preserveModules: true,
          preserveModulesRoot: "src",
        },
        {
          format: "cjs",
          dir: "dist/cjs",
          entryFileNames: "[name].cjs",
          preserveModules: true,
          preserveModulesRoot: "src",
          exports: "named",
        },
      ],
    },
  },
});
