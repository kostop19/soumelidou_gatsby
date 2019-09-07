import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import './index.css';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />

    <div className="container-fluid featured-container">
      <div className="container">
      <div className="featured-text">
        <h2>Ελένη Σουμελίδου </h2>
        <div style={{width:50, height:4, backgroundColor:'#202528', margin:'10px 0'}}></div>
        <h3>Ψυχολόγος MSc, Ψυχοδυναμική Ψυχοθεραπεύτρια - Αναλύτρια
        Ομάδας, Ζεύγους & Οικογένειας</h3>
      </div>
      </div>
    </div>

    <div
      className="container front_page_container"
      style={{ marginTop: 34, marginBottom: 24 }}
    >
      <div className="row">
        <div class="col-md-1"></div>
        <div className="col-md-9 ">
          <h5> Η Ελενη Σουμελίδου γεννήθηκε και μεγάλωσε στην Αθήνα.</h5>
          <p>
            Σπούδασε ψυχολογία στο Αμερικάνικο Κολλέγιο Ελλάδος και απέκτησε το
            μεταπτυχιακό της από το Πανεπιστήμιο του KENT στην Αγγλία με
            αντικείμενο την ψυχοθεραπεία. Εκεί, μελέτησε όλα τα μοντέλα
            ψυχοθεραπείας με κυρίως έμφαση στο ψυχαναλυτικο μοντέλο, ενώ,
            δούλεψε εθελοντικά στο νοσοκομείο St.Martins με ασθενείς σε ατομικό
            αλλά και ομαδικό πλαίσιο.{" "}
          </p>
          <p>
            Στη συνέχεια, εκπαιδεύτηκε για 5 χρόνια στην Ελληνική Εταιρεία
            Αναλυτικής Ομαδικής και Οικογενειακής Ψυχοθεραπείας στην ομαδική
            ψυχοθεραπέια, στην οικογενειακή ψυχοθεραπεία και στην ψυχοθεραπεία
            ζεύγους. Έπειτα, ολοκλήρωσε το εκπαιδευτικό πρόγραμμα του
            International Psychotherapy Institute όπου εξειδικεύτηκε στην
            ψυχοθεραπεία ζέυγους. Παράλληλα, εκπαιδεύτηκε στην χρήση και
            ερμηνεία του τεστ θεματικής αντίληψης ΤΑΤ και του τεστ
            προσωπικότητας MMPI-2.
          </p>
          <p>
            Είναι μέλος του Mέλος του British Psychological society (BPS) και
            του Canterbury Consortium of Psychoanalytic and Psychodynamic
            Psychotherapists (CCOPPP). Επίσης, είναι πρόσεδρο μέλος της
            Ελληνικής Εταιρείας Αναλυτικής Ομαδικής και Οικογενειακής
            Ψυχοθεραπείας.
          </p>
        </div>
      </div>
    </div>
  </Layout>
);

export default IndexPage;
