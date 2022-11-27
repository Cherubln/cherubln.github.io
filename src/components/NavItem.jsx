const NavItem = ({ item }) => (
  <li className="list-none list-outside md:mr-8 p-4 md:p-0 hover:bg-[#252a2f80] hover:md:bg-transparent font-semibold text-[#535661] dark:text-[#a9adc1] hover:text-[#0f1419] dark:hover:text-white border-b-2 hover:duration-300 border-[#252a2f80] md:border-none md:after:block md:after:mt-1 md:after:w-0 md:after:h-0.5 md:after:hover:w-full md:after:duration-300 md:after:bg-[#535661] md:after:dark:bg-[#a9adc1] md:after:hover:bg-[#0f1419] md:after:dark:hover:bg-white cursor-pointer">{item}
  </li>
)

export default NavItem