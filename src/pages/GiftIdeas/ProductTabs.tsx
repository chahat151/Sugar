import { useState } from "react";
import { AnimatePresence, Variants, motion } from "framer-motion";
import styles from "./ProductTabs.module.css";

import {
  asset123,
  asset154,
  asset152,
  asset126,
  asset150,
  asset124,
  asset153,
  asset125,
  asset151,
} from "../../assets/images";
import AnimatedBtn from "components/Button/AnimatedBtn";

interface Product {
  image: string;
  title: string;
  description: string;
  price: string;
  tag?: string;
}

interface Category {
  tab: string;
  products: Product[];
}
const categories: Category[] = [
  {
    tab: "Under $10",
    products: [
      {
        image: asset123,
        title: "Persian Perry - Cube",
        description: "Persian licorice and white chocolate",
        price: "2,95",
      },
      {
        image: asset124,
        title: "Grainy Billy - Box med 10 stk. bites",
        description: "Mix chocolate mini bars",
        price: "6,95",
      },
      {
        image: asset125,
        title: "Dark Beauties - Gift box with 4 Cubes",
        description: "Cookie dough, chocolate chunks and milk chocolate",
        price: "9,95",
      },
    ],
  },
  {
    tab: "Under $50",
    products: [
      {
        image: asset126,
        title: "Lovebar",
        description: "Marzipan and a double layer of premium dark chocolate",
        price: "21,95",
      },

      {
        image: asset152,
        title: "The Instead of Flowers Kit",
        description: "The Heart box + gift box with 6 cubes",
        price: "34,95",
      },
      {
        image: asset153,
        title: "Ultimate Box - Exclusive gift box with 4 bites",
        description: "Coconut, cranberry and milk chocolate",
        price: "45,95",
      },
    ],
  },
  {
    tab: "Under $99",
    products: [
      {
        image: asset151,
        title: "Exclusive gift box with 6 bites",
        description: "Mix chocolate bestsellers",
        price: "19,95",
      },
      {
        image: asset150,
        title: "Premium Box - Exclusive gift box with 12 bites",
        description: "Mix chocolate bites",
        price: "",
      },
      {
        image: asset154,
        title: "Ultimate Box - Exclusive gift box with 16 bites",
        description: "Mix chocolate bitese chocolate",
        price: "10,95",
      },
    ],
  },
];

const tabContentVariantsY: Variants = {
  initial: {
    y: 100,
    opacity: 0,
  },
  enter: {
    y: 0,
    opacity: 1,
  },
  exit: {
    y: 100,
    opacity: 0,
  },
};

function ProductTabs() {
  const [tabIndex, setTabIndex] = useState<number>(0);

  const underlineVariants = {
    active: { width: "100%" },
    inactive: { width: "0%" },
  };

  return (
    <section>
      <div
        style={{
          padding: "0rem 6vw",
        }}
      >
        <motion.ul className={styles.tabList}>
          {categories.map((initiative, i) => (
            <motion.button
              key={i}
              className={styles.tab}
              onClick={() => {
                setTabIndex(i);
              }}
              // variants={tabVariants}
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
        <AnimatePresence mode="wait">
          <motion.div
            key={categories[tabIndex].tab || "empty"}
            variants={tabContentVariantsY}
            initial="initial"
            animate="enter"
            exit="exit"
            transition={{
              duration: 0.3,
            }}
          >
            <div className={styles.container}>
              {categories[tabIndex].products.map(
                (ocassion: Product, index: number) => {
                  const { title, description, price, tag, image }: Product =
                    ocassion;
                  return (
                    <div className={styles.card} key={index}>
                      <div className={styles.imageContainer}>
                        <img
                          src={image}
                          alt="chocolate"
                          className={styles.image}
                        />
                        {tag && <div className={styles.tag}>{tag}</div>}
                      </div>
                      <div className={styles.cardContent}>
                        <p className={styles.description}>{description}</p>
                        <p className={styles.title}>{title}</p>
                        <p className={styles.price}>From ${price}</p>
                      </div>
                    </div>
                  );
                }
              )}
            </div>
            <div className={styles.btnContainer}>
              <AnimatedBtn
                effect="paint"
                containerStyle={{ borderColor: "#463126" }}
                maskStyle={{ color: "#463126" }}
                btnStyle={{ background: "#463126", color: "white" }}
              >
                See more
              </AnimatedBtn>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
export default ProductTabs;
