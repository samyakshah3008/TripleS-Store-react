import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ProductProvider } from "./contexts/product-context";
import { FilterProvider } from "./contexts/filtercontext";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <FilterProvider>
      <ProductProvider>
        <App />
      </ProductProvider>
      </FilterProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
