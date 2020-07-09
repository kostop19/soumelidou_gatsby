import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import HeroText from "../components/heroText";

import { StaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
import Quotes from "../components/quotes";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <StaticQuery
      query={graphql`
        query {
          placeholderImage: file(relativePath: { eq: "street.jpg" }) {
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
            style={{ height: "100vh" }}
          />
          <HeroText
          styles={{textAlign: 'center', width:"50%"}}
          underline
            title="Ελένη Σουμελίδου"
            subtitle="Ψυχολόγος MSc, Ψυχοδυναμική Ψυχοθεραπεύτρια Αναλύτρια Ομάδας,
         Ζεύγους & Οικογένειας"
          />
        </div>
      )}
    />

    <div
      className="container-fluid"
    >
      <Quotes/>
    </div>
  </Layout>
);

export default IndexPage;
