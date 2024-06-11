import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./TextSlider.module.css";
import { usePageVisibility } from "react-page-visibility";


interface TextSliderProps {
  texts: string[];
}

const TextSlider: React.FC<TextSliderProps> = ({ texts }) => {
  const [index, setIndex] = useState(0);
  const isVisible = usePageVisibility();

  useEffect(() => {
    let interval: NodeJS.Timeout;

    if (isVisible) {
      interval = setInterval(() => {
        setIndex((prevIndex) => (prevIndex + 1) % texts.length);
      }, 2000);
    }

    return () => clearInterval(interval);
  }, [texts, isVisible]);

  return (
    <div className={styles["text-container"]}>
      <AnimatePresence mode="wait">
        <motion.p
          key={texts[index]}
          className={styles.text}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
        >
          {texts[index]}
        </motion.p>
      </AnimatePresence>
    </div>
  );
};

export default TextSlider;
