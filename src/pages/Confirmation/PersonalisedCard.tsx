import { asset166, asset167 } from "assets/images";
import styles from "./PersonalisedCard.module.css";
const PersonalisedCard = () => {
  return (
    <section style={{ padding: "0rem 8vw" }}>
      <div style={{ display: "flex", gap: "1rem" }}>
        <div style={{ flex: 1.2, display: "flex", gap: "1rem" }}>
          <div style={{ flex: 1 }}>
            <img src={asset166} alt="" style={{ width: "100%" }} />
          </div>
          <div
            style={{
              flex: 1,
              alignSelf: "center",
              // marginLeft: "-8.5rem",
            }}
          >
            <img
              src={asset167}
              alt=""
              style={{ width: "100%", filter: "brightness(110%)" }}
            />
          </div>
        </div>
        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <div style={{ width: "60%", margin: "0 auto" }}>
            <h2 className={styles.h2}>Chocolate for the confirmand✨</h2>
            <p className={styles.para}>
              Create an unforgettable celebration for the confirmand with the
              chocolate that adorns the table and spreads joy among the guests -
              both children and adults. Because, even though confirmation marks
              the transition into adulthood, it doesn't mean goodbye to the joys
              of childhood. Especially not chocolate!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default PersonalisedCard;
