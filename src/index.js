import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import * as serviceWorkerRegistration from "./serviceWorkerRegistration";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import POSPage from "./pages/pos";
import HomePage from "./pages/home";
import { getAccount } from "./functions/localStorage";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        {/* Check if username exists in local storage */}
        {getAccount() ? (
          <Route
            path="*"
            element={<Navigate to={`/${getAccount()}`} replace />}
          />
        ) : (
          <Route path="/" element={<HomePage />} />
        )}
        {/* POS Page Route */}
        <Route path="/:username" element={<POSPage />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.unregister();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
