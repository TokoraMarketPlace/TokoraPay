import React from "react";
import { NavLink } from "react-router-dom";

export default function BottomNav({ showNav = true }) {
  return (
    <div
      className={`fixed left-0 right-0 bottom-1 bg-white rounded-t-3xl shadow-md shadow-gray-300 py-3 px-6 flex justify-between transition-transform duration-500 ${
        showNav ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <NavLink
        to="/"
        className={({ isActive }) =>
          `py-2 px-4 rounded-2xl font-semibold transition-all duration-300 ${
            isActive ? "bg-orange-400 text-white shadow-inner" : "text-gray-600"
          }`
        }
      >
        Home
      </NavLink>

      <NavLink
        to="/transfer"
        className={({ isActive }) =>
          `py-2 px-4 rounded-2xl font-semibold transition-all duration-300 ${
            isActive ? "bg-orange-400 text-white shadow-inner" : "text-gray-600"
          }`
        }
      >
        Transfer
      </NavLink>

      <NavLink
        to="/history"
        className={({ isActive }) =>
          `py-2 px-4 rounded-2xl font-semibold transition-all duration-300 ${
            isActive ? "bg-orange-400 text-white shadow-inner" : "text-gray-600"
          }`
        }
      >
        History
      </NavLink>

      <NavLink
        to="/settings"
        className={({ isActive }) =>
          `py-2 px-4 rounded-2xl font-semibold transition-all duration-300 ${
            isActive ? "bg-orange-400 text-white shadow-inner" : "text-gray-600"
          }`
        }
      >
        Setting
      </NavLink>
    </div>
  );
}
