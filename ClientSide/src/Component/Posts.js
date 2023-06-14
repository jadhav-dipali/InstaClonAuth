import '../style/InstaClone.css';
import cameraLogo from '../images/camera-logo.png';
import { Link } from 'react-router-dom';
import TopNav from './TopNav';
import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {AddData} from "./FetchData";
import {Userset} from "./TopNav";
import { UserContext } from '../context/ContextPost';
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import "../style/chageDp.css"



function Posts(){
     let{setUser} = useContext(UserContext)
     const name = localStorage.getItem("user-name");
     const [loder , setLoder] = useState(false)
     const [file1 , setFile] = useState("");
 
    let navigator = useNavigate();
    let [data , setData]= useState({
        file:"",
        author:name,
        location:"",
        description:"",
    })


    function post(e){
     e.preventDefault();
     setLoder(true)
     const newformData = new FormData(e.target)
     AddData(newformData).then(data=>{
            if(data){
              setUser(d=>{
                return [data,...d]
              })
              toast.success("add post Sucessfully" )
              setLoder(false)
              setTimeout(()=>navigator("/instaclone/allpost"),3000)
            } 
          }
    );
  }
    return<>
       <div className='rect'>
        <form id='form' onSubmit={post}>
          <input type="file" placeholder='choose the file' id='file'name='file'  onChange={(e)=>{setData({...data, file:e.target.files[0]});   setFile(URL.createObjectURL(e.target.files[0]));}} required accept='image/png,image/jpg' ></input><br/><br/>
          {file1&&<div id="preview-dp-container"><img src={file1} id="preview-the-dp"></img></div>}
          <input type="text" placeholder='Author' className='name-name' id='Au-name'  name='author' onChange={(e)=>{setData({...data, author:e.target.value})}} value={data.author}  required></input>
          <input type="text" placeholder='Location'className='name-name' id='location-for-the-add-the-post'  name="location"  onChange={(e)=>{setData({...data, location:e.target.value})}} value={data.location}  required></input><br/><br></br>
          <input type="text" placeholder="Description" id="descript" name='description'  onChange={(e)=>{setData({...data, description:e.target.value})}} value={data.description} required></input><br/><br/>

          <button type='submit' id='btn'>{loder?<div id="loderabc"></div>:"Post"}</button> 
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
export default Posts;