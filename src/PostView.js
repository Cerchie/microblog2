import React from 'react'

function PostView({ id, title, description, body }) {
    return (
        <ul>
            <li>Title:{title}</li>
            <li>Description: {description}</li>
            <li>Body: {body}</li>
        </ul>
    )
}

export default PostView
