/* eslint-disable react/prop-types */
import PropTypes from 'prop-types'
import React from 'react'
import Link from 'next/link'

const PostPreview = ({ post: { title, description, date, image, id } }) => (
  <article className='bg-white dark:bg-black w-full shadow-md border border-gray-200 rounded-lg mb-5'>
    <section>
      {image.length > 0 ? (
        <img className="rounded-t-lg w-full h-40 object-cover" src={`http://localhost:1337${image[0].url}`} alt='image from post' />
        ) : (
        ''
      )} 
      <Link key={id} href="/posts/[id]" as={`/posts/${id}`}>
      <a
            href={`/posts/${id}`}
            sx={{ textDecoration: 'none', cursor: 'pointer' }}
            className='text-black dark:text-white'
      >
        <h2 className="mt-3 mx-3 text-black dark:text-white">{title} </h2>
        <small className="text-black mx-3 dark:text-white">{date}</small>
      <p className="font-normal text-gray-700 m-3 dark:text-white">{description}</p>
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
