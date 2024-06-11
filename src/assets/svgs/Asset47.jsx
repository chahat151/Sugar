import React from "react";

function Icon({ width = "24", fill = "none", color= '#000' }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      fill={fill}
      className="header__nav-icon icon icon-search"
      viewBox="0 0 24 24"
    >
      <path
        stroke={color}
        strokeMiterlimit="10"
        strokeWidth="1.4"
        d="M10.364 3a7.364 7.364 0 100 14.727 7.364 7.364 0 000-14.727z"
      ></path>
      <path
        stroke={color}
        strokeLinecap="round"
        strokeMiterlimit="10"
        strokeWidth="1.4"
        d="M15.857 15.858L21 21.001"
      ></path>
    </svg>
  );
}

export default Icon;
