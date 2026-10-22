import {
  DateSegment as ReactAriaDateSegment,
  DateSegmentProps,
} from "react-aria-components";

import useTimeZoneLabel from "../../hooks/useTimeZoneLabel";

export default function DateSegment(props: DateSegmentProps) {
  const timeZoneLabel = useTimeZoneLabel();

  return (
    <ReactAriaDateSegment {...props}>
      {({ type, text }) =>
        type === "timeZoneName" ? (timeZoneLabel ?? text) : text
      }
    </ReactAriaDateSegment>
  );
}
