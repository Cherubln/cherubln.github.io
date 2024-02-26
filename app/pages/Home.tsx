import { BsTwitterX, BsLinkedin, BsGithub } from "react-icons/bs";
import picture from "@/app/assets/hero.png";
import Image from "next/image";

const Home = () => {
  return (
    <div className="min-h-[calc(100vh-5.5rem)] flex flex-col lg:flex-row gap-8 justify-between items-center py-16">
      <div className="order-2 lg:order-1">
        <div className="flex gap-6 items-center pb-6 md:mb-3">
          <div className="bg-gray-500 w-40 h-1"></div>
          <a href="https://twitter.com/cherubln" target="_blank">
            <BsTwitterX className="w-6 h-6 hover:animate-pulse" />
          </a>
          <a href="https://linkedin.com/in/cherubln/" target="_blank">
            <BsLinkedin className="w-6 h-6 hover:animate-pulse" />
          </a>
          <a href="https://github.com/cherubln/" target="_blank">
            <BsGithub className="w-6 h-6 hover:animate-pulse" />
          </a>
        </div>
        <h1 className="text-3xl md:text-5xl leading-relaxed md:leading-normal">
          Hi there,
          <br /> I&apos;m Cherubin
          <br />
          <span className="relative after:block after:left-0 after:h-full after:top-0 after:absolute after:bg-base-100 after:right-0 after:animate-progress before:block before:left-0 before:h-full before:top-0 before:absolute before:bg-base-content before:w-0.5  before:z-10 before:animate-[fade_.48s_linear_infinite_alternate,progress_4s_steps(30)_3s_forwards] ">
            Software
            <span className="text-primary ml-2">Developer.</span>
          </span>{" "}
        </h1>
      </div>
      <Image src={picture} alt="hero section" className="order-1 lg:order-2" />
    </div>
  );
};

export default Home;
