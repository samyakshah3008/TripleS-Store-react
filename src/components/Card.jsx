import axios from "axios";
import React from "react";
import { useAuth } from "../contexts/auth-context";
import { useWishlist } from "../contexts/wishlist-context";
import { toast } from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";


const Card = ({ item, inWishlist }) => {
  const navigate = useNavigate();
  const { user } = useAuth();
  const { wishlist, setWishlist } = useWishlist();

  const addToWishlistHandler = async () => {

    if(user.token === null) {
      navigate("/login");
      
    }

    try {
      if (wishlist.wishlist.find((isProduct) => isProduct._id === item._id)) {
        toast.error("Already in wishlist", { position: "top-right" });
        return;
      } else {
        const response = await axios({
          method: "post",
          url: "/api/user/wishlist",
          headers: { authorization: user.token },
          data: { product: item },
        });

        setWishlist({ wishlist: response.data.wishlist });
      }
    } catch (error) {
      console.log(error);
    }
  };

  const deleteToWishlistHandler = async () => {
    try {
      const deleteResponse = await axios({
        method: "delete",
        url: `/api/user/wishlist/${item._id}`,
        headers: { authorization: user.token },
        data: { product: item },
      });

      setWishlist({ wishlist: deleteResponse.data.wishlist });
      console.log(wishlist.wishlist);

      console.log(deleteResponse);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div className="card e-commerce product-display-card">
        <div className="container1 badge-card">
          <img className="card-image" src={item.imageURL} />

          {/* inWishlist contains that particular product's id and if it is true then applied conditional statement */}

          {inWishlist ? (
            <i
              onClick={deleteToWishlistHandler}
              className="image-badge-wishlist fa fa-heart"
            ></i>
          ) : (
            <i
              onClick={addToWishlistHandler}
              className="image-badge-wishlist far fa-heart"
            ></i>
          )}
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
          <div> {item.inStock ? "Available in stock" : "Not available"} </div>
          <div> {item.fastDelivery ? "Fast delivery" : "Minimum 2 days"} </div>
          <div> {item.ratings} ⭐ </div>
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
