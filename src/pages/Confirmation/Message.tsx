import styles from "./Message.module.css";

import { farmer } from "../../assets/images";

function Initiatives() {
  return (
    <section style={{ padding: "5rem 6vw", backgroundColor: "#efefef" }}>
      <div className={styles.container}>
        <div style={{ height: "58rem" }}>
          <img src={farmer} alt="farmer" className={styles.image} />
        </div>
        <div className={styles.contentContainer}>
          <div className={styles.InnerContentContainer}>
            <p className={styles.subtitle}>Spoil your guests</p>
          </div>
          <div className={styles.titleWrapper}>
            <p className={styles.title}>Create a unique celebration</p>
          </div>
          <div>
            <p className={styles.content}>
              The aesthetic confirmation bites are ideal for those who want a
              unique and aesthetic table decoration for the big celebration day.
              Combine your favorite color combination and create a unique theme
              in the spirit of the confirmand. <br />
              <br />
              Last year, everything sold out in record time, so you have to be
              quick if you want to spoil both the confirmand and guests with
              premium chocolate for the big celebration day.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Initiatives;
