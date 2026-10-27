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

/* Overrides only apply to values at or after this instant (2026-11-01T02:00:00-07:00) */
const timeZoneLabelsEffectiveFrom = new Date("2026-11-01T02:00:00-07:00");

/*
  Returns the overridden label for the time zone of the enclosing DateField,
  TimeField or DatePicker input, if the field's value falls on or after
  timeZoneLabelsEffectiveFrom. Must be called from within a DateInput.
*/
export default function useTimeZoneLabel(): string | undefined {
  const dateFieldState = useContext(DateFieldStateContext);
  const timeFieldState = useContext(TimeFieldStateContext);
  const state = dateFieldState ?? timeFieldState;
  const timeZone = state?.dateFormatter.resolvedOptions().timeZone;

  if (!timeZone || !state || state.dateValue < timeZoneLabelsEffectiveFrom) {
    return undefined;
  }

  return timeZoneLabels[timeZone];
}
