import { exec } from "child_process";
import { test } from "node:test";
import assert from "node:assert";

test("build-output.js should complete without errors", async () => {
  try {
    await new Promise((resolve, reject) => {
      // Execute the build script using Node.js
      exec("node build-output.js", (error, stdout, stderr) => {
        // If there was an error, the test should fail
        if (error) {
          console.error("Error executing build-output.js:", stderr);
          return reject(new Error("build-output.js threw an error"));
        }
        console.log("build-output.js executed successfully:", stdout);
        resolve();
      });
    });
    assert.ok(true);
  } catch (error) {
    assert.fail(error.message);
  }
});
