import React from "react";
import "./style.css";

const Home: React.FC = () => {
  return (
    <div className="background">
      <div className="title">
        <h1>React / Reach</h1>
        <h2>NFT Gallery</h2>
      </div>
      <div className="button">
        <span> Go to Galery</span>
      </div>
    </div>
  );
};

export default Home;
