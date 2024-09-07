// src/HomePage.js
import React from 'react';
import { useSpring, animated } from '@react-spring/web';

const HomePage = () => {
  // Animation for the main header
  const headerAnimation = useSpring({
    from: { opacity: 0, transform: 'translateY(-50px)' },
    to: { opacity: 1, transform: 'translateY(0px)' },
    config: { tension: 220, friction: 20 },
    delay: 100,
  });

  // Animation for the subheader
  const subHeaderAnimation = useSpring({
    from: { opacity: 0, transform: 'translateY(50px)' },
    to: { opacity: 1, transform: 'translateY(0px)' },
    config: { tension: 220, friction: 20 },
    delay: 300,
  });

  // Animation for the button
  const buttonAnimation = useSpring({
    from: { opacity: 0, transform: 'scale(0.8)' },
    to: { opacity: 1, transform: 'scale(1)' },
    config: { tension: 220, friction: 15 },
    delay: 500,
  });

  // Animation for the image
  const imageAnimation = useSpring({
    from: { opacity: 0, transform: 'translateX(-100px)' },
    to: { opacity: 1, transform: 'translateX(0px)' },
    config: { tension: 220, friction: 20 },
    delay: 200,
  });

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        backgroundColor: '#f3f4f6',
        padding: '20px',
        textAlign: 'center',
      }}
    >
      <animated.h1 style={{ ...headerAnimation, fontSize: '3rem', margin: '10px 0', color: '#3E8B96' }}>
        Welcome to Our NexGen Digital Solutions
      </animated.h1>
      <animated.p style={{ ...subHeaderAnimation, fontSize: '1.2rem', color: '#555', maxWidth: '600px' }}>
      NexGen Digital Solutions is a forward-thinking digital agency specializing in custom web design, development, and marketing. We create impactful online experiences that drive growth and engagement.

 We combine cutting-edge technology with creative design to deliver tailored digital solutions, helping clients stand out and stay ahead of the competition.
</animated.p>
      <animated.button
        style={{
          ...buttonAnimation,
          padding: '10px 20px',
          fontSize: '1rem',
          backgroundColor: '#3E8B96',
          color: '#fff',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
          marginTop: '20px',
        }}
      >
        Get Started
      </animated.button>
      <animated.img
        src="https://via.placeholder.com/400"
        alt="Placeholder"
        style={{ ...imageAnimation, width: '400px', marginTop: '30px', borderRadius: '10px' }}
      />
    </div>
  );
};

export default HomePage;
