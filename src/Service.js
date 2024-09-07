// src/Service.js
import React from 'react';
import { useSpring, animated } from '@react-spring/web';

const Service = ({ title, description, image }) => {
  // Animation for the service item
  const animation = useSpring({
    from: { opacity: 0, transform: 'translateY(20px)' },
    to: { opacity: 1, transform: 'translateY(0px)' },
    config: { tension: 220, friction: 20 },
  });

  return (
    <animated.div
      style={{
        ...animation,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        width: '300px',
        padding: '20px',
        borderRadius: '10px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        backgroundColor: '#fff',
        margin: '10px',
        textAlign: 'center',
      }}
    >
      <img
        src={image}
        alt={title}
        style={{
          width: '100px',
          height: '100px',
          objectFit: 'cover',
          borderRadius: '50%',
          marginBottom: '10px',
        }}
      />
      <h3 style={{ fontSize: '1.5rem', color: '#333' }}>{title}</h3>
      <p style={{ fontSize: '1rem', color: '#555' }}>{description}</p>
    </animated.div>
  );
};

export default Service;
