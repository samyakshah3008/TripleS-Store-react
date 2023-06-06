import { Footer } from "../components/Footer";
import { NavBar } from "../components/NavBar";
import "./ProductPage.css";
import { SideBar } from "../components/SideBar";
import { Products } from "../components/Products";
import { useEffect } from "react";

export function ProductPage() {
  // used useEffect window.scrollTo for bug fixing on not getting to top 0 when clicked on featured category

  useEffect(() => {
    setTimeout(() => {
      window.scrollTo({
        top: 0,
      });
    }, 0);
  }, []);
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
