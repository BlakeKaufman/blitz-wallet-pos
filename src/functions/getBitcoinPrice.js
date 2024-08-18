export default async function getBitcoinPrice({ denomination }) {
  try {
    const response = await fetch(
      `https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=${denomination.toLowerCase()}`
    );
    const data = await response.json();
    const bitcoinPrice = data.bitcoin.usd;
    return bitcoinPrice;
  } catch (err) {
    console.log(err);
    return 60000;
  }
}
