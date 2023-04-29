import ToggleTheme from './themeToggle'
import NavLinks from './NavLinks'

const NavMenu = () => {
  return (
    <nav className={`flex flex-row items-center`}>
      <NavLinks className={`hidden sm:flex`} />
      <ToggleTheme />
    </nav>
  )
}
export default NavMenu
