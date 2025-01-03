import React from "react";
import Header from "./components/Header";

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <main className="p-4">
        <h1 className="text-xl font-bold">Welcome to the Dashboard!</h1>
      </main>
    </div>
  );
}

export default App;
