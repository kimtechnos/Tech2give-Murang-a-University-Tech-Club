import React from "react";

import aboutImg from "../../assets/about.jpg";
const About = () => {
  return (
    <section className="about">
      <div className="about-image">
        <img src={aboutImg} alt="" />
      </div>
      <div className="about-textbox">
        <h2 className="about-textbox-subtitle">About MUTC</h2>
        <p className="about-textbox-content">
          MUTC is the premier technology club at Murang'a University, dedicated
          to igniting a passion for technology and fostering a vibrant community
          of learners and innovators. We believe in the transformative power of
          technology and its potential to shape a brighter future
        </p>
        <h2>Our Mission:</h2>
        <p>
          To equip students with in-demand tech skills and knowledge. To provide
          a platform for collaboration, exploration, and innovation in the tech
          world.
        </p>
      </div>
    </section>
  );
};
export default About;
