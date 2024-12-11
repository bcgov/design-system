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
        The text component also supports standard text styling, like{" "}
        <b>bolding</b>, <i>italics</i> and{" "}
        <b>
          <i>bold italics</i>
        </b>
        .
      </Text>
    </>
  );
}
