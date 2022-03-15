import Input from "components/Input";
import useIPFS from "../useIPFS";
import classes from "./newnft.module.css";

const NewNFT = () => {
  const ipfs = useIPFS();
  return (
    <div className={classes.container}>
      <input type="file" name="data" onChange={ipfs.retrieveFile} />
      <Input type="text" name="name" id="nftName" />
      <Input type="text" name="description" id="nftDesc" />
      <Input type="number" name="price" id="nftPrice" />
    </div>
  );
};

export default NewNFT;
