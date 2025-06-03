import * as React from "react";
const SvgCheckcircle = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    viewBox="0 0 24 24"
    width="1em"
    height="1em"
    {...props}
  >
    <circle cx={12} cy={12} r={10} />
    <path d="m9 12 2 2 4-4" />
  </svg>
);
export default SvgCheckcircle;
