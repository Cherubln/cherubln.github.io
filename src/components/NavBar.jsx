import Logo from './Logo'
import NavMenu from './NavMenu'

const NavBar = () => {
  return (
    <header className='sticky top-0 w-full flex justify-between items-center py-16 h-40'>
      <Logo />
      <NavMenu />
    </header>
  )
}
export default NavBar
