import React from "react";
import "./index.css";

const Quotes = ({ text, author }) => {
  return (
    <section className="testimonial">
      <div className="inner">
        <div className="cederholm" id="quote-wrapper">
          <div className="quote">
            <blockquote id="quote-quote">{text}</blockquote>
            <cite id="quote-attrib">{author}</cite>
          </div>
          <div className="portrait"></div>
        </div>
      </div>
    </section>
  );
};

export default Quotes;
