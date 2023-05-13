import { BsTwitter, BsLinkedin, BsGithub } from 'react-icons/bs'
import picture from '../assets/hero.png'

const Home = () => {
  return (
    <div className='h-[calc(100vh-5.5rem)] flex flex-col lg:flex-row gap-8 lg:justify-between items-center'>
      <div className='order-2 lg:order-1'>
        <div className='flex gap-6 items-center pb-6 md:mb-8'>
          <div className='bg-gray-500 w-40 h-1'></div>
          <a href='https://twitter.com/cherubln' target='_blank'>
            <BsTwitter className='w-6 h-6 hover:animate-pulse' />
          </a>
          <a href='https://linkedin.com/in/cherubln/' target='_blank'>
            <BsLinkedin className='w-6 h-6 hover:animate-pulse' />
          </a>
          <a href='https://github.com/cherubln/' target='_blank'>
            <BsGithub className='w-6 h-6 hover:animate-pulse' />
          </a>
        </div>
        <h1 className='text-2xl md:text-5xl leading-relaxed md:ml-8 md:leading-normal'>
          Hi there,
          <br /> I'm Cherubin
          <br />
          Software{' '}
          <span className='text-transparent bg-clip-text bg-gradient-to-r from-orange-700 via-orange-600 to-orange-400'>
            Developer
          </span>
          .
        </h1>
      </div>
      <img
        src={picture}
        alt='profile'
        className='max-w-xs  md:max-w-md order-1 lg:order-2'
      />
    </div>
  )
}

export default Home
