import {Link} from "react-router-dom";
import "../style/Home.css"
function Landing(){
    return<>
    <div id="home">
   <h1 id="name-of-home-page">InstaClone</h1>
   <h3 id="mes">See Your Friends Post please Sign-Up here.</h3>
   <h4 id="login-register-lannding-page"><Link to="/login">Log-In </Link> or <Link to="/register"> Sign-Up</Link> </h4>
  </div>
      
       
    </>
}

export default Landing