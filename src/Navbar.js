// src/Navbar.js
import React, { useState } from 'react';
import { useSpring, animated } from '@react-spring/web';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Define animation for the menu items
  const menuAnimation = useSpring({
    transform: isOpen ? 'translateX(0%)' : 'translateX(-100%)',
    opacity: isOpen ? 1 : 0,
    config: { tension: 200, friction: 20 },
  });

  return (
    <nav className="navbar" style={{ padding: '1rem', backgroundColor: '#3E8B96', color: '#fff' }}>
      <div className="navbar-container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div className="logo" style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>
          My Website
        </div>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="menu-button"
          style={{
            background: 'transparent',
            border: 'none',
            color: '#fff',
            cursor: 'pointer',
            fontSize: '1.5rem',
            outline: 'none',
          }}
        >
          ☰
        </button>
      </div>
      <animated.ul
        style={{
          ...menuAnimation,
          position: 'absolute',
          top: '3rem',
          left: 0,
          backgroundColor: '#3E8B96',
          padding: '1rem',
          width: '200px',
          listStyle: 'none',
        }}
      >
        <li style={{ padding: '0.5rem 0' }}>
          <a href="#home" style={{ color: '#fff', textDecoration: 'none' }}>Home</a>
        </li>
        <li style={{ padding: '0.5rem 0' }}>
          <a href="#about" style={{ color: '#fff', textDecoration: 'none' }}>About</a>
        </li>
        <li style={{ padding: '0.5rem 0' }}>
          <a href="#services" style={{ color: '#fff', textDecoration: 'none' }}>Services</a>
        </li>
        <li style={{ padding: '0.5rem 0' }}>
          <a href="#contact" style={{ color: '#fff', textDecoration: 'none' }}>Contact</a>
        </li>
      </animated.ul>
    </nav>
  );
};

export default Navbar;
