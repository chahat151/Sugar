import Hero from "./Hero";
import Inspirations from "./Inspirations";
import PersonalisedCard from "./PersonalisedCard";
import PhotoGrid from "./PhotoGrid";
import Message from "./Message";
import { Helmet } from "react-helmet-async";

const index = () => {
  return (
    <main>
      <Helmet>
        <title>Confirmation</title>
      </Helmet>
      <Hero />
      <PersonalisedCard />
      <Inspirations />
      <Message />
      <PhotoGrid />
    </main>
  );
};
export default index;
