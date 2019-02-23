import React from "react";
import "./contactform.css";

const ContactForm = () => {
  return (
    <div className="container" style={{ padding: 0 }}>
      <div className="row">
        <div className="col-md-8">
          <form>
            <div className="row">
              <div className="col-md-6">
                <input type="text" name="name" placeholder="Ονομα" />
              </div>
              <div className="col-md-6">
                <input type="text" name="email" placeholder="Email" />
              </div>
            </div>
            <textarea name="message" placeholder="Μηνυμα" rows="4" />
            <input type="submit" value="Αποστολή" />
          </form>
        </div>
        <div className="col-md-4">
          <div className="container-info">
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
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
