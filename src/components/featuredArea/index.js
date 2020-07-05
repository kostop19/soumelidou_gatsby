import React from "react";
import "./index.css";

const FeaturedArea = ({ title, subTitle, overlay, img }) => (
  <div
    className={`container-fluid featured-container`}
    style={{ background: `url(${img})`, backgroundSize: "cover" }}
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
    <div
      className="container"
      style={{ display: "flex", alignItems: "center", height: "100%" }}
    >
      <div className="featured-text">
        <h1 style={{ color: overlay ? "white" : "inherit", fontWeight: "600" }}>
          {" "}
          {title}
        </h1>
        <div
          style={{
            width: 50,
            height: 4,
            backgroundColor: overlay ? "white" : "#202528",
            margin: "10px 0",
            position: "relative",
            zIndex: "9999",
          }}
        ></div>
        <h3 style={{ color: overlay ? "white" : "inherit", fontWeight: 300 }}>
          {subTitle}
        </h3>
       
      </div>
    </div>
  </div>
);

export default FeaturedArea;
