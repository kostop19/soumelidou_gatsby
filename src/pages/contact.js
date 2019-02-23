import React from "react";
import ContactForm from "../components/contactForm/contactForm";
import PageLayout from "../components/pageLayout";

const Contact = () => {
  return (
    <div>
      <PageLayout backgroundColor={"#016477"} title={"ΕΠΙΚΟΙΝΩΝΙΑ"}>
        <p style={{padding: "2em 0"}}>
          Accumsan pellentesque commodo blandit enim arcu non at amet id arcu
          magna. Accumsan orci faucibus id eu lorem semper nunc nisi lorem
          vulputate lorem neque lorem ipsum dolor.
        </p>
        <ContactForm />
      </PageLayout>
    </div>
  );
};

export default Contact;
