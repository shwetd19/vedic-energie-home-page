import React from 'react';
import './govsection.css';
import GovtImage from './mh-govt.png';

const GovSection = () => {
  return (
    <section id="government" className="gradient-custom">
      <img src={GovtImage} height="450px" alt="Government" />
    </section>
  );
};

export default GovSection;
