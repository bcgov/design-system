import CheckboxGroup from "./CheckboxGroup";
import figma from "@figma/code-connect";

figma.connect(
  CheckboxGroup,
  "https://www.figma.com/design/6BAmnRmL9FXxY2bkkSYiQj/B.C.-Design-System?node-id=6009%3A993",
  {
    imports: [
      "import { CheckboxGroup, Checkbox } from '@bcgov/design-system-react-components';",
    ],
    props: {
      orientation: figma.enum("Orientation", {
        Horizontal: "horizontal",
        Vertical: "vertical",
      }),
      label: figma.textContent("Label"), // TODO: investigate why this isn't working as expected
      description: figma.textContent("Description"),
      children: figma.children("Checkbox*"),
      isInvalid: figma.boolean("Error text"),
      errorMessage: figma.textContent("Error text"),
    },
    example: (props) => (
      <CheckboxGroup
        label={props.label}
        description={props.description}
        orientation={props.orientation}
        isInvalid={props.isInvalid}
        errorMessage={props.errorMessage}
      >
        {props.children}
      </CheckboxGroup>
    ),
  }
);
