import axios from "axios";


export const FETCHING_QUOTE_START = "FETCHING_QUOTE_START";
export const FETCHING_QUOTE_SUCCESS = "FETCHING_QUOTE_SUCCESS";
export const FETCHING_QUOTE_FAILURE = "FETCHING_QUOTE_FAILURE";

export const getQuote = () => dispatch => {
  dispatch({ type: FETCHING_QUOTE_START });

  axios
    .get("https://quote-garden.herokuapp.com/api/v2/quotes/random")
    .then(res => {
      console.log(res.data);

      dispatch({
        type: FETCHING_QUOTE_SUCCESS,
        payload: res.data.quote.quoteText
      });
    })
    .catch(err => {
      console.log(err);

      dispatch({
        type: FETCHING_QUOTE_FAILURE,
        payload: `${err.statusText} with response code ${err.status}`
      });
    });
};
