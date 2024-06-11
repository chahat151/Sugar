import video1 from "../assets/videos/tutorial.mp4";

const TutorialSection: React.FC = () => {
  return (
    <section>
      <video controls={false} autoPlay loop muted style={{ width: "100%", height: "auto" }}>
        <source src={video1} type="video/mp4" />
      </video>
    </section>
  );
};
export default TutorialSection;
