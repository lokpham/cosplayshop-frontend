import logo from "../assets/logo.png";
import InputSearch from "./InputSearch";
import Cart from "./Cart";
import { Link } from "react-router-dom";
import { RiMenu2Fill } from "react-icons/ri";
import Navbar from "./Navbar";
const Header = () => {
  return (
    <div className="bg-secondary shadow-md">
      <div className="container mx-auto p-4">
        <div className="md:hidden flex justify-between ">
          <RiMenu2Fill className="text-white text-[2rem] cursor-pointer" />
          <Link className="btn-login" to={"login"}>
            ĐĂNG NHẬP
          </Link>
        </div>
        <div className="flex gap-5 justify-between items-center">
          <div>
            <img src={logo} alt="logo" />
          </div>
          <div className="grow">
            <InputSearch />
          </div>
          <div>
            <Cart />
          </div>
          <div className="hidden md:block">
            <Link className="btn-login" to={"login"}>
              ĐĂNG NHẬP
            </Link>
          </div>
        </div>
        <Navbar />
      </div>
    </div>
  );
};

export default Header;
