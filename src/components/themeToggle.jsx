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
    <button className='inline-flex items-center md:mx-auto  border-2 rounded-full md:gap-2 p-2 md:py-2 md:px-3 border-[#252a2f80] hover:border-[#252a2f] font-semibold md:duration-300' onClick={initTheme}>
      <span className='hidden md:inline'>Appearance</span>
      <HiMoon className={`${theme === 'dark' ? 'w-0' : 'w-auto'} text-4xl duration-300 `} />
      < HiSun className={`${theme !== 'dark' ? 'w-0' : 'w-auto'} text-4xl duration-300`} />
    </button>
  )
}

export default toggleTheme;