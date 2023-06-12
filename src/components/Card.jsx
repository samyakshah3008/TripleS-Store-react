import React from "react";
import { useNavigate } from "react-router-dom";
import { useCartService } from "../services/useCartService";
import { useWishlistService } from "../services/useWishlistService";

const Card = ({ item, inWishlist, inCart }) => {
  const navigate = useNavigate();
  const { goCartHandler } = useCartService();
  const { addToWishlistHandler, deleteToWishlistHandler } =
    useWishlistService();

  return (
    <>
      <div className="card e-commerce product-display-card">
        <div className="container1 badge-card">
          <img className="card-image" src={item.imageURL} />

          {/* inWishlist contains that particular product's id and if it is true then applied conditional statement */}

          {inWishlist ? (
            <i
              onClick={() => deleteToWishlistHandler(item)}
              className="image-badge-wishlist fa fa-heart"
            ></i>
          ) : (
            <i
              onClick={() => addToWishlistHandler(item)}
              className="image-badge-wishlist far fa-heart"
            ></i>
          )}
        </div>

        <div className="container2">
          <h3 style={{ marginBottom: "1.2rem" }} className="card-title-product">
            {" "}
            {item.title}{" "}
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

        <div className="container3">
          {inCart ? (
            <button
              onClick={() => navigate("/cart")}
              className="button2 full-width primary-color-button2"
            >
              Go to Cart
            </button>
          ) : (
            <button
              onClick={() => goCartHandler(item)}
              className="button2 full-width primary-color-button2"
            >
              Add to Cart
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export default Card;
