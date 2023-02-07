import items from '../constants/items.js'
import NavItem from './NavItem'

const NavLinks = ({ className }) => {
  return (
    <ul className={`${className} flex-row items-center`}>
      {items.map((item) => (
        <NavItem item={item} key={item} />
      ))}
    </ul>
  )
}

export default NavLinks
