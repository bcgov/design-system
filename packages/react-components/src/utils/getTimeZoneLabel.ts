/* Overrides the default label for specific IANA time zones */
const timeZoneLabels: Record<string, string> = {
  "America/Vancouver": "PCT",
  "Canada/Pacific": "PCT",
};

export default function getTimeZoneLabel(timeZone: string): string | undefined {
  return timeZoneLabels[timeZone];
}
