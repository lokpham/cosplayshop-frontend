import React, { Children, ReactNode } from "react";
import Header from "../components/Header";
import Body from "../components/Body";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";

const DefaultLayout = () => {
  return (
    <div className="min-h-[100vh] flex flex-col ">
      <Header />
      <Body>
        <Outlet />
      </Body>
      <Footer />
    </div>
  );
};

export default DefaultLayout;
