import Head from 'next/head'
import PropTypes from 'prop-types'
import LatestPosts from '../components/LatestPosts'

const Home = ({ posts }) => {

  return (
    <div>
      <Head>
        <title>DailyJS</title>
        <link rel="icon" href="" />
      </Head>
      <main>
        <LatestPosts posts={posts} />
      </main>
    </div>
  )
}
Home.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.object).isRequired,
}
export default Home

export async function getStaticProps() {
  const res = await fetch('http://localhost:1337/posts')
  const posts = await res.json()
  return {
    props: {
      posts,
    },
  }
}
