import React from 'react'
import { useRouter } from 'next/router';

const Post = ({post}) => {
    const router = useRouter()
    return (

            <div sx={{ width: '33%', p: 2 }}>
                    <div sx={{ variant: 'containers.card' }}>
                      <h1>{post.title}</h1>
                      <small>{post.date}</small>
                      <small>{post.author}</small>
                      <p>{post.content}</p>
                    </div>
              </div>

    )
}

export default Post

export async function getStaticProps({params}) {
    const res = await fetch(`http://localhost:1337/posts/${params.id}`);
    const post = await res.json()
    return {
        props: {
            post: post
        }
    }
}

export async function getStaticPaths() {
    const res = await fetch(`http://localhost:1337/posts`);
    const posts = await res.json();
    const paths = posts.map((post) => {
        return {params: {id: post.id.toString()}}
    });

    return {
        paths,
        fallback: true
    }
}

