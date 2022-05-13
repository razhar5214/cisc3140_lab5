import "../styles/Navbar.css"
import { Link } from 'react-router-dom';
import React, {useState, useEffect } from "react";


export default function Navbar() {

  return (


      <div className='navbar'>

          {/* <img className='nav-img' src={BackgroundImage} alt='NYC Apartments' /> */}

          <div className='nav-buttons'>
              <div className='nav-home-btn'> <Link to='/'>Home</Link></div>

              <div className='nav-cart-btn'> <Link to='/AllCars'>Get All Cars </Link></div>
              <div className='nav-cart-btn'> <Link to='/CarID'>Get Car:id</Link></div>
              <div className='nav-cart-btn'> <Link to='/CarMake'>Get Car:make </Link></div>
              <div className='nav-cart-btn'> <Link to='/AddCar'>Add Car </Link></div>
              <div className='nav-cart-btn'> <Link to='/UpdateCar'>Update Car</Link></div>
          </div>
          

      </div>
  )
}