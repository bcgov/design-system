import packageJson from "./package.json" with { type: "json" };

// Dependencies and peer dependencies are left for the consumer's package
// manager to install, rather than bundled into the library.
const externalPackages = [
  ...Object.keys(packageJson.dependencies),
  ...Object.keys(packageJson.peerDependencies),
  // Bundled, as before: its CSS must be injected with the rest, and its `/js`
  // subpath is a directory import that Node's ESM resolver rejects.
].filter((name) => name !== "@bcgov/design-tokens");

export const isExternal = (id: string): boolean =>
  externalPackages.some((pkg) => id === pkg || id.startsWith(`${pkg}/`));
