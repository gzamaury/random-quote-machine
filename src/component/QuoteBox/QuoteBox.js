import "./QuoteBox.css";
import PropTypes from "prop-types";
import quote from "./quote.svg";
import NextBtn from "../NextBtn/NextBtn";

function QuoteBox({ text, author, onClick }) {
  return (
    <div id="quote-box" className="quoteBox">
      <div className="quoteBox-container row-layout">
        <div id="quote-col" className="column-layout">
          <img src={quote} className="quote-img" alt="quote" />
          <p id="text" data-testid="quote-box">
            {text}
          </p>
          <span id="author">— {author}</span>
        </div>
        <div id="btn-col">
          <NextBtn onClick={onClick} />
        </div>
      </div>
    </div>
  );
}

QuoteBox.propTypes = {
  text: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default QuoteBox;
