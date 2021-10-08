import Head from 'next/head'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import LatestPosts from '../components/LatestPosts'
const Home = ({posts}) => {
  return (
    <div>
      <Head>
        <title>DailyJS</title>
        <link rel="icon" href="" />
      </Head>
      <Navbar />
      <main className="h-screen bg-gray-800">
      <LatestPosts posts={posts} />
      </main>
      <Footer />
    </div>
  )
}
export default Home

export async function getStaticProps() {
  const res = await fetch('http://localhost:1337/posts');
  const posts = await res.json()
  return {
      props: {
          posts: posts,
      }
  }
}