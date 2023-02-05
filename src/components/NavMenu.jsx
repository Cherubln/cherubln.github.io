import { useState } from 'react'
import { TiThMenu } from 'react-icons/ti'
import NavItem from './NavItem'
import ToggleTheme from './themeToggle'

const NavMenu = ({ items }) => {

  return (<div>
    <nav className={` flex flex-row items-center`}>
      <ul className='flex flex-row items-center'>
        {items.map(item => <NavItem item={item} key={item} />)}
      </ul>
      <ToggleTheme />
    </nav>
  </div>
  )
}
export default NavMenu