import React, { Children, ReactNode } from "react";
import Header from "../components/Header";
import Body from "../components/Body";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";

const DefaultLayout = ({ children }: { children?: ReactNode }) => {
  return (
    <div className="min-h-[100vh] flex flex-col ">
      <Header />
      <Body>{children ? children : <Outlet />}</Body>
      <Footer />
    </div>
  );
};

export default DefaultLayout;
