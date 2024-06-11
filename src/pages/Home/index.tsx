import { lazy, Suspense } from "react";

import Hero from "./Hero";
import Occasions from "./Occasions";

import { About1, About2 } from "./About";
import Gifts from "./Gifts";
import Inspiration from "./Inspirations";
import HealthyOptions from "./HealthyOptions";
import Initiatives from "./Initiatives";
import FollowUs from "./FollowUs";
import InstagramPosts from "./InstagramPosts";

const TutorialSection = lazy(
  () => import("components/TutorialSection")
);

function Home() {
  return (
    <main>
      <Hero />
      <Occasions />
      <About1 />
      <Suspense fallback={<div>Loading...</div>}>
        <TutorialSection />
      </Suspense>
      <Gifts />
      <Inspiration />
      <HealthyOptions />
      <Initiatives />
      <FollowUs />
      <InstagramPosts />
      <About2 />
    </main>
  );
}
export default Home;
