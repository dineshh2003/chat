import { signOut } from 'firebase/auth'
import React from 'react'
import { auth } from '../firebase'

const Navbar = () => {

  return (
    <div className="navbar">
            <span className="logo">Chat jii</span>
            <div className="user">
                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQK6Bhl1oKDGYOSGlCqZvQD9lb5eLEHxrqgw&usqp=CAU" alt="" />
                 <span>John</span>
                <button onClick={()=>{signOut(auth)}}>logout</button>
            </div>
    </div>
  )
}

export default Navbar
