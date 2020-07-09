import React from "react";
import ContactForm from "../components/contactForm/contactForm";
import Layout from "../components/layout";
import SEO from "../components/seo";
import { StaticQuery, graphql } from "gatsby";
import Img from "gatsby-image/withIEPolyfill";
import HeroText from "../components/heroText";

const Contact = () => {
  return (
    <Layout>
      <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
      <StaticQuery
        query={graphql`
          query {
            placeholderImage: file(relativePath: { eq: "contact.jpg" }) {
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
              style={{height: "400px"}} 
            />
            <HeroText title="Επικοινωνία" styles={{textAlign: "center"}}/>
          </div>
        )}
      />
      <div class="container main-content" style={{ marginTop: "-52px", zIndex:"100", position: "relative" }}>
        <p style={{ margin: "1em 0" }}>
          Επικοινωνήστε μέσω email, τηλεφώνου, ή στείλτε ένα μήνυμα μέσω της
          online φόρμας.
        </p>
        <div className="contact-info">
          <div className="contact-info-item">
            <div className="material-icons contact-info-icons">home</div>
            Γεωργίου Ανδρούτσου 15 Α, ΤΚ 11741
          </div>
          <div className="contact-info-item">
            <div className="material-icons contact-info-icons">
              perm_phone_msg
            </div>
            210 45 45 62
          </div>
          <div className="contact-info-item">
            <div className="material-icons contact-info-icons">email</div>
            soumelidou@gmail.com
          </div>
        </div>
        <ContactForm />
      </div>
    </Layout>
  );
};

export default Contact;
