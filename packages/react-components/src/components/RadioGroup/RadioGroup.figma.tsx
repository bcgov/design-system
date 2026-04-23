import RadioGroup from "./RadioGroup";
import figma from "@figma/code-connect";

figma.connect(
  RadioGroup,
  "https://www.figma.com/design/6BAmnRmL9FXxY2bkkSYiQj/B.C.-Design-System?node-id=6009%3A2784",
  {
    imports: [
      "import { RadioGroup, Radio } from '@bcgov/design-system-react-components';",
    ],
    props: {
      orientation: figma.enum("Orientation", {
        Vertical: "vertical",
        Horizontal: "horizontal",
      }),
      label: figma.nestedProps("Label", {
        text: figma.textContent("Label"),
      }),
      description: figma.textContent("Description"),
      errorMessage: figma.textContent("Error text"),
      children: figma.children("*"),
    },
    example: (props) => (
      <RadioGroup
        orientation={props.orientation}
        label={props.label.text}
        description={props.description}
        errorMessage={props.errorMessage}
      >
        {props.children}
      </RadioGroup>
    ),
  }
);
