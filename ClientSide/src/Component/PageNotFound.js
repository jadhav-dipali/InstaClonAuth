import { useNavigate } from "react-router-dom"
import "../style/pageNotFound.css"

export default function PageNotFound(){
    const navigate = useNavigate();
    return<>
    <h1 id="message-page-not-found">Ooops!!! page not Found </h1>
     <h2 id="sujessiongothere">Go to the Home Page <button onClick={()=>navigate("/")} id="go-to-homr-page">Home</button></h2>
    </>
}