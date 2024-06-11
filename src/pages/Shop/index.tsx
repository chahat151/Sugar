// import styles from "./index.module.css";
import { Helmet } from "react-helmet-async";
import Hero from "./Hero";
import Products from "./Products";

function Shop() {
  return (
    <main>
      <Helmet>
        <title>Shop</title>
      </Helmet>
      <Hero />
      <Products />
    </main>
  );
}
export default Shop;
