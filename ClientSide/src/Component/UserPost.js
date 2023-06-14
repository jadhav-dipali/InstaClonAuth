import React, { createContext, useContext, useEffect, useState } from "react"

import {FeatchData} from "./FetchData";
import Posts from "./Posts";
import Cont from "../context/ContextPost";
import { UserContext } from "../context/ContextPost";
import ChildPost from "./ChildPost";

function UserPost(){
  const {user}= useContext(UserContext);
    return<>{user.map((d,ind)=><ChildPost d={d}  key={ind}/>)}
    </>
}


export default UserPost