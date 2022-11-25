import image from './assets/emoji.svg';

function App() {
  return (
    <div className="h-screen flex justify-center items-center bg-[#54b3a6]">
      <img
        src={image}
        alt="man with pc"
        className="w-8 sm:w-12 md:w-16 lg:w-20 xl:w-24"
      />
      <h1 className=" text-2xl sm:text-3xl md:text-5xl lg:text-6xl xl:text-7xl text-white">
        Comming soon...
      </h1>
    </div>
  );
}

export default App;
