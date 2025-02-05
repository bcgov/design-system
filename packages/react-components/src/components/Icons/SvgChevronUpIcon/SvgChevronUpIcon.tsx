/* The component implements the Chevron Up icon from Font Awesome: https://fontawesome.com/icons/chevron-up */
export default function SvgChevronUpIcon({ id = "chevron-up-icon" }) {
  return (
    <svg
      id={id}
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4.21231 13.3146L9.52695 8.2226C9.6939 8.08348 9.86086 8 10.0278 8C10.1948 8 10.3339 8.05565 10.473 8.16695L15.7876 13.259C16.066 13.5372 16.066 13.9546 15.8155 14.2051C15.5651 14.4833 15.1477 14.4833 14.8694 14.2329L10.0278 9.61387L5.13054 14.2885C4.88011 14.539 4.43491 14.539 4.18448 14.2607C3.93405 13.9825 3.93405 13.5651 4.21231 13.3146Z"
        fill="currentColor"
      />
    </svg>
  );
}
