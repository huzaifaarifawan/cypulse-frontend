import React from 'react';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className="hero-section">
      <h1 className="dynamic-text">Welcome to CyPulse</h1>
      <p className="dynamic-text">Empowering businesses with top-notch cybersecurity solutions.</p>
      <div className="cta-buttons">
        <button>Get Started</button>
        <button>Learn More</button>
      </div>
    </div>
  );
}

export default HeroSection;
