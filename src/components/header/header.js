import React from "react";
import { Link } from "gatsby";
import "./header.css";

const Header = ({ siteTitle, description }) => (
  <section className="top-nav">
    <input id="menu-toggle" type="checkbox" />
    <label className="menu-button-container" htmlFor="menu-toggle">
      <div className="menu-button"></div>
    </label>
    <ul className="menu">
      <li>Βιογραφικό</li>
      <Link to="/contact">
        <li>Επικοινωνία</li>
      </Link>
      <Link to="/services"> <li>Υπηρεσίες</li></Link>
    </ul>
    <Link to="/">
      <div className="logo-section">
        <div className="logo-content">
          ΕΛΕΝΗ ΣΟΥΜΕΛΙΔΟΥ
          <div className="logo"></div>
        </div>
      </div>
    </Link>
  </section>
);

export default Header;
