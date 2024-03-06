import Button from "@/components/Button";

const iconPlaceholder = (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g id="20px/Icon placeholder" clipPath="url(#clip0_717_6325)">
      <path
        id="Icon"
        d="M9.99996 18.3333C14.6023 18.3333 18.3333 14.6023 18.3333 9.99996C18.3333 5.39759 14.6023 1.66663 9.99996 1.66663C5.39759 1.66663 1.66663 5.39759 1.66663 9.99996C1.66663 14.6023 5.39759 18.3333 9.99996 18.3333Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
    <defs>
      <clipPath id="clip0_717_6325">
        <rect width="20" height="20" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

function ButtonPrimaryMediumDanger() {
  return (
    <Button size="medium" variant="primary" danger>
      Primary Button Medium
    </Button>
  );
}

function ButtonPrimaryMediumDisabledDanger() {
  return (
    <Button size="medium" variant="primary" isDisabled danger>
      Primary Button Medium Disabled
    </Button>
  );
}

function ButtonPrimaryMediumDangerIcon() {
  return (
    <Button size="medium" variant="primary" danger isIconButton>
      {iconPlaceholder}
    </Button>
  );
}

function ButtonPrimaryMediumDisabledDangerIcon() {
  return (
    <Button size="medium" variant="primary" isDisabled danger isIconButton>
      {iconPlaceholder}
    </Button>
  );
}

function ButtonPrimarySmallDanger() {
  return (
    <Button size="small" variant="primary" danger>
      Primary Button Small
    </Button>
  );
}

function ButtonPrimarySmallDangerIcon() {
  return (
    <Button size="small" variant="primary" danger isIconButton>
      {iconPlaceholder}
    </Button>
  );
}

function ButtonPrimarySmallDisabledDanger() {
  return (
    <Button size="small" variant="primary" isDisabled danger>
      Primary Button Small Disabled
    </Button>
  );
}

function ButtonPrimarySmallDisabledDangerIcon() {
  return (
    <Button size="small" variant="primary" isDisabled danger isIconButton>
      {iconPlaceholder}
    </Button>
  );
}

function ButtonSecondaryMediumDanger() {
  return (
    <Button size="medium" variant="secondary" danger>
      Secondary Button Medium
    </Button>
  );
}

function ButtonSecondaryMediumDangerIcon() {
  return (
    <Button size="medium" variant="secondary" danger isIconButton>
      {iconPlaceholder}
    </Button>
  );
}

function ButtonSecondaryMediumDisabledDanger() {
  return (
    <Button size="medium" variant="secondary" isDisabled danger>
      Secondary Button Medium Disabled
    </Button>
  );
}

function ButtonSecondaryMediumDisabledDangerIcon() {
  return (
    <Button size="medium" variant="secondary" isDisabled danger isIconButton>
      {iconPlaceholder}
    </Button>
  );
}

function ButtonSecondarySmallDanger() {
  return (
    <Button size="small" variant="secondary" danger>
      Secondary Button Small
    </Button>
  );
}

function ButtonSecondarySmallDangerIcon() {
  return (
    <Button size="small" variant="secondary" danger isIconButton>
      {iconPlaceholder}
    </Button>
  );
}

function ButtonSecondarySmallDisabledDanger() {
  return (
    <Button size="small" variant="secondary" isDisabled danger>
      Secondary Button Small Disabled
    </Button>
  );
}

function ButtonSecondarySmallDisabledDangerIcon() {
  return (
    <Button size="small" variant="secondary" isDisabled danger isIconButton>
      {iconPlaceholder}
    </Button>
  );
}

function ButtonTertiaryMediumDanger() {
  return (
    <Button size="medium" variant="tertiary" danger>
      Tertiary Button Medium
    </Button>
  );
}

function ButtonTertiaryMediumDangerIcon() {
  return (
    <Button size="medium" variant="tertiary" danger isIconButton>
      {iconPlaceholder}
    </Button>
  );
}

function ButtonTertiaryMediumDisabledDanger() {
  return (
    <Button size="medium" variant="tertiary" isDisabled danger>
      Tertiary Button Medium Disabled
    </Button>
  );
}

function ButtonTertiaryMediumDisabledDangerIcon() {
  return (
    <Button size="medium" variant="tertiary" isDisabled danger isIconButton>
      {iconPlaceholder}
    </Button>
  );
}

function ButtonTertiarySmallDanger() {
  return (
    <Button size="small" variant="tertiary" danger>
      Tertiary Button Small
    </Button>
  );
}

function ButtonTertiarySmallDangerIcon() {
  return (
    <Button size="small" variant="tertiary" danger isIconButton>
      {iconPlaceholder}
    </Button>
  );
}

function ButtonTertiarySmallDisabledDanger() {
  return (
    <Button size="small" variant="tertiary" isDisabled danger>
      Tertiary Button Small Disabled
    </Button>
  );
}

function ButtonTertiarySmallDisabledDangerIcon() {
  return (
    <Button size="small" variant="tertiary" isDisabled danger isIconButton>
      {iconPlaceholder}
    </Button>
  );
}

function ButtonLinkMediumDanger() {
  return (
    <Button size="medium" variant="link" danger>
      Link Button Medium
    </Button>
  );
}

function ButtonLinkMediumDisabledDanger() {
  return (
    <Button size="medium" variant="link" isDisabled danger>
      Link Button Medium Disabled
    </Button>
  );
}

function ButtonLinkSmallDanger() {
  return (
    <Button size="small" variant="link" danger>
      Link Button Small
    </Button>
  );
}

function ButtonLinkSmallDisabledDanger() {
  return (
    <Button size="small" variant="link" isDisabled danger>
      Link Button Small Disabled
    </Button>
  );
}

export {
  ButtonPrimaryMediumDanger,
  ButtonPrimaryMediumDisabledDanger,
  ButtonPrimaryMediumDangerIcon,
  ButtonPrimaryMediumDisabledDangerIcon,
  ButtonPrimarySmallDanger,
  ButtonPrimarySmallDangerIcon,
  ButtonPrimarySmallDisabledDanger,
  ButtonPrimarySmallDisabledDangerIcon,
  ButtonSecondaryMediumDanger,
  ButtonSecondaryMediumDangerIcon,
  ButtonSecondaryMediumDisabledDanger,
  ButtonSecondaryMediumDisabledDangerIcon,
  ButtonSecondarySmallDanger,
  ButtonSecondarySmallDangerIcon,
  ButtonSecondarySmallDisabledDanger,
  ButtonSecondarySmallDisabledDangerIcon,
  ButtonTertiaryMediumDanger,
  ButtonTertiaryMediumDangerIcon,
  ButtonTertiaryMediumDisabledDanger,
  ButtonTertiaryMediumDisabledDangerIcon,
  ButtonTertiarySmallDanger,
  ButtonTertiarySmallDangerIcon,
  ButtonTertiarySmallDisabledDanger,
  ButtonTertiarySmallDisabledDangerIcon,
  ButtonLinkMediumDanger,
  ButtonLinkMediumDisabledDanger,
  ButtonLinkSmallDanger,
  ButtonLinkSmallDisabledDanger,
};
