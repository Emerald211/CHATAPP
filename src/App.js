import "./App.css";
import { AuthContextProvider } from "./component/context/Authcontext";
import { Routes, Route } from "react-router-dom";
import Main from "./Main";
import SignIn from "./component/authentication/SignIn";
import Protectedroute from "./component/authentication/Protectedroute";
import Chat from "./component/chat/Chat";
import Welcome from "./component/welcome/Welcome";
import Profile from "./component/profile/Profile";

function App() {
  return (
    <>
      <AuthContextProvider>
        <Routes>
          <Route path="/" element={<SignIn />} />
   
          <Route
            path="/home"
            element={
              <Protectedroute>
                <Main />
              </Protectedroute>
            }
          >
            <Route index element={<Welcome />} />
            <Route path="chat" element={<Chat />} />
            <Route path="profile" element={<Profile />}></Route>
          </Route>
     

        
        </Routes>
      </AuthContextProvider>
    </>
  );
}

export default App;
