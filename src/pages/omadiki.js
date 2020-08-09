import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";

import HeroText from "../components/heroText";
import { StaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

const Index = () => {
  return (
    <Layout>
      <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
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
            <Img
              fluid={data.placeholderImage.childImageSharp.fluid}
              style={{ height: "400px" }}
            />
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
        style={{ marginTop: "-52px", zIndex: "100", position: "relative" }}
      >
        <p>
          Η ομαδική ψυχοθεραπεία γεννήθηκε από την ανάγκη για την βελτιωση και
          ανακουφιση συμπτωματων χρονιας ασθένειας.{" "}
        </p>
      </div>
    </Layout>
  );
};

export default Index;
