// src/components/Home.js
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Bell, User } from "lucide-react"; // icons
import Logo from "../assets/TokoraPayLogo.png";
import BGImage from "../assets/2logo.png"; // ✅ import your background image

const dummyTransactions = [
  { id: 1, type: "sent", name: "Esimvie Izu", amount: "1,500 USDC", ngn: "2,280,000 NGN", time: "5:43 PM" },
  { id: 2, type: "received", name: "Elisha Adewuyi", amount: "15,000 USDC", ngn: "22,800,000 NGN", time: "21 AUG 2025 | 11:32 AM" },
  { id: 3, type: "sent", name: "Oviemeya Adedeji", amount: "800 USDC", ngn: "1,216,000 NGN", time: "18 AUG 2025 | 7:08 AM" },
  { id: 4, type: "sent", name: "Samuel Ekpo", amount: "60 USDC", ngn: "91,200 NGN", time: "15 AUG 2025 | 12:21 PM" },
];

const Home = () => {
  const [showNav, setShowNav] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
  const [showUser, setShowUser] = useState(false);

  useEffect(() => {
    setTimeout(() => setShowNav(true), 100); // animate nav up
  }, []);

  return (
    <div className="flex flex-col h-screen bg-[#E9E7E5]">
      {/* 🔹 Header */}
      <div className="flex justify-between items-center p-4">
        <img src={Logo} alt="" />
        <div className="flex gap-3">
          {/* Notification button */}
          <button onClick={() => setShowNotifications(true)} className="relative">
            <Bell size={22} className="text-gray-600" />
            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full px-1">3</span>
          </button>
          {/* User Profile button */}
          <button onClick={() => setShowUser(true)}>
            <User size={22} className="text-gray-600" />
          </button>
        </div>
      </div>

      <h1 className="text-lg font-semibold text-gray-700 flex justify-between items-center p-4">
        Good Morning, <br /> Godknows Ukari
      </h1>

      {/* 🔹 Balance Card */}
      <div className="mx-4 relative rounded-2xl p-6 text-white shadow-lg overflow-hidden">
        {/* Background Image */}
        <img
          src={BGImage} // ✅ using imported background image
          alt="card background"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Foreground Content */}
        <div className="relative z-10">
          <p className="opacity-80">Account Balance</p>
          <h2 className="text-4xl font-bold mb-4">$151,250.00</h2>
          <div className="flex gap-3">
            <button className="flex-1 bg-white text-orange-500 rounded-lg py-2 font-semibold">
              Send
            </button>
            <button className="flex-1 bg-white text-orange-500 rounded-lg py-2 font-semibold">
              Receive
            </button>
          </div>
        </div>
      </div>

      {/* 🔹 Transaction History */}
      <div className="mt-6 px-4 flex-1">
        <div className="flex justify-between items-center mb-3">
          <h3 className="text-lg font-semibold">Transaction history</h3>
          <button className="text-sm text-orange-500">View all</button>
        </div>

        <div className="flex flex-col gap-3">
          {dummyTransactions.map((tx) => (
            <div
              key={tx.id}
              className="flex items-center justify-between bg-white rounded-xl shadow-sm p-4"
            >
              <div>
                <p className="font-medium">
                  {tx.type === "sent" ? "Sent to" : "Received from"} {tx.name}
                </p>
                <span className="text-xs text-gray-500">{tx.time}</span>
              </div>
              <div className="text-right">
                <p className={tx.type === "sent" ? "text-red-500 font-semibold" : "text-green-600 font-semibold"}>
                  {tx.amount}
                </p>
                <span className="text-xs text-gray-500">{tx.ngn}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 🔹 Bottom Navigation */}
      <div
        className={`fixed left-0 right-0 bottom-0 bg-white rounded-t-3xl shadow-lg py-3 px-6 flex justify-between transition-transform duration-500 ${
          showNav ? "translate-y-0" : "translate-y-full"
        }`}
      >
        <button className="text-orange-500 font-semibold">Home</button>
        <button className="text-gray-600">Transfer</button>
        <button className="text-gray-600">History</button>
        <button className="text-gray-600">Setting</button>
      </div>

      {/* 🔹 Notifications (slide down) */}
      {showNotifications && (
        <div className="fixed inset-0 bg-white shadow-lg transition-transform duration-500 animate-slideDown">
          <div className="p-6">
            <h2 className="text-xl font-bold mb-4">Notifications</h2>
            <p className="text-gray-600">🔔 Dummy notifications will appear here.</p>
            <button
              onClick={() => setShowNotifications(false)}
              className="mt-4 text-orange-500"
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* 🔹 User Profile (slide in from right) */}
      {showUser && (
        <div className="fixed inset-0 bg-white shadow-lg transition-transform duration-500 animate-slideInRight">
          <div className="p-6">
            <h2 className="text-xl font-bold mb-4">User Profile</h2>
            <p className="text-gray-600">👤 User details go here...</p>
            <button
              onClick={() => setShowUser(false)}
              className="mt-4 text-orange-500"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
