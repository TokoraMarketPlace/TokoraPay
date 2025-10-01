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
import Confirmwallet from "./components/Confirmwallet.jsx";
import Sendtovendor from "./components/Sendtovendor.jsx";
import Deposit from "./components/Deposit.jsx";
import Moresettimg from "./components/Moresettimg.jsx";
import Logout from "./components/Logout.jsx";

function App() {
  return (
    <div className=" bg-[#E9E7E5]">

    <Routes>
      <Route path="/" element={<Splashscreen />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/connect-wallet" element={<Connectwallet />} />
      <Route path="/confirm-wallet" element={<Confirmwallet />} />
      <Route path="/send" element={<Sendtovendor />} />
      <Route path="/deposit" element={<Deposit />} />
      <Route path="/more" element={<Moresettimg />} />
      <Route path="/logout" element ={<Logout />} />


      {/* Pages with bottom navbar */}
      <Route
        path="/dashboard"
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

    </div>
  );
}

export default App;
