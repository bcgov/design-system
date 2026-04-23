import DatePicker from "./DatePicker";
import figma from "@figma/code-connect";

figma.connect(
  DatePicker,
  "https://www.figma.com/design/6BAmnRmL9FXxY2bkkSYiQj/B.C.-Design-System?node-id=15865%3A4285",
  {
    imports: [
      "import { DatePicker } from '@bcgov/design-system-react-components';",
    ],
    props: {
      size: figma.enum("Size", {
        Small: "small",
        Medium: "medium",
      }),
      hideTimeZone: figma.boolean("Timezone", {
        false: true,
        true: false,
      }),
      isDisabled: figma.enum("State", {
        Disabled: true,
      }),
      isReadOnly: figma.enum("State", {
        "Read only": true,
      }),
      isCalendarDisabled: figma.boolean("Show calendar", {
        false: true,
        true: false,
      }),
      showLabel: figma.boolean("Show label"),
      label: figma.nestedProps("Title", {
        text: figma.string("Label text"),
      }),
      description: figma.nestedProps("Description", {
        text: figma.textContent("Description"),
      }),
      showFormatHelpText: figma.nestedProps("Description", {
        value: figma.enum("Mode", {
          "Format only": true,
          "Format & description": true,
        }),
      }),
      isRequired: figma.nestedProps("Title", {
        value: figma.boolean("Required"),
      }),
      granularity: figma.enum("Time", {
        true: "minute",
        false: "day",
      }),
    },
    example: (props) => (
      <DatePicker
        size={props.size}
        granularity={props.granularity}
        hideTimeZone={props.hideTimeZone}
        isRequired={props.isRequired.value}
        isDisabled={props.isDisabled}
        isReadOnly={props.isReadOnly}
        label={props.label.text}
        description={props.description.text}
        showFormatHelpText={props.showFormatHelpText.value}
      />
    ),
  }
);
