import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";

import HeroText from "../components/heroText";
import { StaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
import BackgroundImage from "gatsby-background-image";
const Index = () => {
  return (
    <Layout>
      <SEO title="Ομαδική Ψυχοθεραπεία" keywords={[`ομαδική`, `ομαδική ψυχοθεραπεία`, `ψυχοθεραπεία`]} />
      <StaticQuery
        query={graphql`
          query {
            placeholderImage: file(relativePath: { eq: "omadiki.jpg" }) {
              childImageSharp {
                fluid(quality: 100) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        `}
        render={(data) => (
          <div style={{ position: "relative" }}>
            {/* <Img
              fluid={data.placeholderImage.childImageSharp.fluid}
              style={{ height: "400px" }}
            /> */}

        <BackgroundImage
              Tag="section"
              style={{ height: "100vh", backgroundSize: "cover"}}
              fluid={data.placeholderImage.childImageSharp.fluid}
              backgroundColor={`#040e18`}
            ></BackgroundImage>
            <HeroText
              title="Ομαδική Ψυχοθεραπεία"
              styles={{ textAlign: "center" }}
            />
            <div
              style={{
                height: "100%",
                width: "100%",
                background: "rgba(0,0,0,0.3)",
                position: "absolute",
                top: "0px",
              }}
            ></div>
          </div>
        )}
      />

      <div
        className="container main-content"
        style={{
          marginTop: "52px",
          zIndex: "100",
          position: "relative",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "400px",
        }}
      >
        <h2 style={{textAlign:"center", color: "grey"}}>To τμήμα αυτό είναι υπο κατασκευή</h2>
      </div>
    </Layout>
  );
};

export default Index;
