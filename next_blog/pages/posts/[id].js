/* eslint-disable react/prop-types */
import React from 'react'
import PropTypes from 'prop-types'

const Post = ({ post: { title, date, author, content } }) => (
  <div className='overflow-visible bg-white my-32 md:px-28 px-6 dark:bg-black text-black dark:text-white'>
    <div>
      <h1 className='text-black dark:text-white'>{title}</h1>
      <small className='text-black dark:text-white'>{date}</small>
      <small className='text-black dark:text-white'>{author}</small>
      <p className='text-black break-all dark:text-white'>{content}</p>
    </div>
  </div>
)
Post.propTypes = {
  title: PropTypes.string,
  content: PropTypes.string,
  author: PropTypes.string,
  date: PropTypes.string,
}

export default Post

export async function getStaticProps({ params }) {
  const res = await fetch(`http://localhost:1337/posts/${params.id}`)
  const post = await res.json()
  return {
    props: {
      post,
    },
  }
}

export async function getStaticPaths() {
  const res = await fetch(`http://localhost:1337/posts`)
  const posts = await res.json()
  const paths = posts.map((post) => ({ params: { id: post.id.toString() } }))

  return {
    paths,
    fallback: true,
  }
}
