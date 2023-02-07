import { useState, useEffect } from 'react'
import { HiSun, HiMoon } from 'react-icons/hi'

const toggleTheme = () => {
  // get user preferred theme
  const [theme, setTheme] = useState(localStorage.getItem('cherubln_theme'))

  useEffect(() => {
    const rootElement = document.documentElement || document.body
    // check operating system theme
    const osTheme = window.matchMedia('(pefers-color-scheme: light)').matches
      ? 'light'
      : 'dark'
    // Set user preferred theme
    if (theme === 'light') {
      rootElement.classList.remove('dark')
      localStorage.setItem('cherubln_theme', 'light')
    } else if (theme === 'dark') {
      rootElement.classList.add('dark')
      localStorage.setItem('cherubln_theme', 'dark')
    } else {
      osTheme === 'dark' && rootElement.classList.add('dark')
      localStorage.setItem('cherubln_theme', osTheme)
    }
  }, [theme])

  return (
    <button
      className='inline-flex items-center md:mx-auto  border-2 rounded-full md:gap-2 p-2 md:py-2 md:px-3 border-[#252a2f80] hover:border-[#252a2f] font-semibold md:duration-300'
      onClick={() => setTheme((prev) => (prev === 'light' ? 'dark' : 'light'))}
    >
      <span className='hidden md:inline'>Appearance</span>
      <HiMoon
        className={`${
          theme === 'dark' ? 'w-0' : 'w-auto'
        } text-4xl duration-300 `}
      />
      <HiSun
        className={`${
          theme !== 'dark' ? 'w-0' : 'w-auto'
        } text-4xl duration-300`}
      />
    </button>
  )
}

export default toggleTheme
