import { useEffect, useState } from "react";
import styles from "./Products.module.css";
import AnimatedBtn from "components/Button/AnimatedBtn";
import { useNavigate } from "react-router-dom";
import LazyImage from "components/LazyImage";

interface Product {
  image: string;
  smallImage: string;
  title: string;
  description: string;
  price: string;
  tag?: string;
}

const productsData: Product[] = [
  {
    image:
      "https://github.com/chahat151/sugar_assets/blob/main/asset155.jpeg?raw=true",
    smallImage:
      "https://github.com/chahat151/sugar_assets/blob/main/asset155-small.jpeg?raw=true",
    title: "Enjoy after last supper",
    description: "Box with 12 pieces of chocolate",
    price: "19,95",
  },
  {
    image:
      "https://github.com/chahat151/sugar_assets/blob/main/asset123.jpeg?raw=true",
    smallImage:
      "https://github.com/chahat151/sugar_assets/blob/main/asset123-small.jpeg?raw=true",
    title: "Persian Perry - Cube",
    description: "Persian licorice and white chocolate",
    price: "10,95",
  },
  {
    image:
      "https://github.com/chahat151/sugar_assets/blob/main/asset154.jpeg?raw=true",
    smallImage:
      "https://github.com/chahat151/sugar_assets/blob/main/asset154-small.jpeg?raw=true",
    title: "Pink Polly - Cube with 12 bites",
    description: "Raspberries, Persian licorice and white chocolate",
    price: "10,95",
  },
  {
    image:
      "https://github.com/chahat151/sugar_assets/blob/main/asset124.jpeg?raw=true",
    smallImage:
      "https://github.com/chahat151/sugar_assets/blob/main/asset124-small.jpeg?raw=true",
    title: "Grainy Billy - Box med 10 stk. bites",
    description: "Mix chocolate mini bars",
    price: "71,95",
  },
  {
    image:
      "https://github.com/chahat151/sugar_assets/blob/main/asset153.jpeg?raw=true",
    smallImage:
      "https://github.com/chahat151/sugar_assets/blob/main/asset153-small.jpeg?raw=true",
    title: "The Ultimate Box - Exclusive gift box with 4 bites",
    description: "Coconut, cranberry and milk chocolate",
    price: "10,95",
  },
  {
    image:
      "https://github.com/chahat151/sugar_assets/blob/main/asset125.jpeg?raw=true",
    smallImage:
      "https://github.com/chahat151/sugar_assets/blob/main/asset125-small.jpeg?raw=true",
    title: "Dark Beauties - Gift box with 4 Cubes",
    description: "Cookie dough, chocolate chunks and milk chocolate",
    price: "21,95",
  },
  {
    image:
      "https://github.com/chahat151/sugar_assets/blob/main/asset152.jpeg?raw=true",
    smallImage:
      "https://github.com/chahat151/sugar_assets/blob/main/asset152-small.jpeg?raw=true",
    title: "The Instead of Flowers Kit",
    description: "The Heart box + gift box with 2 cubes",
    price: "",
  },
  {
    image:
      "https://github.com/chahat151/sugar_assets/blob/main/asset126.jpeg?raw=true",
    smallImage:
      "https://github.com/chahat151/sugar_assets/blob/main/asset126-small.jpeg?raw=true",
    title: "Lovebar",
    description: "Marzipan and a double layer of premium dark chocolate",
    price: "",
  },
  {
    image:
      "https://github.com/chahat151/sugar_assets/blob/main/asset150.jpeg?raw=true",
    smallImage:
      "https://github.com/chahat151/sugar_assets/blob/main/asset150-small.jpeg?raw=true",
    title: "Protein Mix 30-Pack",
    description: "Flavor pack with 3 different protein bites",
    price: "",
  },
  {
    image:
      "https://github.com/chahat151/sugar_assets/blob/main/asset127.jpeg?raw=true",
    smallImage:
      "https://github.com/chahat151/sugar_assets/blob/main/asset127-small.jpeg?raw=true",
    title: "FCK chocolate bar",
    description: "Crunchy caramel, sea salt and premium milk chocolate",
    price: "",
  },
  {
    image:
      "https://github.com/chahat151/sugar_assets/blob/main/asset151.jpeg?raw=true",
    smallImage:
      "https://github.com/chahat151/sugar_assets/blob/main/asset151-small.jpeg?raw=true",
    title: "Creamy Carol",
    description: "Soft caramel and premium dark chocolate",
    price: "",
  },
  {
    image:
      "https://github.com/chahat151/sugar_assets/blob/main/asset128.jpeg?raw=true",
    smallImage:
      "https://github.com/chahat151/sugar_assets/blob/main/asset128-small.jpeg?raw=true",
    title: "Salty Fred",
    description: "Salted almonds and premium dark chocolate",
    price: "",
  },
  {
    image:
      "https://github.com/chahat151/sugar_assets/blob/main/asset149.jpeg?raw=true",
    smallImage:
      "https://github.com/chahat151/sugar_assets/blob/main/asset149-small.jpeg?raw=true",
    title: "SUGAR Cookie Joe - Cube with 9 bites",
    description: "Cookie dough, chocolate chunks and milk chocolate",
    price: "",
  },
  {
    image:
      "https://github.com/chahat151/sugar_assets/blob/main/asset129.jpeg?raw=true",
    smallImage:
      "https://github.com/chahat151/sugar_assets/blob/main/asset129-small.jpeg?raw=true",
    title: "Crispy Carrie",
    description: "Crunchy caramel, sea salt and premium milk chocolat",
    price: "",
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
          const { title, description, price, tag, image, smallImage } =
            ocassion;
          return (
            <div className={styles.card} key={index}>
              <div className={styles.imageContainer}>
                {/* <img src={image} alt="chocolate" className={styles.image} /> */}
                <LazyImage
                  src={image}
                  placeholderSrc={smallImage}
                  alt="Image 1"
                />
                {tag && <div className={styles.tag}>{tag}</div>}
              </div>
              <div className={styles.cardContent}>
                <p className={styles.description}>{description}</p>
                <p className={styles.title}>{title}</p>
                <p className={styles.price}>₹{price}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
export default Products;
