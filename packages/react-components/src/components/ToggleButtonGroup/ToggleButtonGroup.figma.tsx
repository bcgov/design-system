import ToggleButtonGroup from "./ToggleButtonGroup";
import figma from "@figma/code-connect";

figma.connect(
  ToggleButtonGroup,
  "https://www.figma.com/design/6BAmnRmL9FXxY2bkkSYiQj/B.C.-Design-System?node-id=14991%3A13581",
  {
    imports: [
      "import { ToggleButtonGroup, ToggleButton } from '@bcgov/design-system-react-components';",
    ],
    props: {
      size: figma.enum("Size", {
        Small: "small",
        Medium: "medium",
      }),
      orientation: figma.enum("Orientation", {
        Horizontal: "horizontal",
        Vertical: "vertical",
      }),
      label: figma.nestedProps("Label", { text: figma.string("Label text") }),
      children: figma.children("Toggle button*"),
    },
    example: (props) => (
      <ToggleButtonGroup
        size={props.size}
        orientation={props.orientation}
        label={props.label.text}
      >
        {props.children}
      </ToggleButtonGroup>
    ),
  }
);
