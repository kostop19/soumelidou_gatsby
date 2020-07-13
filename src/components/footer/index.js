import React from "react";
import { Link } from "gatsby";

const Footer = () => (
  <footer>
    <div className="footer" id="footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <h4> Eleni Soumelidou </h4>
            <ul>
              <li>
                <a className="email" href="mailto: esoumel@gmail.com ">
                  esoumel@gmail.com
                </a>
              </li>
              <br />
              <li>
                <p> Οδυσσέως Ανδρούτσου 29, Κουκάκι</p>
              </li>
              <li>
                {" "}
                <p>Τηλ. 211 41 47 917</p>{" "}
              </li>
            </ul>
          </div>

         
        </div>
      </div>
    </div>

    <div className="footer-bottom">
      <div className="container">
        <p className="pull-left copyright" style={{marginBottom: '0.5rem'}}>
          {" "}
          Copyright © 2020. All right reserved.{" "}
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
