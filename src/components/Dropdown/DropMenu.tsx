import React, { useState, useEffect, useRef } from "react";
import { motion, Variants, MotionProps } from "framer-motion";
import { FaChevronDown, FaChevronUp } from "react-icons/fa"; // Import icons
import styles from "./DropMenu.module.css";

const dropdownVariants: Variants = {
  closed: {
    scale: 0,
    top: -50,
    transition: {
      delay: 0.15,
    },
  },
  open: {
    scale: 1,
    top: 35,
    transition: {
      type: "spring",
      duration: 0.4,
      delayChildren: 0.2,
      staggerChildren: 0.05,
    },
  },
};

const dropdownItemVariants: Variants = {
  closed: { y: -16, opacity: 0 },
  open: { y: 0, opacity: 1 },
  hover: {
    scale: 1.05,
    backgroundColor: "#000",
    borderRadius: "0.3rem",
    color: "#fff",
  }, // Scale up on hover
};

const dropdownItemTransition: MotionProps["transition"] = {
  opacity: { duration: 0.2 },
};

interface DropdownProps {
  label: React.ReactNode;
  options: string[]; // Array of options
  defaultVal: string; // Array of options
  style?: React.CSSProperties;
}

const Dropdown: React.FC<DropdownProps> = ({
  label,
  options,
  defaultVal,
  style = {},
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<string | null>(
    defaultVal || null
  );
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionSelect = (option: string) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className={styles.dropdown} ref={dropdownRef}>
      <motion.button
        className={styles.dropdownToggle}
        style={style}
        onClick={toggleDropdown}
        whileTap={{ scale: 0.95 }}
      >
        {selectedOption || label}
        {isOpen ? <FaChevronUp /> : <FaChevronDown />}{" "}
        {/* Display up or down icon based on dropdown state */}
      </motion.button>
      <motion.div
        className={styles.dropdownMenu}
        initial="closed"
        animate={isOpen ? "open" : "closed"}
        variants={dropdownVariants}
      >
        {options.map((option) => (
          <motion.div
            key={option}
            className={styles.dropdownItem}
            variants={dropdownItemVariants}
            transition={dropdownItemTransition}
            onClick={() => handleOptionSelect(option)}
            whileHover="hover" // Apply hover animation
            style={{ backgroundColor: "#fff" }} // Initial background color
            whileTap={{ scale: 0.95 }} // Scale down slightly on tap
          >
            {option}
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};
export default Dropdown;
// export default function Example() {
//   const options = ["Edit", "Share", "Delete", "Report"];
//   return (
//     <div style={{display:'flex'}}>
//       <Dropdown label="Options" options={options} />
//       <Dropdown label="Options" options={options} />
//     </div>
//   );
// }
