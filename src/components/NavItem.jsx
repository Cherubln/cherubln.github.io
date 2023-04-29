const NavItem = ({ item, isActive, setIsActive }) => {
  return (
    <li
      className={`list-none list-outside md:mr-8 p-4 md:p-0 hover:md:bg-transparent font-semibold text-[#535661] dark:text-[#a9adc1] hover:text-[#0f1419] dark:hover:text-white hover:duration-300 border-[#252a2f80] sm:border-none sm:after:block sm:after:mt-1 sm:after:w-0 sm:after:h-0.5 sm:after:hover:w-full sm:after:duration-300 sm:after:bg-[#f75b23] cursor-pointer hover:scale-125 sm:hover:scale-100 ${
        isActive === item && 'scale-125 sm:scale-100 sm:after:w-auto'
      }`}
    >
      <a
        href={`#${item.toLowerCase()}`}
        className={`w-full relative after:absolute after:-bottom-1 after:left-1/2 after:scale-0 after:w-1 after:rounded-full after:h-1 after:duration-300 after:bg-[#f75b23] sm:after:hidden ${
          isActive === item && 'text-[#0f1419] dark:text-white after:scale-105'
        }`}
        onClick={() => setIsActive(item)}
      >
        {item}
      </a>
    </li>
  )
}

export default NavItem
