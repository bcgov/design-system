export type IconSize = "xsmall" | "small" | "medium" | "large" | "xlarge";

const iconSizeMap: Record<IconSize, string> = {
  xsmall: "var(--icons-size-xsmall)",
  small: "var(--icons-size-small)",
  medium: "var(--icons-size-medium)",
  large: "var(--icons-size-large)",
  xlarge: "var(--icons-size-xlarge)",
};

export function useIconSize(size: IconSize = "medium"): string {
  return iconSizeMap[size];
}
