import "./App.css";
import React from "react";
import { LandingPage } from "./pages/LandingPage";
import { ProductPage } from "./pages/ProductPage";
import { Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import Mockman from "mockman-js";
import Signup from "./pages/Signup";
import WishlistPage from "./pages/WishlistPage";
import { Toaster } from "react-hot-toast";
import CartPage from "./pages/CartPage";

function App() {
  return (
    <div className="App">
      <Toaster />
      <Routes>
        <Route path="/products" element={<ProductPage />}></Route>
        <Route path="/" element={<LandingPage />}></Route>
        <Route path="/login" element={<LoginPage />}></Route>
        <Route path="/mockman" element={<Mockman />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/wishlist" element={<WishlistPage />}></Route>
        <Route path="/cart" element={<CartPage />}></Route>
      </Routes>
    </div>
  );
}

export default App;
