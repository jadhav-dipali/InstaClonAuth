import { Link, useNavigate } from "react-router-dom"
import Posts from "./Posts"
import instaLogo from '../images/instaLogo.png';
import cameraLogo from '../images/camera-logo.png';
import dp from "../images/dp.png"
import navigator from "navigator";
import { Context, createContext, useEffect, useState } from "react";
import "../style/InstaClone.css"
import ChangeDpForm from "./ChangeDpForm";


function TopNav(){
   
const [dpp , setDp] = useState(false);
const navigate = useNavigate();
const [ data1 , setData] = useState([]);
const id = localStorage.getItem("user-id")
useEffect(()=>{
  fetch(`http://localhost:4000/register/${id}`)
  .then(res=>res.json())
  .then(data=>setData(data))
},[])

  const dappppp =  data1.image;
    return<>
     <nav id="top-nav">
        <div id="name-logo">
        <img src={instaLogo} id='logo' onClick={()=>navigate("/instaclone/allpost")}></img>
         <h1 id='heading'>InstaClone</h1>
         </div>
        <div>
         <Link to="/instaclone/posts"> <img src={cameraLogo} id='logo-cam'></img></Link>
         <div>
            {dappppp?<img src={dappppp.url} id="profile-dp" onClick={()=>{dpp?setDp(false):setDp(true)}} ></img>:<img src={dp} id="profile-dp" onClick={()=>{dpp?setDp(false):setDp(true)}} ></img>}

         {dpp?<div id="logout-of-thepage">
               <ul>
                <li onClick={()=>{navigate("/instaclone/changeDp"); setDp(false)}}>Change Dp</li><br></br>
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