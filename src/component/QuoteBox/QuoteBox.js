import "./QuoteBox.css";
import PropTypes from "prop-types";
import quote from "./quote.svg";
import NextBtn from "../NextBtn/NextBtn";
import twitter from "./twitter.svg";

function QuoteBox({ text, author, onClickNextBtn }) {
  const tweetHref = `https://twitter.com/intent/tweet?text=${encodeURIComponent(
    `${text} \n\t—${author}`
  )}`;

  return (
    <div id="quote-box" className="quoteBox">
      <div className="quoteBox-container row-layout">
        <div id="quote-col" className="column-layout">
          <p id="text" data-testid="quote-box">
            <img src={quote} className="quote-img" alt="quote" />
            {text}{" "}
            <a
              id="tweet-quote"
              href={tweetHref}
              target="_blank"
              rel="noreferrer"
            >
              <img src={twitter} alt="twitter" />
            </a>
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
