import React from "react";
import { useNavigate } from "react-router-dom";
import classes from "./home.module.css";

const Home: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div className={classes.background}>
      <div className={classes.title}>
        <h1>React / Reach</h1>
        <h2>NFT Gallery</h2>
      </div>
      <div onClick={() => navigate("/gallery")} className={classes.button}>
        <span> Go to Galery</span>
      </div>
    </div>
  );
};

export default Home;
