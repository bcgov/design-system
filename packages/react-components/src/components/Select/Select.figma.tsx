import Select from "./Select";
import figma from "@figma/code-connect";

figma.connect(
  Select,
  "https://www.figma.com/design/6BAmnRmL9FXxY2bkkSYiQj/B.C.-Design-System?node-id=3572%3A4229",
  {
    imports: [
      "import { Select } from '@bcgov/design-system-react-components';",
    ],
    props: {
      size: figma.enum("Size", {
        Small: "small",
        Medium: "medium",
      }),
      label: figma.nestedProps("Title", { text: figma.string("Label text") }),
      description: figma.textContent("Description Text"),
      isOpen: figma.boolean("Menu opened"),
      isRequired: figma.nestedProps("Title", {
        value: figma.boolean("Required"),
      }),
      isDisabled: figma.enum("State", {
        Disabled: true,
      }),
      isInvalid: figma.enum("State", {
        Error: true,
      }),
      errorMessage: figma.textContent("Error Message"),
    },
    example: (props) => (
      <Select
        size={props.size}
        label={props.label.text}
        description={props.description}
        isOpen={props.isOpen}
        isRequired={props.isRequired.value}
        isDisabled={props.isDisabled}
        isInvalid={props.isInvalid}
        errorMessage={props.errorMessage}
      />
    ),
  }
);
