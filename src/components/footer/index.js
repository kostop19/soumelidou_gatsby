import React from "react";
import { StaticQuery, graphql } from "gatsby";
import Img from "gatsby-image/withIEPolyfill";

const Footer = () => (
  <footer className="border-top" >
    <div className="row">
      <div className="col-12 col-md">
        <small className="d-block mb-3 text-muted">&copy; 2017-2018</small>
        <StaticQuery
          query={graphql`
            query {
              placeholderImage: file(relativePath: { eq: "logo.jpg" }) {
                childImageSharp {
                  fluid(quality: 100) {
                    ...GatsbyImageSharpFluid_withWebp
                  }
                }
              }
            }
          `}
          render={(data) => (
            <Img
              fluid={data.placeholderImage.childImageSharp.fluid}
              style={{ height: "50px", width: "50px", borderRadius: "8px"}}
            />
          )}
        />
      </div>
      <div className="col-6 col-md">
        <h5>Βιογραφικό</h5>
      </div>
      <div className="col-6 col-md">
        <h5>Υπηρεσίες</h5>
        <ul className="list-unstyled text-small">
          <li>
            <a className="text-muted" href="#">
              Resource
            </a>
          </li>
          <li>
            <a className="text-muted" href="#">
              Resource name
            </a>
          </li>
          <li>
            <a className="text-muted" href="#">
              Another resource
            </a>
          </li>
          <li>
            <a className="text-muted" href="#">
              Final resource
            </a>
          </li>
        </ul>
      </div>
      <div className="col-6 col-md">
        <h5>Υπηρεσίες</h5>
        <ul className="list-unstyled text-small">
          <li>
            <a className="text-muted" href="#">
              Ατομική ψυχοθεραπεία
            </a>
          </li>
          <li>
            <a className="text-muted" href="#">
              Ομαδική ψυχοθεραπεία
            </a>
          </li>
          <li>
            <a className="text-muted" href="#">
              Οικογενειακή
            </a>
          </li>
          <li>
            <a className="text-muted" href="#">
              Ψυχοθεραπεία ζευγους
            </a>
          </li>
        </ul>
      </div>
    </div>
  </footer>
);

export default Footer;
