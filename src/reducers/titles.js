import {
    REMOVE_POST,
    ADD_POST,
    UPDATE_POST,
    VOTE, FETCH_TITLES,
  } from "../actions/types";
  //this reducer pulls in the action types so typos are avoided
  function sortByVote(posts) {
    return posts.sort((a, b) => b.votes - a.votes);
  }
  //sorts posts
  function makeTitleFromPost({id, title, description, votes}) {
    return {id, title, description, votes};
  }
  //grabs post title and title info
  export default function rootReducer(state = [], action) {
    switch (action.type) {
  
      case FETCH_TITLES:
        return sortByVote([...action.titles]);
        //spreads titles from action into array
      case ADD_POST:
        return sortByVote([...state, makeTitleFromPost(action.post)]);
        //spreads newly made titles and the current state into an array, then sorts
      case REMOVE_POST:
        return state.filter(title => title.id !== action.postId);
        //removes post by filtering it out
      case UPDATE_POST:
        return state.map(title => title.id === action.post.id
          ? makeTitleFromPost(action.post)
          : title);
            //updates post by mapping it out to a new title or just the current from map
      case VOTE:
        return sortByVote(state.map(
            title => title.id === action.postId ? { ...title, votes: action.votes } : title));
            //maps new vote
      default:
        return state;
    }
  }
  