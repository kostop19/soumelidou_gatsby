import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";

const HeaderTitle = ({ siteTitle,description }) => (
    <div
      style={{
        position:`absolute`,
        zIndex: `8`,
        top:'20%',
        padding:"40px",
      }}
    >
      <div style={{ margin: 0, backgroundColor:"rgba(0,0,0,0.4)", padding:12, borderRadius:'4px' }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`
          }}
        >
          <h1>{siteTitle}</h1>
          <div style={{ maxWidth: `100%` }}>
          </div>
        </Link>
        <div style={{width:"45px",backgroundColor:"white",height:"4px",margin:"0.2em 0 0.5em  0"}}></div>
        <h4 style={{color:`white`, fontSize:`17px`}}>Ψυχολόγος MSc-Ψυχοθεραπεύτρια</h4>
      </div>
    </div>
  
);

HeaderTitle.propTypes = {
  siteTitle: PropTypes.string
};

HeaderTitle.defaultProps = {
  siteTitle: ``
};

export default HeaderTitle;
