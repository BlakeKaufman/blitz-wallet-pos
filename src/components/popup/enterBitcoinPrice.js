import { useState } from "react";
import "./enterBitcoinPrice.css";
export default function EnterBitcoinPrice({ setOpenPopup, setBitcoinPrice }) {
  const [enteredBitcoinPrice, setEnteredBitcoinPrice] = useState(0);
  return (
    <div
      onClick={() => {
        if (!enteredBitcoinPrice) return;
        setEnteredBitcoinPrice(enteredBitcoinPrice);
        setOpenPopup(false);
      }}
      className="EnterBitconPrice-Container"
    >
      <div className="ChangePaymentContainer">
        <p className="ChangePaymentContainer-Desc">
          No currency information found. Please enter current bitcoin price.
        </p>

        <input
          className="bitcoinPriceInput"
          onInput={(e) => setEnteredBitcoinPrice(e.currentTarget.value)}
          placeholder="Bitcoin price (no decimals)"
          type="text"
        />

        <button
          onClick={() => {
            console.log(enteredBitcoinPrice);
            if (!enteredBitcoinPrice) return;
            setBitcoinPrice(enteredBitcoinPrice);
            setOpenPopup(false);
          }}
        >
          Save
        </button>
      </div>
    </div>
  );
}
