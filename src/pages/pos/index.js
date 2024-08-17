import React, { useEffect, useState } from "react";
import logo from "../../logo.svg";
import "./style.css";

import {
  Navigate,
  useNavigate,
  useNavigation,
  useParams,
} from "react-router-dom";
import icons from "../../constants/icons";
import { getSignleContact } from "../../functions/getUserFromFirebase";
import LoadingAnimation from "../../components/loadingAnimation";
import { reverseSwap } from "../../functions/handleClaim";
import PaymentPage from "../paymentPage";
function POSPage() {
  const { username } = useParams();
  const [chargeAmount, setChargeAmount] = useState(""); // in cents

  const [addedItems, setAddedItems] = useState([]);

  const [hasAccount, setHasAccount] = useState(null);
  const [boltzInvoice, setBoltzInvoice] = useState("");
  const [isGeneratingBoltzInvoice, setIsGeneratingBoltzInvoice] =
    useState(false);
  const [didReceiveBoltzPayment, setDidReceiveBoltzPayment] = useState(false);
  const navigate = useNavigate();

  const totalAmount = addedItems.reduce((a, b) => {
    return a + Number(b.amount / 100);
  }, 0);

  useEffect(() => {
    async function getStoreInfo() {
      const data = await getSignleContact(username);
      console.log(data, "TEST");
      setHasAccount(data);
    }
    getStoreInfo();
  }, []);

  console.log(boltzInvoice);

  return (
    <div className="POS-Container">
      <div className="POS-navbar">
        <img
          onClick={() => {
            if (boltzInvoice) {
              setBoltzInvoice("");
              return;
            }
            navigate(`/`);
          }}
          alt="Back arrow"
          className="POS-back"
          src={icons.leftArrow}
        />
        {hasAccount ? <h1 className="POS-name">{username}</h1> : <p></p>}
      </div>
      <div className="POS-ContentContainer">
        {isGeneratingBoltzInvoice ? (
          <div className="POS-LoadingScreen">
            <LoadingAnimation />
            <p className="POS-LoadingScreenDescription">Generating invoice</p>
          </div>
        ) : boltzInvoice ? (
          <PaymentPage
            liquidAdress={hasAccount?.receiveAddress}
            boltzAddress={boltzInvoice}
          />
        ) : hasAccount ? (
          <>
            {addedItems.length === 0 ? (
              <p className="POS-chargeItems">No charged items</p>
            ) : (
              <p className="POS-chargeItems">
                {addedItems
                  .map((value, index) => {
                    return `$${value.amount / 100}`;
                  })
                  .join(" + ")}
              </p>
            )}
            <h1 className="POS-totalBalance">{`$${
              !chargeAmount ? "0" : Number(chargeAmount / 100).toFixed(2)
            }`}</h1>

            <div className="POS-keypad">
              <div className="POS-keypadRow">
                <div
                  onClick={() => {
                    addNumToBalance(1);
                  }}
                  className="key"
                >
                  <span>1</span>
                </div>
                <div
                  onClick={() => {
                    addNumToBalance(2);
                  }}
                  className="key"
                >
                  <span>2</span>
                </div>
                <div
                  onClick={() => {
                    addNumToBalance(3);
                  }}
                  className="key"
                >
                  <span>3</span>
                </div>
              </div>
              <div className="POS-keypadRow">
                <div
                  onClick={() => {
                    addNumToBalance(4);
                  }}
                  className="key"
                >
                  <span>4</span>
                </div>
                <div
                  onClick={() => {
                    addNumToBalance(5);
                  }}
                  className="key"
                >
                  <span>5</span>
                </div>
                <div
                  onClick={() => {
                    addNumToBalance(6);
                  }}
                  className="key"
                >
                  <span>6</span>
                </div>
              </div>
              <div className="POS-keypadRow">
                <div
                  onClick={() => {
                    addNumToBalance(7);
                  }}
                  className="key"
                >
                  <span>7</span>
                </div>
                <div
                  onClick={() => {
                    addNumToBalance(8);
                  }}
                  className="key"
                >
                  <span>8</span>
                </div>
                <div
                  onClick={() => {
                    addNumToBalance(9);
                  }}
                  className="key"
                >
                  <span>9</span>
                </div>
              </div>
              <div className="POS-keypadRow">
                <div
                  onClick={() => {
                    addNumToBalance("C");
                  }}
                  className="key"
                >
                  <span>C</span>
                </div>
                <div
                  onClick={() => {
                    addNumToBalance(0);
                  }}
                  className="key"
                >
                  <span>0</span>
                </div>
                <div
                  onClick={() => {
                    console.log("PRESSED");
                    addNumToBalance("+");
                  }}
                  className="key"
                >
                  <span style={{ color: "var(--primary)" }}>+</span>
                </div>
              </div>
            </div>
            <button
              onClick={handleInvoice}
              style={{ opacity: !totalAmount ? 0.5 : 1 }}
              className="POS-btn"
            >
              <img className="POS-btnIcon" src={icons.LNicon}></img>

              {`Charge $${totalAmount.toFixed(2)}`}
            </button>
          </>
        ) : hasAccount === null ? (
          <div className="POS-LoadingScreen">
            <LoadingAnimation />
            <p className="POS-LoadingScreenDescription">
              Setting up the point-of-sale system
            </p>
          </div>
        ) : (
          <div className="POS-LoadingScreen">
            <p className="POS-LoadingScreenDescription">
              There is no point-of-sale system set up for this buisness
            </p>
          </div>
        )}
      </div>
    </div>
  );

  function addNumToBalance(targetNum) {
    console.log("RUNNING");
    if (Number.isInteger(targetNum)) {
      setChargeAmount((prev) => {
        let num;

        if (targetNum === 0) num = String(prev) + 0;
        else num = String(prev) + targetNum;

        return num;
      });
      console.log("INT");
    } else {
      if (targetNum.toLowerCase() === "c") {
        if (!chargeAmount) setAddedItems([]);
        else setChargeAmount("");
      } else {
        if (!chargeAmount) return;
        setAddedItems((prev) => {
          const newItem = { amount: chargeAmount };

          return [...prev, newItem];
        });
        setChargeAmount("");
      }
      console.log("NOT INT");
    }
  }

  async function handleInvoice() {
    if (!totalAmount) return;
    setIsGeneratingBoltzInvoice(true);

    reverseSwap(
      { amount: 2500, descriptoin: "" },
      hasAccount.receiveAddress,
      setDidReceiveBoltzPayment,
      setBoltzInvoice,
      username,
      setIsGeneratingBoltzInvoice
    );

    console.log("test");
  }
}

export default POSPage;
