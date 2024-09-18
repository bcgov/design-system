import {
  AlertDialog,
  Button,
  ButtonGroup,
  Dialog,
  DialogTrigger,
  Form,
  TextField,
  Select,
  Modal,
} from "@/components";

export default function ModalDialogPage() {
  return (
    <>
      <h2>Alert Dialog</h2>
      <h3>Info Alert Dialog</h3>
      <DialogTrigger>
        <Button variant="primary">Open an alert dialog</Button>
        <Modal>
          <AlertDialog
            title="This is a modal dialog"
            description="It has some additional description text"
            buttons={[
              <Button
                variant="tertiary"
                size="small"
                key="info-alert-dialog-cancel"
              >
                Cancel
              </Button>,
              <Button
                variant="primary"
                size="small"
                key="info-alert-dialog-continue"
              >
                Continue
              </Button>,
            ]}
          />
        </Modal>
      </DialogTrigger>
      <h3>Warning Alert Dialog</h3>
      <DialogTrigger>
        <Button variant="primary">Open a warning dialog</Button>
        <Modal>
          <AlertDialog
            variant="warning"
            title="This is a warning dialog"
            description="It has some additional description text"
            buttons={[
              <Button
                variant="tertiary"
                size="small"
                key="warning-alert-dialog-cancel"
              >
                Cancel
              </Button>,
              <Button
                variant="primary"
                size="small"
                key="warning-alert-dialog-continue"
              >
                Continue
              </Button>,
            ]}
          />
        </Modal>
      </DialogTrigger>
      <h3>Error Alert Dialog</h3>
      <DialogTrigger>
        <Button variant="primary">Open a warning dialog</Button>
        <Modal>
          <AlertDialog
            variant="error"
            title="This is an error dialog"
            description="It has some additional description text"
            buttons={[
              <Button
                variant="tertiary"
                size="small"
                key="error-alert-dialog-cancel"
              >
                Cancel
              </Button>,
              <Button
                variant="primary"
                size="small"
                key="error-alert-dialog-continue"
              >
                Continue
              </Button>,
            ]}
          />
        </Modal>
      </DialogTrigger>
      <h2>Generic Dialog</h2>
      <h3>Default dialog</h3>
      <DialogTrigger>
        <Button variant="secondary">Open a default dialog</Button>
        <Modal>
          <Dialog />
        </Modal>
      </DialogTrigger>
      <h3>Empty dialog (dismissable)</h3>
      <DialogTrigger>
        <Button variant="secondary">Open an empty dialog</Button>
        <Modal isDismissable>
          <Dialog isCloseable={false} />
        </Modal>
      </DialogTrigger>
      <h3>Empty modal (closeable, not dismissable)</h3>
      <DialogTrigger>
        <Button variant="secondary">Open an empty dialog</Button>
        <Modal isKeyboardDismissDisabled>
          <Dialog isCloseable />
        </Modal>
      </DialogTrigger>
      <h3>Empty dialog (closeable and dismissable)</h3>
      <DialogTrigger>
        <Button variant="secondary">Open a generic dialog</Button>
        <Modal isDismissable>
          <Dialog isCloseable></Dialog>
        </Modal>
      </DialogTrigger>
      <h3>Generic dialog with composed form</h3>
      <DialogTrigger>
        <Button variant="secondary">Open a generic dialog</Button>
        <Modal isDismissable>
          <Dialog isCloseable>
            <div style={{ padding: "var(--layout-padding-medium" }}>
              <span style={{ font: "var(--typography-bold-h3)" }}>
                This dialog contains a form
              </span>
              <Form
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "var(--layout-margin-small)",
                }}
              >
                <TextField isRequired label="Name" />
                <TextField isRequired type="email" label="Email address" />
                <Select
                  items={[
                    { id: "vancouver", label: "Vancouver" },
                    { id: "victoria", label: "Victoria" },
                    { id: "kelowna", label: "Kelowna" },
                    { id: "kamloops", label: "Kamloops" },
                    { id: "princegeorge", label: "Prince George" },
                    { id: "princerupert", label: "Prince Rupert" },
                  ]}
                  label="City"
                  isRequired
                />
                <ButtonGroup alignment="start" orientation="horizontal">
                  <Button variant="primary" type="submit">
                    Submit
                  </Button>
                  <Button variant="secondary" type="reset">
                    Reset
                  </Button>
                </ButtonGroup>
              </Form>
            </div>
          </Dialog>
        </Modal>
      </DialogTrigger>
      <h2>Empty modals</h2>
      <h3>Default style</h3>
      <DialogTrigger>
        <Button>Open a default style modal</Button>
        <Modal isDismissable>Some stuff goes here</Modal>
      </DialogTrigger>
      <h3>Override style</h3>
      <DialogTrigger>
        <Button>Open a square modal</Button>
        <Modal
          style={{ width: "300px", height: "300px" }}
          isDismissable
        ></Modal>
      </DialogTrigger>
    </>
  );
}
