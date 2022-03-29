import "./App.css";
import spartanLogo from "./assets/spartan-logo.png";
import nikeLogo from "./assets/nike-logo.png";
import mrfLogo from "./assets/mrf-logo.png";
import kookaburraLogo from "./assets/kookaburra-logo.jpg";
import newbalanceLogo from "./assets/newbalance-logo.png";
import cricketBall from "./assets/cricket-ball.jpg";
import pumaLogo from "./assets/Logo+Puma.jpg";
import miExclusive from "./assets/mi-exclusive.png";
import nbBat from "./assets/nb-bat.jpg";
import spartanBat from "./assets/spartan-bat.jpg";
import { LandingPage } from "./pages/LandingPage";
import nikeShoes from "./assets/nike-shoes.png";
import { ProductPage } from "./pages/ProductPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { NavBar } from "./components/NavBar";
import LoginPage from "./pages/LoginPage";
import Mockman from "mockman-js";
import Signup from "./pages/Signup";
import WishlistPage from "./pages/WishlistPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/products" element={<ProductPage />}></Route>
        <Route path="/" element={<LandingPage />}></Route>
        <Route path="/login" element={<LoginPage />}></Route>
        <Route path="/mockman" element={<Mockman />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/wishlist" element={<WishlistPage />}></Route>

      </Routes>
    </div>
  );
}

export default App;
