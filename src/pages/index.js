import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import HeroText from "../components/heroText";

import { StaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <StaticQuery
      query={graphql`
        query {
          placeholderImage: file(relativePath: { eq: "street.jpg" }) {
            childImageSharp {
              fluid(maxWidth: 1000) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      `}
      render={(data) => (
        <div style={{position:'relative'}}>
          <Img
            fluid={data.placeholderImage.childImageSharp.fluid}
            style={{ height: "100vh" }}
          />
          <HeroText
            title="ΕΛΕΝΗ ΣΟΥΜΕΛΙΔΟΥ"
            subtitle="Ψυχολόγος MSc, Ψυχοδυναμική Ψυχοθεραπεύτρια - Αναλύτρια Ομάδας,
         Ζεύγους & Οικογένειας"
          />
        </div>
      )}
    />

    <div
      className="container front_page_container"
      style={{ marginTop: 120, marginBottom: 120 }}
    >
      <blockquote className="blockquote ">
        <div className="blockquote-custom-icon bg-info shadow-sm"></div>
        <p className="mb-0 mt-2 font-italic">"Άντρες Πεταμένα Λεφτά ..."</p>
      </blockquote>
    </div>
  </Layout>
);

export default IndexPage;
