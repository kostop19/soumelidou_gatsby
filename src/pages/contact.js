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
              style={{ height: "400px" }}
            />
            <HeroText title="Επικοινωνία" styles={{ textAlign: "center" }} />
          </div>
        )}
      />
      <div
        class="container main-content"
        style={{ marginTop: "-52px", zIndex: "100", position: "relative" }}
      >
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
      <div className="container-fluid map-container">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6291.197068050256!2d23.723728!3d37.963159!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14a1bd04e8f0be8f%3A0x9a0678e2a7a7f08e!2sOdissea%20Androutsou%2029%2C%20Athina%20117%2041!5e0!3m2!1sen!2sgr!4v1594667026905!5m2!1sen!2sgr"
          width="100%"
          height="600"
          frameborder="0"
         
          allowfullscreen=""
          aria-hidden="false"
          tabindex="0"
        ></iframe>
      </div>
    </Layout>
  );
};

export default Contact;
