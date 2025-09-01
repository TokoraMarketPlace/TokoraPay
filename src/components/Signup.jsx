// src/components/Signup.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();

  const [countryCode, setCountryCode] = useState("+234"); // default Nigeria 🇳🇬
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  const handleSignup = (e) => {
    e.preventDefault();
    setError("");

    if (!phone || !password) {
      setError("Please fill in all fields.");
      return;
    }

    console.log("✅ Dummy signup successful", { phone, countryCode });
    navigate("/login"); // Redirect to login page
  };

  return (
    <div className="h-screen flex flex-col justify-between bg-gray-100 px-6 py-8">
      {/* 🔹 Top Section (header + wallet + inputs) */}
      <div className="text-left">
        <h1 className="text-6xl font-bold mb-2">
          Hi,<br />
          Welcome
        </h1>
        <p className="text-gray-600 mb-8 max-w-xs">
          Sign up in to a new account by selecting your preferred method to
          continue setting up your account.
        </p>

        {/* Connect Wallet */}
        <button
          onClick={() => navigate("/connect-wallet")}
          className="w-full bg-orange-400 text-white font-semibold py-3 rounded-lg shadow-md hover:bg-orange-500 transition mb-6"
        >
          Connect Wallet
        </button>

        {/* Inputs */}
        <div className="w-full flex flex-col gap-4">
          {/* Phone with country code dropdown */}
          <div className="flex border rounded-lg overflow-hidden">
            <select
              value={countryCode}
              onChange={(e) => setCountryCode(e.target.value)}
              className="px-3 bg-gray-200 border-r focus:outline-none"
            >
              <option value="+234">+234</option>
              <option value="+1">+1</option>
              <option value="+44">+44</option>
              <option value="+91">+91</option>
              <option value="+233">+233</option>
            </select>
            <input
              type="tel"
              placeholder="000 000 0000"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="flex-1 px-4 py-3 focus:outline-none"
              required
            />
          </div>

          {/* Password with show/hide toggle */}
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Enter Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="border rounded-lg px-4 py-3 w-full pr-12"
              required
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-sm text-gray-600 hover:text-gray-900"
            >
              {showPassword ? "🙈" : "👁️"}
            </button>
          </div>
        </div>
        {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
      </div>

      {/* 🔹 Bottom Section (Signup button at center bottom) */}
      <div className="flex justify-center mb-4">
        <button
          onClick={handleSignup}
          className="w-full bg-orange-400 text-white font-semibold py-3 rounded-lg shadow-md hover:bg-orange-500 transition"
        >
          Create Account
        </button>
      </div>
    </div>
  );
};

export default Signup;
