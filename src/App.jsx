import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Welcome from "./components/Welcome";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Account from "./components/Account";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="app-container">
        <div className="w-[360px] min-h-[640px] border border-gray-300 bg-[#F7F8F9] shadow-lg overflow-hidden flex flex-col">
          <Routes>
            <Route path="/" element={<Welcome />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="/account" element={<Account />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
