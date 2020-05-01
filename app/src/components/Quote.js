import React from "react";
import { connect } from "react-redux";

import { getQuote } from "../actions/quoteActions";

const Quotes = ({ getQuote, quote, isFetching, error }) => {
  if (error !== "")
    return (
      <div>
        <h2>{error}</h2>
        <button onClick={getQuote}>Load New Quote</button>
      </div>
    );

  if (isFetching) {
    return <h2>Fetching a quote now :)</h2>;
  } else {
    return (
      <div>
        <button className='button' onClick={getQuote}>Load New Quote</button>
        <h2>{quote}</h2>
      </div>
    );
  }
};

const mapStateToProps = state => {
  return {
    quote: state.quoteReducer.quote,
    isFetching: state.quoteReducer.isFetching,
    error: state.quoteReducer.error
  };
};

export default connect(
  mapStateToProps,
  { getQuote }
)(Quotes);
