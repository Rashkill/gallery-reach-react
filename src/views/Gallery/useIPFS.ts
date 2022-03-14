import { create } from "ipfs-http-client";
import { useState } from "react";

const client = create({ url: "https://ipfs.infura.io:5001/api/v0" });

const useIPFS = () => {
  const [file, setFile] = useState<Buffer>();
  const [urlArr, setUrlArr] = useState<Array<string>>([]);

  const retrieveFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const data = e.target.files?.[0];
    const reader = new window.FileReader();
    if (!data) return;
    reader.readAsArrayBuffer(data);
    reader.onloadend = () => {
      setFile(Buffer.from(reader.result as string));
    };

    e.preventDefault();
  };

  const handleSubmit = async (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    e.preventDefault();
    try {
      const created = await client.add(file as any);
      const url = `https://ipfs.infura.io/ipfs/${created.path}`;
      setUrlArr((prev) => [...prev, url]);
    } catch (error: any) {
      console.log(error.message);
    }
  };

  return { urlArr, retrieveFile, handleSubmit };
};

export default useIPFS;
