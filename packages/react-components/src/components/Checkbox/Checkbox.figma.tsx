import Checkbox from "./Checkbox";
import figma from "@figma/code-connect";

figma.connect(
  Checkbox,
  "https://www.figma.com/design/6BAmnRmL9FXxY2bkkSYiQj/B.C.-Design-System?node-id=6009%3A878",
  {
    imports: [
      "import { Checkbox } from '@bcgov/design-system-react-components';",
    ],
    props: {
      isSelected: figma.enum("State", {
        Inactive: false,
        Active: true,
      }),
      isIndeterminate: figma.enum("Selection", {
        Indeterminate: true,
      }),
      isDisabled: figma.enum("State", {
        Disabled: true,
      }),
      label: figma.nestedProps("Label", {
        text: figma.string("Label text"),
        required: figma.boolean("Required"),
      }),
    },
    example: (props) => (
      <Checkbox
        isIndeterminate={props.isIndeterminate}
        isSelected={props.isSelected}
        isDisabled={props.isDisabled}
        isRequired={props.label.required} // TODO: this is not working as expected
      >
        {props.label.text}
      </Checkbox>
    ),
  }
);
