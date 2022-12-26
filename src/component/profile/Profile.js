import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { auth } from "../firebase/firebase-config";
import { UserAuth } from "../context/Authcontext";

const Profile = () => {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const { logout } = UserAuth();
    useEffect(() => {
        const { displayName, email } = auth.currentUser;
        setName(displayName)
        setEmail(email)
            
        }, [])
    

    const Signout = () => {
        let SigningOut = window.confirm("Are you sure you want to logout?");
    
        if (SigningOut) {
          logout();
        }
      };
  return (
    <div className=" h-full w-full flex flex-col mt-4 items-center ">
      <div className=" lg:w-[240px] lg:h-[240px] w-[160px] h-[160px] rounded-full flex justify-center text-xl items-center font-bold text-white bg-[#AE04B4]">
        EA
          </div>
          <div>
              <div className=" flex lg:gap-5 gap-2 mt-4 items-center">
                  <h5 className=" font-bold text-[#AE04B4]">Name:</h5>
                  <h5>{ name }</h5>
              </div>
              <div className=" flex lg:gap-5 gap-2 mt-4 items-center">
                  <h5 className=" font-bold text-[#AE04B4]">Email:</h5>
                  <h5>{ email}</h5>
              </div>

              <button onClick={Signout} className=" px-5 py-3 bg-[#AE04B4] mt-7 text-white font-bold">Logout</button>
          </div>
    </div>
  );
};

export default Profile;
