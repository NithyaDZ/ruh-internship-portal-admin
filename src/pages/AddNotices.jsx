// src/pages/AnalyzePage.jsx
import React from 'react';
import Header from "../components/Header";
import Sidebar from "../components/Sidebar"

const AddNotices = () => {
  return (
    <div className="flex flex-col h-screen">
      <Header />
        <div className="flex flex-1 overflow-hidden">
          <Sidebar />
          <div className="flex-1 overflow-y-auto p-12 mt-[64px] ml-[250px]">
            <h1 className="text-[24px] leading-5 font-bold mb-4">Add Notices</h1>
            <form className="space-y-4">
              <div>
                <label className="block text-gray-700">Topic</label>
                <input
                  type="text"
                  className="w-[1038px] h-[58px] border-gray-300 bg-white rounded px-4 py-2 shadow-sm focus:ring focus:ring-blue-300"
                  placeholder="Enter the topic"
                />
              </div>
              <div>
                <label className="block text-gray-700">Notice</label>
                <textarea
                  className="w-full border-gray-300 rounded px-4 py-2 shadow-sm focus:ring focus:ring-blue-300"
                  placeholder="Enter the notice"
                  rows="4"
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-[#0F1D2F] text-white px-4 py-2 rounded shadow hover:bg-black"
              >
                Submit
              </button>
            </form>
          </div>
      </div>
    </div>
  );
}

export default AddNotices;