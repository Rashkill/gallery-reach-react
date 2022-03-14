import React from "react";
import { useNavigate } from "react-router-dom";
import "./style.css";

const Home: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div className="background">
      <div className="title">
        <h1>React / Reach</h1>
        <h2>NFT Gallery</h2>
      </div>
      <div onClick={() => navigate("/gallery")} className="button">
        <span> Go to Galery</span>
      </div>
    </div>
  );
};

export default Home;
