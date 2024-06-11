import Hero from "./Hero";
import Message from "./Message";
import Products from "./Products";
import PersonalisedCard from "./PersonalisedCard";
import ProductTabs from "./ProductTabs";
import { Helmet } from "react-helmet-async";

const index = () => {
  return (
    <main>
      <Helmet>
        <title>Gift Ideas</title>
      </Helmet>
      <Hero />
      <Message />
      <Products />
      <PersonalisedCard />
      <ProductTabs />
    </main>
  );
};
export default index;
