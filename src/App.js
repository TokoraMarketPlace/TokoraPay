import React from "react";
import { Routes, Route } from "react-router-dom";
import Splashscreen from "./components/Splashscreen";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Connectwallet from "./components/Connectwallet";
import Home from "./components/Home";
import Layout from "./components/Layout";
import Transfer from "./components/Transfer";
import History from "./components/History.jsx"
import Setting from "./components/Setting.jsx" ;

function App() {
  return (
    <Routes>
      <Route path="/" element={<Splashscreen />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/connect-wallet" element={<Connectwallet />} />

      {/* Pages with bottom navbar */}
      <Route
        path="/home"
        element={
          <Layout>
            <Home />
          </Layout>
        }
      />
      <Route
        path="/transfer"
        element={
          <Layout>
            <Transfer />
          </Layout>
        }
      />
      <Route
        path="/history"
        element={
          <Layout>
            <History />
          </Layout>
        }
      />
      <Route
        path="/settings"
        element={
          <Layout>
            <Setting/>
          </Layout>
        }
      />

    </Routes>
  );
}

export default App;
