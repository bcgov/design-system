// This file is used to map component props to Figma properties via Code Connect
import Callout from "./Callout";
import figma from "@figma/code-connect";

figma.connect(
  Callout,
  "https://www.figma.com/design/6BAmnRmL9FXxY2bkkSYiQj/B.C.-Design-System?node-id=7782%3A3976",
  {
    imports: [
      "import { Callout } from '@bcgov/design-system-react-components';",
    ],
    props: {
      variant: figma.enum("Color", {
        "Light gray": "lightGrey",
        "Light blue": "lightBlue",
        "Light gold": "lightGold",
        Black: "Black",
        Gray: "Grey",
        Blue: "Blue",
      }),
      isLeftBorderDisabled: figma.boolean("Stroke", {
        false: true,
        true: false,
      }),
      title: figma.textContent("Heading text"),
      description: figma.textContent("Body text"),
      // No matching props could be found for these Figma properties:
      // "heading": figma.boolean('Heading'),
      // "actions": figma.boolean('Actions'),
      // "primary": figma.boolean('Primary'),
      // "secondary": figma.boolean('Secondary'),
    },
    example: (props) => (
      <Callout
        variant={props.variant}
        title={props.title}
        description={props.description}
        isLeftBorderDisabled={props.isLeftBorderDisabled}
      />
    ),
  }
);
