import React from 'react'
import '../style.scss';
export default function Register() {
  return (
    <div className="formContainer">
        <div className="formWrapper">
            <span className="logo">Real-Time-Chat</span>
            <span className="title">Register</span>
            <form>
                <input type="test" placeholder="display name" />
                <input type="email" placeholder="email"/>
                <input type="password" placeholder="password"/>
                <input style={{display: 'none'}} type="file" id="file"/>
                <label htmlFor="file">
                    {/* <img src="" alt="" /> */}
                    Add an avator
                </label>
                <button>Sign Up</button>
            </form>
            <p>click here for login ? login </p>
        </div>
      
    </div>
  )
}
