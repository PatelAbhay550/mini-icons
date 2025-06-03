import * as React from "react";
const SvgMenudots = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    className="menudots_svg__h-[22px] menudots_svg__w-[22px]"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M12 21a2 2 0 1 1 0-4 2 2 0 0 1 0 4m0-7a2 2 0 1 1 0-4 2 2 0 0 1 0 4m0-7a2 2 0 1 1 0-4 2 2 0 0 1 0 4"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgMenudots;
