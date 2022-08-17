import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import GlobalStyle from "../assets/theme/GlobalStyle.js";
import UserContext from "../contexts/UserContext.js";
import InitialScreen from "./InitialScreen.js";
import TopBar from "./TopBar.js";
import SignUpScreen from "./SignUpScreen";
import SignInScreen from "./SignInScreen";
//import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

export default function App() {
  const [username, setUsername] = useState("");
  const [token, setToken] = useState({});

  function Error(e) {
    console.log(`${e.response.status} - ${e.response.statusText}`);
    alert("Um erro aconteceu, tente novamente");
  }

  return (
    <>
      <GlobalStyle />
      <UserContext.Provider
        value={{
          token,
          setToken,
          username,
          setUsername,
          Error
        }}
      >
        <TopBar />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<InitialScreen />} />
            <Route path="/signin" element={<SignInScreen />} />
            <Route path="/signup" element={<SignUpScreen />} />
          </Routes>
        </BrowserRouter>
      </UserContext.Provider>
    </>
  );
}
