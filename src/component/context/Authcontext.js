import { createContext, useContext, useEffect, useState } from "react";
import { signOut, onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase/firebase-config";

const Usercontext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [user, setuser] = useState();

  const logout = () => {
    return signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentuser) => {
      console.log(user);
      setuser(currentuser);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <Usercontext.Provider value={{ user, logout }}>
      {children}
    </Usercontext.Provider>
  );
};

export const UserAuth = () => {
  return useContext(Usercontext);
};
