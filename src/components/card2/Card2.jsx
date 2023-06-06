import React from "react";
import { useCartService } from "../../services/useCartService";
import { useWishlistService } from "../../services/useWishlistService";
import "./card2.css";

export function Card2({ item }) {
  const { removeFromCartHandler, incrementHandler, decrementHandler } =
    useCartService();
  const { addToWishlistHandlerAndRemoveCart } = useWishlistService();

  return (
    <div>
      <div className="card e-commerce product-display-card">
        <div className="container1 badge-card">
          <img className="card-image" src={item.imageURL} />
        </div>

        <div className="container2">
          <h3 style={{ marginBottom: "1.2rem" }} className="card-title-product">
            {item.title}
          </h3>
          <div className="card-description"> {item.description} </div>
          <div className="price">
            <div className="discount-price"> {item.price} </div>
            <div className="original-price">
              <s> {item.originalPrice} </s>
            </div>
          </div>
          <div className="discount-percent"> {item.percentOff} </div>
          <div> {item.inStock ? "Available in stock" : "Not available"} </div>
          <div> {item.fastDelivery ? "Fast delivery" : "Minimum 2 days"} </div>
          <div> {item.ratings} ⭐ </div>
        </div>
        <div className="container4">
          <button
            className="btn-increment-decrement"
            onClick={() => incrementHandler(item)}
          >
            +
          </button>

          {item.qty}

          <button
            className="btn-increment-decrement"
            onClick={() => decrementHandler(item)}
          >
            -
          </button>
        </div>
        <button
          className="button2 full-width primary-color-button2"
          onClick={() => removeFromCartHandler(item)}
        >
          Remove from cart
        </button>

        <button
          className="button2 full-width secondary-color-button2"
          onClick={() => addToWishlistHandlerAndRemoveCart(item)}
        >
          Move to wishlist
        </button>
      </div>
    </div>
  );
}
