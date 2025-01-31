import React, { useState, useRef } from "react";
import "./HomePage.css"; // Ensure the CSS is imported
import background from "../assets/videos/background.mp4";
import About from "../components/About";
import Contact from "../components/Contact";
import image1 from "../assets/images/image1.jpg"; // Import image1
import image2 from "../assets/images/image2.jpg"; // Import image2

function HomePage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const aboutRef = useRef(null);
  const contactRef = useRef(null);
  const imagesRef = useRef(null); // Reference for the new images section

  const handleScroll = (ref) => {
    setMenuOpen(false); // Close the menu on mobile devices
    ref.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="home">
      {/* Navbar */}
      <header className="header">
        <nav className={`navbar ${menuOpen ? "open" : ""}`}>
          <div className="navbar-logo">
            <h1>CyPulse</h1>
          </div>
          <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>Home</button>
          <button onClick={() => handleScroll(aboutRef)}>About</button>
          <button onClick={() => handleScroll(imagesRef)}>Our Work</button>
          <button onClick={() => handleScroll(contactRef)}>Contact</button>
        </nav>
        <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
          ☰
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero-section">
        <video className="background-video" autoPlay loop muted playsInline>
          <source src={background} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="hero-content">
          <h1>Welcome to CyPulse</h1>
          <p>Your partner in cybersecurity solutions.</p>
          <div className="buttons">
            <button className="cta-button">Get Started</button>
            <button className="cta-button outline">Learn More</button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <div ref={aboutRef}>
        <About />
      </div>

      {/* New "Our Work" Section (Images + Cybersecurity Text) */}
      <section ref={imagesRef} className="images-section">
        <h2 className="section-title">Our Work</h2>
        <div className="section-description">
          <p>At CyPulse, we specialize in providing top-notch cybersecurity solutions tailored to your business needs. Our innovative approach to security ensures that your systems are protected, no matter what challenges arise.</p>
        </div>
        <div className="image-container">
          <div className="image-card">
            <img src={image1} alt="Image1" />
          </div>
          <div className="image-card">
            <img src={image2} alt="Image2" />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <div ref={contactRef}>
        <Contact />
      </div>
    </div>
  );
}

export default HomePage;
