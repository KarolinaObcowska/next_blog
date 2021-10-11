import React from 'react'
import Link from 'next/link'
import PropTypes from 'prop-types'

const Posts = ({ posts }) => (
  <div className='md:px-28 px-6 mt-28'>
    {posts.map((post) => (
      <div key={post.id} className='bg-white dark:bg-black'>
        <Link key={post.id} href="/posts/[id]" as={`/posts/${post.id}`}>
          <a
            href={`/posts/${post.id}`}
            sx={{ textDecoration: 'none', cursor: 'pointer' }}
            className='text-black dark:text-white'
          >
            <div>
              <strong>{post.title}</strong>
              <small>{post.date}</small>
              <p>{post.description}</p>
            </div>
          </a>
        </Link>
      </div>
    ))}
  </div>
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
