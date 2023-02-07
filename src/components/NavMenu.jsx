import ToggleTheme from './themeToggle'
import NavLinks from './NavLinks'

const NavMenu = () => {
  return (
    <div>
      <nav className={`flex flex-row items-center`}>
        <NavLinks className={`hidden sm:flex`} />
        <ToggleTheme />
      </nav>
    </div>
  )
}
export default NavMenu
