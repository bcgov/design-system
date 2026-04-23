import ProgressCircle from "./ProgressCircle";
import figma from "@figma/code-connect";

figma.connect(
  ProgressCircle,
  "https://www.figma.com/design/6BAmnRmL9FXxY2bkkSYiQj/B.C.-Design-System?node-id=16696%3A837",
  {
    imports: [
      "import { ProgressCircle } from '@bcgov/design-system-react-components';",
    ],
    props: {
      size: figma.enum("Track Size", {
        Small: "small",
        Medium: "medium",
        Large: "large",
      }),
      valueLabel: figma.boolean("Description", {
        // TODO: not currently working
        true: figma.textContent("Progress message"),
        false: undefined,
      }),
      isIndeterminate: figma.enum("Style", {
        Indeterminate: true,
      }),
      // No matching props could be found for these Figma properties:
      //value: figma.string("Value")
      // "description": figma.boolean('Description'),
      // "color": figma.enum('Color', {
      //   "Default": "default",
      //   "Over Background": "over-background"
      // })
    },
    example: (props) => (
      <ProgressCircle
        size={props.size}
        valueLabel={props.valueLabel}
        isIndeterminate={props.isIndeterminate}
      />
    ),
  }
);
