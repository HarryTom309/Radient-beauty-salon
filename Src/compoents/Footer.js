import React from 'react';

const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-section" id="about-us">
          <h3>About Us</h3>
          <p>Radiant Beauty Salon & Spa offers premium beauty services, from haircuts to skincare. Visit us for a luxurious experience.</p>
        </div>
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/services">Services</a></li>
            <li><a href="/aboutus">About Us</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>
        <div className="footer-section" id="contact">
          <h3>Contact Us</h3>
          <p>📍 123 Beauty Street, Birmingham, UK</p>
          <p>📞 +44 1234 567890</p>
          <p>✉️ info@radiantbeautysalon&spa.com</p>
        </div>
        <div className="footer-section">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <a href="#"><img src="/Images/facebook-icon.jpeg" alt="Facebook" /></a>
            <a href="#"><img src="/Images/instagram-icon.png" alt="Instagram" /></a>
            <a href="#"><img src="/Images/twitter-icon.jpeg" alt="Twitter" /></a>
          </div>
        </div>
      </div>
      <p className="footer-bottom">© 2025 Radiant Beauty Salon & Spa. All rights reserved.</p>
    </footer>
  );
};

export default Footer;