import React from "react";
import Image from "../../components/image"
import HeaderTitle from "./headerTitle";
import "./header.css"


const Header = ({ siteTitle, description }) => (
  <div 
  className="header-container"
  >
    <HeaderTitle siteTitle={siteTitle} description={description}/>
    <div className="header-black-overlay" style={{width:'100%', height:'100%', backgroundColor: "rgba(0,0,0,.2)"}}></div>
    {/* <div className="mobile-image"><Image /></div> */}
  </div>
);

export default Header;
