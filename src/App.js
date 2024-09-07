// src/App.js
import React from 'react';
import Navbar from './Navbar';
import HomePage from './HomePage';
import AboutPage from './AboutPage';
import ServicesList from './ServicesList';
import ContactPage from './ContactPage';
import Footer from './Footer';

function App() {
  return (
    <div>
      <Navbar />
      <HomePage />
      <AboutPage />
      <ServicesList />
      <ContactPage />
      <Footer />
    </div>
  );
}

export default App;
