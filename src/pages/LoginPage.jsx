import axios from "axios";
import React from "react";
import { useState } from "react";
import { NavBar } from "../components/NavBar";
import { useAuth } from "../contexts/auth-context";
import { Link, useNavigate } from "react-router-dom";
import "./LoginPage.css";
import { useCart } from "../contexts/cart-context";
import { useWishlist } from "../contexts/wishlist-context";

export default function LoginPage() {
  const [userDetail, setUserDetail] = useState({ email: "", password: "" });

  const { setUser } = useAuth();
  const { setCart } = useCart();
  const { setWishlist } = useWishlist();

  const changeHandler = (e) => {
    setUserDetail((previousState) => ({
      ...previousState,
      [e.target.name]: e.target.value,
    }));
  };

  const logInUserHandler = async (isTestUser) => {
    try {
      const response = await axios.post(
        "/api/auth/login",
        isTestUser ? { email: "a@gmail.com", password: "a" } : userDetail
      );
      setUser({
        user: response.data.foundUser,
        token: response.data.encodedToken,
      });

      // Get call for getting cart items

      const responseForCart = await axios.get("/api/user/cart", {
        headers: { authorization: response.data.encodedToken },
      });

      if (responseForCart.status === 200) {
        setCart({ cart: responseForCart.data.cart });
      }

      // Get call for getting wishlist items

      const responseForWishlist = await axios.get("/api/user/wishlist", {
        headers: { authorization: response.data.encodedToken },
      });

      if (responseForWishlist.status === 200) {
        setWishlist({ wishlist: responseForWishlist.data.wishlist });
      }

      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  const navigate = useNavigate();

  return (
    <>
      <NavBar />

      <main>
        <div className="login-signup-container">
          <div className="login-signup-header">Log in</div>
          <div className="name-container">
            <div className="label-name">Email:</div>
            <input
              name="email"
              onChange={(e) => changeHandler(e)}
              value={userDetail.email}
              className="login-signup-input"
              type="text"
              placeholder="Enter your email"
            />
          </div>

          <div className="password-container">
            <div className="label-name">Password: </div>
            <input
              name="password"
              onChange={(e) => changeHandler(e)}
              value={userDetail.password}
              className="login-signup-input"
              type="password"
              placeholder="Enter your password"
            />
          </div>

          <button
            onClick={() => logInUserHandler(false)}
            className="signup-btn btn2"
          >
            Log in
          </button>

          <button
            onClick={() => logInUserHandler(true)}
            className="signup-btn btn2 secondary-test-credential-btn"
          >
            Log in with Test Credentials
          </button>

          <div className="login-instead-container">
            <Link to="/signup">
              <div className="login-message">Sign up instead</div>
            </Link>
            <div>
              <i className=" fas fa-chevron-right site-icon "></i>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
