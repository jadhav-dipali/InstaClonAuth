import React, { useContext, useState } from "react";
import "../style/chageDp.css"
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/ContextPost";


export default function ChangeDpForm(){
    const id = localStorage.getItem("user-id");
    const {setdpLocal} = useContext(UserContext)
    const [ data , setData] = useState({
        dp:""
    });
    const navigate = useNavigate()
    const [loder , setLoder] = useState(false)
    const [file , setFile] = useState("");
    
     function submitForm(e){
        e.preventDefault();
        setLoder(true);
        let formdata = new FormData(e.target)
        fetch(`http://localhost:4000/register/${id}` , {
            method:"PUT",
            body:formdata
        }).then(res=>res.json())
        .then(data=>{
          if(data.status="dp update sucess"){
            setdpLocal(data.data.image.url)
             setData({
              dp:""
             });
             toast.success("Dp Change Sucessfully" )
             setLoder(false)
             setTimeout(()=>navigate("/instaclone/allpost"),3000)
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
        required ></input><br></br>
         {file&&<div id="preview-dp-container"><img src={file} id="preview-the-dp"></img></div>}
       <div id="change-dp-btn">
        <button id="ad-profile-photo-cancle" onClick={()=>navigate("/instaclone/allpost")}>Cancle</button>
        <button id="ad-profile-photo">{loder?<div id="loderabc"></div>:"Add"}</button></div> 
      </form>
      <ToastContainer
               position="top-right"
               autoClose={1500}
               hideProgressBar={false}
               newestOnTop={false}
               closeOnClick
               rtl={false}
               pauseOnFocusLoss
               theme="light"
            />
    </div>
    </>
}