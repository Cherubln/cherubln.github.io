import { ReactComponent as LogoWrapper } from '../assets/logoWrapper.svg'
const Logo = ({ className }) => (
  <div
    className={`${className} relative text-2xl font-semibold capitalize text-transparent bg-clip-text bg-gradient-to-r from-orange-700 via-orange-600 to-orange-400 cursor-pointer py-3 px-2`}
  >
    Cherubin
    <LogoWrapper className='absolute left-0 -top-1' />
  </div>
)

export default Logo
