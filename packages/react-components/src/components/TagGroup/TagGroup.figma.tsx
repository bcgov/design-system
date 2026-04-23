// This file is used to map component props to Figma properties via Code Connect
import TagGroup from "./TagGroup";
import figma from "@figma/code-connect";

figma.connect(
  TagGroup,
  "https://www.figma.com/design/6BAmnRmL9FXxY2bkkSYiQj/B.C.-Design-System?node-id=3970%3A2221",
  {
    imports: [
      "import { TagGroup, TagList, Tag } from '@bcgov/design-system-react-components';",
    ],
    props: {
      label: figma.nestedProps("Label", {
        text: figma.textContent("Label"),
      }),
      description: figma.textContent("Description"),
      errorMessage: figma.textContent("Error text"),
      children: figma.children("*"),
      // No matching props could be found for these Figma properties:
      // "closeable": figma.boolean('Closeable')
    },
    example: (props) => (
      <TagGroup
        label={props.label.text}
        description={props.description}
        errorMessage={props.errorMessage}
      >
        {props.children}
      </TagGroup>
    ),
  }
);
