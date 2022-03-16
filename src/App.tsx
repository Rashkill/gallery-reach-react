import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "views/Home";
import Gallery from "views/Gallery";
import NewNFT from "views/Gallery/NewNFT";
import { UserInfoProvider } from "contexts/UserInfoContext";

const App: React.FC = () => {
  return (
    <UserInfoProvider>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/addNFT" element={<NewNFT />} />
        </Routes>
      </div>
    </UserInfoProvider>
  );
};

export default App;
