// src/pages/AnalyzePage.jsx
import React from 'react';
import Header from "../components/Header";
import Sidebar from "../components/Sidebar"

const UpdateInstructions = () => {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <div className="flex flex-1 overflow-hidden">
        <Sidebar />
        <div className="flex-1 overflow-y-auto p-12 mt-[64px] ml-[250px]" >
          <h1 className="text-[24px] leading-5 font-bold mb-4">Update Instructions</h1>
            <form>
              <label className="block mb-2 font-medium text-gray-700" htmlFor="feedback">
                Feedback
              </label>
              <textarea
                id="feedback"
                rows="6"
                className="w-[1038px]  h-[295px] p-4 border border-gray-300 bg-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your feedback..."
              ></textarea>
              <div>
              <button
                type="submit"
                className="mt-4 px-6 py-2 bg-[#0F1D2F] text-white font-bold rounded-[8px] hover:bg-black transition"
              >
                Save Changes
              </button>
              </div>
            </form>
        
        
        </div>
      </div>
    </div>
  );
}

export default UpdateInstructions;