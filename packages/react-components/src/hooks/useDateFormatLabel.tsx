import { useMemo } from "react";
import { useDisplayNames } from "@react-aria/datepicker";
import { useDateFormatter } from "@react-aria/i18n";

/* Generate format helper text, adapted from React Spectrum */
export default function useDateFormatLabel(props: {
  showFormatHelpText?: boolean;
}): React.ReactNode {
  const formatter = useDateFormatter({ dateStyle: "short" });
  const displayNames = useDisplayNames();
  return useMemo(() => {
    if (props.showFormatHelpText) {
      return (
        <>
          <span>Format: </span>
          {formatter.formatToParts(new Date()).map((s, i) => {
            if (
              s.type === "literal" ||
              s.type === "unknown" ||
              (s.type as string) === "yearName"
            ) {
              return <span key={i}>{` ${s.value} `}</span>;
            }

            const type = (s.type as string) === "relatedYear" ? "year" : s.type;
            return (
              <span
                key={i}
                className="bcds-react-aria-DatePicker--FormatHelpText"
              >
                {displayNames.of(type)}
              </span>
            );
          })}
        </>
      );
    }

    return "";
  }, [props.showFormatHelpText, formatter, displayNames]);
}
