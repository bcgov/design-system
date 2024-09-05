import {
  AlertDialog,
  Button,
  Dialog,
  DialogTrigger,
  Modal,
} from "@/components";

export default function ModalDialogPage() {
  return (
    <>
      <h2>Alert Dialog</h2>
      <h3>Info Alert Dialog</h3>
      <DialogTrigger>
        <Button variant="primary">Open an alert dialog</Button>
        <Modal modalHeight={"auto"} modalWidth={600}>
          <AlertDialog
            title="This is a modal dialog"
            description="It has some additional description text"
            buttons={[
              <Button variant="tertiary" size="small" onPress={close}>
                Cancel
              </Button>,
              <Button variant="primary" size="small">
                Continue
              </Button>,
            ]}
          ></AlertDialog>
        </Modal>
      </DialogTrigger>
      <h3>Warning Alert Dialog</h3>
      <DialogTrigger>
        <Button variant="primary">Open a warning dialog</Button>
        <Modal modalHeight={"auto"} modalWidth={600}>
          <AlertDialog
            variant="warning"
            title="This is a warning dialog"
            description="It has some additional description text"
            buttons={[
              <Button variant="tertiary" size="small" onPress={close}>
                Cancel
              </Button>,
              <Button variant="primary" size="small">
                Continue
              </Button>,
            ]}
          />
        </Modal>
      </DialogTrigger>
      <h3>Error Alert Dialog</h3>
      <DialogTrigger>
        <Button variant="primary">Open a warning dialog</Button>
        <Modal modalHeight={"auto"} modalWidth={600}>
          <AlertDialog
            variant="error"
            title="This is an error dialog"
            description="It has some additional description text"
            buttons={[
              <Button variant="tertiary" size="small" onPress={close}>
                Cancel
              </Button>,
              <Button variant="primary" size="small">
                Continue
              </Button>,
            ]}
          />
        </Modal>
      </DialogTrigger>
      <h2>Generic Dialog</h2>
      <DialogTrigger>
        <Button variant="secondary">Open a generic dialog</Button>
        <Modal modalHeight={"auto"} modalWidth={600}>
          <Dialog isCloseable>
            <h2>This is just some title text</h2>
          </Dialog>
        </Modal>
      </DialogTrigger>
    </>
  );
}
