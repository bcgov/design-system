import { defineConfig, type Plugin } from "vite";
import react from "@vitejs/plugin-react";
import cssInjectedByJs from "vite-plugin-css-injected-by-js";
import path from "path";
import packageJson from "./package.json" with { type: "json" };

const dirname = import.meta.dirname;
const srcDir = path.resolve(dirname, "src");

// Every dependency and peer dependency (and their subpaths) is left for the
// consumer's package manager to install, rather than bundled into the library.
const externalPackages = [
  ...Object.keys(packageJson.dependencies),
  ...Object.keys(packageJson.peerDependencies),
  // Bundled, as before: it's small and its `/js` subpath is a directory
  // import that Node's ESM resolver rejects.
].filter((name) => name !== "@bcgov/design-tokens");
const externalPattern = new RegExp(`^(${externalPackages.join("|")})(/.*)?$`);
// CSS is always bundled (and injected at runtime), even from dependencies such
// as `@bcgov/design-tokens`, so consumers never need to import a stylesheet.
const external = (id: string) =>
  !id.endsWith(".css") && externalPattern.test(id);

// Name each output file after its source module (e.g. `components/Button/Button.js`).
// Without this, the stripped `.css` imports claim the names first and the
// components get a numeric suffix (`Button2.js`).
const fileNameFromSource =
  (extension: string) =>
  ({ facadeModuleId, name }: { facadeModuleId: string | null; name: string }) =>
    facadeModuleId?.startsWith(srcDir)
      ? path
          .relative(srcDir, facadeModuleId)
          .replace(/\.(tsx?|jsx?)$/, `.${extension}`)
      : `${name}.${extension}`;

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
      external,
      output: [
        {
          format: "es",
          dir: "dist/esm",
          entryFileNames: fileNameFromSource("js"),
          preserveModules: true,
          preserveModulesRoot: "src",
        },
        {
          format: "cjs",
          dir: "dist/cjs",
          entryFileNames: fileNameFromSource("cjs"),
          preserveModules: true,
          preserveModulesRoot: "src",
          exports: "named",
        },
      ],
    },
  },
});
