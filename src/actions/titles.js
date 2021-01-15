import axios from 'axios';
import {FETCH_TITLES} from "./types"; //eliminate typos
const API_URL = process.env.REACT_APP_API_URL || "http://localhost:5000/api/posts"; //so we can connect to backend
//hoisting that action function to create a thunk
export function fetchTitlesFromAPI() {
  return async function (dispatch) {
    const response = await axios.get(`${API_URL}`);
    return dispatch(getTitles(response.data));
  };
}
//creating an actiom
function getTitles(titles) {
  return {
    type: FETCH_TITLES,
    titles,
  };
}
