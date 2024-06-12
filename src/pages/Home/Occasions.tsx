import { useRef } from "react";
import styles from "./Occasions.module.css";
import { asset54, asset55 } from "assets/svgs";

import { Swiper, SwiperSlide } from "swiper/react";
import AnimatedBtn from "components/Button/AnimatedBtn";
import {
  Navigation,
  Pagination,
  FreeMode,
  Autoplay,
  Mousewheel,
  Keyboard,
} from "swiper/modules";
import { useNavigate } from "react-router-dom";
import { Product, products } from "data/productsData";
function Occasions() {
  const navigate = useNavigate();
  const sliderRef = useRef(null);
  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);

  return (
    <section className="occasionContainer">
      <div className={styles.innerOccasionContainer}>
        <h2 className={styles.h2}>
          Small chocolate bites for the season's festivities
        </h2>
        <div className={styles.swiperContainer}>
          <Swiper
            // slidesPerView={1}
            // spaceBetween={10}
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
                slidesPerView: 2.2,
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
            speed={2000}
            freeMode={true}
            loop={true}
            // pagination={{
            //   clickable: true,
            // }}
            keyboard={true}
            autoplay={{
              delay: 0,
              disableOnInteraction: true,
              pauseOnMouseEnter: true,
            }}
            mousewheel={{
              forceToAxis: true,
            }}
            navigation={{
              prevEl: navigationPrevRef.current,
              nextEl: navigationNextRef.current,
            }}
            modules={[
              FreeMode,
              Pagination,
              Autoplay,
              Mousewheel,
              Keyboard,
              Navigation,
            ]}
            ref={sliderRef}
          >
            {products.map((ocassion, index) => {
              const {
                title,
                description,
                price,
                tag,
                image,
                productsID,
              }: Product = ocassion;
              return (
                <SwiperSlide key={index}>
                  <div
                    className={styles.card}
                    onClick={() => navigate(`/product/${productsID}`)}
                  >
                    <div className={styles.imageContainer}>
                      <img
                        className={styles.image}
                        src={image}
                        alt="chocolate"
                      />
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
          {
            <div className={styles.swiperButtonPrev} ref={navigationPrevRef}>
              <div className={styles.innerNav}>
                <img
                  src={asset54}
                  alt="arrow-left"
                  className={styles.navBtnImage}
                />
              </div>
            </div>
          }
          {
            <div className={styles.swiperButtonNext} ref={navigationNextRef}>
              <div className={styles.innerNav}>
                <img
                  src={asset55}
                  className={styles.navBtnImage}
                  alt="arrow-right"
                />
              </div>
            </div>
          }
        </div>
        <div className={styles.selections}>
          <AnimatedBtn
            effect="paint"
            containerStyle={{ borderColor: "#463126" }}
            maskStyle={{ color: "#463126" }}
            btnStyle={{ background: "#463126", color: "white" }}
          >
            See The Selection
          </AnimatedBtn>
        </div>
      </div>
    </section>
  );
}
export default Occasions;
