import { exec } from "child_process";
import { existsSync } from "fs";
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
  ];

  for (const file of outputFiles) {
    const filePath = join(process.cwd(), file);
    assert.ok(existsSync(filePath), `Expected file ${file} to exist`);
  }
});
