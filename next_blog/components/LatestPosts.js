import React, { useState, useEffect } from 'react'
import PostPreview from './PostPreview'

const LatestPosts = ({ posts }) => {
    const [latestPost, setLatestPost] = useState([])

    useEffect(() => {
        setLatestPost(posts.slice(0,5))
    }, [posts])

    function renderPostPreviews() {
        return latestPost.map((post) => {
            return <PostPreview post={post} />
        })
    }
     return (
        <div>
            <h2>LatestPost</h2>
            {renderPostPreviews()}
        </div>
    )
}

export default LatestPosts
