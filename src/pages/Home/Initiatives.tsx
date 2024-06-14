import { useEffect, useState } from "react";
import { AnimatePresence, Variants, motion } from "framer-motion";
import styles from "./Initiatives.module.css";

import { asset35, asset37, asset36 } from "../../assets/images";

interface Initiative {
  tab: string;
  title: string;
  subTitle: string;
  content: string;
  image: string;
}

const initiatives: Initiative[] = [
  {
    tab: "Greenhouse",
    title: "Our friends in Africa",
    subTitle: "Greenhouse Project",
    content:
      "In a greenhouse near a cocoa plantation close to San Pédro in Ivory Coast, a group of local women cultivate vegetables and fruits. It's not possible to grow vegetables and fruits in that area due to soil conditions, lack of water, and the heat. But with our greenhouse, the right soil, and water supply, we have contributed to a nourishing future for our cocoa farmers and their families.",
    image: asset35,
  },
  {
    tab: "Solar panels",
    title: "We love the sun",
    subTitle: "Solar panels",
    content:
      "Normally, the sun is one of chocolate's worst enemies – both sunlight and the heat from its rays can damage chocolate. But at Sugar Chocolate in Copenhagen, the two are actually best friends. We've installed our very own solar panel system on the roof of the factory. This means that we are 100% self-sufficient with energy when the sun is shining.",
    image: asset36,
  },
  {
    tab: "Environment",
    title: "Our green journey",
    subTitle: "Environment",
    content:
      "It is quite understandable that there is a significant focus on packaging when discussing the environment and recycling, and at Sugar Chocolate, we are constantly working towards our goal of 100% recyclable packaging. We are on a mission. Imagine an edible wrapper - that is, no waste. We're not quite there yet, but we're on our way, and until we reach our goal, we're doing everything we can to improve more and more.",
    image: asset37,
  },
];

const tabContentVariantsY: Variants = {
  initial: {
    y: 10,
    opacity: 0,
  },
  enter: {
    y: 0,
    opacity: 1,
  },
  exit: {
    y: -10,
    opacity: 0,
  },
};
const tabContentVariantsX: Variants = {
  initial: {
    x: 10,
    opacity: 0,
  },
  enter: {
    x: 0,
    opacity: 1,
  },
  exit: {
    x: -10,
    opacity: 0,
  },
};

function preloadImages(urls: string[]) {
  urls.forEach((url) => {
    const img = new Image();
    img.src = url;
  });
}

function Initiatives() {
  const [tabIndex, setTabIndex] = useState<number>(0);

  useEffect(() => {
    const imageUrls = initiatives.map((initiative) => initiative.image);
    preloadImages(imageUrls);
  }, []);

  const tabVariants = {
    active: { scale: 1.5 },
    inactive: { scale: 1 },
  };
  const underlineVariants = {
    active: { width: "100%" },
    inactive: { width: "0%" },
  };

  return (
    <section>
      <div
        style={
          {
            padding: "0rem 6vw",
            "--background-image": `url(${initiatives[tabIndex].image})`,
          } as React.CSSProperties
        }
      >
        <div className={styles.container}>
          <div className={styles.imgContainer}>
            <AnimatePresence mode="wait">
              <motion.div
                key={initiatives[tabIndex].title || "empty"}
                variants={tabContentVariantsX}
                initial="initial"
                animate="enter"
                exit="exit"
                transition={{
                  duration: 0.3,
                }}
              >
                <div style={{ height: "60rem" }}>
                  <img
                    src={initiatives[tabIndex].image}
                    alt={initiatives[tabIndex].tab}
                    className={styles.image}
                  />
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
          <div className={styles.contentContainer}>
            <AnimatePresence mode="wait">
              <motion.div
                key={initiatives[tabIndex].title || "empty"}
                variants={tabContentVariantsY}
                initial="initial"
                animate="enter"
                exit="exit"
                transition={{
                  duration: 0.3,
                }}
                className="abccc"
              >
                <div className={styles.InnerContentContainer}>
                  <p className={styles.subtitle}>
                    {initiatives[tabIndex].subTitle}
                  </p>
                </div>
                <div className={styles.titleWrapper}>
                  <p className={styles.title}>{initiatives[tabIndex].title}</p>
                </div>
                <div>
                  <p className={styles.content}>
                    {initiatives[tabIndex].content}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
        <motion.ul className={styles.tabList}>
          {initiatives.map((initiative, i) => (
            <motion.button
              key={i}
              className={styles.tab}
              onClick={() => {
                setTabIndex(i);
              }}
              variants={tabVariants}
              animate={tabIndex === i ? "active" : "inactive"}
            >
              <p className={styles.text}>{initiative.tab}</p>
              <div className={styles.underlineWrapper}>
                <motion.div
                  className={styles.underline}
                  variants={underlineVariants}
                  animate={tabIndex === i ? "active" : "inactive"}
                />
              </div>
            </motion.button>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
export default Initiatives;
