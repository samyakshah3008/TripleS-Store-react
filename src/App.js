import "./App.css";
import spartanLogo from "./assets/spartan-logo.png";
import nikeLogo from "./assets/nike-logo.png";
import mrfLogo from "./assets/mrf-logo.png";
import kookaburraLogo from "./assets/kookaburra-logo.jpg";
import newbalanceLogo from "./assets/newbalance-logo.png";
import { LandingPage } from "./pages/LandingPage";
import { ProductPage } from "./pages/ProductPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
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
