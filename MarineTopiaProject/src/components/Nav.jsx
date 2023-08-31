import React from 'react'
import { NavLink } from "react-router-dom";
import NavItem from "./NavItem";

export default function Nav() {
  return (
    <>
    <div className="navContainer">
    <nav className="navbar navbar-expand-xl">
      
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
          <li className="navLogo"><img className="logoNav" src="src\images\Group 18.png" alt="Logo" /></li>
          <ul className="navUl navbar-nav">
            <li className='navLi'><NavLink className="btns nav-link"  to="/">Home</NavLink></li>
            <li className='navLi'><NavLink className="btns nav-link"  to="/donate">Donate</NavLink></li>
            <li className='navLi'> <NavLink className="btns nav-link"  to="/aboutus">About us</NavLink></li>
            </ul>
            <ul className="buttonul navbar-nav">
            <li><button className=" btn1 nav-item login" >Log in</button></li>
            <NavItem />
            </ul>
          </ul>
        </div>
     
    </nav>
    </div>
    </>
  )
}
