import { getBoltzApiUrl } from "./boltz";

export default async function getBoltzFeeRates() {
  try {
    const response = await (
      await fetch(`${getBoltzApiUrl("liquid")}/v2/chain/fees`)
    ).json();
    return response["L-BTC"];
  } catch (err) {
    console.log(err);
    return false;
  }
}
