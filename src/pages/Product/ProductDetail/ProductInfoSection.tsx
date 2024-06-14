import styles from "./ProductInfoSection.module.css";
import { productInformation } from "data/productsData";
import Accordion from "components/Accordian";
import { asset168, asset169, asset170 } from "assets/images";
import SuggestionSection from './SuggestionSection'
const infoData = [
  {
    title: "It's all natural, always.",
    desc: "Nature is a big part of our DNA. Taste and quality means everything. We are proud to use the best natural ingredients, and we work to ensure that all of our packaging will be natural too. We use no additives, no aromas, no artificial sweeteners. Read more about our love for natural ingredients here.",
    image: asset168,
  },
  {
    title: "Handmade with love",
    desc: "Some things never change. Here at our factory, we still handcraft our chocolates. We meticulously weigh each ingredient in small bowls - not too much, not too little. Why? Well, we believe that by having craftsmanship and eyes on the process, we can better strike the right balance between natural ingredients and premium chocolate, instead of just pushing a button on a machine. We are detail-oriented, maybe a bit nerdy. And, in fact, we believe our craftsmanship contributes to creating the simple and natural experience we strive for every day.",
    image: asset169,
  },
  {
    title: "Because we care",
    desc: "At Sugar, we are proud to be part of the NGO: The Cocoa Horizons Foundation. An organization working passionately and purposefully to improve the lives of local communities in the cocoa industry. As a chocolate manufacturer, we consider it an important duty to be aware of our responsibilities and not least to act accordingly. But for us it is much more than a duty. We feel 100% convinced that the taste of good conscience is the best of all flavors. We find it natural to produce chocolate with responsibility for both people and nature. We actually think you can taste it.",
    image: asset170,
  },
];
function ProductDetail() {
  return (
    <>
      <section
        style={{
          maxWidth: "105.4rem",
          margin: "0rem auto 5rem auto",
          padding: "0rem",
          paddingBottom: "3rem",
        }}
      >
        <h2 style={{ fontSize: "2.4rem", marginBottom: "2.4rem" }}>
          Information
        </h2>
        <Accordion
          data={productInformation}
          borderStyle={{ borderColor: "#d2d1d1", borderWidth: "0.12rem" }}
          headerStyle={{
            fontWeight: 400,
            letterSpacing: "0.03rem",
            fontSize: "1.7rem",
          }}
          // iconStyle={{ }}
        />
      </section>
      <section style={{ padding: "0rem 6vw" }}>
        {infoData.map((info, index) => {
          const { title, desc, image } = info;
          return (
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: "10rem",
                flexDirection: index % 2 === 0 ? "row" : "row-reverse",
                marginBottom: "12rem",
              }}
            >
              <div
                style={{
                  flex: "3",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <img
                  src={image}
                  alt=""
                  style={{
                    objectFit: "cover",
                    objectPosition: "center",
                    width: "90%",
                    height: "100%",
                  }}
                />
              </div>
              <div style={{ flex: 2 }}>
                <h2 className={styles.h2}>{title}</h2>
                <p className={styles.para}>{desc}</p>
              </div>
            </div>
          );
        })}
      </section>
      <SuggestionSection/>
    </>
  );
}

export default ProductDetail;
