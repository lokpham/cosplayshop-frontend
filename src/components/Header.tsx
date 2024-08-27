import logo from "../assets/logo.png";
import InputSearch from "./InputSearch";
import Cart from "./Cart";
import { Link } from "react-router-dom";
import { RiMenu2Fill } from "react-icons/ri";
import Navbar from "./Navbar";
import Button from "src/components/Button";
import MenuSide from "src/components/MenuSide";
import { useAtomValue } from "jotai";
import { authentication_atom } from "src/atoms/myAtom";
import UserAccount from "src/components/UserAccount";
import AuthHeader from "src/components/AuthHeader";
const Header = () => {
  return (
    <>
      <div className="bg-secondary shadow-md fixed w-full z-50">
        <div className="container mx-auto py-2 px-4">
          <div className="md:hidden flex justify-between items-center ">
            <MenuSide />
            <AuthHeader />
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
              <AuthHeader />
            </div>
          </div>
          <Navbar />
        </div>
      </div>
    </>
  );
};

export default Header;
