import icons from "../../constants/icons";
import "./changeSelectedReceiveOptionPopup.css";
export default function ChangeSelectedReceiveOptionPopup({
  close,
  setSelectedPaymentOption,
  selectedPaymentOption,
}) {
  return (
    <div className="Popup-Container">
      <div className="ChangePaymentContainer">
        <p className="ChangePaymentContainer-Desc">
          Change your selected receive option
        </p>

        <div
          onClick={() => {
            setSelectedPaymentOption("liquid");
            close();
          }}
          style={{
            backgroundColor:
              selectedPaymentOption === "liquid" ? "var(--primary)" : "unset",
            color:
              selectedPaymentOption === "liquid"
                ? "var(--darkModeText)"
                : "var(--lightModeText)",
          }}
          className="ChangePaymentContainer-OptionContainer"
        >
          <img className="ChangePaymentContainer-Img" src={icons.LiquidIcon} />
          <p>Liquid Network</p>
        </div>
        <div
          onClick={() => {
            setSelectedPaymentOption("lightning");
            close();
          }}
          style={{
            backgroundColor:
              selectedPaymentOption === "lightning"
                ? "var(--primary)"
                : "unset",
            color:
              selectedPaymentOption === "lightning"
                ? "var(--darkModeText)"
                : "var(--lightModeText)",
          }}
          className="ChangePaymentContainer-OptionContainer"
        >
          <img
            className="ChangePaymentContainer-Img"
            src={icons.LightningIcon}
          />
          <p>Lightning Network</p>
        </div>
      </div>
    </div>
  );
}
