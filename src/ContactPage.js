// src/ContactPage.js
import React from 'react';
import { useSpring, animated } from '@react-spring/web';

const ContactPage = () => {
  // Animation for form elements
  const formAnimation = useSpring({
    from: { opacity: 0, transform: 'translateY(20px)' },
    to: { opacity: 1, transform: 'translateY(0px)' },
    config: { tension: 220, friction: 25 },
  });

  // Animation for contact info
  const infoAnimation = useSpring({
    from: { opacity: 0, transform: 'translateX(-20px)' },
    to: { opacity: 1, transform: 'translateX(0px)' },
    config: { tension: 180, friction: 25 },
    delay: 200,
  });

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        backgroundColor: '#f0f4f8',
        padding: '20px',
        textAlign: 'center',
      }}
    >
      <animated.div style={{ ...formAnimation, maxWidth: '600px', width: '100%' }}>
        <h1 style={{ marginBottom: '20px', color: '#3E8B96' }}>Contact Us</h1>
        <form
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '15px',
            backgroundColor: '#fff',
            padding: '20px',
            borderRadius: '8px',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
          }}
        >
          <input
            type="text"
            placeholder="Name"
            style={{
              padding: '10px',
              borderRadius: '4px',
              border: '1px solid #ddd',
            }}
          />
          <input
            type="email"
            placeholder="Email"
            style={{
              padding: '10px',
              borderRadius: '4px',
              border: '1px solid #ddd',
            }}
          />
          <textarea
            placeholder="Message"
            rows="4"
            style={{
              padding: '10px',
              borderRadius: '4px',
              border: '1px solid #ddd',
            }}
          />
          <button
            type="submit"
            style={{
              padding: '10px',
              backgroundColor: '#3E8B96',
              color: '#fff',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
              fontSize: '1rem',
            }}
          >
            Send Message
          </button>
        </form>
      </animated.div>

      <animated.div
        style={{
          ...infoAnimation,
          marginTop: '40px',
          maxWidth: '600px',
          width: '100%',
          padding: '20px',
          backgroundColor: '#fff',
          borderRadius: '8px',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        }}
      >
        <h2 style={{ color: '#3E8B96' }}>Contact Information</h2>
        <p style={{ fontSize: '1rem', color: '#555' }}>
          You can reach us at:
        </p>
        <p style={{ fontSize: '1rem', color: '#333' }}>
          <strong>Email:</strong> support@example.com
        </p>
        <p style={{ fontSize: '1rem', color: '#333' }}>
          <strong>Phone:</strong> (+91) 8767554321
        </p>
      </animated.div>
    </div>
  );
};

export default ContactPage;
