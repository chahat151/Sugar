import PrimaryHeader from "components/Header/PrimaryHeader";
import styles from "./Hero.module.css";
import { asset91 } from "assets/images";

function Hero() {
  return (
    <section className={styles.heroContainer}>
      <div className={styles.heroBG}>
        <img
          className={styles.heroBGImage}
          src={asset91}
          alt="people enjoying chocolates"
        />
      </div>
      <PrimaryHeader />
      <div className={styles.heroContent}>
        <h1 className={styles.h1}>Tasty chocolate gifts</h1>
        <div className={styles.contentWrapper}>
          <p>Handmade chocolate with the finest natural ingredients</p>
        </div>
      </div>
    </section>
  );
}
export default Hero;
