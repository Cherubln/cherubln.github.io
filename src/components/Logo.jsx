import wrapper from '../assets/logoWrapper.svg'
const Logo = ({ className }) => (
  <div
    aria-label='Web Logo'
    className={`${className} relative text-2xl font-semibold capitalize text-transparent bg-clip-text bg-gradient-to-r from-orange-700 via-orange-600 to-orange-400  md:after:block cursor-pointer py-3 px-2`}
  >
    Cherubin
    <img src={wrapper} alt='circle image' className='absolute left-0 top-0' />
  </div>
)

export default Logo
