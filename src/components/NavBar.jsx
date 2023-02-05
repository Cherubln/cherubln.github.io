import items from "../constants/items.js";
import Logo from "./Logo";
import NavMenu from "./NavMenu";

const NavBar = () => {
  return (
    <header className="flex justify-between items-center pt-6 px-4 md:px-12 md:pt-12">
      <Logo />
      <NavMenu items={items} />
    </header>
  )
}
export default NavBar