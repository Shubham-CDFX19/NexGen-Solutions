// src/ServicesList.js
import React from 'react';
import Service from './Service';

const services = [
  {
    title: 'Web Development',
    description: 'Creating responsive and high-performance websites.',
    image: 'https://via.placeholder.com/100',
  },
  {
    title: 'Mobile App Development',
    description: 'Building mobile apps for iOS and Android platforms.',
    image: 'https://via.placeholder.com/100',
  },
  {
    title: 'UI/UX Design',
    description: 'Designing user-friendly and visually appealing interfaces.',
    image: 'https://via.placeholder.com/100',
  },
];

const ServicesList = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        padding: '20px',
        backgroundColor: '#f4f4f4',
      }}
    >
      {services.map((service, index) => (
        <Service
          key={index}
          title={service.title}
          description={service.description}
          image={service.image}
        />
      ))}
    </div>
  );
};

export default ServicesList;
