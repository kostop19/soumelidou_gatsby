import React from "react";
import "./index.css";

const Quotes = () => {
  return (
    <section class="testimonial">
      <div class="inner">
        <div class="cederholm" id="quote-wrapper">
          <div class="quote">
            <blockquote id="quote-quote">
                Η αγάπη είναι η μόνη υγιής και ικανοποιητική απάντηση στο πρόβλημα της ανθρώπινης ύπαρξης.
            </blockquote>
            <cite id="quote-attrib">Erich Fromm, 1900 - 1980</cite>
          </div>
          <div class="portrait"></div>
        </div>
      </div>
    </section>
  );
};

export default Quotes;
