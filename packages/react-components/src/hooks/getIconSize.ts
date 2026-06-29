export type IconSize = "xsmall" | "small" | "medium" | "large" | "xlarge";

const iconSizeMap: Record<IconSize, number> = {
  xsmall: 14, // var(--icons-size-xsmall)
  small: 16, // var(--icons-size-small)
  medium: 20, // var(--icons-size-medium)
  large: 24, // var(--icons-size-large)
  xlarge: 32, // var(--icons-size-xlarge)
};

export default function getIconSize(size: IconSize = "medium"): number {
  return iconSizeMap[size];
}
