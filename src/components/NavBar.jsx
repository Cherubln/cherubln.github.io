import Logo from './Logo'
import NavMenu from './NavMenu'

const NavBar = () => {
  return (
    <header className='fixed top-0 w-full flex justify-between items-center px-12 pt-12'>
      <Logo />
      <NavMenu />
    </header>
  )
}
export default NavBar
