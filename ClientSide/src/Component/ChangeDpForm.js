import React, { useState } from "react";
import "../style/chageDp.css"

export default function ChangeDpForm(){
    const id = localStorage.getItem("user-id")
    const [ data , setData] = useState({
        dp:""
    });
    const [file , setFile] = useState("");
    
     function submitForm(e){
        e.preventDefault();
        let formdata = new FormData(e.target)
        console.log(data);
        fetch(`http://localhost:4000/register/${id}` , {
            method:"PUT",
            body:formdata
        }).then(res=>res.json())
        .then(data=>{
          if(data.status="dp update sucess"){
             setData({
              dp:""
             })
          }
        })
        .catch(err=>console.log(err))
     }
    return<>
    <div id="form-change-dp">
      <form id="dpchange-form-container" onSubmit={submitForm}>
        <input type="file" id="file-dp-in-the-profile" name="image" 
        onChange={(e)=>{setData({dp:e.target.files[0]});
        setFile(URL.createObjectURL(e.target.files[0]));
      }}
         ></input><br></br>
         {file&&<div id="preview-dp-container"><img src={file} id="preview-the-dp"></img></div>}
       <div id="change-dp-btn"><button id="ad-profile-photo">Add</button></div> 
      </form>
    </div>
    </>
}