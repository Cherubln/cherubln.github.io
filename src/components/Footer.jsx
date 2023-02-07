import NavLinks from './NavLinks'

const Footer = () => {
  return (
    <footer className='fixed bottom-5 w-full flex justify-center'>
      <NavLinks
        className={`flex sm:hidden  bg-[#00000015] dark:bg-[#00000080] rounded`}
      />
    </footer>
  )
}

export default Footer
