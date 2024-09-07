// src/Footer.js
import React from 'react';
import { useSpring, animated } from '@react-spring/web';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa'; // Importing social media icons

const Footer = () => {
  // Animation for footer appearance
  const props = useSpring({
    opacity: 1,
    transform: 'translateY(0)',
    from: { opacity: 0, transform: 'translateY(20px)' },
    config: { tension: 180, friction: 20 },
  });

  return (
    <animated.footer
      style={{
        ...props,
        background: '#3E8B96',
        color: '#fff',
        padding: '20px',
        textAlign: 'center',
        position: 'relative',
        bottom: '0',
        width: '100%',
        boxShadow: '0 -2px 10px rgba(0, 0, 0, 0.1)',
      }}
    >
      <div style={{ marginBottom: '20px' }}>
        <h2>Website Agency</h2>
        <p>Your partner in creating stunning digital experiences.</p>
      </div>

      <div style={{ marginBottom: '20px' }}>
        <h3>Contact Us</h3>
        <p>Email: contact@websiteagency.com</p>
        <p>Phone: (123) 456-7890</p>
      </div>

      <div style={{ marginBottom: '20px' }}>
        <h3>Follow Us</h3>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '15px' }}>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" style={{ color: '#fff' }}>
            <FaFacebookF />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" style={{ color: '#fff' }}>
            <FaTwitter />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" style={{ color: '#fff' }}>
            <FaInstagram />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" style={{ color: '#fff' }}>
            <FaLinkedinIn />
          </a>
        </div>
      </div>

      <div>
        <p>&copy; 2024 Website Agency. All rights reserved.</p>
      </div>
    </animated.footer>
  );
};

export default Footer;
