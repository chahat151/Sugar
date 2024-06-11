import styles from "./About.module.css";

const about = [
  `At Sugar, we create responsible and fair gourmet chocolate of exclusive quality using only the finest natural ingredients. Nothing else. We offer a luxurious selection of gift boxes and chocolate assortments for any special occasion, whether it's holidays like Christmas and Easter or just a sweet treat on the dullest of Mondays.`,
  `We also have a tempting range of premium chocolate bars for you to enjoy all to yourself. Whether you prefer filled chocolates with crunch and caramel or solid chocolate with sea salt and nuts, you'll undoubtedly find more than one variant in the shop that will make your mouth water. Mix and match your favorite chocolate bars and chocolate squares individually, or delve into exciting flavor explosions with our bar kits and assorted boxes of delectable mini chocolates in bites, where you can sink your teeth into all our exclusive flavor varieties with dark, milk, or white chocolate. Created with honest and genuine quality ingredients by Danish chocolatiers.`,
  `Give your workout a boost with our selection of delicious protein bars with chocolate, completely free of artificial additives. Gain superpowers after training with a natural protein bar from Sugar made from pure quality ingredients that actually taste good. Here in the webshop, you'll also find our complete range of protein bars gathered in a hard-hitting bar kit.`,
  `The chocolate from Sugar has both attitude and character, and you can be sure that it's produced with respect for both people and our planet. Treat yourself to our limited editions, where you'll find the unique among our temptations in glittering paper, visiting our regular assortment here and there. Our beautifully packaged chocolates are a true color spectacle, and the packaging speaks its clear language because the boxes from Sugar contain something truly extraordinary.`,
  `We always stock the complete range of our premium chocolate here in the official Sugar webshop so you can shop exactly the chocolate that suits your taste. Experience our entire sweet universe right here in the chocolate shop that's always open, and try to resist the temptation to shop one of each online. You can also write a personal message on one of our postcards and send the chocolate to someone you care about. You know well that there's always an occasion for exceptionally good chocolate.`,
];

export const About1 = () => {
  return (
    <section
      className="about"
      style={{
        background: "#efefef",
        padding: "6rem",
      }}
    >
      <div className={styles.innerAbout}>
        <h2 className={styles.h2}>It's all natural</h2>
        <p className={styles.para}>
          At Sugar, we only use natural ingredients, steering clear of synthetic
          powders and artificial additives. We're a bit picky when it comes to
          our ingredients. We only use the best nature has to offer – taste and
          quality mean everything to us. Always. We spend a lot of time
          searching for new and exciting flavors, and we're willing to go to
          great lengths for new innovative opportunities, but we never
          compromise on good taste. This is our love for natural chocolate.
        </p>
        <p>Read more here</p>
      </div>
    </section>
  );
};

export const About2 = () => {
  return (
    <section>
      <h2
        className="h2"
        style={{
          fontSize: "2.84rem",
          // marginBottom: "6rem",
          transform: "scaleY(1.3)",
        }}
      >
        Sugar - Official gourmet chocolate webshop
      </h2>
      {about.map((para, index) => {
        return (
          <p
            key={index}
            style={{
              marginTop: "2.2rem",
              fontWeight: "300",
              fontSize: "1.8rem",
              lineHeight: "1.4",
            }}
          >
            {para}
          </p>
        );
      })}
    </section>
  );
};
