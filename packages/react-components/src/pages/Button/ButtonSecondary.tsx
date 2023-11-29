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
      {iconPlaceholder}
    </Button>
  );
}

function ButtonSecondaryMediumIconDisabled() {
  return (
    <Button size="medium" variant="secondary" isDisabled isIconButton>
      {iconPlaceholder}
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
      {iconPlaceholder}
    </Button>
  );
}

function ButtonSecondarySmallIconDisabled() {
  return (
    <Button size="small" variant="secondary" isDisabled isIconButton>
      {iconPlaceholder}
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
