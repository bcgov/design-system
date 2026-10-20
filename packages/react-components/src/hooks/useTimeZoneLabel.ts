import { useContext } from "react";
import {
  DateFieldStateContext,
  TimeFieldStateContext,
} from "react-aria-components";

/* Overrides the default label for specific IANA time zones */
const timeZoneLabels: Record<string, string> = {
  "America/Vancouver": "PCT",
  "Canada/Pacific": "PCT",
};

/*
  Returns the overridden label for the time zone of the enclosing DateField,
  TimeField or DatePicker input. Must be called from within a DateInput.
*/
export default function useTimeZoneLabel(): string | undefined {
  const dateFieldState = useContext(DateFieldStateContext);
  const timeFieldState = useContext(TimeFieldStateContext);
  const state = dateFieldState ?? timeFieldState;
  const timeZone = state?.dateFormatter.resolvedOptions().timeZone;

  return timeZone ? timeZoneLabels[timeZone] : undefined;
}
