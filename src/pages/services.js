import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import FeaturedArea from "../components/featuredArea";

const Services = () => {
  return (
    <Layout>
      <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
      <FeaturedArea title="Υπηρεσίες" />

      <div className="container" style={{ marginTop: 32 }}>
        <div className="row">
          <div className="col-md-4">
            <h3>Ατομική ψυχοθεραπεία</h3>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Services;
