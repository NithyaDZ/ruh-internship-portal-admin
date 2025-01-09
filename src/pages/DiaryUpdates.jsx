// src/pages/AnalyzePage.jsx
import React from "react";
import { FiSearch } from "react-icons/fi";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";

const DiaryUpdates = () => {
  return (
    <div className="flex flex-col h-screen">
      <Header />
        <div className="flex flex-1 overflow-hidden">
          <Sidebar />
          <div className="flex-1 overflow-y-auto p-12 mt-[64px] ml-[250px]">
            <h1 className="text-[24px] leading-5 font-bold mb-6">View Diary Updates</h1>
            <form className="flex items-center space-x-4">
              <div>
                <label className="block text-gray-700 mb-1">SC Number:</label>
                <div className="relative">
                  <input
                    id="scNumber"
                    type="text"
                    placeholder="Search"
                    className="w-full h-12 pl-10 pr-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                </div>
              </div>
              <button
                type="submit"
                className="bg-[#0F1D2F] text-white px-4 py-2 rounded shadow hover:bg-black"
              >
                View
              </button>
            </form>
          </div>
        </div>
    </div>  
  );
};

export default DiaryUpdates;
