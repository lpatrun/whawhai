export type BattleRegistrationType = {
  jsonrpc: "2.0";
  method: "Register";
  params: {
    application: { name: string; warriorType: number; attacks: number[] };
  };
  id: "1";
};
