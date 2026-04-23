import Switch from "./Switch";
import figma from "@figma/code-connect";

figma.connect(
  Switch,
  "https://www.figma.com/design/6BAmnRmL9FXxY2bkkSYiQj/B.C.-Design-System?node-id=5146%3A248",
  {
    imports: [
      "import { Switch } from '@bcgov/design-system-react-components';",
    ],
    props: {
      children: figma.nestedProps("Label", {
        text: figma.textContent("Label"),
      }),
      labelPosition: figma.enum("Layout", {
        "Label before": "left",
        "Label after": "right",
      }),
      isSelected: figma.boolean("Active"),
      isDisabled: figma.enum("State", {
        Disabled: true,
      }),
    },
    example: (props) => (
      <Switch
        isSelected={props.isSelected}
        isDisabled={props.isDisabled}
        labelPosition={props.labelPosition}
      >
        {props.children.text}
      </Switch>
    ),
  }
);
