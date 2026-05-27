import Button from "@/components/Button";
import SvgPlaceholderIcon from "@/components/Icons/SvgPlaceholderIcon";

function ButtonTertiaryMedium() {
  return (
    <Button size="medium" variant="tertiary">
      Tertiary Button Medium
    </Button>
  );
}

function ButtonTertiaryMediumDisabled() {
  return (
    <Button size="medium" variant="tertiary" isDisabled>
      Tertiary Button Medium Disabled
    </Button>
  );
}

function ButtonTertiaryMediumIcon() {
  return (
    <Button size="medium" variant="tertiary" isIconButton>
      <SvgPlaceholderIcon />
    </Button>
  );
}

function ButtonTertiaryMediumIconDisabled() {
  return (
    <Button size="medium" variant="tertiary" isDisabled isIconButton>
      <SvgPlaceholderIcon />
    </Button>
  );
}

function ButtonTertiarySmall() {
  return (
    <Button size="small" variant="tertiary">
      Tertiary Button Small
    </Button>
  );
}

function ButtonTertiarySmallDisabled() {
  return (
    <Button size="small" variant="tertiary" isDisabled>
      Tertiary Button Small Disabled
    </Button>
  );
}

function ButtonTertiarySmallIcon() {
  return (
    <Button size="small" variant="tertiary" isIconButton>
      <SvgPlaceholderIcon />
    </Button>
  );
}

function ButtonTertiarySmallIconDisabled() {
  return (
    <Button size="small" variant="tertiary" isDisabled isIconButton>
      <SvgPlaceholderIcon />
    </Button>
  );
}

export {
  ButtonTertiaryMedium,
  ButtonTertiaryMediumDisabled,
  ButtonTertiaryMediumIcon,
  ButtonTertiaryMediumIconDisabled,
  ButtonTertiarySmall,
  ButtonTertiarySmallDisabled,
  ButtonTertiarySmallIcon,
  ButtonTertiarySmallIconDisabled,
};
