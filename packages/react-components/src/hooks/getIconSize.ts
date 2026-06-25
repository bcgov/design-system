export type IconSize = "xsmall" | "small" | "medium" | "large" | "xlarge";

const iconSizeMap: Record<IconSize, string> = {
  xsmall: "var(--icons-size-xsmall, 14px)",
  small: "var(--icons-size-small, 16px)",
  medium: "var(--icons-size-medium, 20px)",
  large: "var(--icons-size-large, 24px)",
  xlarge: "var(--icons-size-xlarge, 32px)",
};

export default function getIconSize(size: IconSize = "medium"): string {
  return iconSizeMap[size];
}
