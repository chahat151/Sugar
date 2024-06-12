import { useEffect, useState } from "react";
import styles from "./InstagramPosts.module.css";

import {
  asset68,
  asset71,
  asset70,
  asset69,
  asset72,
  asset73,
  asset74,
  asset75,
  asset76,
  asset77,
} from "../../assets/images";
import { Asset57, asset40 } from "../../assets/svgs";

interface Post {
  caption: string;
  tags?: string;
  date: string;
  image: string;
}

const posts: Post[] = [
  {
    caption:
      "Looking for something special for Mother's Day? Let's skip the flowers and go directly for the good stuff. This box is filled with some of our most beloved premium bites. ",
    tags: "Add a personal note the gift, then you are good to go🫶🏼",
    date: "27 April",
    image: asset68,
  },
  {
    caption:
      "The Sugar family🤎 Some have been with us since day one, some are newbies. Any flavors you dream about? Let us know in the comments👇🏽 Maybe we will make it our next family member :)",
    // tags: "Add a personal note the gift, then you are good to go🫶🏼",
    date: "24 April",
    image: asset69,
  },
  {
    caption:
      "Our love for nature is unconditional. We use the energy from our solar system on the roof to run the factory, and we only use the best ingrediens from nature in our products. It is in our dna🌱",
    // tags: "",
    date: "22 April",
    image: asset70,
  },
  {
    caption:
      "Our kind of self-love🤍🧘🏼‍♀️ A book, coffee and one of our new Cubes with premium chocolate bites inside.",
    // tags: "",
    date: "21 April",
    image: asset71,
  },
  {
    caption: "Our interpretation of a Friday bar. Cheers to the weekend!",
    // tags: "",
    date: "19 April",
    image: asset72,
  },
  {
    caption:
      "Get energized before your padel tournament! Now, all players at @racketclub.dk can enjoy natural protein bars and chocolate bars from our Factory in Copenhagen 🎾🍫",
    // tags: "",
    date: "17 April",
    image: asset73,
  },
  {
    caption:
      "Creative ideas for a table setup with our bites. Create an unforgettable party with our limited edition chocolate bites - available exclusive on our webshop✨",
    // tags: "",
    date: "15 April",
    image: asset74,
  },
  {
    caption:
      "Chocolate and coffee are the perfect pair for a Sunday walk! Wishing you a lovely day🌻",
    tags: "#sugarchocolate #allnatural #copenhagenchocolate #chocolate #copenhagen #sugarnatural #chocolatelover #proteinbar #naturalproteinbar #lowincalories #workoutbuddies #træningsmotivation #træningsmakker #workoutbuddy #workoutsnack #træningssnack",
    date: "14 April",
    image: asset75,
  },
  {
    caption:
      "Treat yourself and your guests with our new Premium Box🤍 Discover 10 of our most popular chocolate bites and find your favorite. Enjoy.⁠⁠",
    tags: "#sugarchocolate #allnatural #copenhagenchocolate #chocolate #copenhagen #sugarnatural #chocolatelover #bites #snacktime #littletreat #chocolatetreat #chocolatebites",
    date: "10 April",
    image: asset76,
  },
  {
    caption:
      "Looking for something special for Mother's Day? Let's skip the flowers and go directly for the good stuff. This box is filled with some of our most beloved premium bites. ⁠",
    tags: "Add a personal note the gift, then you are good to go🫶🏼",
    date: "8 April",
    image: asset77,
  },
];

function InstagramPosts() {
  const [socialLinkModal, setSocialLinkModal] = useState<Post>({
    caption: "",
    date: "",
    tags: "",
    image: "",
  });
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const [postsToShow, setPostsToShow] = useState(10); 

  // Adjust number of posts based on viewport size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 568) {
        setPostsToShow(4);
      } else if (window.innerWidth > 568 && window.innerWidth <= 856) {
        setPostsToShow(6);
      } else if (window.innerWidth > 856 && window.innerWidth <= 1024) {
        setPostsToShow(8);
      } else {
        setPostsToShow(10);
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    // Clean-up
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section
      style={{
        padding: "0rem 6vw",
        // position:'relative'
      }}
    >
      <div className={styles.instaContainer}>
        {posts.slice(0, postsToShow).map((post, index) => {
          const { image }: Post = post;
          return (
            <div
              key={index}
              className={styles.instaItem}
              onClick={() => {
                setSocialLinkModal({ ...post });
                setIsModalOpen(true);
              }}
            >
              <img src={image} alt="social link" />
              <div className={styles.instaOverlay}>
                {" "}
                <div className={styles.thunmnailDiv}>
                  <Asset57 fill="white" />
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className={[styles.modal, isModalOpen ? styles.show : ""].join(" ")}>
        <div className={styles.modalContainer}>
          <div className={styles.modalImageDiv}>
            <img
              src={socialLinkModal.image}
              alt=""
              className={styles.modalImage}
            />
          </div>
          <div className={styles.modalContentDiv}>
            <div className={styles.modalContent}>
              <div className={styles.instaUsername}>
                <div>
                  <div className={styles.icon}>
                    <Asset57 fill="black" width="31" />
                  </div>
                </div>
                <div className={styles.usernameDiv}>
                  <p className={styles.username}>Simplychocolatecph</p>
                </div>
                <div
                  className={styles.closeBtn}
                  onClick={() => {
                    setIsModalOpen(false);
                    setSocialLinkModal({
                      caption: "",
                      date: "",
                      tags: "",
                      image: "",
                    });
                  }}
                >
                  <img src={asset40} alt="" className={styles.cross} />
                </div>
              </div>
              <div className={styles.content}>
                {socialLinkModal.caption && <p>{socialLinkModal.caption}</p>}
                {socialLinkModal.tags && (
                  <p style={{ paddingTop: "3.5rem" }}>{socialLinkModal.tags}</p>
                )}
              </div>
              <div className={styles.instaLink}>
                {`${socialLinkModal.date} `}&#8226; View on instagram
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default InstagramPosts;
