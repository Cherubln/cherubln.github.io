import Image from "next/image";
import logo from "@/app/assets/logo.png";

const Logo = () => (
  <a href="#" className="flex items-center">
    <Image src={logo} alt="logo" className="w-12 h-auto" />
    <span className="text-3xl font-semibold text-neutral -ml-1">herubin</span>
  </a>
);

export default Logo;
