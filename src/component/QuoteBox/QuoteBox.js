import "./QuoteBox.css";
import PropTypes from "prop-types";
import quote from "./quote.svg";
import NextBtn from "../NextBtn/NextBtn";

function QuoteBox({ text, author, onClickNextBtn }) {
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
          <NextBtn btnId="new-quote" onClick={onClickNextBtn} />
        </div>
      </div>
    </div>
  );
}

QuoteBox.propTypes = {
  text: PropTypes.string,
  author: PropTypes.string,
  onClickNextBtn: PropTypes.func,
};

QuoteBox.defaultProps = {
  text: "A life spent making mistakes is not only more honorable but more useful than a life spent in doing nothing.",
  author: "George Bernard Shaw",
  onClickNextBtn: () => {
    console.log("NextBtn clicked.");
  },
};

export default QuoteBox;
