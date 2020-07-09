import React from "react";
import "./index.css";
const HeroText = ({ title, subtitle, styles, underline }) => (
  <div className="hero-text" style={{ ...styles }}>
    <h1 style={{ color: "white", fontWeight: "600", zIndex: "100" }}>
      {title}
    </h1>
    {underline && (
      <div style={{display:'flex', justifyContent: 'center'}}>
        <div
          style={{
            width: 50,
            height: 2,
            backgroundColor: "white",
            margin: "5px 5px",
            position: "relative",
            zIndex: "100",
          }}
        ></div>
      </div>
    )}

    <h3 style={{ color: "white", fontWeight: 100,lineHeight: "2.5rem" }}>{subtitle && subtitle}</h3>
  </div>
);

export default HeroText;
