import React from "react";

const HeroText = ({ title, description }) => (
  <div className="hero-text">
    <h1 style={{ color: "white", fontWeight: "600", zIndex: "100" }}>
      {title}
    </h1>
  </div>
);

export default HeroText;
