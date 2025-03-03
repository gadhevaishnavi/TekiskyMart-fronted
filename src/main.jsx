import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom"; // ✅ Import Router
import App from "./App";
import CartProvider from "./context/CartContext"; // Ensure CartProvider wraps App


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <CartProvider>
          <App />
      </CartProvider>
    </BrowserRouter>
  </React.StrictMode>
);
