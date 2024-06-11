import PrimaryHeader from "components/Header/PrimaryHeader";
import styles from "./Hero.module.css";
import { asset120 } from "assets/images";
import TextSlider from "components/TextSlider";

function Hero() {
  return (
    <section className={styles.shopContainer}>
      <div className={styles.shopBG}>
        <img
          className={styles.shopBGImage}
          src={asset120}
          alt="people enjoying chocolates"
        />
      </div>
      <PrimaryHeader />
      <div className={styles.shopContent}>
        <h1 className={styles.h1}>The complete selection</h1>
      </div>
      <div className={styles.secondaryHeaderContainer}>
        <div className={styles.innerSecondaryHeaderContainer}>
          <TextSlider
            texts={["Enjoy a free box of chocolates for purchases above 60€."]}
          />
        </div>
      </div>
    </section>
  );
}
export default Hero;
