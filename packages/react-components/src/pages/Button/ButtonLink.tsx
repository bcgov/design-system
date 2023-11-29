import Button from "@/components/Button";

function ButtonLinkMedium() {
  return (
    <Button size="medium" variant="link">
      Link Button Medium
    </Button>
  );
}

function ButtonLinkMediumDisabled() {
  return (
    <Button size="medium" variant="link" isDisabled>
      Link Button Medium Disabled
    </Button>
  );
}

function ButtonLinkSmall() {
  return (
    <Button size="small" variant="link">
      Link Button Small
    </Button>
  );
}

function ButtonLinkSmallDisabled() {
  return (
    <Button size="small" variant="link" isDisabled>
      Link Button Small Disabled
    </Button>
  );
}

export {
  ButtonLinkMedium,
  ButtonLinkMediumDisabled,
  ButtonLinkSmall,
  ButtonLinkSmallDisabled,
};
