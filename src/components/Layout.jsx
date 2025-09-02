import React from "react";
import BottomNav from "./BottomNav";

export default function Layout({ children }) {
  return (
    <div className="relative min-h-screen pb-24"> {/* pb-24 ensures content is above navbar */}
      {children}
      <BottomNav />
    </div>
  );
}
