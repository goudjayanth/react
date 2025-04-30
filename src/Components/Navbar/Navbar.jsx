import React from 'react'
import "./Navbar.css"
import { Link } from 'react-router-dom'


const Navbar = () => {
  return (
    <div id='nav'>
        <div id="navleft"><h1>Logo</h1> </div>
        <div id="navright">
       
             <span>About</span>
        
            <span>Home</span>
       
   
            <span>Services</span>
            
            <span>Products</span>
           
        </div>
       
    </div>
  )
}

export default Navbar
