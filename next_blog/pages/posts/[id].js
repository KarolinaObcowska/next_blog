/* eslint-disable react/prop-types */
import React from 'react'
import PropTypes from 'prop-types'

const Post = ({ post: { title, date, author, content } }) => (
  <div sx={{ width: '33%', p: 2 }}>
    <div sx={{ variant: 'containers.card' }}>
      <h1>{title}</h1>
      <small>{date}</small>
      <small>{author}</small>
      <p>{content}</p>
    </div>
  </div>
)
Post.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
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
