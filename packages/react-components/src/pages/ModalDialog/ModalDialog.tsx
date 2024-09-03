import { Button, Dialog, DialogTrigger, Modal } from "@/components";

export default function ModalDialogPage() {
  return (
    <>
      <h2>Modal Dialog</h2>
      <DialogTrigger>
        <Button variant="primary">Open a modal dialog</Button>
        <Modal>
          <Dialog
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
          ></Dialog>
        </Modal>
      </DialogTrigger>
    </>
  );
}
