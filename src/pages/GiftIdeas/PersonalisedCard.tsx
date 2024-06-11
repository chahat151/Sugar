import { asset166, asset167 } from "assets/images";
import styles from "./PersonalisedCard.module.css";
const PersonalisedCard = () => {
  return (
    <section style={{ padding: "0rem 8vw" }}>
      <div style={{ display: "flex" }}>
        <div style={{ flex: 1, display: "flex" }}>
          <div style={{ flex: 1 }}>
            <img src={asset166} alt="" style={{ width: "90%" }} />
          </div>
          <div
            style={{
              flex: 1,
              alignSelf: "center",
              marginLeft: "-8.5rem",
            }}
          >
            <img
              src={asset167}
              alt=""
              style={{ width: "70%", filter: "brightness(110%)" }}
            />
          </div>
        </div>
        <div
          style={{
            flex: 0.4,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <h2 className={styles.h2}>Add a personal postcard 💌</h2>
          <p className={styles.para}>
            Make your chocolate gift extra personal with a message from you. Add
            a postcard for free at checkout, and we'll send it along with your
            gift.
          </p>
        </div>
      </div>
    </section>
  );
};
export default PersonalisedCard;
