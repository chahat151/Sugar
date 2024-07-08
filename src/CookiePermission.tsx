import { recycle } from "assets/svgs";
import styles from "./CookiePermission.module.css";
import { useEffect, useState } from "react";
const CookiePermission = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
      if (isModalOpen) {
        document.body.classList.add("no-scroll");
      } else {
        document.body.classList.remove("no-scroll");
      }
    }, [isModalOpen]);

  return (
    <>
      <div className={styles.container}>
        <img
          src={recycle}
          alt="recycle icon"
          className={styles.svg}
          onClick={() => setIsModalOpen(true)}
        />
      </div>
      {isModalOpen && (
        <div className={styles.modalOverlay}>
          <div className={styles.modalWrapper}>

          </div>
        </div>
      )}
    </>
  );
};
export default CookiePermission;
