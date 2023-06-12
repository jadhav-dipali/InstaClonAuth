import '../style/InstaClone.css';
import UserPost from './UserPost';
import instaLogo from '../images/instaLogo.png';
import Posts from './Posts';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import cameraLogo from '../images/camera-logo.png';
import TopNav from './TopNav';
import {useState} from "react"
import Login from './Login';
import PageNotFound from './PageNotFound';

function InstaClone(){
  const navigate = useNavigate()
   const userToken = localStorage.getItem("user-token");
    return<>
    {userToken?
      <div id='parent'>
      <TopNav />
    <div>
       <Outlet/>
    </div>
    </div>:<PageNotFound/>}
  
    </>
}

export default InstaClone;



