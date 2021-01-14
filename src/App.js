import React, { useState } from 'react'
import { Switch } from 'react-router-dom'
import { Route } from 'react-router-dom'
import { BrowserRouter } from 'react-router-dom'
import NavBar from './NavBar'
import Home from './Home'
import PostView from './PostView'
import NewEditPost from './NewEditPost'

import './App.css'

import { v4 as uuid } from 'uuid'

function App() {
    const INITIAL_STATE = [
        {
            id: uuid(),
            title: 'sample post',
            description: 'just a sample',
            body: 'sample sample sample sample',
        },
    ]
    const [posts, setPosts] = useState(INITIAL_STATE)
    const addPost = (newPost) => {
        setPosts((posts) => [...posts, { ...newPost, id: uuid() }])
        window.history.pushState(newPost, 'new_post')
    }
    return (
        <div className="App">
            <header className="App-header">
                <BrowserRouter>
                    <Switch>
                        <NavBar /> 
                        <Route exact path="/" component={Home}>
                            <Home posts={posts} />
                        </Route>
                        <Route exact path="/new">
                            <NewEditPost addPost={addPost} />
                        </Route>
                        <Route exact path="/post/:post_id">
                            <PostView />
                        </Route>
                    </Switch>
                </BrowserRouter>
            </header>
        </div>
    )
}

export default App
