import { useState } from 'react'
import { TiThMenu } from 'react-icons/ti'
import NavItem from './NavItem'
import ToggleTheme from './themeToggle'

const NavMenu = ({ items }) => {
  const [showMenu, setShowMenu] = useState(false)

  return (<div>
    <nav className={`fixed top-32 left-0 w-full h-screen dark:bg-[#0f1419] dark:text-white bg-slate-200 text-[#0f1419] gap-12 md:gap-6 md:h-auto flex-col md:flex-row md:static ${showMenu ? 'flex' : 'hidden'} md:flex`}>
      <ul className='flex flex-col md:flex-row md:items-center'>
        {items.map(item => <NavItem item={item} key={item} />)}
      </ul>
      <ToggleTheme />
    </nav>
    <TiThMenu className='block md:hidden text-3xl cursor-pointer' onClick={() => setShowMenu((pre) => !pre)} />
  </div>
  )
}
export default NavMenu