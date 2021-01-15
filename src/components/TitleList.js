import React, { useEffect, useState } from "react";

import { useSelector, useDispatch } from 'react-redux';
import { fetchTitlesFromAPI } from '../actions/titles'; //THUNK!
import { Link } from 'react-router-dom';
import { sendVoteToAPI } from "../actions/posts"; //THUNK!

/** Show list of blog titles, ordered by popularity. */

function TitleList() {
  const titles = useSelector(st => st.titles); //useSelector grabs the curr titles
  const dispatch = useDispatch(); //we'll need dispatch
  const [isLoading, setIsLoading] = useState(true); //loading state

  useEffect(function() {
    async function fetchTitle() {
      await dispatch(fetchTitlesFromAPI()); //executing thunk in UseEffect
      setIsLoading(false);
    }

    if (isLoading) {
      fetchTitle();
    }

  }, [dispatch, isLoading]);


  function vote(direction, id) {
    dispatch(sendVoteToAPI(id, direction)); //executing thunk here
  }

  if (isLoading) return <b>Loading</b>; //loading screen

  if (!isLoading && titles.length === 0) { //if empty...
    return <b>Please add a post!</b>; 
  }
///else... return the post titles! 
  return (
    <div className="row">
      {titles.map(title => (
        <div key={title.id} className="col">
          <div className="card">
            <div className="card-body">
              <div className="card-title">
                <Link to={"/" + title.id}>{title.title}</Link>
              </div>
              <div className="card-text">
                <i>{title.description}</i>
              </div>
            </div>
            <div className="card-footer">
              <small>{title.votes} votes</small>
              <i className="fas fa-thumbs-up text-success ml-2"
                  onClick={evt => vote("up", title.id)} />
              <i className="fas fa-thumbs-down text-danger ml-2"
                  onClick={evt => vote("down", title.id)} />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default TitleList;
