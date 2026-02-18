import {
  Button,
  ButtonGroup,
  ToastQueue,
  SvgCheckIcon,
  SvgExclamationCircleIcon,
  SvgExclamationIcon,
  SvgInfoIcon,
} from "@/components";

export default function ToastPage() {
  return (
    <>
      <h2>Toast</h2>
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
    </>
  );
}
