import QRCode from "react-qr-code";
import icons from "../../constants/icons";
import "./style.css";

export default function PaymentPage() {
  console.log(icons.Logo);
  return (
    <div className="PaymentPage-Container">
      <div className="PaymentPage-QRcontainer">
        <div className="PaymentPage-QRPadding">
          <QRCode
            xlinkTitle="test"
            className="PaymentPage-QR"
            bgColor="white"
            color="#262626"
            value="Genrating QR Code"
          />
        </div>
      </div>
      <p>Testing</p>
    </div>
  );
}
