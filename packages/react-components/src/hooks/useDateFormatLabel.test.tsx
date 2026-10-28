import { ReactNode } from "react";
import { describe, expect, test } from "vitest";
import { render, renderHook } from "@testing-library/react";
import "@testing-library/jest-dom";
import { I18nProvider } from "react-aria-components";

import useDateFormatLabel from "./useDateFormatLabel";

function renderLabel(showFormatHelpText: boolean | undefined, locale: string) {
  const wrapper = ({ children }: { children: ReactNode }) => (
    <I18nProvider locale={locale}>{children}</I18nProvider>
  );

  return renderHook(
    (props: { showFormatHelpText?: boolean }) => useDateFormatLabel(props),
    { wrapper, initialProps: { showFormatHelpText } }
  );
}

/* Render the returned node so its text and placeholder spans can be inspected */
function renderLabelNode(locale: string) {
  const label = renderLabel(true, locale).result.current;
  return render(<div data-testid="label">{label}</div>);
}

describe("useDateFormatLabel", () => {
  describe("returns an empty string", () => {
    test.each([
      ["showFormatHelpText is false", false],
      ["showFormatHelpText is undefined", undefined],
    ])("when %s", (_, showFormatHelpText) => {
      expect(renderLabel(showFormatHelpText, "en-US").result.current).toBe("");
    });
  });

  describe("describes the short date format for the locale", () => {
    test.each([
      ["en-US", "Format: month / day / year", ["month", "day", "year"]],
      ["en-CA", "Format: year - month - day", ["year", "month", "day"]],
      ["en-GB", "Format: day / month / year", ["day", "month", "year"]],
    ])("%s → %s", (locale, text, placeholders) => {
      const { getByTestId } = renderLabelNode(locale);
      const label = getByTestId("label");

      expect(label).toHaveTextContent(text);
      expect(
        [
          ...label.querySelectorAll(
            ".bcds-react-aria-DatePicker--FormatHelpText"
          ),
        ].map((el) => el.textContent)
      ).toEqual(placeholders);
    });
  });

  describe("memoization", () => {
    test("returns the same node when props are unchanged", () => {
      const { result, rerender } = renderLabel(true, "en-US");
      const first = result.current;

      rerender({ showFormatHelpText: true });

      expect(result.current).toBe(first);
    });

    test("updates when showFormatHelpText changes", () => {
      const { result, rerender } = renderLabel(false, "en-US");
      expect(result.current).toBe("");

      rerender({ showFormatHelpText: true });
      expect(result.current).not.toBe("");

      rerender({ showFormatHelpText: false });
      expect(result.current).toBe("");
    });
  });
});
