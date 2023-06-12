import React, { useContext } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import InstaClone from './InstaClone';
import Landing from "./Landing";
import Posts from "./Posts";
import UserPost from "./UserPost";
import Register from "./Register";
import Login from "./Login";
import ChangeDpForm from "./ChangeDpForm";
import PageNotFound from "./PageNotFound";



function AppRouter(){
   
    return<>
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="instaclone" element={<InstaClone />} >
           <Route path="posts" element={<Posts/>}/>
           <Route path="AllPost" element={<UserPost/>}/>
           <Route path="changeDp" element={<ChangeDpForm/>}/>
        </Route>
        <Route path="register" element={<Register/>}/>
        <Route path="login" element={<Login/>}/>
        <Route path="*" element={<PageNotFound/>}/>
      
    </Routes>
    </BrowserRouter>
  
    </>
}

export default AppRouter;