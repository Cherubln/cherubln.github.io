import items from '../constants/items.js'
import { useState } from 'react'
import NavItem from './NavItem'

const NavLinks = ({ className }) => {
  const [isActive, setIsActive] = useState('')
  return (
    <ul className={`${className} px-4 flex-row gap-4 items-center`}>
      {items.map((item) => (
        <NavItem
          item={item}
          key={item}
          isActive={isActive}
          setIsActive={setIsActive}
        />
      ))}
    </ul>
  )
}

export default NavLinks
