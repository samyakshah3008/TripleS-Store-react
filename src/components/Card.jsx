import axios from "axios";
import React from "react";
import { useAuth } from "../contexts/auth-context";
import { useWishlist } from "../contexts/wishlist-context";
import { toast } from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../contexts/cart-context";
import { useEffect } from "react";

const Card = ({ item, inWishlist, inCart }) => {
  const navigate = useNavigate();
  const { user } = useAuth();
  const { wishlist, setWishlist } = useWishlist();
  const { cart, setCart } = useCart();

  useEffect(() => {
    user.token
      ? (async () => {
          try {
            const responseFromServer = await axios.get("/api/user/wishlist", {
              headers: { authorization: user.token },
            });

            if (responseFromServer.status === 200) {
              setWishlist({ wishlist: responseFromServer.data.wishlist });
            }
          } catch (err) {
            console.error("error", err);
          }
        })()
      : setWishlist({ wishlist: [] });
  }, []);

  useEffect(() => {
    user.token
      ? (async () => {
          try {
            const responseForCart = await axios.get("/api/user/cart", {
              headers: { authorization: user.token },
            });

            if (responseForCart.status === 200) {
              setCart({ cart: responseForCart.data.cart });
            }
          } catch (error) {
            console.log(error);
          }
        })()
      : setCart({ cart: [] });
  }, []);

  const addToWishlistHandler = async () => {
    if (user.token === null) {
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
    } catch (error) {
      console.log(error);
    }
  };

  const goCartHandler = async () => {
    if (user.token === null) {
      navigate("/login");
    }

    try {
      const cartResponse = await axios({
        method: "post",
        url: "/api/user/cart",
        headers: { authorization: user.token },
        data: { product: item },
      });

      setCart({ cart: cartResponse.data.cart });
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
              onClick={goCartHandler}
              className="button2 full-width primary-color-button2"
            >
              Add to Cart
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;
