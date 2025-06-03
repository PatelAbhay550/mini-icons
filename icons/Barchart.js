import * as React from "react";
const SvgBarchart = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    width="1em"
    height="1em"
    {...props}
  >
    <path d="M4 10h4v10H4zM10 4h4v16h-4zM16 7h4v13h-4z" />
  </svg>
);
export default SvgBarchart;
