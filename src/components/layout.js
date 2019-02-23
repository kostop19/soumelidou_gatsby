import React from "react";
import PropTypes from "prop-types";
import { StaticQuery, graphql } from "gatsby";

import Header from "./header/header";
import "./layout.css"
import "../assets/css/bootstrap.min.css";

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <div className="container-fluid" style={{ padding: 0 }}>
          <div className="row">
            <div className="col-md-4">
              <Header siteTitle={data.site.siteMetadata.title} siteDescription={data.site.siteMetadata.description}/>
            </div>
            <div className="col-md-8">
              <main
                style={{
                  maxWidth: "54em",
                  padding: "6em 4em 4em",
                  
                }}
              >
                {children}
              </main>
              <footer>
                © {new Date().getFullYear()}, Built with
                {` `}
                <a href="https://www.gatsbyjs.org">Gatsby</a>
              </footer>
            </div>
          </div>
        </div>
      </>
    )}
  />
);

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
