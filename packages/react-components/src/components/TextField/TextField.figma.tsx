import TextField from "./TextField";
import figma from "@figma/code-connect";

figma.connect(
  TextField,
  "https://www.figma.com/design/6BAmnRmL9FXxY2bkkSYiQj/B.C.-Design-System?node-id=3649%3A14334",
  {
    imports: [
      "import { TextField } from '@bcgov/design-system-react-components'",
    ],
    props: {
      size: figma.enum("Size", {
        Medium: "medium",
        Small: "small",
      }),
      label: figma.nestedProps("Title", { text: figma.string("Label text") }),
      description: figma.string("Description text"),
      errorMessage: figma.enum("State", {
        Error: figma.textContent("Error Message"),
      }),
      iconLeft: figma.boolean("Show left Icon", {
        true: figma.instance("Left icon placeholder"),
        false: undefined,
      }),
      iconRight: figma.boolean("Show right icon", {
        true: figma.instance("Right icon placeholder"),
        false: undefined,
      }),
      isRequired: figma.nestedProps("Title", {
        value: figma.boolean("Required"),
      }),
      isDisabled: figma.enum("State", {
        Disabled: true,
      }),
      // No matching props could be found for these Figma properties:
      // "showLabel": figma.boolean('Show label'),
      // "prefix": figma.boolean('Prefix'),
      // "suffix": figma.boolean('Suffix')
    },
    example: (props) => (
      <TextField
        size={props.size}
        label={props.label.text}
        description={props.description}
        iconLeft={props.iconLeft}
        iconRight={props.iconRight}
        isRequired={props.isRequired.value}
        isDisabled={props.isDisabled}
        errorMessage={props.errorMessage}
      />
    ),
  }
);
