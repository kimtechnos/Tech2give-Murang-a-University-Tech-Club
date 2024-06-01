import { Link } from "react-router-dom";
import videoSrc from "../../assets/3246359-uhd_3840_2160_25fps.mp4"; // Ensure the path is correct

const Hero = () => {
  return (
    <section className="hero">
      <video className="hero-video" autoPlay loop muted playsInline>
        <source src={videoSrc} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="hero-textbox">
        <h2>Learn. Build. Innovate. MUTC</h2>
        <p>
          Dive into a world of passionate learners at MUTC! Collaborate with
          fellow tech enthusiasts, <br />
          share knowledge, and ignite your tech journey in a supportive
          community.
        </p>
        <div className="hero-ctas">
          <Link to="/events">Explore Events</Link>
          <Link to="/tracks">About MUTC</Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
