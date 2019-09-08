import React from "react";
import ContactForm from "../components/contactForm/contactForm";
import Layout from "../components/layout";
import SEO from "../components/seo";
import FeaturedArea from "../components/featuredArea/index";
const backgroundImage = require("../images/contact_bg.png");
const Contact = () => {
  return (
    <Layout>
      <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
      <FeaturedArea title="Επικοινωνία" overlay={true} img={backgroundImage} />
      <div class="container" style={{marginTop:54, marginBottom:54}}>
        <p style={{ margin: "1em 0" }}>
          Accumsan pellentesque commodo blandit enim arcu non at amet id arcu
          magna. Accumsan orci faucibus id eu lorem semper nunc nisi lorem
          vulputate lorem neque lorem ipsum dolor.
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
