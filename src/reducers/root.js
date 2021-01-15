import posts from './posts';
import titles from './titles';
import { combineReducers } from "redux";

export default combineReducers({
  posts,
  titles,
});

//this root reducer combines these two functions 
//into a single reducing func that gets passed to createStore