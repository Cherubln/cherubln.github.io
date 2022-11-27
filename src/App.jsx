import image from './assets/emoji.svg';
import NavBar from './components/NavBar';

function App() {
  return (
    <div className='dark:bg-[#0f1419] dark:text-white bg-slate-200 text-[#0f1419]'>
      <NavBar />
      <div className="h-screen flex justify-center items-center ">
        <img
          src={image}
          alt="man with pc"
          className="w-8 sm:w-12 md:w-16 lg:w-20 xl:w-24"
        />
        <h1 className=" text-2xl sm:text-3xl md:text-5xl lg:text-6xl xl:text-4xl ml-2">
          On its way, come back soon!
        </h1>
      </div>
    </div>
  );
}

export default App;
