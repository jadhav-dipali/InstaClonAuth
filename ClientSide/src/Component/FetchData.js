import { json } from "react-router-dom";

 let url = "https://instaclone-auth-backend.onrender.com";
 const userToken = localStorage.getItem("user-token")

function Data(){
return url;
}


function FeatchData(){
return fetch(`${Data()}/post`,{
    headers:{
        Authorization:userToken
       }
})
.then(res=>res.json())
}

function AddData(data){
 
    return fetch(`${Data()}/post`,{
        method:"POST",
       headers:{
        Authorization:userToken
       },
        body:data
      
    })
    .then(res=>res.json())
}



export {FeatchData, AddData}