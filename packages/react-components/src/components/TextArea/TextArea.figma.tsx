// This file is used to map component props to Figma properties via Code Connect
import TextArea from "./TextArea";
import figma from "@figma/code-connect";

figma.connect(
  TextArea,
  "https://www.figma.com/design/6BAmnRmL9FXxY2bkkSYiQj/B.C.-Design-System?node-id=4157%3A2531",
  {
    imports: [
      "import { TextArea } from '@bcgov/design-system-react-components';",
    ],
    props: {
      label: figma.nestedProps("Label", { text: figma.string("Label text") }),
      description: figma.textContent("Description"),
      errorMessage: figma.enum("State", {
        Error: figma.textContent("Error text"),
      }),
      isRequired: figma.nestedProps("Label", {
        value: figma.boolean("Required"),
      }),
      isDisabled: figma.enum("State", {
        Disabled: true,
      }),
      // No matching props could be found for these Figma properties:
      // "showCount": figma.boolean('Show count'),
      // "scrollable": figma.boolean('Scrollable')
    },
    example: (props) => (
      <TextArea
        label={props.label.text}
        description={props.description}
        isRequired={props.isRequired.value}
        isDisabled={props.isDisabled}
        errorMessage={props.errorMessage}
      />
    ),
  }
);
