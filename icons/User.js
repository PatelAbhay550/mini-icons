import * as React from "react";
const SvgUser = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    width="1em"
    height="1em"
    {...props}
  >
    <circle cx={12} cy={8} r={4} />
    <path d="M4 20c0-4 4-6 8-6s8 2 8 6" />
  </svg>
);
export default SvgUser;
