import { loadStdlib } from "@reach-sh/stdlib";
import * as backend from "build/index.main.mjs";
import { Account, Backend } from "@reach-sh/stdlib/dist/types/ETH";
import React, { createContext, useState, useMemo } from "react";
import { Contract } from "@reach-sh/stdlib/dist/types/ETH_like";
import { useNavigate } from "react-router-dom";

const reach = loadStdlib("ETH");

export const HANDS = ["Rock", "Paper", "Scissors"];

type UserInfoContextProps = {
  account?: Account;
  actualAddress?: string;
  faucet?: Account;
  role: "Deploy" | "Attach";
  hand: number;
  otherHand: number;
  contractInfo: string | undefined;
  loadingContract: boolean;
  selectRole: (role: "Deploy" | "Attach") => Promise<void> | null;
  selectHand: (handNumber: number) => void;
  runAction: (ctcInfo?: string) => void;
  setContractInfo: (ctcInfo: string) => void;
};

const UserInfoContext = createContext<UserInfoContextProps>({
  account: undefined,
  actualAddress: "",
  faucet: undefined,
  role: "Attach",
  hand: 0,
  otherHand: 0,
  contractInfo: undefined,
  loadingContract: false,
  selectRole: () => null,
  selectHand: () => null,
  runAction: () => null,
  setContractInfo: () => null,
});

export const UserInfoProvider: React.FC = ({ children }) => {
  const navigate = useNavigate();

  const [account, setAccount] = useState<Account | undefined>(undefined);
  const [faucet, setFaucet] = useState<Account>();
  const [actualAddress, setActualAddress] = useState("");

  const [role, setRole] = useState<"Deploy" | "Attach">("Attach");
  const [hand, setHand] = useState<number>(0);
  const [otherHand, setOtherHand] = useState<number>(0);
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function selectRole(_role: "Deploy" | "Attach") {
    setRole(_role);
    navigate("/hands");
    if (_role === "Deploy") {
      const _ctc = account?.contract(backend as unknown as Backend);
      setCtc(_ctc);
      setCtcInfoStr(JSON.stringify(await _ctc?.getInfo(), null, 2));
      setLoadingCtc(false);
    }
  }
  function setContractInfo(_ctcInfoStr: string) {
    setCtcInfoStr(_ctcInfoStr);
  }

  function selectHand(handNumber: number) {
    setHand(handNumber);
    navigate("/connect");
  }

  async function runAction(ctcInfo?: string) {
    setLoadingCtc(true);
    const interact = {
      getHand: () => {
        const strAction = `${role === "Deploy" ? "Host" : "Client"} played ${
          HANDS[hand]
        }`;
        console.log(strAction);
        return hand;
      },
      seeOtherHand: (_otherHand: number) => {
        setOtherHand(_otherHand);
      },
      seeOutcome: (_outcome: number) => {
        navigate("/results");
      },
    };
    if (ctcInfo && role === "Attach") {
      const _ctc = account?.contract(
        backend as unknown as Backend,
        ctcInfo as unknown as Promise<string>
      );

      await backend.Bob(_ctc, interact);
    } else if (role === "Deploy") await backend.Alice(ctc, interact);
  }

  return (
    <UserInfoContext.Provider
      value={{
        account,
        actualAddress,
        faucet,
        role,
        hand,
        otherHand,
        contractInfo: ctcInfoStr,
        loadingContract: loadingCtc,
        selectRole,
        selectHand,
        runAction,
        setContractInfo,
      }}
    >
      {children}
    </UserInfoContext.Provider>
  );
};

export const MemberConsumer = UserInfoContext.Consumer;

export default UserInfoContext;
