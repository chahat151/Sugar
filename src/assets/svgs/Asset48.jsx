import React from "react";

function Icon({ width = "24", fill = "none", color = "#000" }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      fill={fill}
      // ariaHidden="true"
      className="header__nav-icon icon icon-cart"
      viewBox="0 0 24 24"
    >
      <path
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.4"
        d="M4.75 8.25A.75.75 0 004 9L3 19.125c0 1.418 1.207 2.625 2.625 2.625h12.75c1.418 0 2.625-1.149 2.625-2.566L20 9a.75.75 0 00-.75-.75H4.75zm2.75 0v-1.5a4.5 4.5 0 014.5-4.5v0a4.5 4.5 0 014.5 4.5v1.5"
      ></path>
    </svg>
  );
}

export default Icon;
