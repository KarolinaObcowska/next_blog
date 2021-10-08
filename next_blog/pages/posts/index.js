import React from 'react'
import Link from 'next/link'

const Posts = ({posts}) => {
    return (
        <div>
            {posts.map((post) => (
                <div sx={{ width: '33%', p: 2 }}>
                <Link key={post.id} href="/posts/[id]" as={`/posts/${post.id}`}>
                  <a sx={{ textDecoration: 'none', cursor: 'pointer' }}>
                    <div sx={{ variant: 'containers.card' }}>
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
}

export default Posts

export async function getStaticProps() {
    const res = await fetch('http://localhost:1337/posts');
    const posts = await res.json()
    return {
        props: {
            posts: posts,
        }
    }
}