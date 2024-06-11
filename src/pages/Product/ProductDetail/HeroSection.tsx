import React, { ChangeEvent, useEffect, useMemo, useState } from "react";
import { useParams } from "react-router-dom";
import { extractColors } from "extract-colors";
import { Helmet } from "react-helmet-async";
import PrimaryHeader from "components/Header/PrimaryHeader";
import styles from "./HeroSection.module.css";
import {
  Product,
  products,
  defaultProduct,
  DeliveryInfo,
} from "data/productsData";
import DOMPurify from "dompurify";
import Accordion from "components/Accordian";
import {
  generateSimilarColors,
  GenerateSimilarColorsType,
} from "utils/functions";

type Color = {
  hex: string;
  red: number;
  green: number;
  blue: number;
  area: number;
  hue: number;
  saturation: number;
  lightness: number;
  intensity: number;
};

const options = {
  pixels: 60000,
  distance: 1,
  saturationDistance: 0.2,
  lightnessDistance: 0.2,
  hueDistance: 0.25,
};

type RadioOptionType = { off: string; duration: string };

function ProductDetail() {
  const { id: productId } = useParams();
  const [productDetails, setProductDetails] = useState<Product>(defaultProduct);

  const lowestSubPrice = useMemo(() => {
    return productDetails?.productInfo?.subscription?.reduce(
      (acc: RadioOptionType, el: RadioOptionType) => {
        return parseInt(acc?.off) < parseInt(el.off) ? el : acc;
      },
      productDetails?.productInfo?.subscription[0]
    );
  }, [productDetails]);
  console.log("lowestSubPrice", lowestSubPrice);
  const [colors, setColors] = useState<Color[]>([]);
  const [shadesAndTints, setShadesAndTints] =
    useState<GenerateSimilarColorsType>({
      lighten: [],
      darken: [],
      saturate: [],
      desaturate: [],
      tints: [],
      shade: [],
    });

  const [selectedOption, setSelectedOption] = useState<RadioOptionType>({
    off: "0%",
    duration: "0 days",
  });

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSelectedOption(() => {
      const obj = productDetails.productInfo.subscription.find(
        (el: RadioOptionType) => el.off === event.target.value
      );
      return obj;
    });
  };

  useEffect(() => {
    const productData =
      products.find((product: Product) => product.productsID === productId) ||
      defaultProduct;

    const fetchColors = async () => {
      try {
        const result = await extractColors(productData.image, options);
        setColors(result);

        if (result.length > 0) {
          const primaryColor = result[0].hex;
          const variations = generateSimilarColors(primaryColor, 5);
          setShadesAndTints(variations);
        }
      } catch (error) {
        console.error("Error extracting colors:", error);
      }
    };

    setProductDetails(productData);

    if (productData.productInfo?.subscription) {
      setSelectedOption({
        off: "0%",
        duration: "0 days",
      });
    }

    fetchColors();
  }, [productId]);

  return (
    <section
      className={styles.main}
      style={
        {
          "--primary-bg": shadesAndTints.desaturate[0],
          "--tint0": colors[0]?.hex,
          "--radio": shadesAndTints.lighten[shadesAndTints.lighten.length - 3],
          "--radio-dark": shadesAndTints.darken[2],
          "--pink-light0": shadesAndTints.lighten[0],
        } as React.CSSProperties
      }
    >
      <Helmet>
        <title>{productDetails.title}</title>
      </Helmet>
        <PrimaryHeader position="relative" />
      <div style={{ maxWidth: "126rem", margin: "4rem auto 0px auto" }}>
        <div className={styles.container}>
          <div style={{ flex: 1 }}>
            <div className={styles.imgContainer}>
              <img
                src={productDetails.image}
                style={{ width: "100%", height: "auto" }}
                alt=""
              />
            </div>
          </div>
          <div style={{ flex: 1 }}>
            <div style={{ padding: "0 2rem" }}>
              <h3 className={styles.h3}>{productDetails.description}</h3>
              <h1 className={styles.h1}>{productDetails.title}</h1>
              <h3 className={styles.h3}>€{productDetails.price}</h3>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  marginBottom: "3rem",
                }}
              >
                <label key={"0%"} htmlFor={"0%"} className={styles.lRadio}>
                  <input
                    type="radio"
                    id={"0%"}
                    value={"0%"}
                    checked={selectedOption.off === "0%"}
                    onChange={handleChange}
                  />
                  <span style={{ fontWeight: 400, fontSize: "1.7rem" }}>
                    One-time purchase
                  </span>
                </label>
                <p
                  style={{
                    fontWeight: 700,
                    fontSize: "2.7rem",
                    transform: "scaleY(0.8)",
                  }}
                >
                  €{productDetails.price}
                </p>
              </div>
              <div style={{ marginBottom: "4rem" }}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    marginBottom: "3rem",
                  }}
                >
                  <p
                    style={{
                      fontWeight: 900,
                      fontSize: "1.7rem",
                      transform: "scaleY(0.9)",
                    }}
                  >
                    Subscription
                  </p>
                  <p
                    style={{
                      fontWeight: 700,
                      fontSize: "2.7rem",
                      transform: "scaleY(0.8)",
                    }}
                  >
                    {"€".concat(
                      (
                        ((100 -
                          parseInt(
                            selectedOption.off === "0%"
                              ? lowestSubPrice?.off
                              : selectedOption?.off
                          )) /
                          100) *
                        Number(productDetails.price.split(",").join("."))
                      )
                        .toFixed(2)
                        .toString()
                    )}
                  </p>
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "0.5rem",
                    padding: "0 0.5rem",
                    marginBottom: "2rem",
                  }}
                >
                  {productDetails.productInfo.subscription &&
                    productDetails.productInfo.subscription
                      .filter((el: RadioOptionType) => el.off !== "0%")
                      .map((el: RadioOptionType) => {
                        const { off, duration } = el;
                        return (
                          <label
                            key={off}
                            htmlFor={off}
                            className={styles.lRadio}
                          >
                            <input
                              type="radio"
                              id={off}
                              value={off}
                              checked={selectedOption.off === off}
                              onChange={handleChange}
                            />
                            {Number(parseInt(duration) / 30) === 1 && (
                              <span
                                style={{
                                  fontSize: "1.4rem",
                                  fontWeight: 400,
                                }}
                              >{` Delivery every month, ${off} off`}</span>
                            )}
                            {Number(parseInt(duration) / 30) > 1 && (
                              <span
                                style={{
                                  fontSize: "1.4rem",
                                  fontWeight: 400,
                                }}
                              >
                                {` Delivery every ${Number(
                                  parseInt(duration) / 30
                                )} month, ${off} off`}
                              </span>
                            )}
                          </label>
                        );
                      })}
                </div>
                <p
                  style={{
                    fontSize: "1.4rem",
                    fontWeight: 400,
                    marginBottom: "5rem",
                  }}
                >
                  Auto-renews, skip or cancel anytime. View subscription policy
                </p>

                <button className={styles.btn}>Add to cart</button>

                <div
                  className={styles.info}
                  dangerouslySetInnerHTML={{
                    __html: DOMPurify.sanitize(
                      productDetails?.productInfo?.info?.html()
                    ),
                  }}
                />
              </div>
              <Accordion
                data={DeliveryInfo}
                borderStyle={{ borderColor: "#fff" }}
                headerStyle={{ color: "#fff" }}
                iconStyle={{ color: "#fff" }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProductDetail;
