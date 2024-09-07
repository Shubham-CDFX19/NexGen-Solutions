// src/ScrollEffect.js
import React from 'react';
import { useSpring, animated } from '@react-spring/web';
import { useInView } from 'react-intersection-observer';

const ScrollEffect = () => {
  // Use Intersection Observer to detect when the element is in view
  const { ref, inView } = useInView({
    triggerOnce: true, // Animation will trigger only once
    threshold: 0.1,    // Trigger when 10% of the element is visible
  });

  // Define the animation that triggers when the element is in view
  const fadeIn = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? 'translateY(0px)' : 'translateY(50px)',
    config: { mass: 1, tension: 280, friction: 30 },
  });

  
};

export default ScrollEffect;
