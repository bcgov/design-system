import { Button, ButtonGroup } from "@/components";

export default function ButtonGroupPage() {
  return (
    <>
      <h2>ButtonGroup</h2>
      <ButtonGroup>
        <Button variant="primary">Button 1</Button>
        <Button variant="secondary">Button 2</Button>
        <Button variant="tertiary">Button 3</Button>
        <Button variant="link">Button 4</Button>
      </ButtonGroup>
    </>
  );
}
