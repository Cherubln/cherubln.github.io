import Logo from './Logo'
import NavMenu from './NavMenu'

const NavBar = () => {
  return (
    <header className='sticky top-0 w-full flex justify-between items-center pt-6 pb-2 dark:bg-[#0f1419] bg-[#ffffff]'>
      <Logo />
      <NavMenu />
    </header>
  )
}
export default NavBar
