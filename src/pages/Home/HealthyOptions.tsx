import styles from "./HealthyOptions.module.css";

import { asset33, asset34 } from "../../assets/images";
import { UnderlineBtn } from "components/Button/UnderlineBtn";

function HealthyOptions() {
  return (
    <section
      style={{
        padding: "0rem 6vw",
        textAlign: "center",
      }}
    >
      <h2
        className="h2"
        style={{
          fontSize: "2.84rem",
          marginBottom: "6rem",
          transform: "scaleY(1.3)",
        }}
      >
        Looking for vegan or gluten-free chocolate?
      </h2>
      <div className={styles.container}>
        {[
          { image: asset33, title: "Vegan chocolate" },
          { image: asset34, title: "Gluten-free chocolate" },
        ].map((option, index) => {
          return (
            <div key={index} className={styles.card}>
              <img
                src={option.image}
                alt="chocolate"
                className={styles.image}
              />
              <div className={styles.contentDiv}>
                <h2
                  className="h2"
                  style={{
                    fontSize: "2.84rem",
                    color: "white",
                    marginBottom: "2rem",
                    transform: "scale(1.2,1.5)",
                  }}
                >
                  {option.title}
                </h2>
                <UnderlineBtn
                  inverted
                  style={{ color: "#fff" }}
                  underlineColor="#fff"
                >
                  See the selection
                </UnderlineBtn>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
export default HealthyOptions;
