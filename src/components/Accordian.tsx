import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./Accordian.module.css"; // Ensure the file name matches
import { IconType } from "react-icons";
import DOMPurify from "dompurify";

interface AccordionTileProp {
  title: string;
  icon?: IconType;
  content: string;
  borderStyle?: React.CSSProperties;
  headerStyle?: React.CSSProperties;
  iconStyle?: React.CSSProperties;
}
interface AccordionProps {
  data: AccordionTileProp[];
  borderStyle?: React.CSSProperties;
  headerStyle?: React.CSSProperties;
  iconStyle?: React.CSSProperties;
}
const Accordion: React.FC<AccordionProps> = ({ data, ...prop }) => {
  return (
    <div className={styles.accordion}>
      {data.map(
        ({ title, content, icon }: AccordionTileProp, index: number) => (
          <AccordionTile
            key={index}
            title={title}
            content={content}
            icon={icon}
            {...prop}
          />
        )
      )}
    </div>
  );
};

const AccordionTile: React.FC<AccordionTileProp> = ({
  title,
  content,
  icon: Icon,
  borderStyle = {},
  headerStyle = {},
  iconStyle = {},
}) => {
  const [isActive, setIsActive] = React.useState<boolean>(false);
  const handleClick = () => setIsActive(!isActive);
  // const fontSize = iconStyle.fontSize ? iconStyle.fontSize : "1.6rem";
  return (
    <div className={styles.accordionItem} style={borderStyle}>
      <div className={styles.accordionTitle} onClick={handleClick}>
        <div className={styles.accordionTileContainer}>
          {Icon && (
            <Icon
              size={20}
              className={styles.accordionTileSVG}
              style={{ ...iconStyle }}
            />
          )}
          <span
            className={styles.accordionTileTitle}
            style={{ ...headerStyle }}
          >
            {title}
          </span>
        </div>
        {/* <div
          className={`${styles.accordionToggle} ${styles.accordionTileTitle}`}
          style={{ ...headerStyle }}
        >
          {isActive ? "-" : "+"}
        </div> */}
        <motion.div
          className="icon"
          // onClick={handleClick}
          style={{ display: "inline-block" }}
        >
          <AnimatePresence mode="wait">
            {isActive ? (
              <motion.svg
                key="firstSvg"
                initial={{ opacity: 0, rotate: -90 }}
                animate={{ opacity: 1, rotate: 0 }}
                exit={{ opacity: 0, rotate: -90 }}
                transition={{ duration: 0.2 }}
                width={iconStyle.fontSize ? iconStyle.fontSize : "1.6rem"}
                height={iconStyle.fontSize ? iconStyle.fontSize : "1.6rem"}
                viewBox="0 0 24 24"
                color={iconStyle.color ? iconStyle.color : "#222"}
              >
                <path
                  d="M5 12H19"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </motion.svg>
            ) : (
              <motion.svg
                key="secondSvg"
                initial={{ opacity: 0, rotate: 90 }}
                animate={{ opacity: 1, rotate: 0 }}
                exit={{ opacity: 0, rotate: 90 }}
                transition={{ duration: 0.2 }}
                width={iconStyle.fontSize ? iconStyle.fontSize : "1.6rem"}
                height={iconStyle.fontSize ? iconStyle.fontSize : "1.6rem"}
                viewBox="0 0 24 24"
                color={iconStyle.color ? iconStyle.color : "#222"}
              >
                <path
                  d="M12 5V19M5 12H19"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </motion.svg>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
      <motion.div
        initial={{ height: 0 }}
        animate={{ height: isActive ? "auto" : 0 }}
        transition={{ duration: 0.2 }}
        className={styles.accordionContent}
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isActive ? 1 : 0 }}
          transition={{
            duration: 0.3,
            delay: isActive ? 0.2 : 0,
          }}
        >
          <div
            className={styles.accordionTileContent}
            dangerouslySetInnerHTML={{
              __html: DOMPurify.sanitize(content),
            }}
          />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Accordion;
