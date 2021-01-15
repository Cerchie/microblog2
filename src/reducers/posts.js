import {
    FETCH_POST,
    REMOVE_POST,
    ADD_POST,
    UPDATE_POST,
    VOTE,
    ADD_COMMENT,
    REMOVE_COMMENT
  } from "../actions/types";
  //grabs actions types to eliminate typos
  
  
  export default function rootReducer(state = {}, action) {
    let p = state[action.postId];
    //grabbing post id
    switch (action.type) {
  
      case FETCH_POST:
        return { ...state, [action.post.id]: action.post };
        //spreading post into state to get it
      case ADD_POST:
        return { ...state, [action.post.id]: { ...action.post, comments: [] }};
        //spreading new post into state with comments
      case UPDATE_POST:
        return {
          ...state,
          [action.post.id]: {
            ...action.post,
            comments: state[action.post.id].comments
          }
        };
        //spreading old post into state again to update
      case REMOVE_POST:
        let posts = { ...state };
        delete posts[action.postId];
        return posts;
        //uses delete func to delete post
  
      case VOTE:
        return {
          ...state,
          [action.postId]: { ...p, votes: action.votes }
        };
        //spreads new vode with post id into state
      case ADD_COMMENT:
        return {
          ...state,
          [action.postId]: { ...p, comments: [...p.comments, action.comment] }
        };
        //spreading new comment into state
      case REMOVE_COMMENT :
        return {
          ...state,
          [action.postId]: {
            ...p, comments: p.comments.filter(c => c.id !== action.commentId)
          }
        };
        //filters out deleted comment
      default:
        return state;
    }
  }

  