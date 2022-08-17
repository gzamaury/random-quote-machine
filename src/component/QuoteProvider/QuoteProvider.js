import React, { Component } from "react";
import PropTypes from "prop-types";
import fetchRandomQuote from "../../api/quoteApi";

export default class QuoteProvider extends Component {
  constructor(props) {
    super(props);

    this.cachedQuote = {};
    this.state = {};
    this.newQuote = this.newQuote.bind(this);
  }

  componentDidMount() {
    this.newQuote();
  }

  newQuote() {
    this.setState(this.cachedQuote);

    const locale = navigator.language;
    fetchRandomQuote({ locale })
      .then((result) => {
        this.cachedQuote = formatResult(result);
      })
      .catch((error) => {
        console.error(`Failed to get a new quote: ${error}`);
      });
  }

  render() {
    const { children } = this.props;
    const { text, author } = this.state;
    const onClickNextBtn = this.newQuote;

    return React.cloneElement(children, {
      text,
      author,
      onClickNextBtn,
    });
  }
}

QuoteProvider.propTypes = {
  children: PropTypes.element.isRequired,
};

function formatResult(result) {
  const text = result.data.content;
  const author = result.data.originator.name;
  return { text, author };
}
