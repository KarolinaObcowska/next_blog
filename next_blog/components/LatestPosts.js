import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import PostPreview from './PostPreview'

const LatestPosts = ({ posts }) => {
  const [latestPost, setLatestPost] = useState([])

  useEffect(() => {
    setLatestPost(posts.slice(0, 3))
  }, [posts])

  function renderPostPreviews() {
    return latestPost.map((post) => <PostPreview key={post.id} post={post} />)
  }
  return (
    <div className="lg:px-52 px-10 mt-10 mb-20 bg-white md:grid gap-6 md:grid-cols-2 lg:grid-cols-3 dark:bg-gray-900">
      {renderPostPreviews()}
    </div>
  )
}

LatestPosts.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.object).isRequired,
}

export default LatestPosts
