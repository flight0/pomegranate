import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Dashboard from "./dashboard";
import Signin from "./signin";
import Table from './table';
import Form from './form';
import Chart from './chart';

ReactDOM.render(
  <BrowserRouter>
    <React.StrictMode>
      <Routes>
        <Route path="/" element={<App />} >
          <Route index element={<Dashboard />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/table" element={<Table />} />
          <Route path="/form" element={<Form />} />
          <Route path="/chart" element={<Chart />} />
        </Route>
        <Route path="/sign" element={<Signin />} />
      </Routes>
    </React.StrictMode>
  </BrowserRouter>
  ,
  document.getElementById('root')
);