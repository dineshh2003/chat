import React from 'react'
import '../style.scss';
export default function Login() {
  return (
    <div className="formContainer">
        <div className="formWrapper">
            <span className="logo">Real-Time-Chat</span>
            <span className="title">Login</span>
            <form>
                <input type="email" placeholder="email"/>
                <input type="password" placeholder="password"/>
                <button>Login</button>
            </form>
            <p>click here for Register ? Register </p>
        </div>      
   </div>
  )
}
