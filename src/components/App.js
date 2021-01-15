import React from "react";

import { Route, NavLink, Switch } from "react-router-dom";

import NewPost from "./NewPost";
import Post from "./Post";
import Home from "./Home";

import './App.css';

// this renders the links , paths, and BrowserRouter (which is wrapped around the app in index.js)
function App() {

  return (
    <div className="App container">
      <header className="App-header jumbotron mt-2">
        <h1 className="App-title display-4">Microblog</h1>
        <nav>
          <NavLink exact to="/">Blog</NavLink>
          <NavLink exact to="/new">New post</NavLink>
        </nav>
      </header>

      <Switch>
        <Route exact path="/new">
          <NewPost />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/:postId">
          <Post />
        </Route>
      </Switch>
    </div>
  );
}

export default App;