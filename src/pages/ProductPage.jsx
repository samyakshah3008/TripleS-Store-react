import { Footer } from "../components/Footer";
import { NavBar } from "../components/NavBar";

import "./ProductPage.css";
import { SideBar } from "../components/SideBar";
import { Products } from "../components/Products";

export function ProductPage() {
  return (
  <div>
      <NavBar />

      <div className="main-container">
        <SideBar />
        <Products />
      </div>

      <Footer />
    </div>
  );
}
