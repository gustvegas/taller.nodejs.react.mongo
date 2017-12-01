import React from 'react';
const Hero = (prop) => {
  return (
    <li>
      <button className="delete-button">Delete</button>
      <div className="hero-element">
        <div className="badge">{prop.hero.id}</div>
        <div className="name">{prop.hero.name}</div>
        <div className="saying">{prop.hero.saying}</div>
      </div>
    </li>
  );
};

export default Hero;
