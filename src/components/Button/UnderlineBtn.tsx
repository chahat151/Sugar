import React from "react";
import styles from "./UnderlineBtn.module.css";

interface underlineBtn
  extends React.PropsWithChildren<React.HTMLAttributes<HTMLSpanElement>> {
  style?: React.CSSProperties;
  inverted?: boolean;
  underlineColor?: string;
}
export const UnderlineBtn: React.FC<underlineBtn> = ({
  style = {},
  inverted = false,
  children,
  underlineColor = "#222",
  ...props
}) => {
  return (
    <span
      className={inverted ? styles.invertedNavLink : styles.navLink}
      style={
        { ...style, "--underline-color": underlineColor } as React.CSSProperties
      }
      {...props}
    >
      {children}
    </span>
  );
};
