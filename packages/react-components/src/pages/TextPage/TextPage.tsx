import { Heading, Text } from "@/components";

export default function TextPage() {
  return (
    <>
      <Heading level={2}>Headings and text</Heading>
      <Text>
        The Heading and Text components provide an easy way to populate sections
        of content. They implement the B.C. Design System's typescale.
      </Text>
      <Heading level={3}>Headings</Heading>
      <Text>
        The Heading component supports standard HTML heading levels (H1 to H6).
      </Text>
      <Heading level={3}>Text size</Heading>
      <Text>The text component supports 3 different sizes: </Text>
      <ul>
        <li>
          <Text size="large">Large</Text>
        </li>
        <li>
          <Text size="medium">Medium (default)</Text>
        </li>
        <li>
          <Text size="small">Small</Text>
        </li>
      </ul>
      <Heading level={4}>Text styling</Heading>
      <Text>
        The text component also supports standard text styling, like <b>bold</b>{" "}
        and <i>italic</i>.
      </Text>
      <Heading level={4}>Text colour</Heading>
      <Text>You can modify the colour of text via prop:</Text>
      <ul>
        <li>
          <Text color="primary">Primary (default)</Text>
        </li>
        <li>
          <Text color="secondary">Secondary</Text>
        </li>
        <li>
          <Text color="disabled">Disabled</Text>
        </li>
        <li>
          <Text color="danger">Danger</Text>
        </li>
      </ul>
      <Text>
        Inverted versions of the primary and secondary colours for use on dark
        backgrounds are also supported.
      </Text>
    </>
  );
}
