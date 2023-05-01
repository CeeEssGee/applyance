// updated for Applyances
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'
import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import './index.css';
import { Applyances } from './Applyances'
import 'bootstrap/dist/css/bootstrap.css';


const container = document.getElementById("root")
const root = createRoot(container)
root.render(
  <BrowserRouter>
    <Applyances />
  </BrowserRouter>
)

