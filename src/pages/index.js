import React from "react";
import { Link } from "gatsby";
import Box from "../components/boxes/box";
import Description from "../components/description/description";
import Layout from "../components/layout";
import SEO from "../components/seo";
import ContactForm from '../components/contactForm/contactForm'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />

    <div className="container">
      <div className="row first-section-row">
      <Description title="Λιγα λογια για εμένα">
        Η οικονομική κρίση που βιώνει ο κάθε άνθρωπος οδηγεί σε ψυχοπιεστικές
        καταστάσεις ανισορροπίας, καταστάσεις που αφορούν στην προσωπική,
        οικογενειακή, κοινωνική και επαγγελματική του ζωή. Η κοινωνική απομόνωση
        αποτελεί εξίσου δυνητικό παράγοντα στη ζωή του κάθε ανθρώπου. Ο
        αυτοτραυματισμός και η αυτοκτονική συμπεριφορά παιδιών, εφήβων και
        ενηλίκων συνιστά ένα σοβαρό πρόβλημα ψυχικής υγείας διεθνώς.
      </Description>
      <input type="button" value="Περισσότερα"/>
      </div>
      <div className="row section-row">
        <div className="col-md-6" style={{ padding: "0px" }}>
          <Box title={"Λίγα λόγια για Εμένα"} backgroundColor={"#d78632"} />
        </div>
        <div className="col-md-6" style={{ padding: "0px" }}>
          <Box title={"Ο χώρος"} backgroundColor={"#09ae82"} />
        </div>
        <div className="col-md-6" style={{ padding: "0px" }}>
          <Box title={"Υπηρεσίες"} backgroundColor={"#faccd0"} />
        </div>
        <div className="col-md-6" style={{ padding: "0px" }}>
          <Link to="/contact/">
            <Box title={"Επικοινωνία"} backgroundColor={"#016477"} />
          </Link>
        </div>
      </div>
      <div className="row section-row">
      <Description title="Επικοινωνία">
      Accumsan pellentesque commodo blandit enim arcu non at amet id arcu magna. Accumsan orci faucibus id eu lorem semper nunc nisi lorem vulputate lorem neque lorem ipsum dolor.
      </Description>
        <ContactForm/>
      </div>
    </div>
  </Layout>
);

export default IndexPage;
