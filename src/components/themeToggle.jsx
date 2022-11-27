import { useState, useEffect } from 'react'
import { HiSun, HiMoon } from 'react-icons/hi'

const toggleTheme = () => {
  const [theme, setTheme] = useState(localStorage.getItem('cherubln_theme'))

  const initTheme = () => {
    const rootElement = document.documentElement || document.body
    if (rootElement.classList.contains('dark')) {
      localStorage.setItem('cherubln_theme', 'light')
      setTheme('light')
      rootElement.classList.remove('dark')

    } else {
      localStorage.setItem('cherubln_theme', 'dark')
      setTheme('dark')
      rootElement.classList.add('dark')
    }
  }

  useEffect(() => {
    initTheme()
  }, [])

  return (
    <button className='inline-flex items-center mx-auto  border-2 rounded-full gap-2 py-2 px-3 border-[#252a2f80] hover:border-[#252a2f] font-semibold duration-300' onClick={initTheme}>
      {theme === 'dark' ? <HiMoon className='text-4xl' /> : <HiSun className='text-4xl' />} <span className=''>switch to {theme === 'dark' ? 'light' : 'dark'} mode</span>
    </button>
  )
}

export default toggleTheme;