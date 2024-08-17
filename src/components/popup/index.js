import React from "react";
import "./style.css";

export default function CopyToCliboardPopup({ close }) {
  return (
    <div className="Popup-Container">
      <p className="Popup-Text">Text copied to clipboard</p>
      <div className="Popup-deviderBar"></div>
      <button
        className="Popup-Button"
        onClick={() => {
          close();
        }}
      >
        Close
      </button>
    </div>
  );
}
