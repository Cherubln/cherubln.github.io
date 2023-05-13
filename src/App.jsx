import image from './assets/emoji.svg'
import Footer from './components/Footer'
import NavBar from './components/NavBar'
import Home from './pages/Home'
import About from './pages/About'

function App() {
  return (
    <div className='relative dark:bg-[#0f1419] dark:text-white bg-[#ffffff] text-[#0f1419] px-8 md:px-16'>
      <NavBar />
      <Home />
      {/* <About /> */}
      {/* <Footer /> */}
    </div>
  )
}

export default App
