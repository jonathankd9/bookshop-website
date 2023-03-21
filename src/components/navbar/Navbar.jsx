import React from 'react'
import "./navbar.css"
import logo from "../../assets/Logo.png"
import { GrFacebookOption, GrTwitter, GrLinkedinOption } from "react-icons/gr";


const Navbar = () => {
  return (
    <div className='book__navbar'>
      <div className="book__navbar-logosocial">
        <img src={logo} alt="book logo" />

      <div className="book__navbar-social">
      <div className="book__navbar-social-box">
      <GrFacebookOption size={17} />
        </div> 
      <div className="book__navbar-social-box">
      <GrTwitter size={17} />
        </div> 
      <div className="book__navbar-social-box">
      <GrLinkedinOption size={17} />
        </div> 
      </div>


      </div>

      
      <div className="book__navbar-links">
        <a href="">Home</a>
        <a href="">Pages</a>
        <a href="">About</a>
        <a href="">Services</a>
        <a href="">Contact</a>
        <a href="">Cart icon</a>
        <button className='book__navbar-links-button' >Order Today</button>
      </div>
    </div>
  )
}

export default Navbar