import React from "react";
import "./index.css";

const FeaturedArea = ({ title, subTitle }) => (
  <div className="featured-text">
    <h1 style={{ color: "white", fontWeight: "600" }}> {title}</h1>
    <div
      style={{
        width: 50,
        height: 4,
        backgroundColor: "white",
        margin: "10px 0",
        position: "relative",
        zIndex: "9999",
      }}
    ></div>
    <h3 style={{ color: "white", fontWeight: 300 }}>{subTitle}</h3>
  </div>
);

export default FeaturedArea;
