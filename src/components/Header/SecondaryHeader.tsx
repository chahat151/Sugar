import TextSlider from "../TextSlider";
import styles from "./PrimaryHeader.module.css";

function SecondaryHeader() {
  return (
    <div className={styles.secondaryHeaderContainer}>
      <TextSlider
        texts={[
          "Internation Delivery",
          "New chocolate bites online now!",
          "Get a chocolate box with purchase over ₹799",
        ]}
      />
    </div>
  );
}
export default SecondaryHeader;
