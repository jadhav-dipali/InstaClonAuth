import React, { useContext } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import InstaClone from './InstaClone';
import Landing from "./Landing";
import Posts from "./Posts";
import UserPost from "./UserPost";
import Register from "./Register";
import Login from "./Login";



function AppRouter(){
   
    return<>
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="instaclone" element={<InstaClone />} >
           <Route path="posts" element={<Posts/>}/>
           <Route path="AllPost" element={<UserPost/>}/>
         
        </Route>
        <Route path="register" element={<Register/>}/>
        <Route path="login" element={<Login/>}/>
    </Routes>
    </BrowserRouter>
  
    </>
}

export default AppRouter;