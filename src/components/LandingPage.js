import React from "react";
import { Link, useNavigate } from "react-router-dom";
import {useState} from "react"
import "../styles/LandingPage.css"
import NavBar from "./Navbar";
export default function LandingPage(){


   
    return(
      <div className = "landingpage">
          <NavBar />

        Welcome to cars data - the front end!

        </div>


    )
}