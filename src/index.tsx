import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Dashboard from "./dashboard";
import Signin from "./signin";
import Table from "./table";
import Form from "./form";
import Chart from "./chart";
import Componnents from "./componnents";
import NotFound from "./notfound";

ReactDOM.render(
  <BrowserRouter>
    <React.StrictMode>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Dashboard />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/forms" element={<Form />} />
          <Route path="/tables" element={<Table />} />
          <Route path="/charts" element={<Chart />} />
          <Route path="/componnents" element={<Componnents />} />
        </Route>
        <Route path="/signin" element={<Signin />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </React.StrictMode>
  </BrowserRouter>,
  document.getElementById("root")
);
