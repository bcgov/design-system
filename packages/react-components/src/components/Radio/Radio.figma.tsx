// This file is used to map component props to Figma properties via Code Connect
import Radio from "./Radio";
import figma from "@figma/code-connect";

figma.connect(
  Radio,
  "https://www.figma.com/design/6BAmnRmL9FXxY2bkkSYiQj/B.C.-Design-System?node-id=6009%3A2633",
  {
    imports: ["import { Radio } from '@bcgov/design-system-react-components';"],
    props: {
      children: figma.children("*"),
      label: figma.nestedProps("Label", {
        text: figma.textContent("Label"),
      }),
      isDisabled: figma.enum("State", {
        Disabled: true,
      }),
      // No matching props could be found for these Figma properties:
      // "active": figma.boolean('Active')
    },
    example: (props) => (
      <Radio value={props.label.text} isDisabled={props.isDisabled}>
        {props.children}
      </Radio>
    ),
  }
);
