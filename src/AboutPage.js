// src/AboutPage.js
import React from 'react';
import { useSpring, animated } from '@react-spring/web';

const AboutPage = () => {
  // Animation for the main header
  const headerAnimation = useSpring({
    from: { opacity: 0, transform: 'translateY(-30px)' },
    to: { opacity: 1, transform: 'translateY(0px)' },
    config: { tension: 250, friction: 20 },
    delay: 100,
  });

  // Animation for the subheader
  const subHeaderAnimation = useSpring({
    from: { opacity: 0, transform: 'translateX(-50px)' },
    to: { opacity: 1, transform: 'translateX(0px)' },
    config: { tension: 200, friction: 25 },
    delay: 200,
  });

  // Animation for the image
  const imageAnimation = useSpring({
    from: { opacity: 0, transform: 'scale(0.8)' },
    to: { opacity: 1, transform: 'scale(1)' },
    config: { tension: 180, friction: 20 },
    delay: 300,
  });

  // Animation for the text
  const textAnimation = useSpring({
    from: { opacity: 0, transform: 'translateY(20px)' },
    to: { opacity: 1, transform: 'translateY(0px)' },
    config: { tension: 220, friction: 18 },
    delay: 400,
  });

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        backgroundColor: '#f3f4f6',
        padding: '20px',
        textAlign: 'center',
      }}
    >
      <animated.h1 style={{ ...headerAnimation, fontSize: '2.5rem', margin: '20px 0', color: '#3E8B96' }}>
        About Us
      </animated.h1>
      <animated.p style={{ ...subHeaderAnimation, fontSize: '1.2rem', color: '#333', maxWidth: '700px' }}>
        We are dedicated to providing the best services and products to our customers. Our team is composed of
        professionals who are passionate about what they do, constantly pushing the boundaries of innovation and
        creativity.
      </animated.p>
      <animated.img
        src="https://via.placeholder.com/600"
        alt="About Us"
        style={{
          ...imageAnimation,
          width: '60%',
          maxWidth: '400px',
          borderRadius: '10px',
          margin: '20px 0',
        }}
      />
      <animated.div style={{ ...textAnimation, fontSize: '1rem', color: '#555', maxWidth: '800px' }}>
        <p>
          Our mission is to enhance the lives of our users through quality service and exceptional support. We value
          integrity, commitment, and excellence in all that we do. Join us on our journey to make a difference!
        </p>
        <p>
          We strive to bring a positive impact to the communities we serve, believing that innovation and compassion
          can drive meaningful change in the world.
        </p>
      </animated.div>
    </div>
  );
};

export default AboutPage;
