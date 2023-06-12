import React,{useState} from "react";
import "../style/register.css"
import {useNavigate} from "react-router-dom"
import { ToastContainer,toast } from "react-toastify";
import "../style/chageDp.css"

export default function Login(){
    const navigate = useNavigate()
    const [loder , setLoder] = useState(false);
    const [err , setErr] =  useState(null)
    const[errtext , setErrText]= useState("")
    const [emailErr, setEmailErr] = useState(false);
    const [passErr, setPassErr] = useState(false);
    const [formData , setFormData] = useState({
        email:"",
        password:""
    })
    function submitlogin(e){
       e.preventDefault();
   
    if(!formData.email ||!/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/.test(formData.email)){
        setErrText("Enter the Valid Email")
        setEmailErr(true)
    }else if(!formData.password|| formData.password.length<6){
       setErrText("Password length at least 6 latter")
       setPassErr(true)
    }else{
        setLoder(true)
        fetch("http://localhost:4000/login",{
            method:"POST",
            headers:{
             "content-type":"application/json"
            },
            body:JSON.stringify(formData)   
       }
       ).then(res=>res.json())
       .then(data=>{
        if(data.status==="Login sucessfully"){
            setLoder(false)
            toast.success("Login sucessfully")
            localStorage.setItem("user-token" ,data.token)
            localStorage.setItem("user-name" ,data.name)
            localStorage.setItem("user-id" ,data.id)
            setFormData({
                email:"",
                password:""
               })
           setTimeout(()=>navigate("/instaclone/allpost") , 3000) 
       }else if(data.message==="Please Enater Valid Details"){
        setLoder(false)
             setErr("User Details Not Match")
       }
    })
       
    }
       
       
    }
    return<div id="main-container-of-form">
     <h2 id="form-name">Log-In Form</h2>
    <div id="signup-container">
       
        <form onSubmit={submitlogin}>
        {err&&<div id="errText">{err}</div>}
            <input type="email" placeholder="Enter the email" className={emailErr?"err":"signupform-input"} onChange={(e)=>{setFormData({...formData,email:e.target.value}); 
            setErrText("") ; 
            setEmailErr(false);
            setErr(null)}} 
            value={formData.email}></input><br></br>
            {emailErr&& errtext&&<div id="errText">{errtext}</div>}
            <input type="password" placeholder="Enter the Password" className={passErr?"err":"signupform-input"} onChange={(e)=>{setFormData({...formData,password:e.target.value}); 
            setErrText("") ;
             setPassErr(false);
             setErr(null)
             }} value={formData.password}></input><br></br>
            {passErr&& errtext&&<div id="errText">{errtext}</div>}
            <div id="btn-container-signup"><button id="signup-btn">{loder?<div id="loderabc"></div>:"Login"}</button></div>
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
    <h4 id="valid-user">Don`t Have An Account? <span id="color-change" onClick={()=>navigate("/register")}>Register</span></h4>
   
</div>

}