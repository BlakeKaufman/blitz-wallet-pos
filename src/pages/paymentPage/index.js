// import QRCode from "react-qr-code";
import QRCode from "qrcode.react";
import icons from "../../constants/icons";
import "./style.css";
import { copyTextToClipboard } from "../../functions/copyToClipboard";
import Popup from "reactjs-popup";
import CopyToCliboardPopup from "../../components/popup";

export default function PaymentPage() {
  console.log(icons.Logo);
  return (
    <div className="PaymentPage-Container">
      <button className="PaymentPage-QRcontainer">
        <div className="PaymentPage-QRPadding">
          <QRCode
            size={200}
            imageSettings={{
              src: icons.Logo,
              height: 50,
              width: 50,
              excavate: true,
            }}
            value="testing"
            renderAs="canvas"
          />
        </div>
      </button>
      <div className="QR-OptionsContainer">
        <button className="QR-Option">Edit</button>
        <Popup
          trigger={
            <button
              onClick={() => {
                copyTextToClipboard("Testing");
              }}
              className="QR-Option"
            >
              {" "}
              Copy
            </button>
          }
          modal
        >
          {(close) => <CopyToCliboardPopup close={close} />}
        </Popup>
        {/* <button
          onClick={() => {
            copyTextToClipboard("Testing");
          }}
          className="QR-Option"
        >
          Copy
        </button> */}
      </div>
      <button className="QR-OptionNoFill QR-Option">Choose format</button>
      {/* <PopupComponenet popupContent="test" /> */}
    </div>
  );
}
