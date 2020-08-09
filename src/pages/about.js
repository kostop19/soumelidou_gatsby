import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import Image from "../components/image";
import HeroText from "../components/heroText";
import { StaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

const About = () => {
  return (
    <Layout>
      <SEO title="Βιογραφικό" keywords={[`gatsby`, `application`, `react`]} />
      <StaticQuery
        query={graphql`
          query {
            placeholderImage: file(relativePath: { eq: "tree.jpg" }) {
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
            <HeroText title="Βιογραφικό" styles={{ textAlign: "center" }} />
          </div>
        )}
      />

      <div
        className="container main-content"
        style={{ marginTop: "-52px", zIndex: "100", position: "relative" }}
      >
        <p>Η Ελενη Σουμελίδου γεννήθηκε και μεγάλωσε στην Αθήνα.</p>
        <p>
          Σπούδασε ψυχολογία στο Αμερικάνικο Κολλέγιο Ελλάδος και απέκτησε το
          μεταπτυχιακό της από το Πανεπιστήμιο του KENT στην Αγγλία με
          αντικείμενο τη ψυχοθεραπεία. Εκεί, μελέτησε όλα τα μοντέλα
          ψυχοθεραπείας με κυρίως έμφαση στο ψυχαναλυτικο μοντέλο, ενώ, δούλεψε
          εθελοντικά στο νοσοκομείο St.Martins με ασθενείς σε ατομικό αλλά και
          ομαδικό πλαίσιο.{" "}
        </p>
        <p style={{ marginBottom: "24px" }}>
          Στη συνέχεια, εκπαιδεύτηκε για 5 χρόνια στην Ελληνική Εταιρεία
          Αναλυτικής Ομαδικής και Οικογενειακής Ψυχοθεραπείας, στην ομαδική
          ψυχοθεραπέια, στην οικογενειακή ψυχοθεραπεία και στην ψυχοθεραπεία
          ζεύγους. Έπειτα, ολοκλήρωσε το εκπαιδευτικό πρόγραμμα του
          International Psychotherapy Institute όπου εξειδικεύτηκε στην
          ψυχοθεραπεία ζεύγους. Παράλληλα, εκπαιδεύτηκε στην χρήση και ερμηνεία
          του τεστ θεματικής αντίληψης ΤΑΤ και του τεστ προσωπικότητας MMPI-2.
        </p>
        <Image />
        <p style={{ marginTop: "24px" }}>
          Είναι μέλος του Mέλος του British Psychological society (BPS) και του
          Canterbury Consortium of Psychoanalytic and Psychodynamic
          Psychotherapists (CCOPPP). Επίσης, είναι πρόσεδρο μέλος της Ελληνικής
          Εταιρείας Αναλυτικής Ομαδικής και Οικογενειακής Ψυχοθεραπείας.
        </p>
        <p>
          Εργάζεται ιδιωτικά από το 2010, ενώ από το 2016 είναι επιστημονική
          συνεργάτιδα του ΟΠΑΠ στο πλαίσιο του προγράμματος «Αθλητικές ακαδημίες
          ΟΠΑΠ».{" "}
        </p>
      </div>
    </Layout>
  );
};

export default About;
