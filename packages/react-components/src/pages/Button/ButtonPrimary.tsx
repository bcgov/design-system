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

function ButtonPrimaryLarge() {
  return (
    <Button size="large" variant="primary">
      Primary Button Large
    </Button >);
}

function ButtonPrimaryLargeDisabled() {
  return (
    <Button size="large" variant="primary" isDisabled>
      Primary Button Large Disabled
    </Button >);
}

function ButtonPrimaryLargeIcon() {
  return (
    <Button size="large" variant="primary" isIconButton>
      {iconPlaceholder}
    </Button>
  );
}

function ButtonPrimaryLargeIconDisabled() {
  return (
    <Button size="large" variant="primary" isDisabled isIconButton>
      {iconPlaceholder}
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
      {iconPlaceholder}
    </Button>
  );
}

function ButtonPrimaryMediumIconDisabled() {
  return (
    <Button size="medium" variant="primary" isDisabled isIconButton>
      {iconPlaceholder}
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
      {iconPlaceholder}
    </Button>
  );
}

function ButtonPrimarySmallIconDisabled() {
  return (
    <Button size="small" variant="primary" isDisabled isIconButton>
      {iconPlaceholder}
    </Button>
  );
}

function ButtonPrimaryXSmall() {
  return (
    <Button size="xsmall" variant="primary">
      Primary Button X-Small
    </Button >);
}

function ButtonPrimaryXSmallDisabled() {
  return (
    <Button size="xsmall" variant="primary" isDisabled>
      Primary Button X-Small Disabled
    </Button >);
}

function ButtonPrimaryXSmallIcon() {
  return (
    <Button size="xsmall" variant="primary" isIconButton>
      {iconPlaceholder}
    </Button>
  );
}

function ButtonPrimaryXSmallIconDisabled() {
  return (
    <Button size="xsmall" variant="primary" isDisabled isIconButton>
      {iconPlaceholder}
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
  ButtonPrimaryXSmallIconDisabled
};
