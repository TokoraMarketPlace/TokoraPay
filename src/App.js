import React from "react";
import { Routes, Route } from "react-router-dom";
import Splashscreen from "./components/Splashscreen";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Connectwallet from "./components/Connectwallet";
import Home from "./components/Home";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Splashscreen />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/connect-wallet" element={<Connectwallet />} />
      <Route path="/home" element={<Home />} />
    </Routes>
  );
}

export default App;
