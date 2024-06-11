import { useEffect, useState } from "react";
import {
  asset165,
  asset164,
  asset163,
  asset162,
  asset161,
  asset160,
} from "../../assets/images";
import styles from "./Products.module.css";
import AnimatedBtn from "components/Button/AnimatedBtn";
import { useNavigate } from "react-router-dom";

interface Product {
  image: string;
  title: string;
  description: string;
  tag?: string; // Optional property
}

const productsData: Product[] = [
  {
    image: asset161,
    title: "For the Birthday Party",
    description:
      "Create smiles and joy for the birthday celebrant with a premium chocolate gift that is sure to be well received.",
  },
  {
    image: asset164,
    title: "For the confirmation",
    description:
      "Create an unforgettable celebration for the confirmant with chocolate that adorns the table and spreads joy among the guests.",
  },
  {
    image: asset160,
    title: "For someone dear to you",
    description:
      "We love just-because gifts. Those small thoughtful moments in everyday life where we remember to appreciate each other.",
  },
  {
    image: asset163,
    title: "For the hostess",
    description:
      "Should the evening's host or hostess be pampered a little extra? Forget all about the flowers. Surprise them with a premium chocolate gift.",
  },
  {
    image: asset165,
    title: "For the anniversary party",
    description:
      "Wish congratulations to the party's jubilee with a gift that will undoubtedly stand out among the many bouquets of flowers",
  },
  {
    image: asset162,
    title: "For you and only you",
    description:
      "Persian Perry, Cookie Joe, or Dark Marci? Treat yourself and enjoy your favorite chocolates. You deserve it!",
  },
];

function Products() {
  const navigate = useNavigate();
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    if (products.length === 0) {
      setProducts(productsData);
    }
  }, [products.length]);

  if (products.length === 0) {
    return (
      <section
        style={{
          textAlign: "center",
        }}
      >
        <p>No Products Found</p>
        <AnimatedBtn
          effect="paint"
          containerStyle={{ borderColor: "#463126", marginTop: "2rem" }}
          maskStyle={{ color: "#463126" }}
          btnStyle={{ background: "#463126", color: "white" }}
          onClick={() => navigate("/home")}
        >
          Go Home
        </AnimatedBtn>
      </section>
    );
  }
  return (
    <section
      style={{
        textAlign: "center",
      }}
    >
      <div className={styles.container}>
        {products.map((ocassion: Product, index: number) => {
          const { title, description, tag, image } = ocassion;
          return (
            <div className={styles.card} key={index}>
              <div className={styles.imageContainer}>
                <img src={image} alt="chocolate" className={styles.image} />
                {tag && <div className={styles.tag}>{tag}</div>}
              </div>
              <div className={styles.cardContent}>
                <p className={styles.title}>{title}</p>
                <p className={styles.description}>{description}</p>
                <p>see more</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
export default Products;
