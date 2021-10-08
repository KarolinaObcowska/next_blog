import React from 'react'

const PostPreview = ({ post }) => {
    return (
        <div>
            <h3>{post.title}</h3>
            <small>{post.author}</small>
            <small>{post.date}</small>
            <p>{post.description}</p>
        </div>
    )
}

export default PostPreview
