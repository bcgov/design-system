// This file is used to map component props to Figma properties via Code Connect
import NumberField from "./NumberField";
import figma from "@figma/code-connect";

figma.connect(
  NumberField,
  "https://www.figma.com/design/6BAmnRmL9FXxY2bkkSYiQj/B.C.-Design-System?node-id=14421%3A4311",
  {
    imports: [
      "import { NumberField } from '@bcgov/design-system-react-components';",
    ],
    props: {
      size: figma.enum("Size", {
        Small: "small",
        Medium: "medium",
      }),
      label: figma.nestedProps("Label", {
        text: figma.string("Label text"),
      }),
      description: figma.nestedProps("Description", {
        text: figma.textContent("Description"),
      }),
      isRequired: figma.nestedProps("Label", {
        value: figma.boolean("Required"),
      }),
      isDisabled: figma.enum("State", {
        Disabled: true,
      }),
      isReadOnly: figma.enum("State", {
        "Read only": true,
      }),
      // No matching props could be found for these Figma properties:
      // "units": figma.boolean('Units'),
      // "currency": figma.boolean('Currency'),
      // "decimal": figma.boolean('Decimal'),
      // "description": figma.boolean('Description'),
      // "label": figma.boolean('Label'),
      // "value": figma.boolean('Value')
    },
    example: (props) => (
      <NumberField
        size={props.size}
        label={props.label.text}
        description={props.description.text}
        isRequired={props.isRequired.value}
        isDisabled={props.isDisabled}
        isReadOnly={props.isReadOnly}
      />
    ),
  }
);
