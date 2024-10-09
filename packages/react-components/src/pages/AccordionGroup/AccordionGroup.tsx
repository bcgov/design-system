import { Accordion, AccordionGroup } from "@/components";

export default function AccordionGroupPage() {
  return (
    <>
      <h2>AccordionGroup</h2>
      <AccordionGroup title="Accordion group (default)" titleElement="h4">
        <Accordion id="1" label="Accordion 1">
          Accordion 1
        </Accordion>
        <Accordion id="2" label="Accordion 2">
          Accordion 2
        </Accordion>
        <Accordion id="3" label="Accordion 3">
          Accordion 3
        </Accordion>
        <Accordion id="4" label="Accordion 4">
          Accordion 4
        </Accordion>
      </AccordionGroup>
      <hr />
      <AccordionGroup
        title="Accordion group (allows multiple expanded)"
        titleElement="h4"
        allowsMultipleExpanded
      >
        <Accordion id="1" label="Accordion 1">
          Accordion 1
        </Accordion>
        <Accordion id="2" label="Accordion 2">
          Accordion 2
        </Accordion>
        <Accordion id="3" label="Accordion 3">
          Accordion 3
        </Accordion>
        <Accordion id="4" label="Accordion 4">
          Accordion 4
        </Accordion>
      </AccordionGroup>
      <hr />
      <AccordionGroup
        title="Accordion group (default opened)"
        titleElement="h4"
        expandedKeys={["2"]}
      >
        <Accordion id="1" label="Accordion 1">
          Accordion 1
        </Accordion>
        <Accordion id="2" label="Accordion 2">
          Accordion 2
        </Accordion>
        <Accordion id="3" label="Accordion 3">
          Accordion 3
        </Accordion>
        <Accordion id="4" label="Accordion 4">
          Accordion 4
        </Accordion>
      </AccordionGroup>
    </>
  );
}
