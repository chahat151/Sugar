import React from "react";
import styles from "./UnderlineBtn.module.css";

interface underlineBtn extends React.PropsWithChildren {
  onClick?: () => void;
  style?: React.CSSProperties;
  inverted?: boolean;
  underlineColor?: string;
}
export const UnderlineBtn: React.FC<underlineBtn> = ({
  onClick = () => console.log("clicked"),
  style = {},
  inverted = false,
  children,
  underlineColor = "#222",
}) => {
  return (
    <span
      className={inverted ? styles.invertedNavLink : styles.navLink}
      onClick={onClick}
      style={
        { ...style, "--underline-color": underlineColor } as React.CSSProperties
      }
    >
      {children}
    </span>
  );
};
