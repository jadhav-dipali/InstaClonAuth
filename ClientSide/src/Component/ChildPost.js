import { useContext, useEffect, useState } from "react"
import '../style/userPost.css'
import { json } from "react-router-dom";
import { UserContext } from "../context/ContextPost";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

export default function ChildPost({d, ind}){
    let userToken = localStorage.getItem("user-token")
    const {setUser} = useContext(UserContext);
    const [imgdp , setImg] = useState("")
    useEffect(()=>{
      fetch(`http://localhost:4000/register/${d.userId}`)
      .then(res=>res.json())
      .then(data=>setImg(data.image.url))
    },[]);

    function like(id){
        console.log(id)
 fetch(`http://localhost:4000/post/${id}`, {
            method:"PUT",
            headers:{
                Authorization:userToken,
            }
        }).then(res=>res.json())
        .then(data=>{
            if(data.message==="like add"){
             toast.success("You Like This post")
            }else if(data.message==="like remove"){
             toast.success("You Remove Like from this post") 
            }
        })
    }
    return<div id="rect" key={ind}>
    <div className="Child1">
        <div id="dp-container-in-the-post">
            <img src={imgdp} id="dp-in-the-post"/>
        </div>
    <div>
    <h4 id="name">{d.author}</h4>
    <p id="location">{d.location}</p>
    </div>
    <div className="Child2">
        <div className="dot"></div>
        <div className="dot"></div>
        <div className="dot"></div>
    </div>
    </div>

    <div id="img-container">
        <img src={d.file.url} id="img-size"></img>
    </div>

    <div className="icon-container">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT78Q1WZHbkR3u23R2_3GLTlVEiiPLpZozQUA&usqp=CAU " id="like-icon" className="icon" onClick={()=>{like(d._id)}}></img>
        <img src="https://cdn4.iconfinder.com/data/icons/office-line-vol-2-1/70/send__message__mail__paperplane__rocket-512.png" className="icon"></img>

        <h5 id="date">{d.date}</h5>
    </div>

    <div className="like">{`${d.likes.length} Likes `}</div>

    <div id="description">{d.description}</div>
    
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
   
}