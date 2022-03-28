import axios from 'axios'
import React from 'react'
import { useState } from "react"
import { users } from '../backend/db/users'
import { NavBar } from '../components/NavBar'
import { useAuth } from '../contexts/auth-context'
import { useNavigate } from "react-router-dom";

import  "./LoginPage.css" 

export default function LoginPage() {

    const [userDetail, setUserDetail] = useState({email: "", password: ""})

    const {setUser} = useAuth()

    const changeHandler = (e) => {
        setUserDetail((previousState) =>  ({...previousState, [e.target.name]: e.target.value}))
        // e.target.name = "email" 


    }
    console.log(userDetail)


    const logInUserHandler = async () =>  {
        try {
        const response = await axios.post("/api/auth/login",userDetail)
            console.log(response)
            setUser({user: response.data.foundUser, token: response.data.encodedToken })
            navigate("/");

        } catch (error) {
            console.log(error)
        }

    }

    const  navigate = useNavigate();


  return (
      <>
    <NavBar/> 
    

  
    
     <main>

        <div className = "login-signup-container" >
            <div className="login-signup-header">Log in</div>
            <div className="name-container">
                <div>Email</div>
                <input name='email' onChange={(e) => changeHandler(e)} value = {userDetail.email} className="login-signup-input" type="text" placeholder="Enter your email"/>
            </div> 

            <div className="password-container">
                <div>Password</div>
                <input name='password' onChange={(e) => changeHandler(e)} value = {userDetail.password} className="login-signup-input" type="password" placeholder="Enter your password"/>
            </div> 

            <div className="remember-me-container">
                <div><input className="checkbox" type="checkbox"/></div>
                <div className="checkbox-message">Remember me</div>
               <a href="/styles/forgotpassword/forgotpassword.html">Forgot Password?</a>
            </div>  
            <button onClick={logInUserHandler} className="signup-btn btn2">log in</button> 
            <a href="/styles/profile/profile.html"><button className="signup-btn btn2 secondary-test-credential-btn">log in with Test Credentials</button></a> 

            <div className="login-instead-container">
            <a href="/styles/authentication/signup.html"><div className="login-message">Sign up instead</div></a> 
            <div><i className=" fas fa-chevron-right site-icon "></i></div>
        </div>
        </div>

     </main>
 


    </>
  )
}
