import React from "react";
import './index.css'
const FeaturedArea = ({title, subTitle}) => (
  <div className="container-fluid featured-container">
    <div className="container" style={{display:'flex', alignItems:'center', height:'100%'}}>
      <div className="featured-text">
        <h2> {title}</h2>
        <div
          style={{
            width: 50,
            height: 4,
            backgroundColor: "#202528",
            margin: "10px 0"
          }}
        ></div>
        <h3>
          {subTitle}
        </h3>
      </div>
    </div>
  </div>
)

export default FeaturedArea
