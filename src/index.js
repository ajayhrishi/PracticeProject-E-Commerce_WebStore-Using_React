import React from "react";
import ReactDOM from 'react-dom/client'
import { ProductContext } from "./context/ProductContext";

import './styles/index.css'
import App from "./App";

const el = document.getElementById("root");
const root = ReactDOM.createRoot(el);

root.render(<ProductContext><App/></ProductContext>);