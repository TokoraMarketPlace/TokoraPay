// src/components/Login.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Eye, EyeOff } from "lucide-react";

const countryCodes = ["+234", "+1", "+44", "+91", "+254"];

const Login = () => {
  const [countryCode, setCountryCode] = useState("+234");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    if (!phone || !password) {
      setError("Please fill in all fields.");
      return;
    }

    console.log("✅ Dummy login successful", { phone, countryCode });
    navigate("/home"); // Just redirect to /home without Firebase
  };

  return (
    <div
      className="flex flex-col h-screen px-6 py-8"
      style={{ backgroundColor: "#E9E7E5" }}
    >
      {/* Header Section */}
      <div className="mb-12">
        <h1 className="text-6xl font-bold text-gray-800 text-left">
          Welcome <br /> Back
        </h1>
        <p className="text-gray-600 text-sm mt-2">Login to your account.</p>
      </div>

      {/* Input fields */}
      <form onSubmit={handleLogin} className="flex flex-col flex-grow">
        <div className="space-y-4">
          {/* Phone input with country code */}
          <div className="flex items-center w-full bg-white border border-gray-300 rounded-full overflow-hidden shadow-sm">
            <select
              value={countryCode}
              onChange={(e) => setCountryCode(e.target.value)}
              className="px-3 py-3 bg-gray-100 outline-none text-sm"
            >
              {countryCodes.map((code) => (
                <option key={code} value={code}>
                  {code}
                </option>
              ))}
            </select>
            <span className="h-6 w-px bg-gray-300 mx-2"></span>
            <input
              type="tel"
              placeholder="000 000 0000"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="flex-1 px-3 py-3 outline-none text-sm bg-transparent"
              required
            />
          </div>

          {/* Password input with toggle */}
          <div className="flex items-center w-full bg-white border border-gray-300 rounded-full overflow-hidden shadow-sm">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Enter Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="flex-1 px-4 py-3 outline-none text-sm bg-transparent"
              required
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="px-4 text-gray-500 hover:text-gray-700"
            >
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>
        </div>

        {/* Error message */}
        {error && <p className="text-red-500 text-sm mt-4">{error}</p>}

        {/* Login button pinned bottom */}
        <div className="mt-auto mb-6">
          <button
            type="submit"
            className="w-full bg-orange-400 text-white font-semibold py-3 rounded-full hover:bg-orange-600 transition"
          >
            Login Account
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
