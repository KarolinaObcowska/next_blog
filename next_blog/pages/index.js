import Head from 'next/head'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

export default function Home() {
  return (
    <div>
      <Head>
        <title>DailyJS</title>
        <link rel="icon" href="" />
      </Head>
      <Navbar />
      <main className="h-screen bg-gray-800"></main>
      <Footer />
    </div>
  )
}
