import {
  iconsSizeXsmall,
  iconsSizeSmall,
  iconsSizeMedium,
  iconsSizeLarge,
  iconsSizeXlarge,
} from "@bcgov/design-tokens/js";

export type IconSize = "xsmall" | "small" | "medium" | "large" | "xlarge";

const iconSizeMap: Record<IconSize, string> = {
  xsmall: iconsSizeXsmall,
  small: iconsSizeSmall,
  medium: iconsSizeMedium,
  large: iconsSizeLarge,
  xlarge: iconsSizeXlarge,
};

export default function getIconSize(size: IconSize = "medium"): string {
  return iconSizeMap[size];
}
