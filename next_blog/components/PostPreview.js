/* eslint-disable react/prop-types */
import PropTypes from 'prop-types'
import React from 'react'

const PostPreview = ({ post: { title, description, author, date, content } }) => (
  <article className='bg-white dark:bg-black w-full'>
    <section>
      <h3 className="text-black dark:text-white">{title}</h3>
      <p className="text-black dark:text-white">{description}</p>
    </section>
    <aside>
      <small className="text-black dark:text-white">{author}</small>
      <small className="text-black dark:text-white">{date}</small>
      <p className="text-black dark:text-white">{content}</p>
    </aside>
  </article>
)

PostPreview.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  author: PropTypes.string,
  date: PropTypes.string,
}
export default PostPreview
