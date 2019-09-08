import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import FeaturedArea from "../components/featuredArea";
const backgroundImage = require('../images/artboard.png')
const Services = () => {
  return (
    <Layout>
      <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
      <FeaturedArea title="Υπηρεσίες" overlay={true} img={backgroundImage}/>

      <div className="container" style={{ marginTop:'54px', marginBottom:'54px' }}>
        <div className="row">
          <div className="col-md-4">
            <h3>Ατομική ψυχοθεραπεία</h3> 
            <div className="services-description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam nec risus eu quam vehicula tempor. Cras efficitur dui nec ligula dignissim, tempus tempus massa luctus. Mauris congue eget justo eu interdum. 
            </div>
          </div>
          <div className="col-md-4">
            <h3>Ομαδική ψυχοθεραπεία</h3>
            <div className="services-description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam nec risus eu quam vehicula tempor. Cras efficitur dui nec ligula dignissim, tempus tempus massa luctus. Mauris congue eget justo eu interdum. 
            </div>
          </div>
          <div className="col-md-4">
            <h3>Ψυχοθεραπεία ζεύγους</h3>
            <div className="services-description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam nec risus eu quam vehicula tempor. Cras efficitur dui nec ligula dignissim, tempus tempus massa luctus. Mauris congue eget justo eu interdum. 
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Services;
