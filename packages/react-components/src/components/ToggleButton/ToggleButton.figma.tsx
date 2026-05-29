// This file is used to map component props to Figma properties via Code Connect
import ToggleButton from "./ToggleButton";
import figma from "@figma/code-connect";

figma.connect(
  ToggleButton,
  "https://www.figma.com/design/6BAmnRmL9FXxY2bkkSYiQj/B.C.-Design-System?node-id=14991%3A13794",
  {
    imports: [
      "import { ToggleButton } from '@bcgov/design-system-react-components';",
    ],
    props: {
      size: figma.enum("Size", {
        Small: "small",
        Medium: "medium",
      }),
      isIconButton: figma.boolean("Icon button?"),
      isSelected: figma.boolean("Selected"),
      isDisabled: figma.enum("State", {
        Disabled: true,
      }),
      children: figma.textContent("Button Text"),
      iconRight: figma.boolean("Icon right", {
        true: figma.instance("Icon right placeholder"),
        false: undefined,
      }),
      iconLeft: figma.boolean("Icon left", {
        true: figma.instance("Icon left placeholder"),
        false: undefined,
      }),
      iconButtonPlaceholder: figma.instance("Icon button placeholder"),
    },
    example: (props) => (
      <ToggleButton
        size={props.size}
        isIconButton={props.isIconButton}
        isSelected={props.isSelected}
        isDisabled={props.isDisabled}
      >
        {props.iconLeft}
        {props.children}
        {props.iconRight}
      </ToggleButton>
    ),
  }
);
