import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "views/Home";
import Gallery from "views/Gallery";

const App: React.FC = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gallery" element={<Gallery />} />
      </Routes>
    </div>
  );
};

export default App;
