import { appendFileSync } from "node:fs";
import path from "node:path";
import type { Reporter, TestModule } from "vitest/node";

/**
 * Summarises visual test failures by stories file, to help narrow down which
 * component caused a visual change. Files with the most failures are listed
 * first: the changed component usually has the most affected stories.
 */
export default class VisualSummaryReporter implements Reporter {
  onTestRunEnd(testModules: ReadonlyArray<TestModule>) {
    const rows = testModules
      .map((testModule) => {
        const tests = [...testModule.children.allTests()];
        return {
          name: path
            .basename(testModule.moduleId)
            .replace(/\.stories\.\w+$/, ""),
          failed: tests.filter((test) => test.result().state === "failed")
            .length,
          total: tests.length,
        };
      })
      .filter((row) => row.failed > 0)
      .sort((a, b) => b.failed - a.failed || a.name.localeCompare(b.name));

    if (rows.length === 0) return;

    const width = Math.max(...rows.map((row) => row.name.length));
    const lines = rows.map(
      (row) =>
        `  ${row.name.padEnd(width)}  ${row.failed}/${row.total} stories failed`
    );

    console.log(
      [
        "",
        "Visual changes by stories file:",
        ...lines,
        "",
        "Hint: the changed component is usually near the top. Files further",
        "down may just contain it. Diff images are in .vitest/attachments/.",
        "",
      ].join("\n")
    );

    // In GitHub Actions, also show the table on the job's summary page
    const summaryPath = process.env.GITHUB_STEP_SUMMARY;
    if (summaryPath) {
      const runUrl = `${process.env.GITHUB_SERVER_URL}/${process.env.GITHUB_REPOSITORY}/actions/runs/${process.env.GITHUB_RUN_ID}`;
      appendFileSync(
        summaryPath,
        [
          "### Visual changes by stories file",
          "",
          "| Stories file | Failed |",
          "| --- | --- |",
          ...rows.map((row) => `| ${row.name} | ${row.failed}/${row.total} |`),
          "",
          "The changed component is usually near the top. Files further down may just contain it.",
          `Reference, actual and diff images are in the \`visual-diffs\` artifact on the [run page](${runUrl}).`,
          "If the change is intentional, run `npm run test-visual:update` and commit the updated screenshots.",
          "",
        ].join("\n")
      );
    }
  }
}
