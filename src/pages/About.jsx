import about from '../assets/about.png'

const About = () => {
  return (
    <div id='about' className='h-[calc(100vh-10rem)]'>
      <h2 className='text-2xl text-center my-4'>About Me</h2>
      <img
        src={about}
        alt='profile'
        className='max-w-xs  block w-full mx-auto'
      />
    </div>
  )
}

export default About
