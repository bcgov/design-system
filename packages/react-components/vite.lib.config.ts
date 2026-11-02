import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import cssInjectedByJs from "vite-plugin-css-injected-by-js";
import path from "path";
import { isExternal } from "./build.externals.ts";

const dirname = import.meta.dirname;

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
    // output, so consumers don't need to import a stylesheet. The code is
    // appended to the entry so the `"use client"` banner stays first.
    cssInjectedByJs({ topExecutionPriority: false }),
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
          banner: '"use client";',
        },
        {
          format: "cjs",
          dir: "dist/cjs",
          entryFileNames: "[name].cjs",
          preserveModules: true,
          preserveModulesRoot: "src",
          banner: '"use client";',
          exports: "named",
        },
      ],
    },
  },
});
