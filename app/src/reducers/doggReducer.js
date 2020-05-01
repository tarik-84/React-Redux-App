import {
    FETCHING_PICTURES_START,
    FETCHING_PICTURES_SUCCESS,
    FETCHING_PICTURES_FAILURE
  } from "../actions/doggActions";
  
  const initialState = {
    dogg: null,
    isFetching: false,
    error: ""
  };
  
  export const doggReducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCHING_PICTURES_START:
        return {
          ...state,
          isFetching: true
        };
      case FETCHING_PICTURES_SUCCESS:
        return {
          ...state,
          isFetching: false,
          dogg: action.payload
        };
      case FETCHING_PICTURES_FAILURE:
        return {
          ...state,
          isFetching: false,
          error: "There was an error."
        };
      default:
        return state;
    }
  };
  