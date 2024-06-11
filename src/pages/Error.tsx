import AnimatedBtn from "components/Button/AnimatedBtn";
import LazyImage from "components/LazyImage";
import { Helmet } from "react-helmet-async";
import { useNavigate } from "react-router-dom";

function Error() {
  const navigate = useNavigate();
  return (
    <>
      <Helmet>
        <title>Page Not Found!</title>
      </Helmet>
      <div
        style={{
          height: "calc(100vh - 4.7rem)",
          // background: `url(${asset100})`,
          // filter: "brightness(50%)",
          position: "relative",
        }}
      >
        <div style={{ height: "100%", width: "100vw" }}>
          <LazyImage
            src="https://github.com/chahat151/sugar_assets/blob/main/asset157.jpg?raw=true"
            placeholderSrc={
              "https://github.com/chahat151/sugar_assets/blob/main/asset157-small.jpg?raw=true"
            }
            alt="Image 1"
          />
        </div>
        <div
          style={{
            position: "absolute",
            top: "10%",
            left: "50%",
            transform: "translate(-50%)",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            // zIndex: "100",
          }}
        >
          <h1
            style={{ fontSize: "10rem", marginBottom: "1rem", color: "#fff" }}
          >
            404
          </h1>
          <p style={{ fontSize: "5rem", marginBottom: "5rem", color: "#fff" }}>
            Page Not Found!
          </p>
          <AnimatedBtn effect="paint" onClick={() => navigate("/")}>
            Back to Home
          </AnimatedBtn>
        </div>
      </div>
    </>
  );
}

export default Error;
