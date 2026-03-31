/* The component implements the Chevron Left icon from Font Awesome: https://fontawesome.com/icons/chevron-left */
interface SvgChevronLeftIconProps {
  /* Unique identifier for icon */
  id?: string;
  /* Accessible title for icon, aria-hidden set if not provided */
  title?: string;
  /* Icon size */
  size?: "small" | "medium" | "large";
}

export default function SvgChevronLeftIcon({
  size = "medium",
  title,
  ...props
}: SvgChevronLeftIconProps) {
  return (
    <svg
      width={
        size === "small"
          ? "var(--icons-size-small)"
          : size === "large"
            ? "var(--icons-size-large)"
            : "var(--icons-size-medium)"
      }
      height={
        size === "small"
          ? "var(--icons-size-small)"
          : size === "large"
            ? "var(--icons-size-large)"
            : "var(--icons-size-medium)"
      }
      viewBox="0 0 640 640"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden={title ? undefined : "true"}
      {...props}
    >
      {title && <title>{title}</title>}
      <path
        d="M169.4 297.4C156.9 309.9 156.9 330.2 169.4 342.7L361.4 534.7C373.9 547.2 394.2 547.2 406.7 534.7C419.2 522.2 419.2 501.9 406.7 489.4L237.3 320L406.6 150.6C419.1 138.1 419.1 117.8 406.6 105.3C394.1 92.8 373.8 92.8 361.3 105.3L169.3 297.3z"
        fill="currentColor"
      />
    </svg>
  );
}
