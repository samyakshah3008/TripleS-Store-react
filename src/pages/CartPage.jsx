import React from "react";
import { Card2, NavBar } from "../components";
// import { Card2 } from "../components/card2";
// import { NavBar } from "../components/NavBar";
import { useCart } from "../contexts/cart-context";
import "../components/card2/card2.css";

export default function CartPage({ item }) {
  const { cart, setCart } = useCart();

  const cartid = cart.cart.map((item) => item._id);
  return (
    <div>
      <NavBar />

      <main>
        <h1 className="product-type-titles">My Personal Cart</h1>
        <div class="final-pay-bill-container">
          <div class="pay-bill-header">Payment details</div>
          <div class="pay-info bold">
            <div class="total-price-label">Product Name</div>
            <div>Quantity</div>
            <div>Cost</div>
          </div>

          {cart.cart.map((item) => (
            <div class="pay-info">
              <div class="total-price-label"> {item.categoryName} </div>
              <div class="total-qty"> {item.qty} </div>

              <div> {item.price * item.qty} </div>
            </div>
          ))}

          <div class="pay-info">
            <div class="total-price-label">Delivery Charge</div>
            <div>Free</div>
          </div>
          <div class="pay-info bold">
            <div class="total-price-label">Total Amount</div>
            <div>
              {" "}
              {cart.cart.reduce(
                (acc, item) => acc + item.qty * item.price,
                0
              )}{" "}
            </div>
          </div>
        </div>
        <div className="product-display-container fix-width">
          {cart.cart.map((item) => (
            <Card2
              inCart={cartid.includes(item._id)}
              key={item.id}
              item={item}
            />
          ))}
        </div>
      </main>
    </div>
  );
}
