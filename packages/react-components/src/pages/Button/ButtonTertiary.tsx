import Button from "@/components/Button";

const iconPlaceholder = (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g id="20px/Icon placeholder" clip-path="url(#clip0_717_6325)">
      <path
        id="Icon"
        d="M9.99996 18.3333C14.6023 18.3333 18.3333 14.6023 18.3333 9.99996C18.3333 5.39759 14.6023 1.66663 9.99996 1.66663C5.39759 1.66663 1.66663 5.39759 1.66663 9.99996C1.66663 14.6023 5.39759 18.3333 9.99996 18.3333Z"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </g>
    <defs>
      <clipPath id="clip0_717_6325">
        <rect width="20" height="20" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

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
      {iconPlaceholder}
    </Button>
  );
}

function ButtonTertiaryMediumIconDisabled() {
  return (
    <Button size="medium" variant="tertiary" isDisabled isIconButton>
      {iconPlaceholder}
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
      {iconPlaceholder}
    </Button>
  );
}

function ButtonTertiarySmallIconDisabled() {
  return (
    <Button size="small" variant="tertiary" isDisabled isIconButton>
      {iconPlaceholder}
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
