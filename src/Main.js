import React from "react";
import {  Outlet } from "react-router-dom";
import Navbar from "./component/nav/Navbar";
import Sidenav from "./component/nav/Sidenav";

const Main = () => {
  const style = {
    container: " max-w-screen flex h-screen flex-col  mx-auto text-center",
    sectioncontainer: " flex h-screen bg-white app shadow-xl relative",
  };
  return (
    <div className={style.container}>
      <section className={style.sectioncontainer}>
        <Sidenav />
        <section className=" h-full flex flex-col main-app">
          <Navbar />

          <Outlet />
        </section>
      </section>
    </div>
  );
};

export default Main;
