import logo from "../assets/logo.png";
import InputSearch from "./InputSearch";
import Cart from "./Cart";
import { Link } from "react-router-dom";
import { RiMenu2Fill } from "react-icons/ri";
import Navbar from "./Navbar";
import Button from "src/components/Button";
const Header = () => {
  return (
    <div className="bg-secondary shadow-md fixed w-full z-20">
      <div className="container mx-auto py-2 px-4">
        <div className="md:hidden flex justify-between items-center ">
          <RiMenu2Fill className="text-white text-[2rem] cursor-pointer" />
          <Link className="btn-login" to={"login"}>
            ĐĂNG NHẬP
          </Link>
        </div>
        <div className="flex gap-5 justify-between items-center my-2">
          <div className="hidden md:block">
            <img src={logo} alt="logo" />
          </div>
          <div className="grow">
            <InputSearch />
          </div>
          <div>
            <Cart />
          </div>
          <div className="hidden md:block">
            <Button type="link" href="login">
              ĐĂNG NHẬP
            </Button>
          </div>
        </div>
        <Navbar />
      </div>
    </div>
  );
};

export default Header;
