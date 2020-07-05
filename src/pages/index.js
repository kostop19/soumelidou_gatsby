import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";

import "./index.css";
import FeaturedArea from "../components/featuredArea";
const bgImage = require("../images/street.jpg");
const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <FeaturedArea
      title="ΕΛΕΝΗ ΣΟΥΜΕΛΙΔΟΥ"
      subTitle="Ψυχολόγος MSc, Ψυχοδυναμική Ψυχοθεραπεύτρια - Αναλύτρια Ομάδας,
          Ζεύγους & Οικογένειας"
      overlay={true}
      img={bgImage}
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
