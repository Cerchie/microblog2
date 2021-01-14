import React, { useState } from 'react'
import PostView from './PostView'
import NewEditPost from './NewEditPost'

function TitleList({ posts }) {
    return (
        <div>
            <h3>List of Posts</h3>
            <div>
                {posts.map(({ id, title, description, body }) => (
                    <PostView
                        key={id}
                        id={id}
                        title={title}
                        description={description}
                        body={body}
                    />
                ))}
            </div>
        </div>
    )
}

export default TitleList
