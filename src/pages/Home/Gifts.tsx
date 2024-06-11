import styles from "./Gifts.module.css";
import { asset115, asset109, asset114 } from "../../assets/images";
import AnimatedBtn from "components/Button/AnimatedBtn";

interface Gift {
  image: string;
  btnText: string;
}

const gifts: Gift[] = [
  {
    image: asset115,
    btnText: "For festive occasions",
  },
  {
    image: asset109,
    btnText: "For the confirmation",
  },
  {
    image: asset114,
    btnText: "For festive hostess",
  },
];

function Gifts() {
  return (
    <section
      style={{
        textAlign: "center",
      }}
    >
      <h2 className={styles.h2}>The gift for any occasion</h2>
      <p className={styles.title}>Explore our gift universe</p>
      <div className={styles.giftContainer}>
        {gifts.map((gift, index) => {
          const { image, btnText } = gift;
          return (
            <div className={styles.card} key={index}>
              <img src={image} alt="chocolate" className={styles.image} />
              <div className={styles.btnContainer}>
                <AnimatedBtn
                  effect="paint"
                  maskStyle={{ fontSize: "1.4rem", letterSpacing: "0.045rem" }}
                  btnStyle={{ fontSize: "1.4rem", letterSpacing: "0.045rem" }}
                >
                  {btnText}
                </AnimatedBtn>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
export default Gifts;
