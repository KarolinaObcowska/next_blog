import React from 'react'
import Link from 'next/link'
import PropTypes from 'prop-types'

const Posts = ({ posts }) => (
  <div className="lg:px-52 px-10 my-32 md:grid gap-6 md:grid-cols-2 lg:grid-cols-3">
    {posts.map((post) => (
      <article
        key={post.id}
        className="bg-white dark:bg-gray-900 w-full mb-5"
      >
        <section>
          {post.image.length > 0 ? (
            <img
              className="w-full h-40 object-cover"
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
              <h2 className="font-mono text-xl mt-3 mx-3 text-black dark:text-white">
                {post.title}{' '}
              </h2>
              <small className="font-mono text-black mx-3 dark:text-white">
                {post.date}
              </small>
              <p className="font-normal text-gray-700 m-3  dark:text-white">
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
