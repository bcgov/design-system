#!/usr/bin/env node

import fs from "node:fs";
import path from "node:path";
import process from "node:process";
import { parseArgs } from "node:util";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/* CLI flags */
const { values } = parseArgs({
  args: process.argv.slice(2),
  options: {
    cwd: { type: "string" },
  },
  strict: true,
  allowPositionals: true,
});

/* Create agent files at root of user's repository */
function findGitRoot(startDir) {
  let dir = path.resolve(startDir);

  while (true) {
    if (fs.existsSync(path.join(dir, ".git"))) {
      return dir;
    }

    const parent = path.dirname(dir);
    if (parent === dir) {
      return null;
    }

    dir = parent;
  }
}

/* User can override file creation location with --cwd flag */
const cliCwd = values.cwd;
const repoRoot = path.resolve(
  cliCwd || findGitRoot(process.cwd()) || process.cwd()
);

const templateRoot = path.join(__dirname, "..", "templates", "copilot");

function readTemplate(fileName) {
  return fs.readFileSync(path.join(templateRoot, fileName), "utf8");
}

/* Source content for generated files */
const instructionsContent = readTemplate("copilot-instructions.md");
const skillContent = readTemplate("design-system.skill.md");

const targets = [
  {
    file: path.join(repoRoot, ".github", "copilot-instructions.md"),
    content: instructionsContent,
    label: "GitHub Copilot instructions",
  },
  {
    file: path.join(
      repoRoot,
      ".github",
      "instructions",
      "design-system.instructions.md"
    ),
    content: instructionsContent,
    label: "design system instructions",
  },
  {
    file: path.join(repoRoot, ".github", "agents", "bc-design-system.agent.md"),
    content: `---\nname: bc-design-system\ndescription: Use the BC Gov design system for user interface work\n---\n\n${instructionsContent}`,
    label: "GitHub Copilot agent definition",
  },
  {
    file: path.join(
      repoRoot,
      ".github",
      "chatmodes",
      "bc-design-system.chatmode.md"
    ),
    content: `---\nmode: agent\n---\n\n${instructionsContent}`,
    label: "Copilot chat mode",
  },
  {
    file: path.join(repoRoot, ".agents", "skills", "setup-design-system.md"),
    content: skillContent,
    label: "agent skill",
  },
];

let wroteCount = 0;

/* Do not overwrite user's existing config files */
for (const target of targets) {
  fs.mkdirSync(path.dirname(target.file), { recursive: true });

  if (fs.existsSync(target.file)) {
    console.log(
      `Skipping existing ${target.label}: ${path.relative(repoRoot, target.file)}`
    );
    continue;
  }

  fs.writeFileSync(target.file, target.content, "utf8");
  wroteCount += 1;
  console.log(
    `Created ${target.label}: ${path.relative(repoRoot, target.file)}`
  );
}

if (wroteCount === 0) {
  console.log(
    "No files were created because Copilot instructions already exist in this repo."
  );
} else {
  console.log(`\nCreated ${wroteCount} Copilot setup file(s).`);
  console.log(
    "GitHub Copilot will now see these instructions in the repository root workspace."
  );
}
