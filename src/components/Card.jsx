import React from "react";
import heroHeader from "../assets/hero-header.png";

const Card = ({ item }) => {
  return (
    <div>
      <div className="card e-commerce product-display-card">
        <div className="container1 badge-card">
          <img className="card-image" src={item.imageURL} />
          <i className="image-badge-wishlist far fa-heart"></i>
        </div>

        <div className="container2">
          <div className="card-description"> {item.description} </div>
          <div className="price">
            <div className="discount-price"> {item.price} </div>
            <div className="original-price">
              <s> {item.originalPrice} </s>
            </div>
          </div>
          <div className="discount-percent"> {item.percentOff} </div>
        </div>

        <div className="container3">
          <button className="button2 full-width primary-color-button2">
            Add to Cart
          </button>
          <button className="button2 full-width full-card-width">
            View Product Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
