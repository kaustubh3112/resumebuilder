import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { PersonalInfoProvider } from "./context/perosnalinfo.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <PersonalInfoProvider>
      <App />
    </PersonalInfoProvider>
  </React.StrictMode>
);
