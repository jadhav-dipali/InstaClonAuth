import '../style/InstaClone.css';
import UserPost from './UserPost';
import instaLogo from '../images/instaLogo.png';
import Posts from './Posts';
import { Link, Outlet } from 'react-router-dom';
import cameraLogo from '../images/camera-logo.png';
import TopNav from './TopNav';
import {useState} from "react"

function InstaClone(){

    return<>
    <div id='parent'>
      <TopNav />
    <div>
       <Outlet/>
    </div>
    </div>
    </>
}

export default InstaClone;



