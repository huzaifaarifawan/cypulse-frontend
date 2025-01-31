import React from "react";
import "./Contact.css";

function Contact() {
  return (
    <section className="contact-section">
      <h2>Contact Us</h2>
      <p>
        We’re here to help. Reach out to us for any inquiries, support, or collaboration opportunities.
      </p>
      <div className="contact-details">
        <p><strong>Email:</strong> <a href="mailto:support@cypulse.com">support@cypulse.com</a></p>
        <p><strong>Phone:</strong> +1 (800) 123-4567</p>
        <p><strong>Address:</strong> 123 Cybersecurity Lane, Tech City, TX 75001</p>
      </div>
      <form className="contact-form">
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Your Email" required />
        <textarea placeholder="Your Message" required></textarea>
        <button type="submit">Send Message</button>
      </form>
    </section>
  );
}

export default Contact;
