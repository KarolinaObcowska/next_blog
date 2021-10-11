/* eslint-disable react/prop-types */
import PropTypes from 'prop-types'
import React from 'react'
import Link from 'next/link'

const PostPreview = ({ post: { title, description, date, image, id } }) => (
  <article className=' bg-white dark:bg-gray-900 w-full mb-5'>
    <section>
      {image.length > 0 ? (
        <img className=" w-full h-40 object-cover" src={`http://localhost:1337${image[0].url}`} alt='image from post' />
        ) : (
        ''
      )} 
      <Link key={id} href="/posts/[id]" as={`/posts/${id}`}>
      <a href={`/posts/${id}`} >
        <h2 className="mt-3text-black dark:text-white font-mono text-xl">{title} </h2>
        <small className="text-black dark:text-white font-mono">{date}</small>
      <p className=" text-gray-700 my-3 dark:text-white">{description}</p>
      </a>
      </Link>
    </section>
  </article>
)

PostPreview.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  author: PropTypes.string,
  date: PropTypes.string,
  image: PropTypes.string,
}
export default PostPreview
