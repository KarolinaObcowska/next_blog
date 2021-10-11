/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-props-no-spreading */
import '../styles/globals.css'
import { useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer';

function MyApp({ Component, pageProps }) {
  const [icon, setIcon] = useState('/moon.svg');

  const toggleMode = () => {
    if (localStorage.theme === undefined) {
      localStorage.theme = 'dark'
      setIcon('/sun.svg')
    }
    if (localStorage.theme === 'light')
      {localStorage.theme = 'dark'
    setIcon('/sun.svg')}
      else {localStorage.theme = 'light'
    setIcon('/moon.svg')}
    if (
      localStorage.theme === 'dark' ||
      (!('theme' in localStorage) &&
        window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
      setIcon('/sun.svg')
      document.documentElement.classList.add('dark')
      
    } else {
      setIcon('/moon.svg')
      document.documentElement.classList.remove('dark')
    }
  }
  return (
  <>
        <Navbar toggleMode={toggleMode} icon={icon}/>
        <Component {...pageProps} />
        <Footer />
  </>
  )
}

export default MyApp
