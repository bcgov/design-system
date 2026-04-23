import Calendar from "./Calendar";
import figma from "@figma/code-connect";

figma.connect(
  Calendar,
  "https://www.figma.com/design/6BAmnRmL9FXxY2bkkSYiQj/B.C.-Design-System?node-id=15871%3A6832",
  {
    imports: [
      "import { Calendar } from '@bcgov/design-system-react-components';",
    ],
    props: {
      visibleDuration: figma.enum("Visible months", {
        "1": { months: 1 },
        "2": { months: 2 },
        "3": { months: 3 },
      }),
    },
    example: (props) => <Calendar visibleDuration={props.visibleDuration} />,
  }
);
