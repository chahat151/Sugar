// import styles from "./index.module.css";
import HeroSection from "./HeroSection";
import ProductInfoSection from "./ProductInfoSection";
function ProductDetail() {
  return (
    <>
      <HeroSection />
      <ProductInfoSection />
    </>
  );
}

export default ProductDetail;

/* <img
                src={asset11}
                alt="Product"
                style={{ height: "200px", width: "200px", objectFit: "cover" }}
              />
              <img
                src={asset25}
                alt="Product"
                style={{ height: "200px", width: "200px", objectFit: "cover" }}
              />
              <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
                <div
                  style={{
                    backgroundColor: colors[0]?.hex,
                    width: "50px",
                    height: "50px",
                    borderRadius: "50%",
                  }}
                />
                {Object.entries(shadesAndTints).map(([_, colors]) =>
                  [...colors, "red"].map((color: string) => {
                    console.log(_);
                    return (
                      <div key={color}>
                        <div
                          style={{
                            backgroundColor: color,
                            width: "50px",
                            height: "50px",
                            borderRadius: "50%",
                          }}
                        />
                      </div>
                    );
                  })
                )}
              </div> */
