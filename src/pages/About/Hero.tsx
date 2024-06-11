import PrimaryHeader from "components/Header/PrimaryHeader";
import styles from "./Hero.module.css";
import { asset87 } from "../../assets/images";
import AnimatedBtn from "components/Button/AnimatedBtn";

function Hero() {
  return (
    <section className={styles.heroContainer}>
      <div className={styles.heroBG}>
        <img
          className={styles.heroBGImage}
          src={asset87}
          alt="people enjoying chocolates"
        />
      </div>
      <PrimaryHeader />
      <div className={styles.heroContent}>
        <h1 className={styles.h1}>Premium chocolate</h1>
        <div className={styles.contentWrapper}>
          <p>Handmade in Copenhagen with the best natural ingredients</p>
        </div>
        <div style={{ marginTop: "3.5rem" }}>
          <AnimatedBtn effect="paint">
            Bites for the season's celebrations
          </AnimatedBtn>
        </div>
      </div>
    </section>
  );
}
export default Hero;
