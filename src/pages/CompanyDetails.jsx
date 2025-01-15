
import React from 'react';
import Header from "../components/Header";
import Sidebar from "../components/Sidebar"

export default function MainContent() {
  return (
    <>
      <div className="flex flex-col h-screen">
            <Header />
              <div className="flex flex-1 overflow-hidden">
                <Sidebar />
                <div className="flex-grow p-8 overflow-y-auto mt-16 ml-64 ">
                  <h1 className="text-2xl font-bold mb-4 text-center">COMPANY DETAILS</h1>
            
                </div>
              </div>
      </div>
    
    </>
  );
}