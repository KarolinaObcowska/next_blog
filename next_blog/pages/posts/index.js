import React from 'react'
import Link from 'next/link'
import PropTypes from 'prop-types'

const Posts = ({ posts }) => (
  <div className="lg:px-52 px-10 mt-10 mb-20 md:grid gap-6 md:grid-cols-2 lg:grid-cols-3">
    {posts.map((post) => (
      <article
        key={post.id}
        className="bg-white dark:bg-gray-900 w-full mb-10"
      >
        <section>
          {post.image.length > 0 ? (
            <img
              className="w-full mb-4 h-40 object-cover transform ease-in-out duration-700 hover:scale-105"
              src={`http://localhost:1337${post.image[0].url}`}
              alt="image from post"
            />
          ) : (
            ''
          )}
          <Link href="/posts/[id]" as={`/posts/${post.id}`}>
            <a
              href={`/posts/${post.id}`}
              sx={{ textDecoration: 'none', cursor: 'pointer' }}
              className="text-black dark:text-white"
            >
              <h2 className="font-mono text-xl mt-3 text-black dark:text-white">
                {post.title}{' '}
              </h2>
              <small className="font-mono text-black dark:text-white">
                {post.date}
              </small>
              <p className="font-normal text-gray-700 mt-3 dark:text-white">
                {post.description}
              </p>
            </a>
          </Link>
        </section>
      </article>
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
