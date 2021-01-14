import React, { useState } from 'react'
import NewEditPost from './NewEditPost'
import TitleList from './TitleList'

function Home({ posts }) {
    return (
        <div>
            Welcome home, here is a list of all the posts.
            <TitleList posts={posts} />
            <NewEditPost />
        </div>
    )
}

export default Home

