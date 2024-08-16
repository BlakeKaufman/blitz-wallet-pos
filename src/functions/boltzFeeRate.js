import { getBoltzApiUrl } from "./boltz";

export default async function getBoltzFeeRates() {
  try {
    const response = await fetch(`${getBoltzApiUrl("liquid")}/v2/chain/fees`);

    return response.data["L-BTC"];
  } catch (err) {
    console.log(err);
    return false;
  }
}
