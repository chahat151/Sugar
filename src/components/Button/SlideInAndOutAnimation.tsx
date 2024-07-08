import { PropsWithChildren } from "react";
import styles from "./SlideInAndOutAnimation.module.css";

interface slideInAndOutAnimation
  extends PropsWithChildren<React.ButtonHTMLAttributes<HTMLButtonElement>> {
  // onClick?: () => void;
  style?: React.CSSProperties;
}
const SlideInAndOutAnimation: React.FC<slideInAndOutAnimation> = ({
  style,
  children,
  ...props
}) => {
  return (
    <button className={styles.btn21} style={style} {...props}>
      <span>{children}</span>
    </button>
  );
};
export default SlideInAndOutAnimation;
