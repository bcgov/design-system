import {
  Accordion,
  AccordionGroup,
  Button,
  Form,
  Select,
  TextField,
} from "@/components";

export default function AccordionGroupPage() {
  return (
    <>
      <h2>AccordionGroup</h2>
      <AccordionGroup title="Accordion group (default)" titleElement="h4">
        <Accordion id="accordion1" label="Accordion 1">
          <div
            style={{
              width: "100%",
              height: "0",
              paddingBottom: "51%",
              position: "relative",
            }}
          >
            <iframe
              src="https://giphy.com/embed/8gjHXLJumLNv1BtJxX"
              width="100%"
              height="100%"
              style={{ position: "absolute" }}
              className="giphy-embed"
              allowFullScreen
            ></iframe>
          </div>
        </Accordion>
        <Accordion id="accordion2" label="Accordion 2">
          Accordion 2
        </Accordion>
        <Accordion id="accordion3" label="Accordion 3 is disabled" isDisabled>
          Accordion 3 is disabled
        </Accordion>
        <Accordion
          id="accordion4"
          label="Accordion 4 is a thing you can do (but please don't do it like this)"
        >
          <Form
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "var(--layout-margin-small)",
              width: "100%",
              maxWidth: "100%",
            }}
          >
            <div className="field">
              <TextField isRequired label="Name" />
            </div>
            <div className="field">
              <TextField label="Email address" type="email" />
            </div>
            <div className="field">
              <Select
                items={[
                  {
                    id: "1",
                    label: "Agnetha",
                  },
                  {
                    id: "2",
                    label: "Björn",
                  },
                  {
                    id: "3",
                    label: "Benny",
                  },
                  {
                    id: "4",
                    label: "Anni-Frid",
                  },
                ]}
                label="Favourite member of Abba"
                isRequired
              />
            </div>
            <div
              style={{
                display: "inline-flex",
                flexDirection: "row",
                alignItems: "flex-start",
                gap: "var(--layout-margin-none) var(--layout-margin-small)",
                margin: "var(--layout-margin-small) var(--layout-margin-none);",
              }}
            >
              <Button variant="primary" size="small" type="submit">
                Submit
              </Button>
              <Button variant="secondary" size="small" type="reset">
                Reset
              </Button>
            </div>
          </Form>
        </Accordion>
      </AccordionGroup>
      <hr />
      <AccordionGroup
        title="Accordion group (allows multiple expanded)"
        titleElement="h4"
        allowsMultipleExpanded
      >
        <Accordion id="1" label="Accordion 1">
          Two roads diverged in a yellow wood
        </Accordion>
        <Accordion id="2" label="Accordion 2">
          And sorry I could not travel both
        </Accordion>
        <Accordion id="3" label="Accordion 3">
          And be one traveler, long I stood
        </Accordion>
        <Accordion id="4" label="Accordion 4">
          And looked down one as far as I could
        </Accordion>
        <Accordion id="5" label="Accordion 5">
          To where it bent in the undergrowth;
        </Accordion>
      </AccordionGroup>
    </>
  );
}
