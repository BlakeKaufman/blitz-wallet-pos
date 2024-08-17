// import QRCode from "react-qr-code";
import QRCode from "qrcode.react";
import icons from "../../constants/icons";
import "./style.css";
import { copyTextToClipboard } from "../../functions/copyToClipboard";
import Popup from "reactjs-popup";
import CopyToCliboardPopup from "../../components/popup";
import { useState } from "react";

export default function PaymentPage({ liquidAdress, boltzAddress }) {
  const [selectedPaymentOption, setSelectedPaymentOption] =
    useState("lightning");
  return (
    <div className="PaymentPage-Container">
      <p>{selectedPaymentOption}</p>
      <Popup
        trigger={
          <button className="PaymentPage-QRcontainer">
            <div className="PaymentPage-QRPadding">
              <QRCode
                size={220}
                imageSettings={{
                  src: icons.Logo,
                  height: 50,
                  width: 50,
                  excavate: true,
                }}
                value={
                  selectedPaymentOption === "lightning"
                    ? boltzAddress
                    : liquidAdress
                }
                renderAs="canvas"
              />
            </div>
          </button>
        }
        modal
      >
        {(close) => (
          <CopyToCliboardPopup
            content={
              selectedPaymentOption === "lightning"
                ? boltzAddress
                : liquidAdress
            }
            close={close}
          />
        )}
      </Popup>

      <div className="QR-OptionsContainer">
        <button className="QR-Option">Edit</button>
        <Popup trigger={<button className="QR-Option">Copy</button>} modal>
          {(close) => (
            <CopyToCliboardPopup
              content={
                selectedPaymentOption === "lightning"
                  ? boltzAddress
                  : liquidAdress
              }
              close={close}
            />
          )}
        </Popup>
      </div>
      <button className="QR-OptionNoFill QR-Option">Choose format</button>
    </div>
  );
}
