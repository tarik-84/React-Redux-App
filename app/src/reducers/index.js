import { combineReducers } from "redux";
import { doggReducer } from './doggReducer';
import { quoteReducer } from './quoteReducer';


export const rootReducer = combineReducers({
  doggReducer,
  quoteReducer
});