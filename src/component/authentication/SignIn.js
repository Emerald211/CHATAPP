import { GoogleAuthProvider, signInWithRedirect } from "firebase/auth";
import React, { useEffect } from "react";
import GoogleButton from "react-google-button";
import { BsChatDotsFill } from "react-icons/bs";
import { UserAuth } from "../context/Authcontext";
import "./Signin.css";
import { auth } from "../firebase/firebase-config";
import { useNavigate } from "react-router-dom";


const SignIn = () => {
  let navigate = useNavigate();

  const { user } = UserAuth();
  useEffect(() => {
    user && navigate("/home");
  }, [user, navigate]);

  console.log(user);

  const googleSignin = async () => {
    try {
      const provider = new GoogleAuthProvider();
      await signInWithRedirect(auth, provider);
      navigate("/home");
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="signin-container flex flex-col bg-blue-900 h-screen w-screen items-center justify-center">
      <div className=" text-center signin-box flex flex-col">
        <div className=" text-3xl items-center gap-3 flex">
          <h1 className=" text-white text-3xl font-bold">Lets Chat</h1>
          <BsChatDotsFill className=" text-white" />
        </div>
        <p className=" text-sm  md:text-base text-white">
          Say Hello, Lets have a conversation
        </p>

        <GoogleButton onClick={googleSignin} className=" mt-4 google" />
      </div>
    </div>
  );
};

export default SignIn;
