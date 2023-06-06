import React from "react";
import { NavBar } from "../components/NavBar";
import { useAuth } from "../contexts/auth-context";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

export default function Signup() {
  const [userSignup, setUserSignup] = useState({
    email: "",
    password: "",
    firstName: "",
    lastName: "",
  });

  const { setUser } = useAuth();

  const changeHandlerSignup = (e) => {
    setUserSignup((previousState) => ({
      ...previousState,
      [e.target.name]: e.target.value,
    }));
  };

  const signupUserHandler = async () => {
    try {
      const response = await axios.post("/api/auth/signup", userSignup);
      setUser({
        users: response.data.createdUser,
        token: response.data.encodedToken,
      });
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
          <div className="login-signup-header">Sign up</div>
          <div className="name-container">
            <div>Email</div>
            <input
              name="email"
              onChange={(e) => changeHandlerSignup(e)}
              value={userSignup.email}
              className="login-signup-input"
              type="text"
              placeholder="Enter mail"
            />
          </div>

          <div className="name-container">
            <div>Enter first name</div>
            <input
              name="firstName"
              onChange={(e) => changeHandlerSignup(e)}
              value={userSignup.firstName}
              className="login-signup-input"
              type="text"
              placeholder="Enter first name"
            />
          </div>

          <div className="name-container">
            <div>Enter last name</div>
            <input
              name="lastName"
              onChange={(e) => changeHandlerSignup(e)}
              value={userSignup.lastName}
              className="login-signup-input"
              type="text"
              placeholder="Enter last name"
            />
          </div>

          <div className="password-container">
            <div>Password</div>
            <input
              name="password"
              onChange={(e) => changeHandlerSignup(e)}
              value={userSignup.password}
              className="login-signup-input"
              type="password"
              placeholder="Enter password"
            />
          </div>

          <div className="remember-me-container">
            <div>
              <input className="checkbox" type="checkbox" />
            </div>
            <div className="checkbox-message">
              Accept all terms and conditions
            </div>
          </div>
          <button onClick={signupUserHandler} className="signup-btn btn2">
            Create account
          </button>
          <div className="login-instead-container">
            <Link to="/login">
              <div className="login-message">Already have account?</div>
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
