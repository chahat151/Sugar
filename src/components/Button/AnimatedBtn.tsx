import { CSSProperties, ReactNode } from "react";
import styles from "./AnimatedBtn.module.css";

interface ComponentProps {
  containerStyle?: CSSProperties;
  maskStyle?: CSSProperties;
  btnStyle?: CSSProperties;
  effect: "paint" | "spread" | "evaporate";
  children: ReactNode;
  [x: string]: any;
  // onClick?: () => void;
}

const AnimatedBtn: React.FC<ComponentProps> = ({
  containerStyle = {},
  maskStyle = {},
  btnStyle = {},
  effect,
  children,
  ...props
  // onClick = () => console.log("button clicked")
}) => {
  if (effect === "evaporate") {
    return (
      <div className={styles.buttonContainer3} style={containerStyle}>
        <span className={styles.mas} style={maskStyle}>
          {children}
        </span>
        <button type="button" style={btnStyle} {...props}>
          {children}
        </button>
      </div>
    );
  }
  if (effect === "spread") {
    return (
      <div className={styles.buttonContainer1} style={containerStyle}>
        <span className={styles.mas} style={maskStyle}>
          {children}
        </span>
        <button type="button" style={btnStyle} {...props}>
          {children}
        </button>
      </div>
    );
  }
  if (effect === "paint") {
    return (
      <div className={styles.buttonContainer2} style={containerStyle}>
        <span className={styles.mas} style={maskStyle}>
          {children}
        </span>
        <button type="button" style={btnStyle} {...props}>
          {children}
        </button>
      </div>
    );
  }
};
export default AnimatedBtn;
