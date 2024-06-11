import { asset5, asset22, asset32 } from "../../assets/images";
import styles from "./Inspirations.module.css";

interface Occasion {
  image: string;
  title: string;
  description: string;
  price: string;
  tag?: string; // Optional property
}

const gifts = [
  {
    image: asset22,
    title: "Solid Mix - Box with 75 pcs. Bites",
    description: "Crispy Carrie, Salty Fred og Persian Perry",
    price: "75,95",
    // tag: "Popular",
  },
  {
    image: asset32,
    title: "Grainy Mix - Box with 75 pcs. bites",
    description: "Mix of Bites with chocolate coating",
    price: "75,95",
  },
  {
    image: asset5,
    title: "The Ultimate Box - Exclusive gift box with 80 bites",
    description: "Mix chocolate bites",
    price: "95,95",
  },
];

function Inspiration() {
  return (
    <section
      style={{
        padding: "0rem 6vw",
        textAlign: "center",
      }}
    >
      <p className={styles.subtitle}>Confirmation bites</p>
      <h2 className={styles.h2}>Choose between 3 flavor variations</h2>
      <div className={styles.container}>
        {gifts.map((ocassion, index) => {
          const { title, description, price, tag, image }: Occasion = ocassion;
          return (
            <div className={styles.card} key={index}>
              <div className={styles.imageContainer}>
                <img src={image} alt="chocolate" className={styles.image} />
                {tag && <div className={styles.tag}>{tag}</div>}
              </div>
              <div className={styles.cardContent}>
                <p className={styles.description}>{description}</p>
                <p className={styles.title}>{title}</p>
                <p className={styles.price}>From ${price}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
export default Inspiration;
