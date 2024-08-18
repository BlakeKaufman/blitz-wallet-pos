import { NetworkName } from "./network";

const liquidUrl = "https://api.boltz.exchange";
const testnetUrl = "https://testnet.boltz.exchange/api";

export const getBoltzApiUrl = (network) => {
  return network === NetworkName.Testnet ? testnetUrl : liquidUrl;
};

export const getBoltzWsUrl = (network) =>
  `${getBoltzApiUrl(network).replace("https://", "wss://")}/v2/ws`;
