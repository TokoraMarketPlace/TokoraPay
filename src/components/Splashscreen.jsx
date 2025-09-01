import React from "react";
import { useNavigate } from "react-router-dom";
import bgImage from "../assets/BGImage.png";

const SplashScreen = () => {
  const navigate = useNavigate();

  return (
    <div
      className="h-screen w-screen relative flex flex-col justify-between items-center text-center overflow-hidden"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Black Overlay with fade in */}
      <div className="absolute inset-0 bg-black/60 animate-fadeIn"></div>

      {/* Text Content */}
      <div className="flex-1 flex flex-col justify-center px-6 relative z-10 items-start text-left">
        <h1 className="text-6xl md:text-7xl font-bold leading-tight mb-6 text-orange-200 animate-slideUp">
          Spend <br /> crypto on <br /> the go
        </h1>
        <p className="text-lg md:text-xl text-orange-100 max-w-md animate-fadeIn delay-200">
          Convert crypto to fiat instantly. <br />
          Users spend crypto, vendors receive naira.
        </p>
      </div>

      {/* Buttons */}
      <div className="w-full px-6 pb-6 relative z-10 -mt-8 animate-fadeIn delay-500">
        <button
          onClick={() => navigate("/signup")}
          className="w-full bg-orange-300 text-black font-semibold py-3 rounded-full shadow-md hover:bg-orange-400 transition"
        >
          Get Started
        </button>
        <p className="mt-4 text-sm text-white">
          Already have an account?{" "}
          <a href="/login" className="underline hover:text-orange-300">
            Login
          </a>
        </p>
      </div>
    </div>
  );
};

export default SplashScreen;
