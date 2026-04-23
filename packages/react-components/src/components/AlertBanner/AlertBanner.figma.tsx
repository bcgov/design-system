// This file is used to map component props to Figma properties via Code Connect
import AlertBanner from "./AlertBanner";
import figma from "@figma/code-connect";

figma.connect(
  AlertBanner,
  "https://www.figma.com/design/6BAmnRmL9FXxY2bkkSYiQj/B.C.-Design-System?node-id=7782%3A3193",
  {
    imports: [
      "import { AlertBanner } from '@bcgov/design-system-react-components';",
    ],
    props: {
      variant: figma.enum("Type", {
        Info: "info",
        Success: "success",
        Warning: "warning",
        Danger: "danger",
        Black: "black",
      }),
      isIconHidden: figma.boolean("Icon", {
        false: true,
        true: false,
      }),
      isCloseable: figma.boolean("Close"),
      children: figma.textContent("Alert text"),
      // No matching props could be found for these Figma properties:
      // "action": figma.boolean('Action'),
      // customIcon
    },
    example: (props) => (
      <AlertBanner
        variant={props.variant}
        isIconHidden={props.isIconHidden}
        isCloseable={props.isCloseable}
      >
        {props.children}
      </AlertBanner>
    ),
  }
);
