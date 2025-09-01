// src/components/ConnectWallet.js
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Metamask from "../assets/Metamask.png";
import Phantom from "../assets/Phantom.png";
import Solflare from "../assets/Solfare.png";
import Coinbase from "../assets/Coinbase.png";

const wallets = [
  { name: "Metamask", icon: Metamask },
  { name: "Phantom", icon: Phantom },
  { name: "Solflare", icon: Solflare },
  { name: "Coinbase", icon: Coinbase },
];

const ConnectWallet = () => {
  const [selectedWallet, setSelectedWallet] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Trigger animation after mount
    setTimeout(() => setIsVisible(true), 100);
  }, []);

  // Dummy onClick (for each wallet)
  const handleWalletClick = (walletName) => {
    console.log(`🖱️ ${walletName} clicked!`);
    setSelectedWallet(walletName);
  };

  const handleConnect = () => {
    if (!selectedWallet) {
      alert("Please select a wallet first.");
      return;
    }
    console.log(`✅ Connecting to ${selectedWallet}`);
    navigate("/home"); // redirect after connecting
  };

  return (
    <div className="flex flex-col h-screen bg-[#E9E7E5]">
      {/* Wallet Card (Bottom Sheet) */}
      <div
        className={`fixed left-0 right-0 bottom-0 bg-white rounded-t-3xl shadow-lg p-6 transition-transform duration-500 ${
          isVisible ? "translate-y-0" : "translate-y-full"
        }`}
        style={{ minHeight: "60%" }}
      >
        <h2 className="text-3xl mb-2">Connect wallet</h2>
        <p className="text-gray-600 text-sm mb-6">
          Get started by connecting your preferred wallet below.
        </p>

        {/* Wallet Options */}
        <div className="flex flex-col gap-3 bg-[#E9E7E5] p-3 rounded-xl">
          {wallets.map((wallet) => (
            <button
              key={wallet.name}
              onClick={() => handleWalletClick(wallet.name)}
              className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-300 transform
                ${
                  selectedWallet === wallet.name
                    ? "bg-[#D2CECE] translate-x-2"
                    : "bg-[#E9E7E5] hover:bg-[#D2CECE] hover:translate-x-2"
                }`}
            >
              <img src={wallet.icon} alt={wallet.name} className="w-6 h-6" />
              <span className="text-gray-800 font-medium">{wallet.name}</span>
            </button>
          ))}
        </div>

        {/* Connect Button */}
        <button
          onClick={handleConnect}
          className="w-full mt-6 bg-orange-400 text-white font-semibold py-3 rounded-full hover:bg-orange-500 transition"
        >
          Connect
        </button>
      </div>
    </div>
  );
};

export default ConnectWallet;
