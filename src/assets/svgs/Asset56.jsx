import React from "react";

function Icon({ width = "24", fill = "currentColor" }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      // ariaHidden="true"
      className="icon icon-facebook"
      viewBox="0 0 24 24"
    >
      <path
        fill={fill}
        fillRule="evenodd"
        d="M10.183 21.85v-8.868H7.2V9.526h2.983V6.982a4.17 4.17 0 014.44-4.572 22.33 22.33 0 012.667.144v3.084h-1.83a1.44 1.44 0 00-1.713 1.68v2.208h3.423l-.447 3.456h-2.97v8.868h-3.57z"
        clipRule="evenodd"
      ></path>
    </svg>
  );
}

export default Icon;
