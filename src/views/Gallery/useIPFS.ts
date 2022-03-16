import UserInfoContext from "contexts/UserInfoContext";
import { create } from "ipfs-http-client";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { NFTJSON } from "types/IPFS";

// const projectId = "26QJH55bCBPzk2Ma3Q6xIsIgMnj";
// const projectSecret = "81a7a01cff8ec02ebf077e5c81db3d70";
// const authorization = "Basic " + btoa(projectId + ":" + projectSecret);

const client = create({ url: "https://ipfs.infura.io:5001/api/v0" });

const useIPFS = () => {
  const { actualAddress } = useContext(UserInfoContext);
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const [file, setFile] = useState<string | ArrayBuffer | null>();
  const [fileData, setFileData] = useState<File>();
  const [urlArr, setUrlArr] = useState<Array<string>>(
    JSON.parse(window.localStorage.getItem("nfts") || "[]")
  );

  const retrieveFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const data = e.target.files?.[0];
    setFileData(data);
    const reader = new window.FileReader();
    if (!data) return;
    reader.readAsArrayBuffer(data);
    reader.onloadend = () => {
      setFile(reader.result);
    };

    e.preventDefault();
  };

  const handleSubmit = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    if (!name || !description || !actualAddress) return;
    try {
      const fileCreated = await client.add(file as any);
      const fileURL = `https://ipfs.infura.io/ipfs/${fileCreated.path}`;

      const finalFile: NFTJSON = {
        name,
        description,
        fileURL,
        fileType: fileData?.type || "unknown",
        ownerAddress: actualAddress || "none",
        creatorAddress: actualAddress || "none",
      };

      const jsonCreated = await client.add(JSON.stringify(finalFile) as any);
      const jsonURL = `https://ipfs.infura.io/ipfs/${jsonCreated.path}`;

      setUrlArr((prev) => {
        if (prev.includes(jsonURL)) return prev;
        const final = [...prev, jsonURL];
        window.localStorage.setItem("nfts", JSON.stringify(final));
        console.log(finalFile);
        navigate("/gallery");
        return final;
      });
    } catch (error: any) {
      console.log(error.message);
    }
  };

  return {
    urlArr,
    name,
    description,
    retrieveFile,
    handleSubmit,
    setName,
    setDescription,
  };
};

export default useIPFS;
