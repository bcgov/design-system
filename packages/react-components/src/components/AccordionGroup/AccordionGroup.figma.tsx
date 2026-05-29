// This file is used to map component props to Figma properties via Code Connect
import AccordionGroup from "./AccordionGroup";
import figma from "@figma/code-connect";

figma.connect(
  AccordionGroup,
  "https://www.figma.com/design/6BAmnRmL9FXxY2bkkSYiQj/B.C.-Design-System?node-id=7780%3A2135",
  {
    imports: [
      "import { AccordionGroup } from '@bcgov/design-system-react-components';",
    ],
    props: {
      title: figma.string("Accordion group label"),
      children: figma.children("*"),
      isDisabled: figma.enum("State", {
        Disabled: true,
      }),
    },
    example: (props) => (
      <AccordionGroup title={props.title} isDisabled={props.isDisabled}>
        {props.children}
      </AccordionGroup>
    ),
  }
);
