import Button from "@/components/Button";
import SvgPlaceholderIcon from "@/components/Icons/SvgPlaceholderIcon";

function ButtonSecondaryMedium() {
  return (
    <Button size="medium" variant="secondary">
      Secondary Button Medium
    </Button>
  );
}

function ButtonSecondaryMediumDisabled() {
  return (
    <Button size="medium" variant="secondary" isDisabled>
      Secondary Button Medium Disabled
    </Button>
  );
}

function ButtonSecondaryMediumIcon() {
  return (
    <Button size="medium" variant="secondary" isIconButton>
      <SvgPlaceholderIcon />
    </Button>
  );
}

function ButtonSecondaryMediumIconDisabled() {
  return (
    <Button size="medium" variant="secondary" isDisabled isIconButton>
      <SvgPlaceholderIcon />
    </Button>
  );
}

function ButtonSecondarySmall() {
  return (
    <Button size="small" variant="secondary">
      Secondary Button Small
    </Button>
  );
}

function ButtonSecondarySmallDisabled() {
  return (
    <Button size="small" variant="secondary" isDisabled={true}>
      Secondary Button Small Disabled
    </Button>
  );
}

function ButtonSecondarySmallIcon() {
  return (
    <Button size="small" variant="secondary" isIconButton>
      <SvgPlaceholderIcon />
    </Button>
  );
}

function ButtonSecondarySmallIconDisabled() {
  return (
    <Button size="small" variant="secondary" isDisabled isIconButton>
      <SvgPlaceholderIcon />
    </Button>
  );
}

export {
  ButtonSecondaryMedium,
  ButtonSecondaryMediumDisabled,
  ButtonSecondaryMediumIcon,
  ButtonSecondaryMediumIconDisabled,
  ButtonSecondarySmall,
  ButtonSecondarySmallDisabled,
  ButtonSecondarySmallIcon,
  ButtonSecondarySmallIconDisabled,
};
