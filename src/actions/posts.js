import axios from "axios";
import {
  REMOVE_POST,
  ADD_POST,
  UPDATE_POST,
  VOTE,
  ADD_COMMENT,
  REMOVE_COMMENT,
  FETCH_POST
} from "./types";

const API_URL = process.env.REACT_APP_API_URL || "http://localhost:5000/api/posts";

export function getPostFromAPI(id) {
    return async function (dispatch) {
      const response = await axios.get(`${API_URL}/${id}`);
      return dispatch(getPost(response.data));
    };
  }

//   to make:   
//   updatePostInAPI,
//   sendVoteToAPI,
//   sendCommentToAPI,
//   removeCommentFromAPI,
//   removePostFromAPI