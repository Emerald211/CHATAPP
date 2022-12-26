import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { UserAuth } from "../context/Authcontext";

const Protectedroute = ({ children }) => {
  let navigate = useNavigate();
  const { user } = UserAuth();

  if (!user) {
    navigate("/");
  }

  console.log(user);

  return children;
};

export default Protectedroute;
