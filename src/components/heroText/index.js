import React from "react";
import "./index.css";
const HeroText = ({ title, subtitle, styles, underline }) => (
  <div className="hero-text" style={{ ...styles }}>
    <h1 style={{ color: "white", fontWeight: "600", zIndex: "100" }}>
      {title}
    </h1>
    {underline &&  <div
      style={{
        width: 50,
        height: 4,
        backgroundColor: "white",
        margin: "10px 0",
        position: "relative",
        zIndex: "100",
      }}
    ></div>}
   
    <h3 style={{ color: "white", fontWeight: 300 }}>{subtitle && subtitle}</h3>
  </div>
);

export default HeroText;
