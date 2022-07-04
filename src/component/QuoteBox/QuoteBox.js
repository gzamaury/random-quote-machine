import "./QuoteBox.css";
import PropTypes from "prop-types";
import quote from "./quote.svg";

function QuoteBox({ text, author }) {
  return (
    <div id="quote-box" className="quoteBox">
      <div className="quoteBox-container">
        <img src={quote} className="quote-img" alt="quote" />
        <p id="text">{text}</p>
        <span id="author">— {author}</span>
      </div>
    </div>
  );
}

QuoteBox.propTypes = {
  text: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

export default QuoteBox;
