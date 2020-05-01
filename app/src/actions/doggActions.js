import axios from 'axios';

export const FETCHING_PICTURES_START = "FETCHING_PICTURES_START";
export const FETCHING_PICTURES_SUCCESS = "FETCHING_PICTURES_SUCCESS";
export const FETCHING_PICTURES_FAILURE = "FETCHING_PICTURES_FAILURE";


export const getPictures = () => dispatch => {
    dispatch({ type:FETCHING_PICTURES_START });

    axios
    .get(`https://dog.ceo/api/breeds/image/random`)
    .then(res => {
        console.log('res', res);
        dispatch({ type: FETCHING_PICTURES_SUCCESS, payload: res.data.message })
    })
    .catch(err => {
      dispatch({
        type: FETCHING_PICTURES_FAILURE,
        payload: `${err.statusText} with response code ${err.status}`
    })
  })
}
