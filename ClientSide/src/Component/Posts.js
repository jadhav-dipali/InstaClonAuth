import '../style/InstaClone.css';
import cameraLogo from '../images/camera-logo.png';
import { Link } from 'react-router-dom';
import TopNav from './TopNav';
import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {AddData} from "./FetchData";
import {Userset} from "./TopNav";
import { UserContext } from '../context/ContextPost';



function Posts(){
     let{setUser} = useContext(UserContext)
     const name = localStorage.getItem("user-name")

    let navigator = useNavigate();
    let [data , setData]= useState({
        file:"",
        author:name,
        location:"",
        description:"",
    })


    function post(e){
     e.preventDefault();
   
     const newformData = new FormData(e.target)
    
     AddData(newformData).then(data=>{
          setUser(d=>{
            return [data,...d]
        })
        navigator("/instaclone/AllPost");
     }
    );
     
    }

    let [loder,setLoder] = useState("");
    return<>
       <div className='rect'>
        <form id='form' onSubmit={post}>
          <input type="file" placeholder='choose the file' id='file'name='file'  onChange={(e)=>{setData({...data, file:e.target.value})}} value={data.file} required accept='image/png,image/jpg'></input><br/><br/>
          
          <input type="text" placeholder='Author' className='name-name' id='Au-name'  name='author' onChange={(e)=>{setData({...data, author:e.target.value})}} value={data.author}  required></input>
          <input type="text" placeholder='Location'className='name-name' id='location'  name="location"  onChange={(e)=>{setData({...data, location:e.target.value})}} value={data.location}  required></input><br/><br></br>
          <input type="text" placeholder="Description" id="descript" name='description'  onChange={(e)=>{setData({...data, description:e.target.value})}} value={data.description} required></input><br/><br/>

         <div id='form-loder'>
          <div className={loder}></div>
          <div className={loder}></div>
          <div className={loder}></div>
          <div className={loder}></div>
          <div className={loder}></div>
          <div className={loder}></div>
          <div className={loder}></div>
          <div className={loder}></div>
          <div className={loder}></div>
          <div className={loder}></div>
          <div className={loder}></div>
          <div className={loder}></div>
          <div className={loder}></div>
        </div><br></br>

          <button type='submit' id='btn' onClick={()=>setLoder("LoderSubmit")}>Post</button> 
          
         
        </form>
        
    </div>  
  
    </>
}
export default Posts;