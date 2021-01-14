import React, { useState } from 'react'
import { v4 as uuid } from 'uuid'

const NewEditPost = ({ addPost }) => {
    const INITIAL_STATE = [
        {
            id: uuid(),
            title: 'sample post',
            description: 'just a sample',
            body: 'sample sample sample sample',
        },
    ]

    const [formData, setFormData] = useState(INITIAL_STATE)
    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData((formData) => ({
            ...formData,
            [name]: value,
        }))
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        addPost({ ...formData })
        setFormData(INITIAL_STATE)
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="title">Title</label>
                <input
                    type="text"
                    name="title"
                    placeholder="post title"
                    value={formData.title}
                    onChange={handleChange}
                />
                <label htmlFor="description"> Description</label>
                <input
                    id="description"
                    type="text"
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                />
                <label htmlFor="body"> body</label>
                <input
                    id="body"
                    type="text"
                    name="body"
                    value={formData.body}
                    onChange={handleChange}
                />

                <button>save</button>
            </form>
            <a href="/">Cancel</a>
        </div>
    )
}

export default NewEditPost