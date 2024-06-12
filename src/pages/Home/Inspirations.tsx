import { useRef } from "react";
import { asset5, asset22, asset32 } from "assets/images";
import styles from "./Inspirations.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Mousewheel, Keyboard } from "swiper/modules";
// import { useNavigate } from "react-router-dom";

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
  const sliderRef = useRef(null);

  return (
    <section className={styles.container}>
      <h2 className={styles.h2}>Inspiration for chocolate gifts</h2>
      <div className={styles.swiperContainer}>
        <Swiper
          breakpoints={{
            0: {
              slidesPerView: 1.2,
              spaceBetween: 10,
            },
            480: {
              slidesPerView: 1.2,
              spaceBetween: 10,
            },
            568: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2.2,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
          }}
          freeMode={true}
          keyboard={true}
          mousewheel={{
            forceToAxis: true,
          }}
          modules={[FreeMode, Mousewheel, Keyboard]}
          ref={sliderRef}
        >
          {gifts.map((gift, index) => {
            const {
              title,
              description,
              price,
              tag,
              image,
            }: // productsID,
            Occasion = gift;
            return (
              <SwiperSlide key={index}>
                <div
                  className={styles.card}
                  // onClick={() => navigate(`/product/${productsID}`)}
                >
                  <div className={styles.imageContainer}>
                    <img className={styles.image} src={image} alt="chocolate" />
                    {tag && <div className={styles.tag}>{tag}</div>}
                  </div>
                  <div className={styles.cardContent}>
                    <p className={styles.description}>{description}</p>
                    <p className={styles.title}>{title}</p>
                    <p className={styles.price}>From ${price}</p>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
}
export default Inspiration;
