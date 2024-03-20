import React from "react";
import { useButton, mergeProps } from "react-aria";
import { Button, Tooltip, TooltipTrigger } from "@/components";

// https://github.com/adobe/react-spectrum/issues/5733
function TooltipTriggerElement(props) {
  const triggerRef = React.useRef();
  const { buttonProps } = useButton(props, triggerRef);

  return React.cloneElement(
    props.children,
    mergeProps(buttonProps, props.children.props, { ref: triggerRef })
  );
}

export default function TooltipPage() {
  return (
    <>
      <h2>Tooltip</h2>
      <div style={{ display: "flex", flexDirection: "row", gap: "16px" }}>
        <TooltipTrigger>
          <Button variant="secondary" style={{ padding: "30px" }}>
            Top
          </Button>
          <Tooltip placement="top">This is the tooltip</Tooltip>
        </TooltipTrigger>
        <TooltipTrigger>
          <Button variant="secondary">Right</Button>
          <Tooltip placement="right">This is the tooltip</Tooltip>
        </TooltipTrigger>
        <TooltipTrigger>
          <Button variant="secondary">Bottom</Button>
          <Tooltip placement="bottom">This is the tooltip</Tooltip>
        </TooltipTrigger>
        <TooltipTrigger>
          <Button variant="secondary">Left</Button>
          <Tooltip placement="left">This is the tooltip</Tooltip>
        </TooltipTrigger>
      </div>
      <div>
        <p>
          The <code>&lt;span&gt;</code> element below has props from React
          Aria's <code>useButton()</code> to allow it to be hovered. Note that
          this won't work to show the Tooltip on focus, even after adding a{" "}
          <code>tabIndex</code> prop. See{" "}
          <a href="https://github.com/adobe/react-spectrum/issues/5733">
            this GitHub issue
          </a>
          .
        </p>
        <TooltipTrigger>
          <TooltipTriggerElement>
            <span
              style={{
                backgroundColor: "lightblue",
                borderRadius: "4px",
                padding: "8px 16px",
              }}
            >
              Hover or focus this span
            </span>
          </TooltipTriggerElement>
          <Tooltip placement="top">Triggered by span</Tooltip>
        </TooltipTrigger>
      </div>
    </>
  );
}
