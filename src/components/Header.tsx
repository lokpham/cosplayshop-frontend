import logo from "../assets/logo.png";
import InputSearch from "./InputSearch";
import Cart from "./Cart";
import Navbar from "./Navbar";
import MenuSide from "src/components/MenuSide";
import AuthHeader from "src/components/AuthHeader";
import useFetch from "src/api/useFetch";
const Header = () => {
  const { data, error, loading } = useFetch("/catetory/all");
  return (
    <>
      <div className="bg-secondary shadow-md fixed w-full z-50">
        <div className="container mx-auto py-2 px-4">
          <div className="md:hidden flex justify-between items-center ">
            <MenuSide data={data} />
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
          <Navbar data={data} />
        </div>
      </div>
    </>
  );
};

export default Header;
