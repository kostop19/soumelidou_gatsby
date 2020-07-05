import React from "react";
import "./index.css"
const HeroText = ({ title, subtitle }) => (
  <div className="hero-text">
    <h1 style={{ color: "white", fontWeight: "600", zIndex: "100" }}>
      {title}
    </h1>
    <h3 style={{ color: "white", fontWeight: 300 }}>
      {subtitle && subtitle}
    </h3>
  </div>
);

export default HeroText;
