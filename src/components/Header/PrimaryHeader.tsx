import { useEffect, useRef, useState } from "react";
import { asset116, asset117 } from "assets/images";
import styles from "./PrimaryHeader.module.css";
import { Asset47, Asset48 } from "../../assets/svgs";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import Dropdown from "../Dropdown/DropMenu";
import SuggestionSection from "pages/Product/ProductDetail/SuggestionSection";

interface ComponentProps {
  position?: "absolute" | "relative";
}
const PrimaryHeader: React.FC<ComponentProps> = ({ position = "absolute" }) => {
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const [isTop, setIsTop] = useState<boolean>(true);
  const headerRef = useRef<HTMLHeadingElement>(null);
  const navigate = useNavigate();

  const theme = (c1: string, c2: string) => (isHovered ? c1 : isTop ? c2 : c1);

  useEffect(() => {
    const handleScroll = () => {
      const { current } = headerRef;
      if (current) {
        if (current.getBoundingClientRect().top < 40) {
          setIsTop(false); // Change this to your desired color
        } else {
          setIsTop(true);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <motion.nav
      className={
        position === "absolute"
          ? styles.primaryHeaderContainerAbsolute
          : styles.primaryHeaderContainerRelative
      }
      ref={headerRef}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      style={{
        backgroundColor: theme("#fff", "transparent"),
      }}
    >
      <div className={styles.companyLogo}>
        <img
          src={isHovered ? asset116 : isTop ? asset117 : asset116}
          alt="compant logo"
          className={styles.companyLogo}
          onClick={() => navigate("/home")}
        />
      </div>
      <div>
        <ul className={styles.navLinks}>
          <li className={styles.navItem}>
            <div
              style={{ color: theme("#000", "#fff") }}
              className={styles.navLink}
              onClick={() => navigate("/shop")}
            >
              <span>Shop</span>
            </div>
            <div className={styles.dropdownList}>
              <SuggestionSection />
            </div>
          </li>
          <li className={styles.navItem}>
            <div
              style={{ color: theme("#000", "#fff") }}
              className={styles.navLink}
              onClick={() => navigate("/giftIdeas")}
            >
              <span>Gift Ideas</span>
            </div>
            <div className={styles.dropdownList}>
              <SuggestionSection />
            </div>
          </li>
          <li className={styles.navItem}>
            <div
              style={{ color: theme("#000", "#fff") }}
              className={styles.navLink}
              onClick={() => navigate("/confirmation")}
            >
              <span>Confirmation</span>
            </div>
            <div className={styles.dropdownList}>
              <SuggestionSection />
            </div>
          </li>
          <li
            style={{ color: theme("#000", "#fff") }}
            className={styles.navLink}
            onClick={() => navigate("/solutions")}
          >
            Company Solutions
          </li>
          <li
            style={{ color: theme("#000", "#fff") }}
            className={styles.navLink}
            onClick={() => navigate("/brand")}
          >
            Brand
          </li>
        </ul>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "2rem",
        }}
      >
        {/* <select name="" id="" className={styles.select}>
          <option value="ENG">ENG</option>
        </select> */}
        <Dropdown
          label="Lang"
          options={["Eng", "Hin"]}
          defaultVal={"Eng"}
          style={{ color: theme("#000", "#fff") }}
        />
        <div className={styles.navIcons}>
          <Asset47 color={theme("#000", "#fff")} width="24" />
        </div>
        <div className={styles.navIcons}>
          <Asset48 color={theme("#000", "#fff")} width="24" />
        </div>
      </div>
    </motion.nav>
  );
};
export default PrimaryHeader;
