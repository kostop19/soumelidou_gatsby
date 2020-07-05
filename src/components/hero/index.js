import React from "react";
import "./index.css";

const Hero = ({ title, overlay, img }) => (
  <div
    className={`hero-page-container`}
    style={{
      background: `url(${img})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
    }}
  >
    {overlay && (
      <div
        style={{
          height: "100%",
          width: "100%",
          background: "rgba(0,0,0,0.3)",
          position: "absolute",
        }}
      ></div>
    )}
    <div className="hero-text">
      <h1 style={{ color: "white", fontWeight: "600", zIndex: "100" }}>
        {title}
      </h1>
    </div>
  </div>
);

export default Hero;
