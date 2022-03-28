import React from 'react'
import { NavBar } from '../components/NavBar'

export default function Signup() {
  return (
        <>

    <NavBar/> 
        

     <main>

        <div class="login-signup-container">
            <div class="login-signup-header">Sign up</div>
            <div class="name-container">
                <div>Email</div>
                <input class="login-signup-input" type="text" placeholder="Enter mail"/>
            </div> 

            <div class="name-container">
                <div>Enter first name</div>
                <input class="login-signup-input" type="text" placeholder="Enter first name"/>
            </div> 

            <div class="name-container">
                <div>Enter last name</div>
                <input class="login-signup-input" type="text" placeholder="Enter last name"/>
            </div> 

            <div class="password-container">
                <div>Password</div>
                <input class="login-signup-input" type="password" placeholder="Enter password"/>
            </div> 

            <div class="password-container">
                <div>Confirm Password</div>
                <input class="login-signup-input" type="password" placeholder="Confirm password"/>
            </div> 

            <div class="remember-me-container">
                <div><input class="checkbox" type="checkbox"/></div>
                <div class="checkbox-message">Accept all terms and conditions</div>
            </div> 
            <button class="signup-btn btn2">Create account</button>
            <div class="login-instead-container">
            <a href="/styles/authentication/login.html"><div class="login-message">Already have account?</div></a> 
            <div><i class=" fas fa-chevron-right site-icon "></i></div>
        </div>
        </div>

     </main>
 
        </>
    )
}
