import { BsTwitter, BsLinkedin, BsGithub } from 'react-icons/bs'

const Home = () => {
  return (
    <div className='h-[calc(100vh-10rem)] pt-16'>
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
      <h1 className='text-2xl md:text-4xl leading-relaxed md:ml-8 md:leading-normal'>
        Hi there, I'm Cherubin.
        <br />
        Software{' '}
        <span className='text-transparent bg-clip-text bg-gradient-to-r from-orange-700 via-orange-600 to-orange-400'>
          Developer
        </span>
        , and
        <br />
        Training{' '}
        <span className='text-transparent bg-clip-text bg-gradient-to-r from-orange-700 via-orange-600 to-orange-400'>
          Facilitator
        </span>
        .
      </h1>
    </div>
  )
}

export default Home
