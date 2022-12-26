import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { BsFillChatDotsFill } from "react-icons/bs";
import { BiMenuAltLeft } from "react-icons/bi";
import { auth } from "../firebase/firebase-config";
import { useAuthState } from "react-firebase-hooks/auth";
import { UserAuth } from "../context/Authcontext";
import "./Navbar.css";

const Navbar = () => {
  const style = {
    nav: " main-nav h-16 flex justify-between items-center p-4",
  };

  const [nav, setnav] = useState(false);

  const { logout } = UserAuth();

  let navigate = useNavigate();

  const [user] = useAuthState(auth);

  const Signout = () => {
    let SigningOut = window.confirm("Are you sure you want to logout?");

    if (SigningOut) {
      logout();
    }
  };

  return (
    <div className={style.nav}>
      <h1 className=" welcome-text font-bold">Welcome</h1>
      <BiMenuAltLeft
        onClick={() => setnav(true)}
        className=" nav-icon text-3xl"
      />

      <button onClick={Signout} className=" ml-auto">
        Logout
      </button>

      <div style={{ width: nav ? "100%" : "0px" }} className=" blur"></div>

      <div
        style={{ width: nav ? "250px" : "0px" }}
        id="mySidenav"
        className="sidenav"
      >
        <a className="closebtn" onClick={() => setnav(false)}>
          &times;
        </a>
        <h2
          className=" a"
          onClick={() => {
            navigate("/home");
            setnav(false);
          }}
        >
          Home
        </h2>
        <h2
          className=" a"
          onClick={() => {
            setnav(false);
            navigate("/home/chat");
          }}
        >
          {" "}
          Chat
        </h2>
        <h2 className=" a" onClick={() => {
            setnav(false);
            navigate("/home/profile");
          }} >Profile</h2>
      </div>
    </div>
  );
};

export default Navbar;
