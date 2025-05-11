import React from 'react';
import './Banner.css';
import bikeImage from '../../assets/bannerbike.png';

const Banner = () => {
  const scrollToBikes = () => {
    const section = document.getElementById('catalogo');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="banner-wrapper">
      <div className="banner-content">
        <h1>LIBERDADE ELÉTRICA<br />SOBRE DUAS RODAS</h1>
        <p>AUTONOMIA, DESIGN E ZERO EMISSÕES.<br />PEDALE MENOS. CURTA MAIS.</p>
        <button className="banner-button" onClick={scrollToBikes}>SAIBA MAIS</button>
      </div>
      <div className="banner-image">
        <img src={bikeImage} alt="Bike" />
      </div>
    </div>
  );
};

export default Banner;
