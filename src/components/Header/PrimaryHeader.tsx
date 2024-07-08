import React, { useEffect, useRef, useState } from "react";
import { asset116, asset117 } from "assets/images";
import styles from "./PrimaryHeader.module.css";
import { Asset47, Asset48 } from "../../assets/svgs";
import { motion } from "framer-motion";
import { useLocation, useNavigate } from "react-router-dom";
import Dropdown from "../Dropdown/DropMenu";
import SuggestionSection from "pages/Product/ProductDetail/SuggestionSection";
import { IoMenu, IoClose } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";
interface ComponentProps {
  position?: "absolute" | "relative";
}

const PrimaryHeader: React.FC<ComponentProps> = ({ position = "absolute" }) => {
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const [isTop, setIsTop] = useState<boolean>(true);
  const [isNavOpen, setIsNavOpen] = useState<boolean>(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const searchRef = useRef<HTMLInputElement>(null);
  const headerRef = useRef<HTMLHeadingElement>(null);
  const navigate = useNavigate();
  const location = useLocation();

  const theme = (c1: string, c2: string) => {
    if (isSearchOpen) {
      return c1;
    }
    return isHovered ? c1 : isTop ? c2 : c1;
  };

  useEffect(() => {
    const handleScroll = () => {
      const { current } = headerRef;
      if (current) {
        if (current.getBoundingClientRect().top < 40) {
          setIsTop(false);
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

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        headerRef.current &&
        !headerRef.current.contains(event.target as Node)
      ) {
        console.log("Clicked outside the div");
        setIsSearchOpen(false);
      }
    };

    window.addEventListener("mousedown", handleClickOutside);
    return () => {
      window.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <div ref={headerRef}>
      <motion.nav
        className={
          position === "absolute"
            ? `${styles.headerBar} ${styles.primaryHeaderContainerAbsolute}`
            : `${styles.headerBar} ${styles.primaryHeaderContainerRelative}`
        }
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        style={
          {
            // backgroundColor: theme("#fff", "transparent"),
          }
        }
      >
        <div
          style={{
            backgroundColor: theme("#fff", "transparent"),
          }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className={styles.innerHeader}
        >
          <div className={styles.menu}>
            <IoMenu
              style={{
                fontSize: "3rem",
                color: theme("#000", "#fff"),
                cursor: "pointer",
              }}
              onClick={toggleNav}
            />
          </div>
          <div className={styles.companyLogo}>
            <img
              src={
                isSearchOpen
                  ? asset116
                  : isHovered
                  ? asset116
                  : isTop
                  ? asset117
                  : asset116
              }
              alt="company logo"
              className={styles.companyLogo}
              onClick={() => navigate("/home")}
            />
          </div>
          <ul className={styles.navLinks}>
            {location.pathname !== "/home" && location.pathname !== "/" && (
              <li className={styles.navItem}>
                <div
                  style={{ color: theme("#000", "#fff") }}
                  className={styles.navLink}
                  onClick={() => navigate("/")}
                >
                  <span>Home</span>
                </div>
                <div className={styles.dropdownList}>
                  <SuggestionSection />
                </div>
              </li>
            )}
            {location.pathname !== "/shop" && (
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
            )}
            {location.pathname !== "/giftIdeas" && (
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
            )}
            {location.pathname !== "/confirmation" && (
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
            )}
            {location.pathname !== "/solutions" && (
              <li
                style={{ color: theme("#000", "#fff") }}
                className={styles.navLink}
                onClick={() => navigate("/solutions")}
              >
                Company Solutions
              </li>
            )}
            {location.pathname !== "/brand" && (
              <li
                style={{ color: theme("#000", "#fff") }}
                className={styles.navLink}
                onClick={() => navigate("/brand")}
              >
                Brand
              </li>
            )}
          </ul>
          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "center",
              // gap: "2rem",
            }}
            className={styles.iconsDiv}
          >
            <div className={styles.dropdown}>
              <Dropdown
                label="Lang"
                options={["Eng", "Hin"]}
                defaultVal={"Eng"}
                style={{ color: theme("#000", "#fff") }}
                optionStyle={{ backgroundColor: "#fff", color: "#000" }}
              />
            </div>
            <div
              className={styles.navIcons}
              onClick={() => {
                setIsSearchOpen(() => {
                  if (!isSearchOpen && searchRef.current) {
                    searchRef.current.focus();
                    searchRef.current.value = "";
                  }
                  return !isSearchOpen;
                });
              }}
              style={{marginRight:'2rem'}}
            >
              <Asset47 color={theme("#000", "#fff")} width="24" />
            </div>
            <div className={styles.navIcons}>
              <Asset48 color={theme("#000", "#fff")} width="24" />
            </div>
          </div>
        </div>
        {/* <br /> */}
        <motion.div
          initial={{
            y: -100,
            opacity: 0,
          }}
          animate={{
            y: isSearchOpen ? 0 : -60,
            opacity: isSearchOpen ? 1 : 0,
            // transitionEnd: {
            //   opacity: 0, // Opacity set to 0 after y reaches -60
            //   y: -60,
            // },
          }}
          transition={{ duration: 0.3 }}
          className={` ${styles.search}`}
        >
          <CiSearch style={{ fontSize: "2.3rem", color: "#1c1c1c" }} />
          <input
            ref={searchRef}
            type="text"
            placeholder="Search here..."
            // value={"dddd"}
            style={{
              lineHeight: "1.6",
              fontWeight: "700",
              border: "none",
              fontSize: "1.5rem",
              transform: "scaleY(1.3)",
              flex: 1,
              color: "#1c1c1c",
            }}
          />

          <IoClose
            style={{ fontSize: "2rem", color: "#1c1c1c" }}
            onClick={() => {
              setIsSearchOpen(false);
              setIsHovered(true);
              setTimeout(() => {
                setIsHovered(false);
              }, 250);
            }}
            // className={styles.closeIcon}
          />
        </motion.div>
      </motion.nav>
      {/* <motion.nav
        className={
          position === "absolute"
            ? `${styles.headerSlider} ${styles.primaryHeaderContainerAbsolute}`
            : `${styles.headerSlider} ${styles.primaryHeaderContainerRelative}`
        }
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        style={{
          backgroundColor: theme("#fff", "transparent"),
        }}
      >
        <IoMenu
          style={{
            fontSize: "3rem",
            color: theme("#000", "#fff"),
            cursor: "pointer",
          }}
          onClick={toggleNav}
        />
        <div className={styles.companyLogo}>
          <img
            src={isHovered ? asset116 : isTop ? asset117 : asset116}
            alt="company logo"
            className={styles.companyLogo}
            onClick={() => navigate("/home")}
          />
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "2rem",
          }}
        >
          <div
            className={styles.navIcons}
            onClick={() => setIsSearchOpen(!isSearchOpen)}
          >
            <Asset47 color={theme("#000", "#fff")} width="24" />
          </div>
          <div className={styles.navIcons}>
            <Asset48 color={theme("#000", "#fff")} width="24" />
          </div>
        </div>
      </motion.nav> */}
      <motion.div
        className={`${styles.slidingNav} ${isNavOpen ? styles.open : ""}`}
        initial={{ x: "-100%" }}
        animate={{ x: isNavOpen ? 0 : "-100%" }}
        transition={{ duration: 0.3 }}
      >
        <IoClose
          style={{ fontSize: "3rem", color: theme("#000", "#fff") }}
          onClick={toggleNav}
          className={styles.closeIcon}
        />
        <ul className={styles.slidingNavLinks}>
          {location.pathname !== "/home" && location.pathname !== "/" && (
            <li onClick={() => navigate("/")}>Home</li>
          )}
          {location.pathname !== "/shop" && (
            <li onClick={() => navigate("/shop")}>Shop</li>
          )}
          {location.pathname !== "/giftIdeas" && (
            <li onClick={() => navigate("/giftIdeas")}>Gift Ideas</li>
          )}
          {location.pathname !== "/confirmation" && (
            <li onClick={() => navigate("/confirmation")}>Confirmation</li>
          )}
          {location.pathname !== "/solutions" && (
            <li onClick={() => navigate("/solutions")}>Company Solutions</li>
          )}
          {location.pathname !== "/brand" && (
            <li onClick={() => navigate("/brand")}>Brand</li>
          )}
        </ul>
      </motion.div>
    </div>
  );
};

export default PrimaryHeader;
