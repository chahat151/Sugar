import { Helmet } from "react-helmet-async";
import Hero from "./Hero";

const index = () => {
  return (
    <main>
      <Helmet>
        <title>About Us</title>
      </Helmet>
      <Hero />
    </main>
  );
};
export default index;
