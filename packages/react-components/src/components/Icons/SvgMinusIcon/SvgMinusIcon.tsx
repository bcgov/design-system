/* This component implements the Minus icon from Font Awesome: https://fontawesome.com/icons/minus */
export default function SvgDashIcon({ id = "dash-icon" }) {
  return (
    <svg
      id={id}
      width="20"
      height="20"
      viewBox="0 0 640 640"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M96 320C96 302.3 110.3 288 128 288L512 288C529.7 288 544 302.3 544 320C544 337.7 529.7 352 512 352L128 352C110.3 352 96 337.7 96 320z"
        fill="currentColor"
      />
    </svg>
  );
}
