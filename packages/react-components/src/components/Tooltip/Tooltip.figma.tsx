// This file is used to map component props to Figma properties via Code Connect
import Tooltip from "./Tooltip";
import figma from "@figma/code-connect";

figma.connect(
  Tooltip,
  "https://www.figma.com/design/6BAmnRmL9FXxY2bkkSYiQj/B.C.-Design-System?node-id=3572%3A1939",
  {
    props: {
      placement: figma.enum("Direction", {
        "← Left": "left",
        "→ Right": "right",
        "↑ Up": "top",
        "↓ Down": "bottom",
      }),
      children: figma.textContent("Text"),
    },
    example: (props) => (
      <Tooltip placement={props.placement}>{props.children}</Tooltip>
    ),
  }
);
