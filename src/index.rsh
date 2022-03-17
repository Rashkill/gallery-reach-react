//smart contract code and backend
"reach 0.1";

const shared = {
  showToken: Fun([Token], Null),
  setAddress: Fun([], String),
  getCreator: Fun([], String),
};

export const main = Reach.App(() => {
  const ContractCreator = Participant("Creator", {
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

  const Buyer = Participant("Buyer", {
    ...shared,
  });

  init();

  ContractCreator.only(() => {
    const { name, symbol, url, metadata, supply } = declassify(
      interact.getParams()
    );
    assume(supply > 10);
  });

  ContractCreator.publish(name, symbol, url, metadata, supply);
  require(supply > 10);

  Buyer.only(() => {
    const who = declassify(interact.setAddress());
    const creator = declassify(interact.setAddress());
  });
  Buyer.publish(who, creator);
  commit();

  const md1 = { name, symbol, url, metadata, supply };
  const tok1 = new Token(md1);
  ContractCreator.interact.showToken(tok1);
  commit();

  const doTransfer1 = (tokX) => {
    transfer(tokX).to(who);
    Buyer.pay(supply / 4).to(ContractCreator);
    Buyer.pay(supply / 8).to(creator);
  };

  ContractCreator.publish();
  doTransfer1(tok1);
  tok1.burn(balance(tok1));
  tok1.destroy();
  commit();
  exit();
});
