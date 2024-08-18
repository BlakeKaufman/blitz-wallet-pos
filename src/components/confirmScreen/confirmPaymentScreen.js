import "./style.css";
import icons from "../../constants/icons";

export default function ConfirmPaymentScreen({ clearSettings }) {
  return (
    <div className="ConfirmPayment-container">
      <div className="ConfirmPayment-ContentContainer">
        <img className="ConfirmPayment-Icon" src={icons.CheckMark} />

        <button onClick={clearSettings} className="ConfirmScreen-BTN">
          Continue
        </button>
      </div>
    </div>
  );
}
