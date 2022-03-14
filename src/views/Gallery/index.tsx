import React from "react";
import "./style.css";
import useIPFS from "./useIPFS";

const Gallery: React.FC = () => {
  const ipfs = useIPFS();

  return (
    <div className="background">
      <div className="title">
        <h2>Gallery</h2>
      </div>
      <input type="file" name="data" onChange={ipfs.retrieveFile} />
      <div className="addButton" onClick={(e) => ipfs.handleSubmit(e)}>
        <span>New NFT</span>
      </div>
      <div className="nftList">
        {ipfs.urlArr.map((el) => (
          <div className="nftCard">
            <img src={el} alt="nfts" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
