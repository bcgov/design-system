import ProgressBar from "./ProgressBar";
import figma from "@figma/code-connect";

figma.connect(
  ProgressBar,
  "https://www.figma.com/design/6BAmnRmL9FXxY2bkkSYiQj/B.C.-Design-System?node-id=16649%3A4759",
  {
    imports: [
      "import { ProgressBar } from '@bcgov/design-system-react-components';",
    ],
    props: {
      size: figma.enum("Track Size", {
        Small: "small",
        Medium: "medium",
        Large: "large",
      }),
      valueLabel: figma.boolean("Show label & value", {
        true: figma.string("Label"),
        false: undefined,
      }),
      value: figma.string("Value"),
      isIndeterminate: figma.enum("Style", {
        Indeterminate: true,
      }),
      // No matching props could be found for these Figma properties:
      // "showLabelValue": figma.boolean('Show label & value'),
      // "orientation": figma.enum('Orientation', {
      //   "Horizontal": "horizontal",
      //   "Vertical": "vertical"
      // }),
      // "color": figma.enum('Color', {
      //   "Default": "default",
      //   "Over Background": "over-background"
      // })
    },
    example: (props) => (
      <ProgressBar
        size={props.size}
        valueLabel={props.valueLabel}
        value={Number(props.value)}
        isIndeterminate={props.isIndeterminate}
      />
    ),
  }
);
