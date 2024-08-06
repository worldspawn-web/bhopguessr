import React from "react";
import ReactDOM from "react-dom/client";

import { Router } from "@app/router";
import "@app/assets/index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>,
);
