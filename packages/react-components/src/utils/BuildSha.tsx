/**
 * Renders ", SHA: <link>" for the commit Storybook was built from, or nothing
 * when STORYBOOK_GITHUB_SHA isn't set.
 *
 * Lives outside Introduction.mdx because Storybook (and Chromatic) treat every
 * named export of an indexed MDX file as a potential story, and a `null` export
 * crashes processCSFFile ("Cannot destructure property 'story' of 'r' as it is null").
 */
export default function BuildSha() {
  const fullSha = import.meta.env?.STORYBOOK_GITHUB_SHA as string | undefined;
  if (!fullSha) return null;

  return (
    <>
      , SHA:{" "}
      <a href={`https://github.com/bcgov/design-system/commit/${fullSha}`}>
        {fullSha.substring(0, 7)}
      </a>
    </>
  );
}
