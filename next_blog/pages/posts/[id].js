/* eslint-disable react/prop-types */
import React from 'react'
import PropTypes from 'prop-types'
import MarkdownIt from 'markdown-it';

const Post = ({ post: { title, date, author, content, image } }) => {
  const md = MarkdownIt();
  const htmlContent = md.render(content);
  console.log(image)
  return (
  <article className='overflow-visible bg-white my-32 md:px-28 px-6 dark:bg-black text-black dark:text-white'>
    <section>
    {image.length > 0 ? (
        <img className="w-full object-cover" src={`http://localhost:1337${image[0].url}`} alt='image from post' />
      ) : (
        ''
      )}       <h1 className='text-black dark:text-white'>{title}</h1>
      <small className='text-black dark:text-white'>{date}</small>
      <small className='text-black dark:text-white'>{author}</small>
    </section>
    <section>
      <p className='text-black break-all dark:text-white' dangerouslySetInnerHTML={{__html: htmlContent}}></p>
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
