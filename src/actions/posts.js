import axios from "axios";
import { captureRejectionSymbol } from "events";
import { bindActionCreators } from "redux";
import {
  REMOVE_POST,
  ADD_POST,
  UPDATE_POST,
  VOTE,
  ADD_COMMENT,
  REMOVE_COMMENT,
  FETCH_POST
} from "./types";
//importing actions to eliminate typos
//this api url will help us do actions on the backend

const API_URL = process.env.REACT_APP_API_URL || "http://localhost:5000/api/posts";

//below is an example of a normal action creator
function getPost(post) {
    return {
      type: FETCH_POST,
      post,
    };
  }
//below is an example of a thunk action creator. We use normal action creators below to 
// create function that return actions then we use those functions in our thunk funcs
export function getPostFromAPI(id) {
    return async function (dispatch) {
      const response = await axios.get(`${API_URL}/${id}`);
      return dispatch(getPost(response.data));
    };
  }
  export function updatePostInAPI(id, title, description, body) {
    return async function (dispatch) {
      const response = await axios.put(`${API_URL}/${id}`, {
        title,
        description,
        body
      });
      return dispatch(updatePost(response.data));
    };
  }
  
  function updatePost(post) {
    return {
      type: UPDATE_POST,
      post,
    };
  }
  function vote(postId, votes) {
    return {
      type: VOTE,
      postId: postId,
      votes: votes,
    };
  }
  function addPost(post) {
    return {
      type: ADD_POST,
      post
    };
  }
  export function sendVoteToAPI(id, direction) {
    return async function (dispatch) {
      const response = await axios.post(`${API_URL}/${id}/vote/${direction}`);
      return dispatch(vote(id, response.data.votes));
    };
  }
  export function sendPostToAPI(title, description, body) {
    return async function (dispatch) {
      const response = await axios.post(`${API_URL}`, {
        title,
        description,
        body
      });
      return dispatch(addPost(response.data));
    };
  }
  function addComment(postId, comment) {
    return { type: ADD_COMMENT, postId, comment };
  }
  export function sendCommentToAPI(postId, text) {
    return async function (dispatch) {
      const result = await axios.post(`${API_URL}/${postId}/comments/`, { text });
      return dispatch(addComment(postId, result.data));
    };
  }
  export function removeCommentFromAPI(postId, commentId) {
    return async function (dispatch) {
      await axios.delete(`${API_URL}/${postId}/comments/${commentId}`);
      return dispatch(removeComment(postId, commentId));
    };
  }
  
  function removeComment(postId, commentId) {
    return {
      type: REMOVE_COMMENT,
      postId,
      commentId,
    };
  }
  export function removePostFromAPI(id) {
    return async function (dispatch) {
      await axios.delete(`${API_URL}/${id}`);
      return dispatch(removePost(id));
    };
  }
  
  function removePost(postId) {
    return {
      type: REMOVE_POST,
      postId
    };
  }
  



