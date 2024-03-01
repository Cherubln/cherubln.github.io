import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

const Logo = () => (
  <Link to="/" className="flex items-end">
    <img src={logo} alt="logo" className="w-12 h-auto" />
    <span className="text-3xl font-semibold text-neutral -ml-1">herubin</span>
  </Link>
);

export default Logo;
