import { exec } from "child_process";
import { existsSync, readFileSync } from "fs";
import { test } from "node:test";
import assert from "node:assert";
import { join } from "path";

test("build-output.js should complete without errors", async () => {
  try {
    await new Promise((resolve, reject) => {
      // Execute the `build` script from package.json, removing the build
      // directory contents before running build-output.js.
      exec(
        "rm -rf build/cjs* && rm -rf build/css* && rm -rf build/js* && node build-output.js",
        (error, stdout, stderr) => {
          // If there was an error, the test should fail.
          if (error) {
            console.error("Error executing build-output.js:", stderr);
            return reject(new Error("build-output.js threw an error"));
          }
          console.log("build-output.js executed successfully:", stdout);
          resolve();
        }
      );
    });
    assert.ok(true);
  } catch (error) {
    assert.fail(error.message);
  }
});

test("output files should exist after running build-output.js", async () => {
  const outputFiles = [
    "build/css/variables.css",
    "build/css-prefixed/variables.css",
    "build/js/index.js",
    "build/js/index.d.ts",
    "build/js-prefixed/index.js",
    "build/js-prefixed/index.d.ts",
    "build/cjs/index.js",
    "build/cjs/index.d.ts",
    "build/cjs-prefixed/index.js",
    "build/cjs-prefixed/index.d.ts",
    "build/scss/variables.scss",
  ];

  for (const file of outputFiles) {
    const filePath = join(process.cwd(), file);
    assert.ok(existsSync(filePath), `Expected file ${file} to exist`);
  }
});

test("theme.blue.100 should be present in all output files", async () => {
  const checks = [
    {
      file: "build/css/variables.css",
      token: "--theme-blue-100: #013366;",
    },
    {
      file: "build/css-prefixed/variables.css",
      token: "--bcds-theme-blue-100: #013366;",
    },
    {
      file: "build/js/index.js",
      token: 'export const themeBlue100 = "#013366";',
    },
    {
      file: "build/js/index.d.ts",
      token: "export const themeBlue100 : string;",
    },
    {
      file: "build/js-prefixed/index.js",
      token: 'export const bcdsThemeBlue100 = "#013366";',
    },
    {
      file: "build/js-prefixed/index.d.ts",
      token: "export const bcdsThemeBlue100 : string;",
    },
    {
      file: "build/cjs/index.js",
      token: '"themeBlue100": "#013366"',
    },
    {
      file: "build/cjs/index.d.ts",
      token: "export const themeBlue100 : string;",
    },
    {
      file: "build/cjs-prefixed/index.js",
      token: '"bcdsThemeBlue100": "#013366"',
    },
    {
      file: "build/cjs-prefixed/index.d.ts",
      token: "export const bcdsThemeBlue100 : string;",
    },
  ];

  for (const { file, token } of checks) {
    const filePath = join(process.cwd(), file);
    const fileContent = readFileSync(filePath, "utf-8");
    assert.ok(
      fileContent.includes(token),
      `Expected token "${token}" to be present in file ${file}`
    );
  }
});
