import Button from "@/components/Button";
import SvgPlaceholderIcon from "@/components/Icons/SvgPlaceholderIcon";

function SvgPlaceholderIconSmall() {
  return <SvgPlaceholderIcon size={16} />;
}

function ButtonPrimaryLarge() {
  return (
    <Button size="large" variant="primary">
      Primary Button Large
    </Button>
  );
}

function ButtonPrimaryLargeDisabled() {
  return (
    <Button size="large" variant="primary" isDisabled>
      Primary Button Large Disabled
    </Button>
  );
}

function ButtonPrimaryLargeIcon() {
  return (
    <Button size="large" variant="primary" isIconButton>
      <SvgPlaceholderIcon />
    </Button>
  );
}

function ButtonPrimaryLargeIconDisabled() {
  return (
    <Button size="large" variant="primary" isDisabled isIconButton>
      <SvgPlaceholderIcon />
    </Button>
  );
}

function ButtonPrimaryMedium() {
  return (
    <Button size="medium" variant="primary">
      Primary Button Medium
    </Button>
  );
}

function ButtonPrimaryMediumDisabled() {
  return (
    <Button size="medium" variant="primary" isDisabled>
      Primary Button Medium Disabled
    </Button>
  );
}

function ButtonPrimaryMediumIcon() {
  return (
    <Button size="medium" variant="primary" isIconButton>
      <SvgPlaceholderIcon />
    </Button>
  );
}

function ButtonPrimaryMediumIconDisabled() {
  return (
    <Button size="medium" variant="primary" isDisabled isIconButton>
      <SvgPlaceholderIcon />
    </Button>
  );
}

function ButtonPrimarySmall() {
  return (
    <Button size="small" variant="primary">
      Primary Button Small
    </Button>
  );
}

function ButtonPrimarySmallDisabled() {
  return (
    <Button size="small" variant="primary" isDisabled>
      Primary Button Small Disabled
    </Button>
  );
}

function ButtonPrimarySmallIcon() {
  return (
    <Button size="small" variant="primary" isIconButton>
      <SvgPlaceholderIcon />
    </Button>
  );
}

function ButtonPrimarySmallIconDisabled() {
  return (
    <Button size="small" variant="primary" isDisabled isIconButton>
      <SvgPlaceholderIcon />
    </Button>
  );
}

function ButtonPrimaryXSmall() {
  return (
    <Button size="xsmall" variant="primary">
      Primary Button X-Small
    </Button>
  );
}

function ButtonPrimaryXSmallDisabled() {
  return (
    <Button size="xsmall" variant="primary" isDisabled>
      Primary Button X-Small Disabled
    </Button>
  );
}

function ButtonPrimaryXSmallIcon() {
  return (
    <Button size="xsmall" variant="primary" isIconButton>
      <SvgPlaceholderIconSmall />
    </Button>
  );
}

function ButtonPrimaryXSmallIconDisabled() {
  return (
    <Button size="xsmall" variant="primary" isDisabled isIconButton>
      <SvgPlaceholderIconSmall />
    </Button>
  );
}

export {
  ButtonPrimaryLarge,
  ButtonPrimaryLargeDisabled,
  ButtonPrimaryLargeIcon,
  ButtonPrimaryLargeIconDisabled,
  ButtonPrimaryMedium,
  ButtonPrimaryMediumDisabled,
  ButtonPrimaryMediumIcon,
  ButtonPrimaryMediumIconDisabled,
  ButtonPrimarySmall,
  ButtonPrimarySmallDisabled,
  ButtonPrimarySmallIcon,
  ButtonPrimarySmallIconDisabled,
  ButtonPrimaryXSmall,
  ButtonPrimaryXSmallDisabled,
  ButtonPrimaryXSmallIcon,
  ButtonPrimaryXSmallIconDisabled,
};
