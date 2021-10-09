import React from 'react'
import Link from 'next/link'
import PropTypes from 'prop-types'
import Navbar from '../../components/Navbar'
const Posts = ({ posts }) => (
  <>
    <Navbar />
    {posts.map((post) => (
      <div key={post.id} sx={{ width: '33%', p: 2 }}>
        <Link key={post.id} href="/posts/[id]" as={`/posts/${post.id}`}>
          <a
            href={`/posts/${post.id}`}
            sx={{ textDecoration: 'none', cursor: 'pointer' }}
          >
            <div sx={{ variant: 'containers.card' }}>
              <strong>{post.title}</strong>
              <small>{post.date}</small>
              <p>{post.description}</p>
            </div>
          </a>
        </Link>
      </div>
    ))}
  </>
)
Posts.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.object),
}

export default Posts

export async function getStaticProps() {
  const res = await fetch('http://localhost:1337/posts')
  const posts = await res.json()
  return {
    props: {
      posts,
    },
  }
}
