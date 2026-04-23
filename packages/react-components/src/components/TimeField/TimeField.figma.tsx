// This file is used to map component props to Figma properties via Code Connect
import TimeField from "./TimeField";
import figma from "@figma/code-connect";

figma.connect(
  TimeField,
  "https://www.figma.com/design/6BAmnRmL9FXxY2bkkSYiQj/B.C.-Design-System?node-id=19285%3A4805",
  {
    imports: [
      "import { TimeField } from '@bcgov/design-system-react-components';",
    ],
    props: {
      size: figma.enum("Size", {
        Medium: "medium",
        Small: "small",
      }),
      hideTimeZone: figma.boolean("Timezone", {
        false: true,
        true: false,
      }),
      hourCycle: figma.nestedProps("Time field/time value group", {
        value: figma.boolean("12 Hour cycle?", {
          true: 12,
          false: 24,
        }),
      }),
      granularity: figma.nestedProps("Time field/time value group", {
        value: figma.enum("Granularity", {
          Hour: "hour",
          Minute: "minute",
          Second: "second",
        }),
      }),
      label: figma.nestedProps("Label", { text: figma.string("Label text") }),
      description: figma.boolean("Description", {
        true: figma.textContent("Description"),
        false: undefined,
      }),
      isRequired: figma.nestedProps("Label", {
        value: figma.boolean("Required"),
      }),
      isDisabled: figma.enum("State", {
        Disabled: true,
      }),
      errorMessage: figma.enum("State", {
        Error: figma.textContent("Error Message"),
      }),
      // No matching props could be found for these Figma properties:
      // "showLabel": figma.boolean('Show label'),
    },
    example: (props) => (
      <TimeField
        size={props.size}
        label={props.label.text}
        description={props.description}
        granularity={props.granularity.value}
        hourCycle={props.hourCycle.value}
        hideTimeZone={props.hideTimeZone}
        isRequired={props.isRequired.value}
        isDisabled={props.isDisabled}
        errorMessage={props.errorMessage}
      />
    ),
  }
);
