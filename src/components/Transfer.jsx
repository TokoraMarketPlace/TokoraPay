import React, { useState } from "react";
import { ArrowLeft, Building2 } from "lucide-react";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Transfer = () => {
  const [accountNumber, setAccountNumber] = useState("");
  const [bank, setBank] = useState("");
  const navigate = useNavigate();
  const [error, setError] = useState("");

  

  const handleNext = (e) => {
    e.preventDefault();
    setError("");

    if (!accountNumber || !bank) {
      setError("Please fill in all fields.");
      return;
    }

    console.log("Account Number:", accountNumber);
    console.log("Bank:", bank);

    navigate("/confirm-wallet");
  };

  return (
    <div className="flex flex-col py-10 h-screen bg-[#E9E7E5]overflow-hidden justify-between">
      <div className="flex-1 flex flex-col px-4 pb-20">
        {/* Title and Inputs at top */}
        <div className="flex-shrink-0 justify-between">
          <div className="flex items-center p-3 flex-shrink-0 align-middle justify-middle">
            
            <h2 className="text-2xl font-bold mb-8 text-center justify-between flex gap-20">
              <NavLink
                  to="/dashboard"
                  >
                    <button>
                      <a href="\home"><ArrowLeft size={20} /></a>
                  </button>
                  </NavLink>
            Send to Vendor</h2>
          </div>
          
          
          {/* Account Number */}
          <div className="flex flex-col gap-3 w-full max-w-md mx-auto">
            <label className="text-gray-600 font-semibold">Account Number</label>
            <input
              type="text"
              placeholder="0123456789"
              value={accountNumber}
              onChange={(e) => setAccountNumber(e.target.value)}
              className="p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-400"
              required
            />

            {/* Bank */}
            <label className="text-gray-600 font-semibold mt-4">Bank</label>
            <div className="relative">
              <input
                type="text"
                placeholder="Choose Bank"
                value={bank}
                onChange={(e) => setBank(e.target.value)}
                className="p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-400 pl-12 w-full"
              />
              <Building2
                size={20}
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                required
              />
            </div>
          </div>
        </div>

        {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
        
        <div className="flex-1 flex items-end justify-end">
          <div className="w-full max-w-md">
            <button
              onClick={handleNext}
              className="bg-orange-400 text-white font-bold py-4 rounded-xl w-full shadow-lg hover:bg-orange-500 transition-colors"
              >
                Next
            </button>
          </div>
        </div>
      </div>

      {/* Fixed Bottom Navbar */}
      <div className="fixed left-0 right-0 bottom-0 bg-white rounded-t-3xl shadow-md shadow-gray-300 py-3 px-6 flex justify-between flex-shrink-0">
        <div className="text-gray-600 font-semibold">Home</div>
        <div className="text-gray-600 font-semibold">Transfer</div>
        <div className="text-gray-600 font-semibold">History</div>
        <div className="text-gray-600 font-semibold">Settings</div>
      </div>
    </div>
  );
};

export default Transfer;