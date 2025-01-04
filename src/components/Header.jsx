import React from "react";

const Header = () => {
  return (
    <header className="flex items-center justify-between bg-[#0F1D2F] p-4 shadow-md">
      <div className="flex items-center gap-3">
        {/* Profile Image */}
        <div className="w-10 h-10 rounded-md overflow-hidden">
          <img
            src="/images/profile.png" // Replace with your image path
            alt="User profile picture"
            width={40}
            height={40}
          />
        </div>
        {/* User Name */}
        <span className="text-white text-lg font-medium">John Doe</span>
      </div>
      
      <div className="flex items-center gap-6">
        {/* Notification Icon */}
        <button className="text-white ">
          🔔
        </button>
        {/* Logout Button */}
        <button className="border-2 border-yellow-400 text-yellow-400 px-4 py-1 rounded-md hover:bg-yellow-400 hover:text-black transition">
          Logout
        </button>
      </div>
    </header>
  );
};

export default Header;
