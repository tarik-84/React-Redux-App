import React from "react";
import { connect } from "react-redux";

import { getQuote } from "../actions/quoteActions";

const Quotes = ({ getQuote, quote, isFetching, error }) => {
  if (error !== "")
    return (
      <div>
        <h2>{error}</h2>
        <button onClick={getQuote}>Load New Cat Fact</button>
      </div>
    );

  if (isFetching) {
    return <h2>Fetching a quote now :)</h2>;
  } else {
    return (
      <div>
        <button onClick={getQuote}>Load New Cat Fact</button>
        <h2>Cat Fact: {quote}</h2>
      </div>
    );
  }
};

const mapStateToProps = state => {
  return {
    quote: state.quote,
    isFetching: state.isFetching,
    error: state.error
  };
};

export default connect(
  mapStateToProps,
  { getQuote }
)(Quotes);
