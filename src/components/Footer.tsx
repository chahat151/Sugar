import {
  asset38,
  Asset56,
  Asset57,
  asset58,
  asset59,
  asset60,
  asset61,
  asset62,
  asset63,
  asset64,
  asset65,
  asset66,
} from "assets/svgs";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerLinksContainer}>
        <div className={styles.footerLinkList}>
          <div className={styles.innerFooterLinkList}>
            <h3 className={styles.linkTitle}>Say hi!</h3>
            <div>
              <p className={styles.link}>
                digital@sugarchocolate.dk
                <br />
                <br />
                Sugar<sup style={{ fontSize: "1rem" }}>®</sup>
                <br />
                Amager Landevej 123
                <br />
                2770 Kastrup
                <br />
                CVR. nr. 32761844
              </p>
            </div>
            <div>
              <img src={asset38} alt="" />
            </div>
          </div>
        </div>
        <div className={styles.footerLinkList}>
          <div className={styles.innerFooterLinkList}>
            <h3 className={styles.linkTitle}>Info</h3>
            <div className={styles.linkList}>
              <p className={styles.link}>Search</p>
              <p className={styles.link}>Shipping and delivery</p>
              <p className={styles.link}>Privacy policy</p>
              <p className={styles.link}>Inspection report</p>
              <p className={styles.link}>Cookies</p>
              <p className={styles.link}>Frequently asked questions</p>
              <p className={styles.link}>Contact</p>
              <p className={styles.link}>Subscription policy</p>
              <p className={styles.link}>See my subscription</p>
              <p className={styles.link}>Job</p>
              <p className={styles.link}>Impressum</p>
            </div>
          </div>
        </div>

        <div className={styles.footerLinkList}>
          <div className={styles.innerFooterLinkList}>
            <h3 className={styles.linkTitle}>
              About Sugar<sup style={{ fontSize: "1.4rem" }}>®</sup>
            </h3>
            <div className={styles.linkList}>
              <p className={styles.link}>About Us</p>
              <p className={styles.link}>All natural</p>
              <p className={styles.link}>Sustainability</p>
              <p className={styles.link}>Responsibility</p>
              <p className={styles.link}>Our team</p>
            </div>
          </div>
        </div>
        <div className={styles.footerLinkList}>
          <div className={styles.innerFooterLinkList}>
            <h3 className={styles.linkTitle}>Shop</h3>

            <div className={styles.linkList}>
              <p className={styles.link}>Bars</p>
              <p className={styles.link}>Bites</p>
              <p className={styles.link}>Protein</p>
              <p className={styles.link}>Gift Boxes</p>
              <p className={styles.link}>Company Gifts</p>
              <p className={styles.link}>Christmas calendars</p>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.socialLinks}>
        <div className={styles.socialLink}>
          <Asset56 fill="white" width="22" />
        </div>
        <div className={styles.socialLink}>
          <Asset57 fill="white" width="22" />
        </div>
      </div>
      <div className={styles.copyrightContainer}>
        <div>
          <p className={styles.copyrightText}>
            © 2024 - Sugar® Powered by Shopify
          </p>
        </div>
        <div className={styles.cardContainer}>
          <img src={asset58} alt="card-logo" />
          <img src={asset59} alt="card-logo" />
          <img src={asset60} alt="card-logo" />
          <img src={asset61} alt="card-logo" />
          <img src={asset62} alt="card-logo" />
          <img src={asset63} alt="card-logo" />
          <img src={asset64} alt="card-logo" />
          <img src={asset65} alt="card-logo" />
          <img src={asset66} alt="card-logo" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
