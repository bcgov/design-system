// This file is used to map component props to Figma properties via Code Connect
import Accordion from "./Accordion";
import figma from "@figma/code-connect";

figma.connect(
  Accordion,
  "https://www.figma.com/design/6BAmnRmL9FXxY2bkkSYiQj/B.C.-Design-System?node-id=7780%3A1928",
  {
    imports: [
      "import { Accordion } from '@bcgov/design-system-react-components';",
    ],
    props: {
      label: figma.string("Text"),
      isDisabled: figma.enum("State", {
        Disabled: true,
      }),
      isExpanded: figma.boolean("Opened"),
      children: figma.slot("Accordion content"),
    },
    example: (props) => (
      <Accordion
        label={props.label}
        isDisabled={props.isDisabled}
        isExpanded={props.isExpanded}
      >
        {props.children}
      </Accordion>
    ),
  }
);
