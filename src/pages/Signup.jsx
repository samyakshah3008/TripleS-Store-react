import React from 'react'
import { NavBar } from '../components/NavBar'
import { useAuth } from '../contexts/auth-context'
import { useState } from "react"
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios'




export default function Signup() {

    const [userSignup, setUserSignup] = useState({email: "", password: "", firstName: "", lastName: ""})

    const {setUser} = useAuth()     

    const changeHandlerSignup = (e) => {
        setUserSignup((previousState) =>  ({...previousState, [e.target.name]: e.target.value}))


    }

    // console.log(userSignup)

    const signupUserHandler = async () =>  {
        try {
        const response = await axios.post("/api/auth/signup",userSignup)
            console.log(response)
            setUser({users: response.data.createdUser, token: response.data.encodedToken })
            // navigate("/");

        } catch (error) {
            console.log(error)
        }

    }

    const  navigate = useNavigate();



  return (
        <>

    <NavBar/> 
        

     <main>

        <div class="login-signup-container">
            <div class="login-signup-header">Sign up</div>
            <div class="name-container">
                <div>Email</div>
                <input name='email' onChange={(e) => changeHandlerSignup(e)} value = {userSignup.email} class="login-signup-input" type="text" placeholder="Enter mail"/>
            </div> 

            <div class="name-container">
                <div>Enter first name</div>
                <input name='firstName' onChange={(e) => changeHandlerSignup(e)} value = {userSignup.firstName} class="login-signup-input" type="text" placeholder="Enter first name"/>
            </div> 

            <div class="name-container">
                <div>Enter last name</div>
                <input name='lastName' onChange={(e) => changeHandlerSignup(e)} value = {userSignup.lastName} class="login-signup-input" type="text" placeholder="Enter last name"/>
            </div> 

            <div class="password-container">
                <div>Password</div>
                <input name='password' onChange={(e) => changeHandlerSignup(e)} value = {userSignup.password} class="login-signup-input" type="password" placeholder="Enter password"/>
            </div> 

            

            <div class="remember-me-container">
                <div><input class="checkbox" type="checkbox"/></div>
                <div class="checkbox-message">Accept all terms and conditions</div>
            </div> 
            <button onClick={signupUserHandler} class="signup-btn btn2">Create account</button>
            <div class="login-instead-container">
            <a href="/styles/authentication/login.html"><div class="login-message">Already have account?</div></a> 
            <div><i class=" fas fa-chevron-right site-icon "></i></div>
        </div>
        </div>

     </main>
 
        </>
    )
}