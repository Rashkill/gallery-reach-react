//smart contract code and backend
"reach 0.1";

export const main = Reach.App(() => {
  const shared = {
    showToken: Fun([Token], Null),
    didTransfer: Fun([Bool, UInt], Null),
    showB: Fun([Token, Bytes(15)], Null),
  };
  //Creator is the participant to deploy the contract
  const Creator = Participant("Creator", {
    getParams: Fun(
      [],
      Object({
        name: Bytes(32),
        symbol: Bytes(8),
        url: Bytes(96),
        metadata: Bytes(32),
        supply: UInt,
        //amt: UInt,
      })
    ),
    ...shared,
  });
  init();
  //
  Creator.only(() => {
    const { name, symbol, url, metadata, supply } = declassify(
      interact.getParams()
    );
    assume(supply > 10);
  });
  //
  Creator.publish(name, symbol, url, metadata, supply);
  require(supply > 10);
  //
  const md1 = { name, symbol, url, metadata, supply };
  const tok1 = new Token(md1);
  Creator.interact.showToken(tok1);
  commit();
  //
  const doTransfer1 = (who, tokX) => {
    transfer(supply / 4, tokX).to(who);
    who.interact.didTransfer(true, supply / 4);
  };
  //
  Creator.publish();
  doTransfer1(Creator, tok1);
  Creator.interact.showB(tok1, "after receiving");
  commit();
  //
  Creator.pay([[supply / 4, tok1]]);
  Creator.interact.showB(tok1, "after refunding");
  commit();
  //
  Creator.publish();
  tok1.burn(balance(tok1));
  tok1.destroy();
  commit();
  exit();
});
