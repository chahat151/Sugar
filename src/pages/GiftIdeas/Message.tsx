import styles from "./Message.module.css";

const Message = () => {
  return (
    <section
      className="about"
      style={{
        textAlign: "center",
      }}
    >
      <div className={styles.innerAbout}>
        <p className={styles.subtitle}>Indian-produced chocolate</p>
        <h2 className={styles.h2}>For any occasion</h2>
        <p className={styles.para}>
          Is there anything better than surprising someone dear to you with a
          tasty chocolate gift? Our skilled chocolatiers have curated an
          exclusive selection of natural chocolate in gift boxes. So, whatever
          the occasion, we have a tasty chocolate gift that fits.
        </p>
      </div>
    </section>
  );
};
export default Message;
