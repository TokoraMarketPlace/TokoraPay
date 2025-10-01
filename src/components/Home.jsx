import React, { useState } from "react";
// import { NavLink } from "react-router-dom";
import { Bell, User } from "lucide-react";
import Logo from "../assets/TokoraPayLogo.png";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import BGImage from "../assets/2logo.png";
import TransactionRow from "./TransactionRow";
import { Icon } from '@iconify/react';
import paperImage from '@iconify/icons-mdi/paper-plane';
import { useNavigate } from "react-router-dom";


const dummyTransactions = [
  { id: 1, type: "sent", name: "Esimvie Izu", amount: "1,500 USDC", ngn: "2,280,000 NGN", time: "5:43 PM" },
  { id: 2, type: "received", name: "Elisha Adewuyi", amount: "15,000 USDC", ngn: "22,800,000 NGN", time: "21 AUG 2025 | 11:32 AM" },
  { id: 3, type: "sent", name: "Oviemeya Adedeji", amount: "800 USDC", ngn: "1,216,000 NGN", time: "18 AUG 2025 | 7:08 AM" },
  { id: 4, type: "sent", name: "Samuel Ekpo", amount: "60 USDC", ngn: "91,200 NGN", time: "15 AUG 2025 | 12:21 PM" },
  { id: 5, type: "received", name: "Tosin Femi", amount: "3,200 USDC", ngn: "4,992,000 NGN", time: "14 AUG 2025 | 2:15 PM" },
  { id: 6, type: "sent", name: "Chinedu Okeke", amount: "900 USDC", ngn: "1,404,000 NGN", time: "12 AUG 2025 | 9:00 AM" },
  { id: 7, type: "received", name: "Aisha Bello", amount: "5,000 USDC", ngn: "7,800,000 NGN", time: "10 AUG 2025 | 11:45 AM" },
  { id: 8, type: "sent", name: "Femi Ade", amount: "120 USDC", ngn: "187,200 NGN", time: "09 AUG 2025 | 4:30 PM" },
];

const Home = () => {
  // const [showNav, setShowNav] = useState(false);
  const [hideBalance, setHideBalance] = useState(false);
  const [expandedHistory, setExpandedHistory] = useState(false);
  const navigate = useNavigate();

  // useEffect(() => {
  //   setTimeout(() => setShowNav(true), 100); // animate nav up initially
  // }, []);

  const transactionsToShow = expandedHistory ? dummyTransactions.slice(0, 8) : dummyTransactions.slice(0, 4);

  const handleSend = (e) => {
    navigate("/transfer");
    };

  const handleDeposit = (e) => {
    navigate("/deposit");
    };

  const handleUser =(e)=> {
    navigate("/settings");
  }

  return (
    <div className=" flex flex-col bg-[#E9E7E5] pb-24 relative">
      {/* Header */}
      <div className="flex justify-between items-center p-4 z-30 relative">
        <img src={Logo} alt="" />
        <div className="flex gap-3">
          <button className="relative">
            <Bell size={22} className="text-gray-600" />
            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full px-1">3</span>
          </button>
          <button onClick={handleUser}>
            <User size={22} className="text-gray-600" />
          </button>
        </div>
      </div>

      {/* Greeting */}
      <div className="p-4">
        <h1 className="text-xs font-semibold text-gray-400">Good Morning</h1>
        <p className="text-xl font-semibold text-gray-700">Godknows Ukari</p>
      </div>

      {/* Balance Card */}
      <div className="mx-4 relative rounded-3xl p-8 text-white shadow-xl overflow-hidden">
        <img src={BGImage} alt="card background" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-orange-400 opacity-80 rounded-3xl"></div>
        <div className="relative z-10">
          <p className="opacity-80 mb-3 text-lg">Account Balance</p>
          <div className="flex items-center gap-4 mb-6 justify-between">
            <h2 className="text-4xl font-bold">{hideBalance ? "••••••••" : "$151,250.00"}</h2>
            <button onClick={() => setHideBalance(!hideBalance)} className="text-white opacity-90 text-2xl">
              {hideBalance ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>
          <div className="flex gap-4">
            <button
            onClick={handleSend}
            className="flex-1 text-white bg-orange-500 rounded-full py-3 font-semibold flex items-center justify-center gap-3 text-lg">
              <Icon icon={paperImage} 
               style={{ transform: "rotate(-45deg)" }} 
              />
               Send
            </button>
            <button
            onClick={handleDeposit}
            className="flex-1 bg-white text-black rounded-full py-3 font-semibold flex items-center justify-center gap-3 text-lg">
              <Icon icon={paperImage} 
               style={{ transform: "rotate(135deg)" }} 
              />
               Receive
            </button>
          </div>
        </div>
      </div>

      {/* Mini Transaction History */}
      <div className="mt-6 px-4 py-4 flex-1 bg-white rounded-xl relative z-10">
        <div
          className="w-12 h-1.5 bg-gray-300 rounded-full mx-auto mb-4 cursor-pointer"
          onClick={() => setExpandedHistory(true)}
        ></div>

        <div className="flex justify-between items-center mb-3">
          <h3 className="text-xl font-semibold">Transaction history</h3>
          <button
            className="text-lg text-black"
            onClick={() => setExpandedHistory(true)}
          >
            View All
          </button>
        </div>

        <div className="flex flex-col gap-3">
          {transactionsToShow.slice(0, 4).map((tx) => (
            <TransactionRow key={tx.id} tx={tx} />
          ))}
        </div>
      </div>

      {/* Expanded Transaction Panel */}
      {expandedHistory && (
        <div className="fixed left-0 right-0 bottom-0 top-0 z-30 flex flex-col">
          {/* Panel */}
          <div className="flex-1 bg-white p-4 overflow-auto rounded-t-3xl shadow-lg">
            <div
              className="w-12 h-1.5 bg-gray-300 rounded-full mx-auto mb-4 cursor-pointer"
              onClick={() => setExpandedHistory(false)}
            ></div>

            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-bold">All Transactions</h3>
              <button
                onClick={() => setExpandedHistory(false)}
                className="text-orange-500 font-semibold"
              >
                Close
              </button>
            </div>

            <div className="flex flex-col gap-3">
              {dummyTransactions.slice(0, 8).map((tx) => (
                <TransactionRow key={tx.id} tx={tx} />
              ))}
            </div>
          </div>
        </div>
      )}

    </div>
  );
};

export default Home;
