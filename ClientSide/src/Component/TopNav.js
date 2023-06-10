import { Link, useNavigate } from "react-router-dom"
import Posts from "./Posts"
import instaLogo from '../images/instaLogo.png';
import cameraLogo from '../images/camera-logo.png';
import dp from "../images/dp.png"
import navigator from "navigator";
import { Context, createContext, useEffect, useState } from "react";
import "../style/InstaClone.css"

function TopNav(){
   
const [dpp , setDp] = useState(false);
const navigate = useNavigate();

useEffect(()=>{
  fetch("")
},[])

    return<>
     <nav id="top-nav">
        <div id="name-logo">
        <img src={instaLogo} id='logo'></img>
         <h1 id='heading'>InstaClone</h1>
         </div>
        <div>
         <Link to="/instaclone/posts"> <img src={cameraLogo} id='logo-cam'></img></Link>
         <div><img src={dp} id="profile-dp" onClick={()=>{dpp?setDp(false):setDp(true)}} ></img>
         {dpp?<div id="logout-of-thepage">
               <ul>
                <li>Change Dp</li><br></br>
                <li onClick={()=>{
                    localStorage.clear();
                    navigate("/login")
                }}>Log-Out</li>
               </ul>
         </div>:null}
         
         </div>

         </div>
    </nav>
    </>
}

export default TopNav;