export default async function getBitcoinPrice({ denomination }) {
  console.log;
  const response = await fetch(
    `https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=${denomination.toLowerCase()}`
  );
  const data = await response.json();
  const bitcoinPrice = data.bitcoin.usd;
  return bitcoinPrice;
}
