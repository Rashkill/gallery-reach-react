import { loadStdlib } from "@reach-sh/stdlib";
import * as backend from "build/index.main.mjs";
import { Account, Backend } from "@reach-sh/stdlib/dist/types/ETH";
import React, { createContext, useState, useMemo } from "react";
import { Contract, Token } from "@reach-sh/stdlib/dist/types/ETH_like";
import { NFTJSON } from "types/IPFS";
import { BigNumber } from "ethers";

const reach = loadStdlib("ETH");

type UserInfoContextProps = {
  account?: Account;
  actualAddress?: string;
  faucet?: Account;
  contractInfo: string | undefined;
  loadingContract: boolean;
  deployContract: (
    name: string,
    description: string,
    url: string
  ) => Promise<string | undefined> | null;
  setContractInfo: (ctcInfo: string) => void;
};

const UserInfoContext = createContext<UserInfoContextProps>({
  account: undefined,
  actualAddress: "",
  faucet: undefined,
  contractInfo: undefined,
  loadingContract: false,
  deployContract: () => null,
  setContractInfo: () => null,
});

export const UserInfoProvider: React.FC = ({ children }) => {
  const [account, setAccount] = useState<Account | undefined>(undefined);
  const [faucet, setFaucet] = useState<Account>();
  const [actualAddress, setActualAddress] = useState("");

  const [ctc, setCtc] = useState<Contract | undefined>(undefined);
  const [ctcInfoStr, setCtcInfoStr] = useState<string>();
  const [loadingCtc, setLoadingCtc] = useState<boolean>(false);

  useMemo(async () => {
    try {
      const _acc = await reach.getDefaultAccount();
      setAccount(_acc);
      setActualAddress(await _acc.networkAccount.getAddress());
      setFaucet(await reach.getFaucet());
    } catch (error) {
      setActualAddress(``);
    }
  }, []);

  const fmt = (x: BigNumber) => reach.formatCurrency(x, 0);
  const showBalance = async (acc: Account, tok: Token) => {
    console.log(` Checking ${tok} balance:`);
    console.log(`${tok} balance: ${fmt(await reach.balanceOf(acc, tok))}`);
  };

  async function deployContract(
    name: string,
    description: string,
    url: string
  ) {
    if (!account) return;
    console.log("----- Starting -----");
    const _ctc = account.contract(backend as unknown as Backend);
    setCtc(_ctc);
    await backend.Creator(_ctc, {
      showToken: (tok: Token) => {
        console.log(`The token ID is:`, tok);
        //this is for otping in if you later use this for ALGO
        account.tokenAccept(tok);
        //this shows Creator's balance
        showBalance(account, tok);
      },
      getParams: () => {
        return {
          name,
          symbol: name.trim().toUpperCase(),
          url,
          metadata: description,
          supply: reach.parseCurrency(10),
          decimals: 18,
        };
      },
    });
    const _ctcInfoStr = JSON.stringify(await _ctc?.getInfo(), null, 2);
    setCtcInfoStr(_ctcInfoStr);
    console.log("----- Ended -----");

    setLoadingCtc(false);
    return _ctcInfoStr;
  }

  function setContractInfo(_ctcInfoStr: string) {
    setCtcInfoStr(_ctcInfoStr);
  }

  return (
    <UserInfoContext.Provider
      value={{
        account,
        actualAddress,
        faucet,
        contractInfo: ctcInfoStr,
        loadingContract: loadingCtc,
        deployContract,
        setContractInfo,
      }}
    >
      {children}
    </UserInfoContext.Provider>
  );
};

export const MemberConsumer = UserInfoContext.Consumer;

export default UserInfoContext;
