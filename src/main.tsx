import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import { FormProvider } from "./context/FormContext";
import { ModalProvider } from "./context/ModalContext.tsx";

import { Modal } from "./components/Modal";

import App from "./App.tsx";

import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <FormProvider>
        <ModalProvider>
          <App />
          <Modal />
        </ModalProvider>
      </FormProvider>
    </BrowserRouter>
  </React.StrictMode>
);
