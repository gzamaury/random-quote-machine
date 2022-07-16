import React, { Component } from "react";
import PropTypes from "prop-types";
import fetchRandomQuote from "../../api/quoteApi";

export default class QuoteProvider extends Component {
  constructor(props) {
    super(props);

    this.state = {};
    this.newQuote = this.newQuote.bind(this);
  }

  componentDidMount() {
    this.newQuote();
  }

  newQuote() {
    fetchRandomQuote()
      .then((result) => {
        const { text, author } = formatResult(result);
        this.setState({ text, author });
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
