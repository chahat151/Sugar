import React, { useEffect, useRef, useState } from "react";

interface LazyImageProps {
  src: string;
  placeholderSrc: string;
  alt: string;
}

const LazyImage: React.FC<LazyImageProps> = ({ src, placeholderSrc, alt }) => {
  const imgRef = useRef<HTMLImageElement | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const currentImgRef = imgRef.current;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            if (currentImgRef) {
              observer.unobserve(currentImgRef);
            }
          }
        });
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.1,
      }
    );

    if (currentImgRef) {
      observer.observe(currentImgRef);
    }

    return () => {
      if (currentImgRef) {
        observer.unobserve(currentImgRef);
      }
    };
  }, []);

  return (
    <div style={{ position: "relative", width: "100%", height: "100%", overflow:'hidden' }}>
      <img
        ref={imgRef}
        src={placeholderSrc}
        alt={alt}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          filter: "blur(20px)",
          transition: "opacity 0.5s ease-in-out",
          opacity: isLoaded ? 0 : 1,
          transform: "scale(1.1)",
        }}
      />
      {isVisible && (
        <img
          src={src}
          alt={alt}
          onLoad={() => setIsLoaded(true)}
          style={{
            width: "100%",
            height: "100%",
            opacity: isLoaded ? 1 : 0,
            transition: "opacity 0.5s ease-in-out",
            transform: "scale(1)",
          }}
        />
      )}
    </div>
  );
};
export default LazyImage;
