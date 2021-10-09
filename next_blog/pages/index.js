import { useState } from 'react'
import Head from 'next/head'
import PropTypes from 'prop-types'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import LatestPosts from '../components/LatestPosts'
import Moon from '../images/moon.svg'
import Sun from '../images/sun.svg'
const Home = ({ posts }) => {
  const [icon, setIcon] = useState(Moon);

  const toggleMode = () => {
    if (localStorage.theme === undefined) {
      localStorage.theme = 'dark'
      setIcon(Sun)
    }
    if (localStorage.theme === 'light')
      {localStorage.theme = 'dark'
    setIcon(Sun)}
      else {localStorage.theme = 'light'
    setIcon(Moon)}
    if (
      localStorage.theme === 'dark' ||
      (!('theme' in localStorage) &&
        window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
      setIcon(Sun)
      document.documentElement.classList.add('dark')
      
    } else {
      setIcon(Moon)
      document.documentElement.classList.remove('dark')
    }
  }
  return (
    <div className="">
      <Head>
        <title>DailyJS</title>
        <link rel="icon" href="" />
      </Head>
      <header className="bg-white dark:bg-black transition duration-800">
        <Navbar toggleMode={toggleMode} icon={icon}/>
      </header>
      <main className="h-screen bg-white dark:bg-black transition duration-800">
        <LatestPosts posts={posts} />
      </main>
      <Footer />
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
