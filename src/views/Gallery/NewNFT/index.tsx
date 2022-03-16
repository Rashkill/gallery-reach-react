import Input from "components/Input";
import useIPFS from "../useIPFS";
import classes from "./newnft.module.css";

const NewNFT = () => {
  const ipfs = useIPFS();
  return (
    <div className={classes.container}>
      <input type="file" name="data" onChange={ipfs.retrieveFile} />
      <Input
        type="text"
        name="name"
        id="nftName"
        onChange={(e) => ipfs.setName(e.target.value)}
      />
      <Input
        type="text"
        name="description"
        id="nftDesc"
        onChange={(e) => ipfs.setDescription(e.target.value)}
      />
      <button onClick={(e) => ipfs.handleSubmit(e)}>Add NFT</button>
    </div>
  );
};

export default NewNFT;
