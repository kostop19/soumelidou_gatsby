import React from "react";
import { Link } from "gatsby";
import "./header.css";

const Header = () => (
  <section className="top-nav">
  <ul className="nav justify-content-end">
    <li className="nav-item">
      <Link className="nav-link" to="/">
        Αρχική
      </Link>
    </li>

    <li className="nav-item">
      <Link className="nav-link" to="/about">
        Βιογραφικό
      </Link>
    </li>
    <li className="nav-item">
      <Link className="nav-link" to="/services">
        Υπηρεσίες
      </Link>
    </li>
    <li className="nav-item">
      <Link className="nav-link" to="/contact">
        Επικοινωνία
      </Link>
    </li>
  </ul>
  </section>
);

export default Header;
