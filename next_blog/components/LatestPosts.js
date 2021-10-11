import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import PostPreview from './PostPreview'

const LatestPosts = ({ posts }) => {
  const [latestPost, setLatestPost] = useState([])

  useEffect(() => {
    setLatestPost(posts.slice(0, 5))
  }, [posts])

  function renderPostPreviews() {
    return latestPost.map((post) => <PostPreview key={post.id} post={post} />)
  }
  return (
    <div className='md:px-28 px-6 my-32 bg-white dark:bg-black'>
      <h2 className="text-black dark:text-white">LatestPost</h2>
      {renderPostPreviews()}
    </div>
  )
}

LatestPosts.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.object).isRequired,
}

export default LatestPosts
