import React, { Component } from "react";
import PropTypes from "prop-types";

const initialState = {
  text: "New Quote",
  author: "New Author",
};

export default class QuoteProvider extends Component {
  constructor(props) {
    super(props);

    this.state = {};
    this.newQuote = this.newQuote.bind(this);
  }

  newQuote() {
    this.setState(initialState);
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
