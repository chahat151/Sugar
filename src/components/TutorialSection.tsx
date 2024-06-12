import { useEffect, useRef } from "react";
import video1 from "../assets/videos/tutorial.mp4";

const TutorialSection: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.muted = true;
      video.play().catch((error) => {
        console.error("Error attempting to play video:", error);
      });;
    }
  }, []);
  return (
    <section>
      <video
        ref={videoRef}
        controls={false}
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        style={{ width: "100%", height: "auto" }}
      >
        <source src={video1} type="video/mp4" />
      </video>
    </section>
  );
};
export default TutorialSection;
