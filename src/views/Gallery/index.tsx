import get from "helpers/get";
import React, { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { NFTJSON } from "types/IPFS";
import classes from "./gallery.module.css";
import useIPFS from "./useIPFS";

const Gallery: React.FC = () => {
  const navigate = useNavigate();
  const ipfs = useIPFS();
  const [list, setList] = useState<JSX.Element[]>();

  useMemo(async () => {
    const renderList = await Promise.all(
      ipfs.urlArr.map(async (el, index) => {
        const element: NFTJSON | null = await get(el);
        if (!element) return <></>;
        return (
          <div key={index + "nft"} className={classes.nftCard}>
            <img src={element.fileURL} alt="nfts" />
            <label>{element.name}</label>
            <label>{element.description}</label>
          </div>
        );
      })
    );
    setList(renderList);
  }, [ipfs.urlArr]);

  return (
    <div className={classes.background}>
      <div className={classes.title}>
        <h2>Gallery</h2>
      </div>

      <div className={classes.addButton} onClick={() => navigate("/addNFT")}>
        <span>+</span>
      </div>
      <div className={classes.nftList}>{list}</div>
    </div>
  );
};

export default Gallery;
