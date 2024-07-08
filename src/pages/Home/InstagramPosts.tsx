import { useEffect, useRef, useState } from "react";
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

import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { preloadImages } from "utils/functions";

interface Post {
  id: string;
  caption: string;
  tags?: string;
  date: string;
  image: string;
}

const posts: Post[] = [
  {
    id: "da9efd82-9f41-4192-a8e7-93a40d9f1ace",
    caption:
      "Looking for something special for Mother's Day? Let's skip the flowers and go directly for the good stuff. This box is filled with some of our most beloved premium bites. ",
    tags: "Add a personal note the gift, then you are good to go🫶🏼",
    date: "27 April",
    image: asset68,
  },
  {
    id: "26a80a0b-9f85-42c6-83bf-894b59e63a50",
    caption:
      "The Sugar family🤎 Some have been with us since day one, some are newbies. Any flavors you dream about? Let us know in the comments👇🏽 Maybe we will make it our next family member :)",
    // tags: "Add a personal note the gift, then you are good to go🫶🏼",
    date: "24 April",
    image: asset69,
  },
  {
    id: "438be1bd-6b59-4739-b6c5-b5f26dff9d22",
    caption:
      "Our love for nature is unconditional. We use the energy from our solar system on the roof to run the factory, and we only use the best ingrediens from nature in our products. It is in our dna🌱",
    // tags: "",
    date: "22 April",
    image: asset70,
  },
  {
    id: "25f355bc-52e5-4acc-851a-a9fb55d0bbe8",
    caption:
      "Our kind of self-love🤍🧘🏼‍♀️ A book, coffee and one of our new Cubes with premium chocolate bites inside.",
    // tags: "",
    date: "21 April",
    image: asset71,
  },
  {
    id: "0ad94c6c-be74-405d-8eb7-a527f4b465a8",
    caption: "Our interpretation of a Friday bar. Cheers to the weekend!",
    // tags: "",
    date: "19 April",
    image: asset72,
  },
  {
    id: "ff6b5fc5-4f78-4ca9-897c-1efb7de6f1a4",
    caption:
      "Get energized before your padel tournament! Now, all players at @racketclub.dk can enjoy natural protein bars and chocolate bars from our Factory in Copenhagen 🎾🍫",
    // tags: "",
    date: "17 April",
    image: asset73,
  },
  {
    id: "2fde13fc-51d2-49ad-90de-acd7d2f8f77d",
    caption:
      "Creative ideas for a table setup with our bites. Create an unforgettable party with our limited edition chocolate bites - available exclusive on our webshop✨",
    // tags: "",
    date: "15 April",
    image: asset74,
  },
  {
    id: "13b4f880-fc5a-409e-bdbe-c0b5a9af00aa",
    caption:
      "Chocolate and coffee are the perfect pair for a Sunday walk! Wishing you a lovely day🌻",
    tags: "#sugarchocolate #allnatural #copenhagenchocolate #chocolate #copenhagen #sugarnatural #chocolatelover #proteinbar #naturalproteinbar #lowincalories #workoutbuddies #træningsmotivation #træningsmakker #workoutbuddy #workoutsnack #træningssnack",
    date: "14 April",
    image: asset75,
  },
  {
    id: "561f71f0-b62c-4f09-8dde-e4b57f119960",
    caption:
      "Treat yourself and your guests with our new Premium Box🤍 Discover 10 of our most popular chocolate bites and find your favorite. Enjoy.⁠⁠",
    tags: "#sugarchocolate #allnatural #copenhagenchocolate #chocolate #copenhagen #sugarnatural #chocolatelover #bites #snacktime #littletreat #chocolatetreat #chocolatebites",
    date: "10 April",
    image: asset76,
  },
  {
    id: "9a4e445e-f057-4ccd-9a0e-ae8b4db33ea2",
    caption:
      "Looking for something special for Mother's Day? Let's skip the flowers and go directly for the good stuff. This box is filled with some of our most beloved premium bites. ⁠",
    tags: "Add a personal note the gift, then you are good to go🫶🏼",
    date: "8 April",
    image: asset77,
  },
];

function InstagramPosts() {
  const [socialLinkModal, setSocialLinkModal] = useState<Post>({
    id: "",
    caption: "",
    date: "",
    tags: "",
    image: "",
  });
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [postsToShow, setPostsToShow] = useState(10);
  const modalRef = useRef<HTMLDivElement>(null);
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

  useEffect(() => {
    if (isModalOpen) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
  }, [isModalOpen]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        setIsModalOpen(false);
        setSocialLinkModal({
          id: "",
          caption: "",
          date: "",
          tags: "",
          image: "",
        });
      }
    };

    if (isModalOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    // Clean-up
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isModalOpen]);

  useEffect(() => {
    const imageUrls = posts.map((post) => post.image);
    preloadImages(imageUrls);
  }, []);

  const handleNav = (id: string, val: number) => {
    const currentIndex =
      (posts.findIndex((post) => post.id === id) + val) % posts.length;
    const newIndex = (currentIndex + val + posts.length) % posts.length;
    setSocialLinkModal({ ...posts[newIndex] });
  };

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
        <div className={styles.modalContainer} ref={modalRef}>
          <div className={styles.navContainer}>
            <div
              style={{ padding: "2rem", cursor: "pointer" }}
              onClick={() => handleNav(socialLinkModal.id, -1)}
            >
              <IoIosArrowBack style={{ }} />
            </div>
            <div
              style={{ padding: "2rem", cursor: "pointer" }}
              onClick={() => handleNav(socialLinkModal.id, 1)}
            >
              <IoIosArrowForward style={{  }} />
            </div>
          </div>
          <div className={styles.modalImageDiv}>
            <img
              src={socialLinkModal.image}
              alt=""
              className={styles.modalImage}
            />
          </div>
          <div className={styles.instaUsername}>
            <div>
              <div className={styles.icon}>
                <Asset57 fill="black" width="31" />
              </div>
            </div>
            <div className={styles.usernameDiv}>
              <p className={styles.username}>Sugarchocolate</p>
            </div>
            <div
              className={styles.closeBtn}
              onClick={() => {
                setIsModalOpen(false);
                setSocialLinkModal({
                  id: "",
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
          <div className={styles.modalContentDiv}>
            <div className={styles.modalContent}>
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
