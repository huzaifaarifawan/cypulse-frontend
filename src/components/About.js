import React from "react";
import "./About.css";

function About() {
  return (
    <section className="about-section">
      <h2>About CyPulse</h2>
      <p>
        At CyPulse, we specialize in delivering cutting-edge cybersecurity solutions
        tailored to meet the unique needs of businesses worldwide. Our mission is to 
        empower organizations to protect their digital ecosystems with innovative, 
        reliable, and scalable security technologies.
      </p>
      <div className="about-highlights">
        <div className="highlight">
          <h3>Expert Team</h3>
          <p>Our team consists of industry-leading cybersecurity professionals with years of experience.</p>
        </div>
        <div className="highlight">
          <h3>Advanced Solutions</h3>
          <p>We leverage the latest technologies, including AI and machine learning, to safeguard your data.</p>
        </div>
        <div className="highlight">
          <h3>Global Presence</h3>
          <p>With clients across the globe, we deliver comprehensive solutions anytime, anywhere.</p>
        </div>
      </div>
    </section>
  );
}

export default About;
