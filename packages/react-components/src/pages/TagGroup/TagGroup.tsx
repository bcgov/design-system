import HorizontalTagGroup from "./Horizontal";
import VerticalTagGroup from "./Vertical";
import NonRemovableTagGroup from "./NonRemovable";
import DisabledTagGroup from "./Disabled";

export default function TagGroupPage() {
  return (
    <>
      <h2>TagGroup</h2>
      <hr />
      <h3>Horizontal</h3>
      <HorizontalTagGroup />
      <hr />
      <h3>Vertical</h3>
      <VerticalTagGroup />
      <hr />
      <h3>Non-removable</h3>
      <NonRemovableTagGroup />
      <hr />
      <h3>Disabled</h3>
      <DisabledTagGroup />
    </>
  );
}
