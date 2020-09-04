import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";

import HeroText from "../components/heroText";
import { StaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
import BackgroundImage from "gatsby-background-image";
const Index = () => {
  return (
    <Layout>
      <SEO title="Ψυχοθεραπεία Ζεύγους" keywords={[`ψυχοθεραπεία`, `ψυχοθεραπεία ζεύγους`, `ζεύγους`]} />
      <StaticQuery
        query={graphql`
          query {
            placeholderImage: file(relativePath: { eq: "zeugous.jpg" }) {
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
            {/* <Img
              fluid={data.placeholderImage.childImageSharp.fluid}
              style={{ height: "400px" }}
            /> */}
               <BackgroundImage
              Tag="section"
              style={{ height: "100vh", backgroundSize: "cover", backgroundPosition: "80% 20%" }}
              fluid={data.placeholderImage.childImageSharp.fluid}
              backgroundColor={`#040e18`}
            ></BackgroundImage>
            <HeroText
              title="Ψυχοθεραπεία Ζεύγους"
              styles={{ textAlign: "center" }}
            />
            <div
              style={{
                height: "100%",
                width: "100%",
                background: "rgba(0,0,0,0.3)",
                position: "absolute",
                top: "0px",
              }}
            ></div>
          </div>
        )}
      />

      <div
        className="container main-content"
        style={{ marginTop: "52px", zIndex: "100", position: "relative" }}
      >
        <p>
          Ο άνθρωπος έχει ανάγκη να σχετίζεται. Για την ακρίβεια, σχετίζεται από
          τη σύλληψη μέχρι και την υπόλοιπη ζωή του. Η προσωπικότητα αλλά και
          τρόπος με τον οποίο το άτομο έχει βιώσει την οικογένειά του και
          ιδιαίτερα τη μητέρα του, ή, σε περίπτωση απουσίας αυτής, το άτομο που
          το φρόντιζε, επηρεάζει ασυνείδητα το τρόπο που σχετίζεται σήμερα σε
          πολύ μεγάλο βαθμό.
        </p>
        <p>
          Όμως, προκειμένου να δημιουργηθεί, να διατηρηθεί, να εξελιχθεί αλλά
          και να ευημερήσει η σχέση μεταξύ δύο συντρόφων, απαραίτητη προϋπόθεση
          είναι το ζευγάρι να μπορεί να αγαπά, να επικοινωνεί, να κατανοεί και
          να συνεργάζεται, ώστε να μπορεί να ζει αρμονικά, να αφουγκράζεται ο
          ένας τις ανάγκες του άλλου και να ισορροπεί ανάμεσα στη δέσμευση και
          την ελευθερία, τη μοναξιά και τη συντροφικότητα, τη χαρά και τη λύπη,
          την ικανοποίηση και τη ματαίωση, κ.ο.κ.
        </p>
        <p>
          Ωστόσο, υπάρχουν ζευγάρια τα οποία αναζητούν βοήθεια διότι
          αντιμετωπίζουν δυσκολίες στην  επικοινωνία με αποτέλεσμα τις συχνές
          συγκρούσεις και τις διαφωνίες οι οποίες οδηγούν σε συναισθηματική
          απόσταση. Οι σύντροφοι είναι πιθανόν να βιώνουν θυμό, ματαίωση,
          έλλειψη κατανόησης, απόρριψη, υποτίμηση, λύπη, μοναξιά, ή ότι οι
          ανάγκες τους δεν ικανοποιούνται πια.
        </p>
        <p>
          Η ψυχοθεραπεία έχει φανεί πολύ ωφέλιμη για ορισμένους ανθρώπους που
          έχουν βιώσει δυσκολίες σε κάποια φάση στη ζωή τους. Οι δυσκολίες αυτές
          μπορεί να είναι μια απώλεια, για παράδειγμα ένας χωρισμός ή ένας
          θάνατος, ή μια τραυματική εμπειρία.{" "}
        </p>
        <p>
          Ακόμη, άλλα αιτήματα και δυσκολίες, αφορούν σε ψυχοσωματικά
          συμπτώματα, όπως για παράδειγμα εμφάνιση δερματικών συμπτωμάτων ή
          πόνοι στο σώμα, σε έντονα αισθήματα άγχους, θλίψης, μοναξιάς, πανικού,
          έλλειψης ευχαρίστησης και ανησυχίας, αίσθημα κενού και αδιέξοδου στη
          ζωή, σε διάφορες φοβίες.
        </p>
        <p>
          Η θεραπεία ζεύγους είναι μια μορφή ψυχοθεραπείας, η οποία εξετάζει τη
          σχέση δυο συντρόφων είτε αυτοί βρίσκονται σε γάμο είτε όχι. Ο
          θεραπευτικός στόχος είναι η διαμόρφωση ενός σταθερού πλαισίου. Στο
          πλαίσιο αυτό, αναπτύσσονται δυναμικές ανάμεσα στον θεραπευτή και στο
          ζευγάρι οι οποίες επιτρέπουν τη κατανόηση των αναγκών και των
          ασυνείδητων μοτίβων συμπεριφοράς των συντρόφων. Ακόμη, η θεραπεία
          ζεύγους στοχεύει στην αποτελεσματική κατανόηση των συναισθημάτων των
          δυο συντρόφων. Με αυτόν τον τρόπο, οι σύντροφοι νιώθουν ασφάλεια και
          κατορθώνουν να εκφράζουν τα συναισθήματά τους, να επικοινωνούν με
          ώριμο τρόπο, να κατανοούν τον τρόπο με τον οποίο αλληλοεπιδρούν και,
          τελικά, είτε να καλλιεργούν μια ισορροπημένη σχέση, είτε να καλούνται
          να διαπραγματευτούν ώριμα τις διαφορές τους.
        </p>
        <p>
          Όπως συνηθίζεται και στις άλλες μορφές ψυχοθεραπείας, έτσι και η
          θεραπεία ζεύγους λαμβάνει χώρα σε ένα συγκεκριμένο πλαίσιο, το γραφείο
          του θεραπευτή, αποτελείται από τακτικές συνεδρίες, συνήθως μια φορά
          την εβδομάδα και έχει διάρκεια μια ώρα. Στη θεραπεία ζεύγους
          απαιτείται η παρουσία και των δύο μελών του ζευγαριού σε κάθε
          συνεδρία.
        </p>
      </div>
    </Layout>
  );
};

export default Index;
