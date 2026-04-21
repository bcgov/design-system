import AlertDialog from "./AlertDialog";
import figma from "@figma/code-connect";

figma.connect(
  AlertDialog,
  "https://www.figma.com/design/6BAmnRmL9FXxY2bkkSYiQj/B.C.-Design-System?node-id=6433%3A1885",
  {
    imports: [
      "import { AlertDialog, Button, DialogTrigger, Modal } from '@bcgov/design-system-react-components'",
    ],
    props: {
      variant: figma.enum("Type", {
        Information: "info",
        Confirmation: "confirmation",
        Warning: "warning",
        Error: "error",
        Destructive: "destructive",
      }),
      title: figma.textContent("Title"),
      children: figma.textContent("Text"),
    },
    example: (props) => (
      <AlertDialog variant={props.variant} title={props.title}>
        {props.children}
      </AlertDialog>
    ),
  }
);
