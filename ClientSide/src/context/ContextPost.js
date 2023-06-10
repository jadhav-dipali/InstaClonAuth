import React, {  createContext, useEffect, useState } from "react";
import {FeatchData} from "../Component/FetchData"



export const UserContext =createContext() ;


export default function ContextPost({children}){
    let [user, setUser] = useState([])

    useEffect( ()=>{
        FeatchData()
        .then(data=>setUser(data.reverse()))
    },[]
);
    return<>
     <UserContext.Provider value={{user,setUser}}>
        {children}
     </UserContext.Provider>
    </>
}