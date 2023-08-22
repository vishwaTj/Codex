import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import UserAuth from "./pages/UserAuth";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<UserAuth />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
