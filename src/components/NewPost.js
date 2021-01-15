import React from "react";

import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { sendPostToAPI } from "../actions/posts";
import PostForm from "../components/PostForm";

/** Show post form, and handle editing of it. */

function NewPost() {
//gonna need history and dispatch for form function
  const dispatch = useDispatch();
  const history = useHistory();

  /** Adds post and saves to backend. */
  //grabbing our action (a thunk creator IN ACTION!!) to dispatch out post to db
  function add({ title, description, body }) {
    dispatch(sendPostToAPI(title, description, body));
    history.push("/"); //making sure we can go back without refresh
  }

  /** Cancel (redirect) */

  function cancel() {
    history.push("/"); //just making sure we go back
  }

  return (
    <main>
      <h1>New Post</h1>
      <PostForm save={add} cancel={cancel} /> 
    </main>
  );
} //rendering PostForm

export default NewPost;