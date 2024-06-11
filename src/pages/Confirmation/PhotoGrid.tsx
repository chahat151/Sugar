import { asset101, asset107, asset156, asset160, asset96 } from "assets/images";
import styles from "./PhotoGrid.module.css";

const PhotoGrid = () => {
  return (
    <section className={styles.grid}>
      <div className={[styles.item, styles.item1].join(" ")}>
        <img src={asset160} alt="" style={{ objectPosition: "bottom" }} />
      </div>
      <div className={[styles.item, styles.item2].join(" ")}>
        <img src={asset96} alt="" />
      </div>
      <div className={[styles.item, styles.item3].join(" ")}>
        <img src={asset101} alt="" />
      </div>
      <div className={[styles.item, styles.item4].join(" ")}>
        <img src={asset107} alt="" />
      </div>
      <div className={[styles.item, styles.item5].join(" ")}>
        <img src={asset156} alt="" />
      </div>
    </section>
  );
};
export default PhotoGrid;
