import { AlertDialog, Button, DialogTrigger, Modal } from "@/components";

export default function ModalDialogPage() {
  return (
    <>
      <h2>Alert Dialog</h2>
      <DialogTrigger>
        <Button variant="primary">Open an alert dialog</Button>
        <Modal>
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
    </>
  );
}
