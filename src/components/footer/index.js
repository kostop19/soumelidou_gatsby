import React from "react";
import { StaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

const Footer = () => (
  <footer>
    <div className="footer" id="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <StaticQuery
              query={graphql`
                query {
                  placeholderImage: file(relativePath: { eq: "logo.jpg" }) {
                    childImageSharp {
                      fluid(quality: 100) {
                        ...GatsbyImageSharpFluid
                      }
                    }
                  }
                }
              `}
              render={(data) => (
                <Img
                  fluid={data.placeholderImage.childImageSharp.fluid}
                  style={{ height: "100px", borderRadius: "4px" }}
                />
              )}
            />
          </div>
          <div className="col-md-4">
            <div style={{ display: "flex", justifyContent: "center" }}>
              <div className="material-icons contact-info-icons">home</div>
              <p> Οδυσσέως Ανδρούτσου 29, Κουκάκι</p>
            </div>
          </div>
          <div className="col-md-5">
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                marginBottom: "14px",
              }}
            >
              <div className="material-icons contact-info-icons">email</div>
              <a className="email" href="mailto: esoumel@gmail.com ">
                esoumel@gmail.com
              </a>
            </div>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <div className="material-icons contact-info-icons">
                perm_phone_msg
              </div>
              <p>Τηλ. 211 41 47 917</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="footer-bottom">
      <div className="container">
        <p className="pull-left copyright" style={{ marginBottom: "0.5rem" }}>
          {" "}
          Copyright © 2020. All right reserved.{" "}
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
