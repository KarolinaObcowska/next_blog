/* eslint-disable react/prop-types */
import React from 'react'
import PropTypes from 'prop-types'
import MarkdownIt from 'markdown-it'

const Post = ({ post: { title, date, content, image } }) => {
  const md = MarkdownIt()
  const htmlContent = md.render(content)

  return (
    <article className="overflow-visible bg-white my-32 lg:px-52 px-10 dark:bg-gray-900 text-black dark:text-white">
      <section>
        {image.length > 0 ? (
          <img
            className="rounded-sm w-full object-cover h-40"
            src={`http://localhost:1337${image[0].url}`}
            alt="image from post"
          />
        ) : (
          ''
        )}
        <h1 className="font-mono text-black mt-5 text-3xl dark:text-white">{title}</h1>
        <small className="font-mono text-black dark:text-white">{date}</small>
      </section>
      <section className="mt-5">
        <p
          className="text-gray-700 break-all dark:text-white"
          dangerouslySetInnerHTML={{ __html: htmlContent }}
        ></p>
      </section>
    </article>
  )
}
Post.propTypes = {
  title: PropTypes.string,
  content: PropTypes.string,
  author: PropTypes.string,
  date: PropTypes.string,
  image: PropTypes.string,
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
