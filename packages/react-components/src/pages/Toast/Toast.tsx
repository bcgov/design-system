import { useState } from "react";
import {
  Button,
  ButtonGroup,
  Radio,
  RadioGroup,
  Toaster,
  ToastQueue,
  SvgCheckIcon,
  SvgExclamationCircleIcon,
  SvgExclamationIcon,
  SvgInfoIcon,
} from "@/components";

type ToasterPosition =
  | "top-left"
  | "top-right"
  | "bottom-left"
  | "bottom-right";

export default function ToastPage() {
  const [position, setPosition] = useState<ToasterPosition>("bottom-right");

  return (
    <>
      <h2>Toast</h2>
      <RadioGroup
        label="Toaster position"
        defaultValue="bottom-right"
        value={position}
        onChange={(key) => setPosition(key as ToasterPosition)}
      >
        <Radio value="top-left">Top left</Radio>
        <Radio value="top-right">Top right</Radio>
        <Radio value="bottom-left">Bottom left</Radio>
        <Radio value="bottom-right">Bottom right (default)</Radio>
      </RadioGroup>
      <h3>Press buttons to fire toasts</h3>
      <ButtonGroup orientation="horizontal">
        <Button
          variant="primary"
          onPress={() =>
            ToastQueue.add(
              {
                title: "This is a success toast",
                variant: "success",
                message: "It has a 5 second timeout",
              },
              { timeout: 5000 },
            )
          }
        >
          <SvgCheckIcon />
          Success toast
        </Button>
        <Button
          variant="secondary"
          onPress={() =>
            ToastQueue.add(
              {
                title: "This is an info toast",
                variant: "info",
                message: "It has a 5 second timeout",
              },
              { timeout: 5000 },
            )
          }
        >
          <SvgInfoIcon />
          Info toast
        </Button>
        <Button
          variant="secondary"
          onPress={() =>
            ToastQueue.add({
              title: "This is a warning toast",
              variant: "warning",
              message: "It is configured with no timeout",
            })
          }
        >
          <SvgExclamationIcon />
          Warning toast
        </Button>
        <Button
          variant="secondary"
          danger
          onPress={() =>
            ToastQueue.add({
              title: "This is a danger toast",
              variant: "danger",
              message: "It is configured with no timeout",
            })
          }
        >
          <SvgExclamationCircleIcon />
          Danger toast
        </Button>
      </ButtonGroup>
      <Toaster position={position} />
    </>
  );
}
